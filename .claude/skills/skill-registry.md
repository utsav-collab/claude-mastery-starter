# Skill Registry — How Agents & Skills Work Together

This document defines which skills each agent uses and how they chain together.

---

## How Agents and Skills Connect

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE AGENT-SKILL ECOSYSTEM                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SKILLS = Knowledge (what to know)                              │
│  AGENTS = Behavior (what to do)                                 │
│  COMMANDS = Entry Points (how users trigger)                    │
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│  │   SKILLS    │───▶│   AGENTS    │◀───│  COMMANDS   │          │
│  │  (passive)  │    │  (active)   │    │  (triggers) │          │
│  └─────────────┘    └─────────────┘    └─────────────┘          │
│                                                                 │
│  Skills inform agents with domain knowledge                     │
│  Agents execute tasks using that knowledge                      │
│  Commands give users a way to invoke agents                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Agent → Skill Mapping

### 🎨 Frontend Lead Agent

**Role:** UI/UX, components, animations, accessibility

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `agency-design-system.md` | Premium design patterns, avoiding AI aesthetic |
| `design-principles.md` | Color theory, typography, layout |
| `component-patterns.md` | React component architecture |
| `gsap-animation-patterns.md` | Animation techniques |
| `form-patterns.md` | Form building best practices |
| `ai-code-antipatterns.md` | What to avoid |

**Triggered by:**
- `/redesign` command
- `/enrich-features` (frontend section)
- Natural language: "Make this look premium"

---

### ⚙️ Backend Lead Agent

**Role:** Database, APIs, security, architecture

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `backend-patterns.md` | Database schemas, API design, security |
| `saas-stack-architect.md` | Tech stack decisions (Clerk vs Auth.js, Convex vs Supabase) |

**Triggered by:**
- `/product-builder` command
- `/enrich-features` (backend section)
- Natural language: "Set up the database for...", "What should I use for auth?"

---

### 👔 Product Owner Agent

**Role:** Planning, research, user stories, acceptance criteria

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `prompting-mastery.md` | Clear communication patterns |
| `scrape-technique.md` | Research and competitive analysis |

**Triggered by:**
- `/product-discovery` command
- `/epic-create` command
- `/plan-features` command
- Natural language: "Help me plan..."

---

### 🔍 Code Review Agent

**Role:** Quality, security, performance

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `ai-code-antipatterns.md` | Detecting AI-generated code smell |
| `backend-patterns.md` | Security pattern verification |
| `component-patterns.md` | Component quality checks |

**Triggered by:**
- `/code-review` command
- Natural language: "Review this code"

---

### 🐛 Debug Agent

**Role:** Error resolution, troubleshooting

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `backend-patterns.md` | Common backend errors |
| `component-patterns.md` | React error patterns |

**Triggered by:**
- `/fix-errors` command
- Natural language: "This is broken"

---

### 🎨 Creative Director Agent

**Role:** Kill the AI aesthetic, make things memorable

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `agency-design-system.md` | Premium design patterns |
| `design-principles.md` | Color theory, 60-30-10 rule |
| `creative-inspiration.md` | Design references |

**Triggered by:**
- `/creative-director` command
- Natural language: "Make this feel premium", "Kill the AI aesthetic", "This looks generic"

---

### 🧪 QA Agent

**Role:** Find bugs before users do, test edge cases

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `component-patterns.md` | Expected component behavior |
| `backend-patterns.md` | API error handling |

**Triggered by:**
- `/qa-agent` command
- Natural language: "QA this", "Find edge cases", "What could break?"

---

### 🔬 Research Agent

**Role:** Competitive analysis, market research

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `scrape-technique.md` | Web scraping patterns |

**Triggered by:**
- `/product-discovery` command
- Natural language: "Research competitors"

---

### 🛠️ DX Optimizer Agent

**Role:** Optimize projects for fast, smooth developer experience

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `dev-experience-patterns.md` | Onboarding, Turbopack, TypeScript speed, VS Code setup |

**Triggered by:**
- `/dx-optimizer` command
- Natural language: "Optimize DX", "Make this easy to set up", "Improve developer experience", "Speed up dev server"

---

### 🧠 AI Builder Agent

**Role:** Adding AI features with Vercel AI SDK

**Uses these skills:**
| Skill | Why |
|-------|-----|
| `ai-integration-patterns.md` | Chat, streaming, structured output patterns |
| `backend-patterns.md` | API routes, error handling |

**Triggered by:**
- `/ai-builder` command
- Natural language: "Add AI to my app", "Build a chatbot", "Add AI features"

