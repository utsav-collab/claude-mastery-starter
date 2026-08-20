# Lesson 1.1: AI Fundamentals

Welcome to Module 1! 🧠

This is the **most important module** of the entire masterclass. Here we lay the foundation that makes everything else work.

If you understand this, you'll understand WHY our approach works — and why "vibe coding" tools hit a ceiling.

STOP: Ready to understand how AI actually works?

USER: Yes / Let's go

---

## Why This Matters

Before we dive into building, you need to understand THREE concepts:

1. **Tokens** — The "currency" of AI
2. **Context Windows** — AI's "memory limit"
3. **How AI Actually Works** — The prediction machine

These concepts will help you:
- Get better results from AI
- Understand why things break
- Work more efficiently (and cheaply!)

STOP: These aren't complicated. Let's break them down.

USER: Okay

---

## What IS Artificial Intelligence? 🤖

**Simple explanation:**

> AI is a **prediction machine**. It predicts the most likely next word, based on everything it's learned.

**Slightly more technical:**

AI (like Claude) is a **Large Language Model (LLM)** — a massive neural network trained on billions of texts. It converts language into **vectors** (numbers representing meaning) and predicts what comes next.

**Why this matters:**

| Insight | Implication |
|---------|-------------|
| AI "knows" nothing — it predicts patterns | Better input = better predictions |
| AI can make mistakes ("hallucinate") | Always verify important facts |
| AI is incredibly good at patterns | Great for code, writing, analysis |

> **Analogy:** Think of a super-smart autocomplete. Your phone predicts the next word. AI does the same, but at a much more advanced level — it can "predict" entire paragraphs, code, or plans.

STOP: AI is a prediction machine. Does that click?

USER: Yes / Makes sense

---

## What Are Tokens? 🪙

**A token is a piece of text** — usually a word or part of a word.

| Text | Tokens | Count |
|------|--------|-------|
| "Hello" | ["Hello"] | 1 |
| "Hello world" | ["Hello", " world"] | 2 |
| "authentication" | ["auth", "ent", "ication"] | 3 |
| Code snippet | Each keyword, symbol, etc. | Many! |

**Why tokens matter:**

1. **You pay per token** (input + output)
2. **Complex words = more tokens = more cost**
3. **Code is token-intensive** (lots of symbols)

**Rule of thumb:** 1 token ≈ 0.75 words (or ~4 characters in English)

STOP: So when you send a message, it gets broken into tokens. The AI processes those and generates token-by-token response. Make sense?

USER: Yes / Got it

---

## What Are Context Windows? 📦

**The context window is how much AI can "remember" in one conversation.**

Think of it as the AI's short-term memory limit.

All Claude models have ~200,000 tokens of context (Opus can extend to 1M). That's about 150,000 words — sounds like a lot, but it fills up fast with code.

**The problem:**

Even 200K tokens fills up with large projects. When context is full:
- AI "forgets" earlier instructions
- Responses become inconsistent
- You have to start over

STOP: This is THE reason vibe coding tools fail on big projects. They fill the context with junk and the AI gets confused!

USER: Ah, that makes sense

---

## The Three Claude Models

Claude comes in three sizes. Claude Code uses **Sonnet** by default — you can switch with `/model`.

| | Haiku | Sonnet | Opus |
|---|---|---|---|
| **Speed** | Fastest | Balanced | Most capable |
| **Context Window** | 200K tokens | 200K tokens | 200K (up to 1M) |
| **Input / 1M tokens** | $1 | $3 | $15 |
| **Output / 1M tokens** | $5 | $15 | $75 |
| **Best For** | Quick tasks, subagents | Daily coding work | Complex architecture |
| **Claude Code Default** | No | Yes | Manual switch |

> **Rule of thumb:** Use Sonnet for everyday work. Switch to Opus for complex architecture decisions or tricky debugging. Use Haiku for fast, simple subtasks.

STOP: Three models, different speeds and prices. Sonnet is your daily driver. Got it?

USER: Yes

---

## Context = Filling = Expensive

Here's the thing most people miss: **every message you send includes the ENTIRE conversation so far.**

Think of it like a phone call that gets more expensive the longer it goes. But worse — Claude re-reads your *entire* conversation transcript before every single reply.

**What this means:**
- A conversation at 80% context costs **4x more per message** than one at 20%
- Opus costs **5x more** than Sonnet — a long Opus session burns budget fast
- Long conversations = slow + expensive + worse quality

