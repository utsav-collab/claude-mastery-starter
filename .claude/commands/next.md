# /next - Course Conductor (Auto-Continue)

The smart "what should I do next?" command. Analyzes your project state and automatically continues to the right lesson or action.

## User Request: $ARGUMENTS

---

## What This Does

1. Detects current project state
2. Determines the logical next step
3. Automatically runs the appropriate command/lesson
4. Keeps you on the optimal learning path

---

## The Course Conductor Logic

Think of this as a smart assistant that always knows what's next:

```
┌─────────────────────────────────────────────────────────────────┐
│                    COURSE CONDUCTOR FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  /next called                                                   │
│      │                                                          │
│      ▼                                                          │
│  Detect project state                                           │
│      │                                                          │
│      ├── No project?     → Run /workshop-start                  │
│      ├── No git?         → Run /github-init                     │
│      ├── No Epic?        → Run /epic-create                     │
│      ├── No Features?    → Run /plan-features                   │
│      ├── Features exist? → Run /start-3-1 (Agent Advantage)     │
│      ├── Auth setup?     → Run /start-3-3 (Database)            │
│      ├── DB setup?       → Run /start-3-4 (UI)                  │
│      ├── UI done?        → Run /start-4-1 (Design)              │
│      ├── Design done?    → Run /start-5-1 (Deploy)              │
│      └── Deployed?       → Run /start-5-3 (Celebration!)        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Detection Commands

Run these to determine state:

```bash
# 1. Check for project
if [ ! -f "package.json" ]; then
  echo "STATE:NO_PROJECT"
  exit 0
fi

# 2. Check for git
if [ ! -d ".git" ]; then
  echo "STATE:NO_GIT"
  exit 0
fi

# 3. Check for GitHub remote
if ! git remote -v 2>/dev/null | grep -q "github.com"; then
  echo "STATE:NO_GITHUB"
  exit 0
fi

# 4. Check for Epic
if ! gh issue list --label "epic" 2>/dev/null | grep -q "EPIC"; then
  echo "STATE:NO_EPIC"
  exit 0
fi

# 5. Check for Features
if ! gh issue list --label "feature" 2>/dev/null | grep -q "FEATURE"; then
  echo "STATE:NO_FEATURES"
  exit 0
fi

# 6. Check for Auth (Clerk)
if grep -rq "ClerkProvider\|@clerk" src/ 2>/dev/null; then
  # 7. Check for Database (Convex)
  if grep -rq "convex\|useQuery\|useMutation" src/ 2>/dev/null; then
    # 8. Check for substantial UI
    COMPONENT_COUNT=$(find src/components -name "*.tsx" 2>/dev/null | wc -l)
    if [ "$COMPONENT_COUNT" -gt 5 ]; then
      # 9. Check for Vercel deployment
      if [ -d ".vercel" ]; then
        echo "STATE:DEPLOYED"
      else
        echo "STATE:READY_TO_DEPLOY"
      fi
    else
      echo "STATE:BUILDING_UI"
    fi
  else
    echo "STATE:NEEDS_DATABASE"
  fi
else
  echo "STATE:NEEDS_AUTH"
fi
```

---

## State-to-Action Mapping

| Detected State | Action | What Happens |
|----------------|--------|--------------|
| `NO_PROJECT` | `/workshop-start` | Creates your app |
| `NO_GIT` | Lesson on git init | Sets up version control |
| `NO_GITHUB` | `/github-init` | Pushes to GitHub |
| `NO_EPIC` | `/epic-create` | Creates your Epic issue |
| `NO_FEATURES` | `/plan-features` | Breaks Epic into Features |
| `NEEDS_AUTH` | `/start-3-1` then `/start-3-2` | Teaches agents, adds auth |
| `NEEDS_DATABASE` | `/start-3-3` | Sets up database |
| `BUILDING_UI` | `/start-3-4` | Builds UI components |
| `READY_TO_DEPLOY` | `/start-5-1` | Pre-deploy checklist |
| `DEPLOYED` | `/start-5-3` | Celebration! |

---

## Interactive Flow

### Step 1: Announce Detection

```
🔍 Analyzing your project...

