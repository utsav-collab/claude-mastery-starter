# Prompting Mastery - Get the Most Out of Claude Code

## Overview

This skill teaches you how to communicate effectively with Claude Code to maximize productivity, leverage AI agents, and build features faster.

---

## The Prompting Mindset

You are the **Engineering Lead**. You don't write code — you **delegate, direct, and decide**.

```
❌ "Write me a button component"
✅ "I need a CTA button for the pricing page. It should look premium and have a hover animation."
```

**The difference:** Context + Intent > Technical Instructions

---

## Level 1: Basic Prompting

### Be Specific, Not Vague

| ❌ Vague | ✅ Specific |
|----------|-------------|
| "Make it look better" | "Use more whitespace, larger font, and a lime green accent" |
| "Fix the bug" | "The login form submits twice when I click the button" |
| "Add authentication" | "Add email/password login with Clerk, including a sign-up page" |

### State Your Intent

```
❌ "Add a useState hook"
✅ "I want users to be able to toggle dark mode. The preference should persist."
```

Claude will choose the right implementation (useState, localStorage, context, etc.)

### One Thing at a Time

```
❌ "Build the entire dashboard with charts, user settings, notifications, and admin panel"

✅ "Let's start with the dashboard layout. Just the sidebar and main content area."
   → "Now add a chart showing weekly signups"
   → "Add a notifications dropdown in the header"
```

---

## Level 2: Agent Activation

Claude Code has specialized agents. Activate them with the right prompts:

### Product Owner Agent

**Triggers:** Planning, features, epics, user stories, requirements

```
"Help me plan my app. I want to build [idea]."
"Break this epic into features with user stories."
"What should the MVP include vs phase 2?"
"Write acceptance criteria for the login feature."
```

### Frontend Lead Agent

**Triggers:** UI, components, styling, animations, responsive design

```
"Build a hero section that looks like [reference]."
"This component looks too AI-generated. Make it premium."
"Add a subtle hover animation to all cards."
"Make this responsive — mobile-first."
```

### Backend Lead Agent

**Triggers:** API, database, authentication, server actions

```
"Set up Supabase for user data."
"Create an API endpoint for fetching user posts."
"Add server-side validation for the contact form."
"How should I structure the database for [use case]?"
```

### Code Review Agent

**Triggers:** Quality, bugs, performance, security

```
"Review this component for issues."
"Is this the best way to handle [pattern]?"
"Check for security vulnerabilities in the auth flow."
"Why is this component re-rendering so much?"
```

---

## Level 3: Parallel Work

### When to Go Parallel

Use parallel building when features are **independent**:

```
✅ SAFE to parallel:
- Auth pages (/auth/*) + Dashboard (/dashboard/*)
- Settings page + Analytics page
- User profile + Admin panel

❌ NOT safe to parallel:
- Two features that both modify the navbar
- Features that share the same database table
- Components that import each other
```

### Parallel Prompts

**Setting up worktrees:**
```
"Set up git worktrees for features: auth, dashboard, and settings"
```

**In each terminal:**
```
Terminal 1: "Build the auth feature. Focus ONLY on /auth/ files."
Terminal 2: "Build the dashboard. Focus ONLY on /dashboard/ files."
Terminal 3: "Build settings. Focus ONLY on /settings/ files."
```

**Merging back:**
```
"I'm done with auth. Merge it back to main."
```

### Parallel Safety Rules

1. **Define boundaries clearly** — tell each agent which files it owns
2. **Avoid shared files** — layout.tsx, globals.css, shared components
3. **Merge frequently** — don't let branches diverge too long
4. **One feature = one worktree** — don't mix concerns

---

## Level 4: Epic & Feature Mastery

### Creating Great Epics

```
"Create an epic for [feature]. Include:
- Clear goal and success metrics
- User personas who benefit
- Key features (not tasks)
- Out of scope items
- Dependencies"
```

**Example prompt:**
```
"Create an epic for user onboarding.
The goal is to increase activation rate from 20% to 50%.
Target users are new signups who haven't completed their profile.
Must integrate with our existing Clerk auth."
```

### Breaking Epics into Features

```
"Break this epic into features. Each feature should:
- Be completable in 1-2 hours
- Have clear acceptance criteria
- Be independently deployable
- Include a user story format"
```

**Example prompt:**
```
"Break the onboarding epic into features.
I want to build incrementally — what's the smallest valuable first feature?"
```

