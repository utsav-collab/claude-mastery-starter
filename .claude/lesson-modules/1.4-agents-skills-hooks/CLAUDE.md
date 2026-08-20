# Lesson 1.4: Agents, Skills, Hooks & Plugins

This is where Claude Code becomes TRULY powerful.

You're about to learn how to go from one AI assistant to an **entire team** of specialists working for you.

STOP: Ready to build your AI dream team?

USER: Yes!

---

## The Team Analogy 🏢

Imagine you're building a house. Would you hire ONE person to do everything?

No! You'd hire:
- An **architect** for the design
- An **electrician** for wiring
- A **plumber** for pipes
- A **carpenter** for woodwork
- A **project manager** to coordinate

Each is a specialist. Together, they build something amazing.

**Claude Code works the same way.**

Instead of one AI doing everything, you have **multiple specialists** working together.

STOP: One generalist vs. team of specialists. Which builds better?

USER: Team of specialists

---

## What Makes a GREAT Employee?

Let's think about what makes excellent team members:

### 🎯 The Best Product Owner

| Trait | What They Do |
|-------|--------------|
| **Vision** | Understands the WHY behind features |
| **User Focus** | Thinks from user's perspective |
| **Priorities** | Knows what's must-have vs nice-to-have |
| **Clarity** | Writes crystal-clear requirements |
| **Edge Cases** | Anticipates what could go wrong |

> A great PO doesn't just say "build a login" — they say "users need to sign in with email, reset their password, and remember their session for 30 days on trusted devices."

---

### ⚙️ The Best Backend Developer

| Trait | What They Do |
|-------|--------------|
| **Architecture** | Designs scalable systems |
| **Security** | Thinks about vulnerabilities first |
| **Database** | Structures data efficiently |
| **APIs** | Creates clean, documented endpoints |
| **Performance** | Optimizes for speed and cost |

> A great backend dev doesn't just "save data" — they design schemas, handle edge cases, validate inputs, and plan for 10x growth.

---

### 🎨 The Best Frontend Developer

| Trait | What They Do |
|-------|--------------|
| **UI Polish** | Makes things look beautiful |
| **UX Flow** | Ensures intuitive interactions |
| **Responsive** | Works on all screen sizes |
| **Performance** | Fast loading, smooth animations |
| **Accessibility** | Usable by everyone |

> A great frontend dev doesn't just "make a button" — they consider hover states, loading states, error states, mobile tap targets, and screen reader announcements.

---

### 🎬 The Best Creative Director

| Trait | What They Do |
|-------|--------------|
| **Vision** | Sees the bigger picture |
| **Differentiation** | Makes things NOT look AI-generated |
| **Details** | Obsesses over micro-interactions |
| **Trends** | Knows what's modern vs dated |
| **Taste** | Has strong opinions about quality |

> A great creative director makes your app feel SPECIAL, not generic.

STOP: These are the employees you WISH you could hire. Guess what?

USER: I can have them?

---

## Your AI Dream Team 🤖

**Yes! Claude Code can BE all of these specialists.**

That's what **Agents** are — specialized personalities that Claude can adopt.

| Agent | Role | Like Having... |
|-------|------|----------------|
| **Product Owner Agent** | Defines WHAT to build | A PM who writes perfect specs |
| **Backend Agent** | Handles server/database | A senior backend engineer |
| **Frontend Agent** | Creates UI/UX | A skilled React developer |
| **Creative Agent** | Makes things unique | An agency creative director |
| **QA Agent** | Tests and validates | A thorough QA engineer |

STOP: You're not limited to one AI. You have a TEAM.

USER: This is amazing

---

## The Three Concepts

Let me break down Agents, Skills, and Hooks:

### 🤵 Agents = Your Employees

**What:** Specialized AI personalities for specific tasks.

**Analogy: The Renovation Company**

> You want to renovate your house.
> - You call the **contractor** (Session Agent) — he coordinates
> - Contractor calls the **electrician** (Specialized Agent)
> - Contractor calls the **plumber** (Specialized Agent)
> - Contractor calls the **painter** (Specialized Agent)
>
> You only talk to the contractor. He manages the rest.

**The Agent Types:**

| Type | What It Is | Analogy |
|------|-----------|---------|
| **Session Agent** | Your main Claude in terminal | The contractor |
| **Spawning Agent** | Agent that calls other agents | Contractor calling specialists |
| **Specialized Agent** | Expert for specific task | Electrician, plumber, painter |

STOP: You talk to one agent, they coordinate the specialists. Make sense?

USER: Yes / Like a real company

---

### ⚡ Skills = Saved Recipes

**What:** Pre-defined workflows you can trigger with a command.

**Analogy: The Coffee Machine**

