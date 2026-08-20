# Pro Lesson: Agent Teams

You've already learned about agents — individual specialists that do specific tasks. Now it's time to learn about **Agent Teams** — multiple Claude Code sessions that work together, share a task list, and message each other directly.

This is an **experimental feature** as of February 2026. It's powerful, but requires some setup.

STOP: Ready to learn how to run a real team of AI agents?

USER: Yes

---

## What Are Agent Teams?

You already know about **subagents** — the Task tool that spawns a specialist to do one job and report back.

**Agent Teams** take this further:

| | Subagents (Task tool) | Agent Teams |
|---|---|---|
| **Context** | Own context, isolated | Own context, can share via messages |
| **Communication** | Report back to parent only | Message any teammate directly |
| **Task Management** | No shared task list | Shared task list with dependencies |
| **Cost** | Lower (focused tasks) | Higher (multiple full sessions) |
| **Coordination** | Parent manages everything | Lead coordinates, teammates self-organize |
| **Best For** | Focused, independent tasks | Collaborative, multi-step work |

> **Rule of thumb:** If a task can be described in one sentence and completed independently, use a **subagent**. If the work requires back-and-forth coordination between multiple roles, use a **team**.

STOP: Subagents = solo workers. Teams = coordinated group. Make sense?

USER: Yes

---

## How Teams Work

```
YOU (Engineering Lead)
    |
TEAM LEAD (your main Claude Code session)
    |
    +-- Teammate 1 (Frontend) --+
    |                           |
    +-- Teammate 2 (Backend) ---+--- Shared Task List
    |                           |
    +-- Teammate 3 (Testing) ---+
```

**Three key pieces:**

1. **Team Lead** — Your main Claude Code session. Creates the team, defines tasks, spawns teammates, and coordinates their work. Messages from teammates are delivered automatically.

2. **Teammates** — Separate Claude Code processes, each with their own context window. They can read the shared task list, claim tasks, message other teammates directly, and report progress.

3. **Shared Task List** — Central task list visible to all team members. Tasks have statuses (pending, in_progress, completed), owners, and dependency relationships.

STOP: Like a real dev team — a lead who coordinates, developers who build, and a shared project board.

USER: Makes sense

---

## Enabling Agent Teams

This is an experimental feature. You need to enable it in your settings:

Add this to `~/.claude/settings.json`:

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

