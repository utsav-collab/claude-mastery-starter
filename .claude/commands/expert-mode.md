# /expert-mode - Unlock Your Full Potential

You are onboarding an **experienced developer** (🌳) to the full power of Claude Code. They know Git, they've used Cursor or VS Code with Copilot, and they want MAXIMUM productivity.

## Context: $ARGUMENTS

---

## 🌳 Welcome, Expert Developer

> "You already know how to code. You've used AI assistants. But you haven't seen what Claude Code can REALLY do.
>
> Let me unlock the advanced features that will make you **10x faster** than any other AI workflow."

---

## 🔓 Your Expert Toolkit

Here's what separates you from the beginners:

### Tier 1: Speed Commands

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `/parallel-build` | Build 3+ features simultaneously with git worktrees | Multiple independent features |
| `/clone-hero` | Reverse-engineer and rebuild competitor heroes 1:1 | Premium UI inspiration |
| `/work-on #3,#4,#5` | Chain multiple issues | Batch processing |

### Tier 2: Quality Commands

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `/code-review security` | Deep security audit | Before deployment |
| `/code-review performance` | Bundle + render analysis | Optimization phase |
| `/redesign premium` | Award-worthy design transformation | Polish phase |

### Tier 3: Structured Execution (GSD)

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `/start-pro-gsd` | Learn the full GSD workflow | First time |
| `/gsd:new-project` | Initialize project with roadmap and phases | New project kickoff |
| `/gsd:plan-phase` | Research + plan a phase before building | Before each phase |
| `/gsd:execute-phase` | Wave-based parallel execution | Building time |
| `/gsd:verify-work` | Conversational UAT — verify what was built | After each phase |
| `/gsd:progress` | Check project status, route to next action | Anytime |

### Tier 3.5: Agent Teams (Experimental)

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `/start-pro-agent-teams` | Learn how Agent Teams work | First time |
| `@team-lead` | Coordinate multiple agents on a big build | Multi-agent tasks |

Agent Teams let multiple Claude Code sessions share a task list, message each other, and coordinate under a team lead. Enable with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in `~/.claude/settings.json`.

**Teams vs Subagents:**
- **Subagents** = independent, focused tasks (cheaper, simpler)
- **Teams** = coordinated, collaborative work (powerful, costlier)

### Tier 4: Research Commands

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `/product-discovery deep` | Comprehensive market research | Project kickoff |
| Using `scrape-technique` skill | Visual brand DNA extraction | Inspiration gathering |

---

## ⚡ Expert Prompting Patterns

You don't need hand-holding. Here's how to communicate for maximum efficiency:

### Pattern 1: Batch Operations

```
"Build issues #3, #4, and #5 sequentially. After each:
1. Run tests
2. Commit with semantic message
3. Move to next

Don't ask for confirmation between issues."
```

### Pattern 2: Parallel Delegation

```
"I'm opening 3 terminals for parallel work:
- Terminal 1: Auth feature (only touch /auth/* and /lib/auth/*)
- Terminal 2: Dashboard feature (only touch /dashboard/*)
- Terminal 3: Settings feature (only touch /settings/*)

Set up git worktrees and give me the commands."
```

### Pattern 3: Expert Code Review

```
"Review this codebase for:
1. Security vulnerabilities (OWASP top 10)
2. Performance issues (bundle size, re-renders)
3. Architecture concerns (coupling, boundaries)

Be harsh. I can handle it."
```

### Pattern 4: Speed Iteration

```
"Build it fast first, we'll refine later.
Skip: tests, error handling, edge cases
Include: core functionality, basic styling
I'll tell you when to polish."
```

### Pattern 5: Deep Clone

```
"Clone https://linear.app hero section:
1. Extract exact colors, typography, spacing
2. Identify animation library and timing
3. Rebuild 1:1 in my codebase
4. Document what makes it effective"
```

---

## 🔄 Advanced Workflows

### Workflow 1: Parallel Feature Sprint

```
Day 1 Morning: Setup
├── Create epic and features (/epic-create, /plan-features)
├── Identify parallel-safe features
└── Set up git worktrees (/parallel-build)

Day 1-2: Build
├── Terminal 1: Core feature
├── Terminal 2: Secondary feature
├── Terminal 3: Polish/animations
└── Merge frequently to main

Day 3: Ship
├── Final code review (/code-review)
├── Design polish (/redesign)
└── Deploy (/ship)
```

### Workflow 2: Competitor Research Sprint

```
Phase 1: Reconnaissance
├── Identify 3-5 competitors
├── Scrape each (using scrape-technique skill)
├── Extract Visual DNA from each
└── Document patterns and differentiators

Phase 2: Synthesis
├── Create comparison matrix
├── Identify gaps and opportunities
├── Define your unique positioning
└── Document in PLAN.md

Phase 3: Build Better
├── Clone best elements (/clone-hero)
├── Add your unique twist
├── Polish to Awwwards level
└── Ship
```

### Workflow 3: Agency-Quality Polish

```
Phase 1: Foundation
├── Build features fast (function over form)
├── Get feedback, iterate
└── Lock scope

Phase 2: Premium Polish
├── /redesign each major section
├── Add GSAP animations (scroll, entrance)
├── Implement micro-interactions
└── Optimize performance

Phase 3: Ship & Showcase
├── Lighthouse score optimization
├── Create demo video
├── Deploy to production
└── Submit to Awwwards (optional)
```

---