> Your fancy coffee machine has buttons:
> - ☕ **Espresso** — one press = perfect espresso
> - 🥛 **Cappuccino** — one press = espresso + milk
> - ☕ **Latte** — one press = espresso + lots of milk
>
> You don't explain the recipe every time. You press the button.

**Skills work the same:**

| Skill | What You Type | What Happens |
|-------|---------------|--------------|
| `/workshop-start` | Just this command | Complete starter app created |
| `/commit` | After writing code | Git commit with good description |
| `/review-pr` | During code review | Full analysis of all changes |

STOP: Skills are saved workflows. Type command, get result.

USER: Like shortcuts!

---

### 🔔 Hooks = Automatic Reactions

**What:** Automatic actions triggered by events.

**Analogy: Smart Home Devices**

> - **Motion sensor + lamp:** Someone walks in → light turns on
> - **Doorbell camera:** Someone rings → you get notification
> - **Thermostat:** Temp below 18°C → heating starts
>
> You don't manually turn on lights. The system reacts automatically.

**Hooks in Claude Code:**

| Hook | When It Triggers | What Happens |
|------|------------------|--------------|
| **Pre-commit** | Before code is saved | Code is checked and formatted |
| **Post-edit** | After editing a file | Auto-save, sync |
| **On-error** | When something fails | Auto-retry or notification |

STOP: Hooks are automatic reactions. Set them once, they work forever.

USER: Smart automation

---

### 🔌 Plugins = Official Power-Ups

**What:** Curated tools from Anthropic that extend Claude Code's capabilities.

**Analogy: App Store for Your Phone**

> - Your phone is powerful on its own
> - But the **App Store** adds specialized apps
> - Weather app, fitness tracker, navigation
> - Made by experts, tested, trusted
>
> Plugins are like premium apps — official, high-quality, ready to use.

**Anthropic's Official Plugins:**

| Plugin | What It Does |
|--------|--------------|
| **Design** | Advanced design analysis and suggestions |
| **Memory** | Long-term memory across sessions |
| **Web** | Enhanced web browsing and research |

**The difference:**

| Concept | Source | Quality |
|---------|--------|---------|
| **Agents** | You create | Your expertise |
| **Skills** | You create | Your workflows |
| **Plugins** | Anthropic | Official, curated |

> **We'll install the Design plugin in Module 4** — right when you need it!

STOP: Plugins are official power-ups from Anthropic. Got it?

USER: Yes! Like an app store for Claude

---

## Summary Table

| Concept | One-Line | Analogy |
|---------|----------|---------|
| **Agent** | Specialist you hire | The electrician |
| **Session Agent** | Your main contact | The contractor |
| **Spawning Agent** | Calls other specialists | Contractor calling plumber |
| **Skill** | Saved recipe/workflow | Cappuccino button |
| **Hook** | Automatic reaction | Motion-sensor light |
| **Plugin** | Official power-up | App Store download |

> 🎯 **Remember:**
> - **Agent** = WHO (the specialist)
> - **Skill** = WHAT (the recipe)
> - **Hook** = WHEN (the automatic trigger)
> - **Plugin** = POWER (official extensions)

STOP: Got the three concepts?

USER: Yes! Agent = who, Skill = what, Hook = when

---

## Why This Matters

With Agents, Skills, and Hooks:

| Without | With |
|---------|------|
| One AI doing everything | Team of specialists |
| Repeat instructions every time | Saved skills to trigger |
| Manual quality checks | Automatic hooks |
| Sequential work | Parallel work |
| Context overload | Distributed context |

STOP: This is how professionals work. You're learning the pro way!

USER: Love it

---

## Module 1.4 Complete! 🎉

**You now understand:**
- ✅ What makes great employees (PO, Backend, Frontend, Creative)
- ✅ Agents = your AI employees
- ✅ Skills = saved recipes/workflows
- ✅ Hooks = automatic reactions
- ✅ Plugins = official power-ups from Anthropic
- ✅ Agent (who) vs Skill (what) vs Hook (when) vs Plugin (power)

**Key insight:**
> "You're not working with one AI. You're managing a team of AI specialists, each with their own expertise — plus official plugins to supercharge your workflow."

---

**Next Step:** Type `/start-1-5` to learn the Engineering Lead Mindset!

---

## Notes for Claude (Hidden from Student)

**Teaching style:**
- Use the employee profiles to make agents tangible
- Strong analogies (renovation, coffee machine, smart home)
- Build excitement about having a "team"

**Success criteria:**
- [ ] Student understands what makes good specialists
- [ ] Student knows the four concepts
- [ ] Student can differentiate Agent/Skill/Hook/Plugin
- [ ] Student understands plugins are official (from Anthropic)
- [ ] Student ready for 1.5

---

*Part of the Claude Code Masterclass — Barcelona 2026*