ACTION: Check if the student has this setting. If not, help them add it. Read ~/.claude/settings.json and add the env block if missing (merge with existing settings, don't overwrite).

STOP: Let's make sure you have Agent Teams enabled. Do you want me to check your settings?

USER: Yes / I'll do it

---

## Starting a Team

You can start a team by simply describing what you want. Claude handles the rest:

**Simple approach:**
```
"I need a team to review this PR. Spawn a security reviewer,
a performance reviewer, and a test coverage reviewer."
```

**More structured:**
```
"Create a team called 'feature-auth' with:
- A frontend agent to build the login UI
- A backend agent to set up Clerk integration
- A test agent to write e2e tests
Here are the requirements: [paste ticket]"
```

Claude Code will:
1. Create the team
2. Break down the work into tasks
3. Spawn the teammates
4. Coordinate their work
5. Report back when done

STOP: Just describe what you need. Claude figures out the team structure.

USER: That's easy

---

## When to Use Teams

Teams shine when you need coordination, not just parallel execution:

| Use Case | Why Teams Help |
|----------|---------------|
| **Parallel Code Review** | Security + performance + test agents review the same PR simultaneously |
| **Full-Stack Features** | Frontend and backend agents build their parts while a test agent writes integration tests |
| **Research + Implement** | One agent researches the approach while another prepares the codebase |
| **Competing Hypotheses** | Two agents investigate different theories about a bug, report back to the lead |

**Don't use teams for:**
- Simple, independent tasks (use regular subagents)
- Tasks that don't need communication between agents
- Quick one-off jobs (the coordination overhead isn't worth it)

STOP: Teams = collaborative work. Solo tasks = subagents. Cost goes up with team size.

USER: Got it

---

## Task Management

The shared task list is the backbone of coordination. Tasks flow through a simple lifecycle:

```
Pending → In Progress → Completed
```

Tasks can have **dependencies** — Task B is "blocked by" Task A, meaning it can't start until A is done.

**Example:**
```
Task 1: "Set up database schema"        → pending
Task 2: "Build API endpoints"           → blocked by Task 1
Task 3: "Create frontend components"    → blocked by Task 2
Task 4: "Write unit tests"              → can start immediately
```

Teammates self-organize:
- Check the task list for available (unblocked, unowned) tasks
- Claim a task by setting themselves as owner
- Mark completed when done, check for newly unblocked work
- Prefer tasks in ID order (lowest first)

STOP: Think of it as a Kanban board that the agents manage themselves.

USER: Smart

---

## Delegate Mode

By default, the team lead can both coordinate AND implement. In **delegate mode**, the lead is restricted to coordination-only — it can create tasks, send messages, and manage the team, but cannot edit files or run commands directly.

> Use delegate mode when you want the lead to focus purely on coordination: breaking down work, assigning tasks, reviewing progress, and making decisions. The teammates handle all implementation. This mirrors how a real engineering manager operates.

STOP: Delegate mode = the lead manages, teammates build. Like a real CTO.

USER: Nice

---

## Cost Warning

Each teammate runs as a **separate Claude Code session** with its own context window:

| Team Size | Token Usage | Use Case |
|-----------|-------------|----------|
| 1 agent | 1x | Normal session |
| 3 agents | ~3x | Small review team |
| 5 agents | ~5x | Full feature team |

**Tips to manage cost:**
- Use teams only when you genuinely need coordination
- For independent tasks, regular subagents are cheaper
- Keep team sessions focused — don't let teammates wander
- Size tasks so they complete in a single session

STOP: Powerful but expensive. Use teams deliberately, not for everything.

USER: Good to know

---

## Current Limitations (Feb 2026)

Since this is experimental, be aware:

- **No session resumption** — if a teammate crashes, it cannot resume where it left off
- **One team per session** — you cannot run multiple teams simultaneously from one Claude Code instance
- **No nested teams** — a teammate cannot spawn its own sub-team
- **Token cost scales linearly** — a team of 4 uses roughly 4x the tokens of a single session

These will likely improve as the feature matures.

STOP: It's experimental but very usable. Just know the boundaries.

USER: Understood

---

## Pro Lesson Complete!

**You now understand:**
- ✅ Subagents vs Agent Teams (when to use which)
- ✅ Team architecture: lead + teammates + shared task list
- ✅ How to enable Agent Teams in settings
- ✅ How to start a team with natural language
- ✅ Task management with dependencies
- ✅ Delegate mode for coordination-only leads
- ✅ Cost implications and when to use teams

**Your agents for team work:**
- `@team-lead` — Coordinates multiple agents on big builds
- `@architect` — Plans the approach before the team builds

```
┌─────────────────────────────────────────────────┐
│  AGENT TEAMS CHEAT SHEET                        │
│                                                 │
│  Enable:  Add CLAUDE_CODE_EXPERIMENTAL_AGENT_   │
│           TEAMS=1 to ~/.claude/settings.json    │
│                                                 │
│  Start:   Describe the team you need            │
│  Tasks:   Pending → In Progress → Completed     │
│  Cost:    ~Nx tokens for N teammates            │
│                                                 │
│  WHEN TO USE:                                   │
│  Teams  → Coordination needed                   │
│  Subs   → Independent, focused tasks            │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

**Next:** Check out `/start-pro-gsd` for the GSD structured execution workflow, or go back to building with `/work-on`.

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Check if Agent Teams is enabled in student's settings
- If not, help them add the env var to ~/.claude/settings.json
- Walk through the concepts with real examples
- Emphasize cost awareness — don't oversell teams for everything

**Teaching style:**
- Compare to real dev teams (CTO, developers, project board)
- Make the subagents vs teams distinction very clear
- Be honest about limitations — it's experimental
- Focus on practical when-to-use guidance

**Success criteria:**
- [ ] Student has Agent Teams enabled in settings
- [ ] Student understands subagents vs teams
- [ ] Student knows how to start a team
- [ ] Student understands cost implications
- [ ] Student knows about delegate mode

---

*Part of the Claude Code Masterclass — Barcelona 2026*