---

## Skill Files Reference

### Core Skills
| File | Purpose | Used By |
|------|---------|---------|
| `agency-design-system.md` | Premium design patterns | Frontend Lead |
| `design-principles.md` | Color, typography, layout | Frontend Lead |
| `component-patterns.md` | React architecture | Frontend Lead, Code Review |
| `gsap-animation-patterns.md` | Animation techniques | Frontend Lead |
| `form-patterns.md` | Form building | Frontend Lead |
| `backend-patterns.md` | DB, API, security | Backend Lead |
| `saas-stack-architect.md` | Tech stack decisions (auth, db, payments) | Backend Lead, All Agents |
| `visual-dna-extraction.md` | Competitor design analysis | Frontend Lead, Research |
| `ai-code-antipatterns.md` | What to avoid | Code Review, All Agents |
| `prompting-mastery.md` | Communication | Product Owner, Users |
| `scrape-technique.md` | Web scraping | Research Agent |
| `creative-inspiration.md` | Design inspiration | Frontend Lead |
| `dev-experience-patterns.md` | Onboarding, Turbopack, TypeScript speed | DX Optimizer |
| `ai-integration-patterns.md` | Vercel AI SDK, chat, streaming | AI Builder |

---

## The Agent Chain Flow

When you run commands, agents often work in sequence:

```
/product-discovery
    │
    └──▶ 🔬 Research Agent
         Uses: scrape-technique.md
         Output: DISCOVERY.md
              │
              ▼
/epic-create
    │
    └──▶ 👔 Product Owner
         Uses: prompting-mastery.md
         Reads: DISCOVERY.md
         Output: Epic Issue
              │
              ▼
/plan-features
    │
    └──▶ 👔 Product Owner
         Output: Feature Issues
              │
              ▼
/enrich-features
    │
    ├──▶ 🎨 Frontend Lead
    │    Uses: agency-design-system.md, component-patterns.md
    │    Adds: UI specs, components, animations
    │
    ├──▶ ⚙️ Backend Lead
    │    Uses: backend-patterns.md
    │    Adds: Schema, API, security
    │
    └──▶ 👔 Product Owner
         Adds: Acceptance criteria, edge cases
              │
              ▼
/work-on #X
    │
    └──▶ All agents collaborate
         Using all relevant skills
              │
              ▼
/code-review
    │
    └──▶ 🔍 Code Review Agent
         Uses: ai-code-antipatterns.md
         Checks: Quality, security
              │
              ▼
/ship
    │
    └──▶ Deploy checklist


SUPPORT AGENTS (Called When Needed)
───────────────────────────────────

/dx-optimizer (proactively optimize project setup)
    │
    └──▶ 🛠️ DX Optimizer Agent
         Uses: dev-experience-patterns.md
         Audits: Onboarding, Turbopack, TypeScript, VS Code

/ai-builder (when adding AI features)
    │
    └──▶ 🧠 AI Builder Agent
         Uses: ai-integration-patterns.md
         Creates: Chat interfaces, text generation, structured output
```

---

## How Skills Are Loaded

Skills are loaded in two ways:

### 1. Automatic (via agent activation)
When you trigger an agent (via command or natural language), it automatically references its assigned skills.

```
User: "Make this look more premium"
       │
       ▼
🎨 Frontend Lead activates
       │
       ▼
Loads: agency-design-system.md, design-principles.md
       │
       ▼
Applies knowledge to response
```

### 2. Direct Reference
Users can explicitly invoke skills:

```
User: "Using the agency-design-system skill, review my hero section"
       │
       ▼
Skill loaded directly
       │
       ▼
Applied to the review
```

---

## Adding New Skills

When creating a new skill:

1. **Create the file** in `.claude/skills/`
2. **Add to this registry** with:
   - Which agents use it
   - When it's triggered
3. **Update agents** to reference the skill

```markdown
# Template for new skill

# [Skill Name]

[Description of what this skill provides]

---

## When To Use

[Situations where this skill applies]

---

## Patterns

[The actual knowledge/patterns]

---

## Examples

[Practical examples]

---

*Part of the Claude Code Masterclass — Barcelona 2026*
```

---

## Best Practices

### For Skills
- Keep focused on ONE domain
- Include practical examples
- Reference related skills
- Update when patterns evolve

### For Agents
- Use 2-4 skills maximum
- Load skills relevant to current task
- Chain skills in logical order

### For Commands
- Clear trigger for which agent activates
- Document which skills will be used
- Show expected output format

---

*Part of the Claude Code Masterclass — Barcelona 2026*