Checking:
✅ Project exists (package.json found)
✅ Git initialized
✅ GitHub connected (jeystaats/camping-app)
✅ Epic created (#1)
✅ Features planned (#2, #3, #4, #5)
⬜ Authentication not set up yet
⬜ Database not configured yet

📍 You're at: Post-planning, ready to BUILD!
```

### Step 2: Explain Next Step

```
🎯 YOUR NEXT STEP: Learn the Agent Advantage

Before diving into code, let's learn HOW to build efficiently
using specialized AI agents. This will save you hours!

The next lesson teaches you:
• How agents work as your dev team
• When to use which specialist
• The /work-on workflow

Ready to continue?
```

### Step 3: Auto-Run or Confirm

For beginners, ask:
> "Type 'yes' to continue to /start-3-1, or ask me anything first!"

For experienced users, just run:
> "Continuing to /start-3-1..."

Then execute the appropriate command/lesson.

---

## Handling Edge Cases

### User is Mid-Lesson

If they seem to be in the middle of something:

```
🤔 It looks like you might be in the middle of something.

I see:
• Uncommitted changes in your project
• A feature branch checked out

Would you like to:
1. Continue where you left off (keep working)
2. Commit and move to next lesson
3. See your full progress (/progress)

What would you like to do?
```

### User Skipped Ahead

If detection shows they're ahead of expected:

```
🚀 Nice! You're ahead of the standard path.

It looks like you've already:
✅ Set up authentication
✅ Connected a database

You could:
1. Continue to UI building (/start-3-4)
2. Go back and learn the concepts you skipped
3. Just keep building (/work-on #2)

What sounds good?
```

### User is Lost

If project state is confusing:

```
🤔 Your project state is a bit unusual.

I found:
• A project exists
• Git is set up
• But no GitHub remote
• And some features partially built

Let's get you back on track:

Option A: Start fresh with /workshop-start
Option B: Fix GitHub with /github-init
Option C: Tell me what you're trying to do

What would you like?
```

---

## Output Format

Always be encouraging and clear:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 NEXT: The Agent Advantage

You've completed the planning phase — great job!

Now let's learn how to BUILD efficiently using
AI agents as your development team.

Starting /start-3-1 now...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Important Notes for Claude

- **Be smart about detection** — Don't just check files, understand intent
- **Explain the WHY** — Why is this the next step?
- **Offer alternatives** — Some users want to skip or go back
- **Remember context** — If they just finished something, acknowledge it
- **Keep momentum** — The goal is to keep them moving forward

---

## Fast Track Awareness

If the user came via `/fast-track`, the routing changes:

| Standard Path | Fast Track Path |
|---------------|-----------------|
| Module 0 → 1 → 2 → 3 → 4 → 5 | Module 1 → 2 → 3 → Expert Pro |
| After Module 3 → Module 4 (Design) | After Module 3 → `/expert-mode` or `/start-pro-gsd` |
| After Module 5 → Celebration | After Expert Pro → Module 4 + 5 (polish & ship) |

### Detecting Fast Track Users

Signs the user is on Fast Track:
- They used `/fast-track` earlier
- They skipped Module 0 entirely
- They're experienced (using technical language, moving fast)
- They ask about GSD, parallel builds, or agent teams

### After Module 3 for Fast Track:

```
🎯 NEXT: Expert Pro

You've completed the core build modules. Time to level up:

• /expert-mode — Parallel builds, speed workflows, advanced prompts
• /start-pro-gsd — GSD structured project execution
• /start-pro-agent-teams — Coordinated agent teams (experimental)
• @team-lead — Run multiple agents on features simultaneously

When ready to polish and ship:
• /start-module-4 — Premium design
• /start-module-5 — Deploy to Vercel
```

---

## Related Commands

- `/progress` — See full progress visualization
- `/fast-track` — CTO/Senior dev express lane
- `/start-X-Y` — Jump to specific lesson
- `/work-on #N` — Start building a feature
- `/help` — General guidance

---

*Part of the Claude Code Masterclass — Barcelona 2026*