**How to stay efficient:**
- Start new sessions for new tasks (don't keep one session running forever)
- Use `/compact` to compress context when it gets large
- Set up a **status line** to monitor context usage in real time (you'll learn this in Lesson 1.8!)
- Avoid dumping entire files — let Claude read what it needs

STOP: Context = expensive. The longer the conversation, the more you pay AND the worse the quality gets. This is critical!

USER: Good to know

---

## Subscription Plans

Claude Code is included in all paid Claude plans. The plan determines your usage limits:

| Plan | Price | What You Get |
|------|-------|-------------|
| **Pro** | $20/mo | Sonnet default, limited Opus |
| **Max 5x** | $100/mo | Full Opus access, 5x usage |
| **Max 20x** | $200/mo | 20x usage, heavy parallel work |
| **API** | Pay-per-token | Programmatic use, no limits |

> For this masterclass, **Pro ($20/mo)** is enough. If you're building seriously and want Opus access, Max 5x is the sweet spot.

STOP: You don't need the most expensive plan to learn. Pro works perfectly for the workshop.

USER: Okay

---

## Context Management Strategies

**1. Keep context clean**
- Start fresh conversations for new tasks
- Use `/compact` to summarize and clear
- Don't paste entire files — reference them

**2. Use references**
- Use `@filename` to reference files
- Claude Code reads files on-demand
- Don't copy-paste everything

**3. Work with multiple agents**
- Each agent has their own context
- Divide work across agents
- This is why parallel agents are powerful!

STOP: This is why we use multiple agents in Claude Code Terminal — each agent has fresh context!

USER: Smart

---

## How This Changes Your Approach

| ❌ Vibe Coding | ✅ Engineering Lead |
|----------------|---------------------|
| One long conversation | Fresh context per task |
| Paste entire files | Reference with @ |
| Everything in one place | Divide across agents |
| "Fix everything" | Specific, focused tickets |
| Hope AI remembers | Structured with CLAUDE.md |

STOP: The Engineering Lead approach works WITH these limitations, not against them.

USER: This explains a lot

---

## Quick Demo: Token Counting

Let me show you tokens in action:

ACTION: Show a simple example of how a sentence gets tokenized, explaining the breakdown.

See how that works? Every piece of text becomes tokens that the AI processes.

STOP: Pretty cool, right?

USER: Yes / Interesting

---

## Module 1.1 Complete! 🎉

**You now understand:**
- ✅ AI is a prediction machine (not magic)
- ✅ Tokens are the "currency" (pay per token)
- ✅ Context windows are memory limits (~200K for Claude)
- ✅ Three models: Haiku (fast), Sonnet (default), Opus (powerful)
- ✅ Context = expensive (longer conversations cost more)
- ✅ Subscription plans (Pro $20 is enough to start)
- ✅ Why vibe coding fails (context overflow)
- ✅ How to work WITH these limitations

```
┌─────────────────────────────────────────────────┐
│  🧠 AI FUNDAMENTALS CHEAT SHEET                 │
│                                                 │
│  Token      → Piece of text (word/part)         │
│  Context    → AI's memory (~200K tokens)        │
│  LLM        → Large Language Model              │
│                                                 │
│  MODELS:                                        │
│  • Haiku  → Fast & cheap ($1/$5 per 1M tokens)  │
│  • Sonnet → Default ($3/$15 per 1M tokens)      │
│  • Opus   → Powerful ($15/$75 per 1M tokens)    │
│                                                 │
│  BEST PRACTICES:                                │
│  • Keep conversations focused                   │
│  • Use @ to reference, don't paste              │
│  • Multiple agents = multiple contexts          │
│  • Fresh conversation for new tasks             │
│  • Use /compact when context gets large         │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

**Next Step:** Type `/start-1-2` to learn about the Claude ecosystem!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Demonstrate token counting with a simple example
- Keep explanations simple and relatable

**Teaching style:**
- Use analogies (autocomplete, memory, currency)
- Connect to practical implications
- Show why this matters for their work

**Success criteria:**
- [ ] Student understands what tokens are
- [ ] Student understands context windows
- [ ] Student knows the three Claude models and their pricing
- [ ] Student understands context = expensive (cost scaling)
- [ ] Student knows about subscription plans
- [ ] Student sees why vibe coding fails
- [ ] Student is ready for 1.2

---

*Part of the Claude Code Masterclass — Barcelona 2026*