### Feature → Implementation

```
"Let's build feature #3: Profile completion wizard.
Before coding, show me:
1. Which files you'll create/modify
2. The component structure
3. Any dependencies needed"
```

---

## Level 5: Power Prompts

### The Context Sandwich

Wrap your request with context:

```
[CONTEXT]
"We're building a B2B SaaS for project management.
The design style is minimal, using our lime green accent.
We're using Next.js 15, Tailwind, and Supabase."

[REQUEST]
"Build a task card component that shows title, assignee, due date, and priority."

[CONSTRAINTS]
"Keep it under 100 lines. No external libraries. Match our existing card style."
```

### The Iteration Loop

```
1. "Build [feature]"
2. "Show me what you did" (understanding)
3. "Change [specific thing]" (refinement)
4. "Review for issues" (quality)
5. "Commit with message: [type]" (save)
```

### The Explanation Request

```
"Do [thing], and explain your reasoning as you go."
"Why did you choose [approach] over [alternative]?"
"What are the tradeoffs of this implementation?"
```

### The Comparison Request

```
"Show me 2-3 ways to implement [feature].
Compare tradeoffs: complexity, performance, maintainability."
```

---

## Quick Reference: Magic Phrases

### Planning Phase
| You Want | Say This |
|----------|----------|
| App planning | "Help me plan my app. I want to build..." |
| Feature breakdown | "Break this into features with user stories" |
| MVP scoping | "What's the smallest valuable version?" |
| Technical decisions | "What tech stack do you recommend for...?" |

### Building Phase
| You Want | Say This |
|----------|----------|
| See the plan first | "Show me what you'll do before doing it" |
| Component building | "Build a [component] that [behavior]" |
| Styling changes | "Make this look more [adjective]" |
| Add interactivity | "Add [animation/interaction] to [element]" |

### Quality Phase
| You Want | Say This |
|----------|----------|
| Code review | "Review this for issues" |
| Performance check | "Is this performant? Any optimizations?" |
| Security audit | "Check for security vulnerabilities" |
| Accessibility | "Make this accessible (a11y)" |

### Parallel Work
| You Want | Say This |
|----------|----------|
| Setup worktrees | "Set up worktrees for [features]" |
| Scope boundaries | "Focus ONLY on files in [folder]" |
| Merge back | "Merge [branch] back to main" |
| Conflict help | "Help me resolve this merge conflict" |

### Meta / Learning
| You Want | Say This |
|----------|----------|
| Understanding | "Explain what you just did" |
| Alternatives | "What other ways could we do this?" |
| Best practices | "Is this the recommended way?" |
| Learning | "Why is [pattern] better than [other]?" |

---

## Anti-Patterns: What NOT to Do

### ❌ The Brain Dump
```
"Build me a complete e-commerce platform with user accounts,
product listings, shopping cart, checkout, payment processing,
order tracking, admin dashboard, inventory management,
reviews, wishlists, and email notifications."
```
**Problem:** Too much at once. Claude will get lost or make mistakes.

**Fix:** One feature at a time, build incrementally.

### ❌ The Micromanager
```
"Create a file called Button.tsx in src/components/ui.
Import React from 'react'.
Create a function called Button.
Add a className prop with type string.
Return a button element..."
```
**Problem:** You're writing code in English. Just write code.

**Fix:** State intent, let Claude decide implementation.

### ❌ The Ghoster
```
User: "Build the dashboard"
Claude: [builds dashboard]
User: "No that's wrong"
```
**Problem:** No feedback on WHAT is wrong.

**Fix:** Be specific about what needs to change.

### ❌ The Context Amnesiac
```
Message 1: "We're using Supabase"
Message 50: "Why did you use Prisma?"
```
**Problem:** Claude has limited context window.

**Fix:** Remind Claude of key decisions, or check CLAUDE.md.

---

## Your Prompting Progression

### Week 1: Foundation
- Be specific
- One thing at a time
- State intent, not implementation

### Week 2: Agents
- Learn which prompts activate which agents
- Practice context sandwiches
- Use the iteration loop

### Week 3: Parallel
- Set up worktrees for independent features
- Define clear file boundaries
- Merge frequently

### Week 4: Mastery
- Create well-structured epics
- Break features optimally
- Combine all techniques fluidly

---

*Part of the Claude Code Masterclass — Barcelona 2026*
