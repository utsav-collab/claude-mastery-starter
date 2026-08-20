# Lesson 3.1: The Agent Advantage

Welcome to Module 3! 🤖

You've planned your app. Now it's time to BUILD it — but not the old way.

In Module 2, your app looks amazing but has a problem: **refresh the page and everything disappears.** Let's fix that by adding REAL functionality.

STOP: Ready to transform your demo into a real product?

USER: Yes / Let's do it!

---

## The Gap: Demo vs Product

Here's what separates your Module 2 app from a REAL product:

```
┌─────────────────────────────────────────────────┐
│  MODULE 2 APP           REAL PRODUCT            │
│                                                 │
│  Static content    →    Dynamic data            │
│  No users          →    User accounts           │
│  No persistence    →    Database storage        │
│  Single page       →    Full workflows          │
│                                                 │
└─────────────────────────────────────────────────┘
```

**The Question:** What happens when you refresh the page?

Right now: Everything disappears. 😱
After Module 3: Data persists! 🎉

STOP: This is the leap from "demo" to "product." Ready?

USER: Yes!

---

## The Agent Mental Model

Remember from Module 1? You don't write code — you LEAD a team:

```
YOU (Engineering Lead)
        ↓
   🤵 Session Agent (Your Contractor)
        ↓
┌───────────┼───────────┐
↓           ↓           ↓
👔 Product   🎨 Frontend  ⚙️ Backend
   Owner        Lead        Lead
```

Each agent is a SPECIALIST:
- **Product Owner** → Plans and structures work
- **Frontend Lead** → Builds UI with design thinking
- **Backend Lead** → Handles data and infrastructure

**They don't just code — they THINK about the problem first.**

STOP: Three specialists working for you. Ready to meet them?

USER: Yes!

---

## Meet Your Agents

### 👔 Product Owner Agent (`/product-owner`)

**Philosophy:** Structures work into Epics → Features → User Stories

**Use when you say:**
- "Break down this project into features"
- "Write user stories for authentication"
- "What should I build first?"

**What makes it special:** Uses Given/When/Then acceptance criteria so you know exactly when something is "done."

---

### 🎨 Frontend Lead Agent (`/frontend-lead`)

**Philosophy:** "Don't build what they asked for. Build what they NEED."

**Use when you say:**
- "Build a pricing page — propose concepts first"
- "This hero section feels generic, improve it"
- "Make this feel less AI-generated"

**What makes it special:** Proposes 2-3 concepts with tradeoffs BEFORE building. Never implements blindly.

---

### ⚙️ Backend Lead Agent (`/backend-lead`)

**Philosophy:** "The best backend is the one you don't have to think about."

**Use when you say:**
- "Help me choose between Supabase and Convex"
- "Set up a database for user profiles"
- "Where should this data live?"

**What makes it special:** Explains tradeoffs in plain language. Makes decisions easy, not overwhelming.

STOP: These agents THINK before they build. That's what makes them powerful.

USER: Got it

---

## The Skills: Your Quick Commands

Beyond agents, you have **Skills** — instant commands for common tasks:

| Skill | What It Does |
|-------|--------------|
| `/review` | Code review like a senior engineer |
| `/design-check` | Ensures UI looks agency-quality |
| `/debug` | Methodically diagnoses errors |
| `/build` | Builds complete features |
| `/ship` | Pre-deploy checklist |

**GitHub Workflow Skills:**

| Skill | What It Does |
|-------|--------------|
| `/github-init` | Creates YOUR GitHub repo |
| `/epic-create` | Creates Epic issue from EPIC.md |
| `/plan-features` | Breaks Epic into Feature issues |
| `/work-on #3` | Builds feature and closes issue |

STOP: Agents THINK. Skills ACT. You LEAD.

USER: Makes sense

---

## The Complete Workflow

Here's how it all connects:

```
1. /plan-features     → Break Epic into Features
2. /work-on #2        → Build Feature 2
3. /review            → Check code quality
4. /design-check      → Polish the UI
5. /ship              → Deploy!
```

**The magic:** When you commit with `Closes #2`, the GitHub issue auto-closes when merged! 🎉

STOP: This is professional project management — built into your workflow.

USER: Awesome!

---

## Module 3.1 Complete! 🎉

**You've learned:**
- ✅ The gap between demo and product
- ✅ The agent mental model (you LEAD, they BUILD)
- ✅ Your three specialist agents
- ✅ Quick skills for common tasks
- ✅ The complete GitHub workflow

**Key insight:**
> "Agents don't just code faster — they THINK better. Product Owner clarifies requirements. Frontend Lead considers UX. Backend Lead makes smart infrastructure decisions. You're not just building — you're architecting."

---

**Next Step:** Type `/start-3-2` to set up authentication with Clerk!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Explain the agent philosophy
- Show the three specialist agents
- Introduce skills as quick commands
- Set up the GitHub workflow mental model

**Teaching style:**
- Make them feel like a LEADER
- Emphasize THINKING before building
- The agents work FOR them

**Success criteria:**
- [ ] Student understands demo vs product gap
- [ ] Student knows the three agents
- [ ] Student knows key skills
- [ ] Student is ready for 3.2

---

*Part of the Claude Code Masterclass — Barcelona 2026*