## 🛠️ Expert-Only Skills

These skills give you access to advanced techniques:

### Using Skills in Prompts

```
"Using the agency-design-system skill, review my hero section for premium quality."

"Using the gsap-animation-patterns skill, add scroll-triggered animations to the features section."

"Using the scrape-technique skill, extract the visual DNA from stripe.com."
```

### Available Expert Skills

| Skill | Purpose |
|-------|---------|
| `agency-design-system` | Premium design patterns (shadows, spacing, gradients) |
| `gsap-animation-patterns` | GSAP + ScrollTrigger implementation |
| `scrape-technique` | Visual analysis and brand DNA extraction |
| `backend-patterns` | Database schema and API architecture |
| `ai-code-antipatterns` | Catch common AI mistakes |

---

## 🎯 Expert Mindset

### What Separates Experts from Beginners

| Beginner | Expert |
|----------|--------|
| "Build this for me" | "Here's my architecture, implement it" |
| One feature at a time | Parallel features with worktrees |
| Accept first solution | Request alternatives, choose best |
| Generic prompts | Precise, constrained prompts |
| Wait for errors | Proactively request validation |

### Expert Prompting Principles

1. **Be Specific About Constraints**
   - "Only modify files in /auth/*"
   - "Keep bundle size under 50kb"
   - "Use existing Button component from /ui"

2. **Request Alternatives**
   - "Show me 3 approaches before implementing"
   - "What are the tradeoffs of each?"

3. **Chain Operations**
   - "After building, run tests, then commit"
   - "Build, review, deploy — no pauses"

4. **Validate Proactively**
   - "Before we merge, check for security issues"
   - "Run Lighthouse and show me the scores"

5. **Learn From Claude**
   - "Explain why you chose this approach"
   - "What patterns are these companies using?"

---

## 🚀 Quick Start for Experts

### Option A: Start Building Immediately

```
"I'm an experienced developer.
Skip tutorials.
Show me:
1. Project structure
2. Available commands
3. Where to start building

I'll figure out the rest."
```

### Option B: Parallel Sprint Setup

```
"Set up for parallel development:
1. Create worktrees for my top 3 features
2. Give me the terminal commands
3. I'll run 3 Claude sessions simultaneously"
```

### Option C: Research-First Approach

```
"Before I build, research:
1. Competitors in [space]
2. Best-in-class examples
3. Technologies they're using
4. Visual patterns that work

Then we'll plan the build."
```

---

## 📊 Expert Metrics

Track your productivity:

```
SPEED METRICS
├── Features per day: [target: 2-3]
├── Issues closed per session: [target: 3-5]
└── Time to first deploy: [target: <4 hours]

QUALITY METRICS
├── Lighthouse performance: [target: >90]
├── Zero type errors: [target: 100%]
├── Test coverage: [target: >60%]
└── Security audit: [target: 0 high/critical]

EFFICIENCY METRICS
├── Parallel terminals used: [target: 2-3]
├── Merge conflicts resolved: [target: <5%]
└── Prompts per feature: [target: <10]
```

---

## 🔥 Expert Challenges

Test your mastery:

### Challenge 1: Speed Build
> Build a complete CRUD feature in under 30 minutes:
> Database → API → UI → Tests

### Challenge 2: Parallel Sprint
> Build 3 independent features in parallel using worktrees.
> Merge all without conflicts.

### Challenge 3: Clone & Improve
> Clone a competitor's hero section.
> Then make it 20% better with your own enhancements.

### Challenge 4: Security Audit
> Find and fix 5 security issues in your codebase.
> Document each fix.

### Challenge 5: Awwwards Polish
> Take a generic UI and transform it to Awwwards quality.
> Lighthouse score must remain >90.

---

## Your Agent Team

You have 16 agents ready to work:

### Planning & Strategy
| Agent | Use When |
|-------|----------|
| `@product-owner` | Breaking ideas into epics, features, stories |
| `@architect` | Complex decisions, trade-offs, build order |
| `@team-lead` | Coordinating multiple agents in parallel |

### Building
| Agent | Use When |
|-------|----------|
| `@backend-lead` | Database design, API architecture, Convex |
| `@frontend-lead` | UI/UX, component architecture |
| `@feature-builder` | End-to-end: schema → API → UI |

### Quality & Review
| Agent | Use When |
|-------|----------|
| `@code-review` | Security, performance, architecture audit |
| `@code-doctor` | Full project health scan |
| `@ship-check` | Pre-launch: security, mobile, a11y, SEO |
| `@qa-agent` | Edge cases, broken flows, responsive |
| `@debug-fix` | Root cause analysis, error fixing |

### Design
| Agent | Use When |
|-------|----------|
| `@creative-director` | Kill AI aesthetic, creative direction |
| `@design-taste-guardian` | Eliminate generic patterns |
| `@design-analyst` | Extract visual DNA from inspiration |
| `@style-fixer` | Fix broken layouts, spacing, responsive |

---

## Ready to Go Full Speed?

```
"You're an expert. You don't need hand-holding.

Your arsenal:
- /parallel-build — Multiple features at once
- /clone-hero — Learn from the best
- /code-review — Catch issues before deploy
- /redesign — Premium polish
- /start-pro-gsd — Structured project execution
- /start-pro-agent-teams — Coordinated agent teams
- @team-lead — Run a team of agents

What do you want to build?"
```

---

*Part of the Claude Code Masterclass — Barcelona 2026*
