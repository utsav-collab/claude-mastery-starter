# AI Integration Patterns

Patterns for adding AI features to your app using Vercel AI SDK. Used by the AI Builder agent.

---

## The Stack

| Tool | What It Does |
|------|--------------|
| **Vercel AI SDK** | Unified API for OpenAI, Anthropic, etc. |
| **OpenAI** | GPT-4, GPT-4o for text generation |
| **Anthropic** | Claude for reasoning tasks |
| **Streaming** | Show responses as they generate |

```bash
# Install the SDK
npm install ai @ai-sdk/openai
```

---

## Quick Start: Chat Interface

### 1. Create the API Route

```typescript
// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30; // Allow streaming up to 30 seconds

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages,
    system: 'You are a helpful assistant. Be concise and friendly.',
  });

  return result.toDataStreamResponse();
}
```

### 2. Create the Chat Component

```typescript
// components/Chat.tsx
'use client';

import { useChat } from 'ai/react';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-600 text-white ml-auto max-w-[80%]'
                : 'bg-zinc-800 text-white max-w-[80%]'
            }`}
          >
            {message.content}
          </div>
        ))}

        {isLoading && (
          <div className="bg-zinc-800 text-white p-4 rounded-lg max-w-[80%]">
            <span className="animate-pulse">Thinking...</span>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="flex-1 p-3 bg-zinc-900 border border-zinc-700 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
```

---

## Common AI Features

### Text Generation (Non-Streaming)

```typescript
// For simple one-shot generation
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

const { text } = await generateText({
  model: openai('gpt-4o'),
  prompt: 'Explain quantum computing in one sentence.',
});

console.log(text);
```

---

### Object Generation (Structured Output)

```typescript
// Get structured data back from AI
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

const { object } = await generateObject({
  model: openai('gpt-4o'),
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(z.object({
        name: z.string(),
        amount: z.string(),
      })),
      steps: z.array(z.string()),
    }),
  }),
  prompt: 'Generate a recipe for chocolate chip cookies.',
});

console.log(object.recipe.name);
console.log(object.recipe.ingredients);
```

---

### AI-Powered Search/Summarization

```typescript
// app/api/summarize/route.ts
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export async function POST(req: Request) {
  const { content, type } = await req.json();

  const prompts = {
    summary: `Summarize this in 2-3 sentences:\n\n${content}`,
    bullets: `Convert this to bullet points:\n\n${content}`,
    explain: `Explain this to a 10-year-old:\n\n${content}`,
  };

  const { text } = await generateText({
    model: openai('gpt-4o-mini'), // Cheaper for simple tasks
    prompt: prompts[type as keyof typeof prompts],
  });

  return Response.json({ result: text });
}
```

```typescript
// Client usage
const summarize = async (content: string) => {
  const res = await fetch('/api/summarize', {
    method: 'POST',
    body: JSON.stringify({ content, type: 'summary' }),
  });
  const { result } = await res.json();
  return result;
};
```

---

## Using Different Models

### OpenAI

```typescript
import { openai } from '@ai-sdk/openai';

// Fast & cheap
openai('gpt-4o-mini')

// Best quality
openai('gpt-4o')

// Even better (when available)
openai('gpt-4-turbo')
```

### Anthropic (Claude)

```bash
npm install @ai-sdk/anthropic
```

```typescript
import { anthropic } from '@ai-sdk/anthropic';

// Fast & cheap
anthropic('claude-3-haiku-20240307')

// Balanced
anthropic('claude-3-5-sonnet-20241022')

// Best reasoning
anthropic('claude-3-opus-20240229')
```

### Switching Models Easily

```typescript
// lib/ai.ts
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';

export const models = {
  fast: openai('gpt-4o-mini'),
  smart: openai('gpt-4o'),
  reasoning: anthropic('claude-3-5-sonnet-20241022'),
};

// Usage
import { models } from '@/lib/ai';

const result = streamText({
  model: models.smart,
  messages,
});
```

---

## Environment Variables

```bash
# .env.local
OPENAI_API_KEY=sk-...your-key...
ANTHROPIC_API_KEY=sk-ant-...your-key...
```

**Important:** These are server-side only. Never expose in client code!

---

## Error Handling

```typescript
// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: openai('gpt-4o'),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('AI Error:', error);

    // Check for specific errors
    if (error instanceof Error) {
      if (error.message.includes('rate limit')) {
        return Response.json(
          { error: 'Too many requests. Please wait a moment.' },
          { status: 429 }
        );
      }
      if (error.message.includes('API key')) {
        return Response.json(
          { error: 'AI service configuration error.' },
          { status: 500 }
        );
      }
    }

    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
```

---

## Rate Limiting

```typescript
// Protect your API from abuse
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 m'), // 10 requests per minute
});

export async function POST(req: Request) {
  // Get user identifier (IP or user ID)
  const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
  const { success, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return Response.json(
      { error: 'Rate limit exceeded. Please slow down.' },
      { status: 429, headers: { 'X-RateLimit-Remaining': remaining.toString() } }
    );
  }

  // Continue with AI call...
}
```

---

## Cost Optimization

### Choose the Right Model

```typescript
// For simple tasks (classification, short responses)
openai('gpt-4o-mini')  // ~$0.15 / 1M input tokens

// For complex tasks (analysis, long-form content)
openai('gpt-4o')       // ~$5.00 / 1M input tokens
```

### Limit Output Length

```typescript
const result = streamText({
  model: openai('gpt-4o'),
  messages,
  maxTokens: 500, // Limit response length
});
```

### Cache Responses

```typescript
// Simple in-memory cache (use Redis in production)
const cache = new Map();

async function getCachedResponse(prompt: string) {
  const cacheKey = prompt.slice(0, 100); // Simple key

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const { text } = await generateText({
    model: openai('gpt-4o-mini'),
    prompt,
  });

  cache.set(cacheKey, text);
  return text;
}
```

---

## Common Patterns

### System Prompts

```typescript
const result = streamText({
  model: openai('gpt-4o'),
  messages,
  system: `You are a helpful customer support agent for [Company Name].
    - Be friendly and professional
    - If you don't know something, say so
    - Keep responses concise (under 3 sentences when possible)
    - Never make up information about products`,
});
```

### Context Injection

```typescript
// Add user-specific context
const result = streamText({
  model: openai('gpt-4o'),
  messages,
  system: `You are helping ${user.name} who is on the ${user.plan} plan.
    Their account was created on ${user.createdAt}.
    Help them with their questions about our service.`,
});
```

### Tool Calling (Function Calling)

```typescript
import { tool } from 'ai';
import { z } from 'zod';

const result = streamText({
  model: openai('gpt-4o'),
  messages,
  tools: {
    getWeather: tool({
      description: 'Get the weather for a location',
      parameters: z.object({
        location: z.string().describe('The city and country'),
      }),
      execute: async ({ location }) => {
        // Call actual weather API
        const weather = await fetchWeather(location);
        return weather;
      },
    }),
  },
});
```

---

## Mental Model

```
USER INPUT
    ↓
API Route (server-side, secure)
    ↓
Vercel AI SDK
    ↓
OpenAI / Anthropic API
    ↓
Streaming Response
    ↓
useChat hook updates UI in real-time
```

---

## Checklist Before Adding AI

1. ✅ **API key in .env.local** (never commit!)
2. ✅ **Rate limiting** to prevent abuse
3. ✅ **Error handling** for API failures
4. ✅ **Loading states** for better UX
5. ✅ **Cost monitoring** (check OpenAI dashboard)
6. ✅ **Appropriate model** for the task

---

*Part of the Claude Code Masterclass — Barcelona 2026*
