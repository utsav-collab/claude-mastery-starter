# Lesson 1.7: CLAUDE.md & Project Memory

Remember the amnesia problem from earlier? This lesson is about how Claude Code SOLVES it.

STOP: Remember when we talked about AI forgetting everything between sessions? Ready to learn the solution?

USER: Yes

---

## The Problem (Revisited)

With regular AI tools:

```
Session 1: "Use Tailwind CSS for styling"
           ✓ Works great

Session 2: "Build the footer"
           ❌ Uses inline styles (forgot!)

Session 3: "Why does nothing match?!"
           😤 Frustrated
```

Every session starts fresh. Claude doesn't remember your preferences, your tech stack, or your design decisions.

STOP: Sound familiar from vibe coding? This is what kills projects.

USER: Yes

---

## The Solution: CLAUDE.md

In your project, there's a special file: `CLAUDE.md`

Every time Claude Code starts, it reads this file FIRST.

It's like leaving yourself a note that Claude always sees:

```
┌────────────────────────────────────────┐
│  CLAUDE.md                             │
│                                        │
│  "Hey Claude, before you do ANYTHING,  │
│   here's what you need to know..."     │
│                                        │
│  • Tech stack: Next.js + Tailwind      │
│  • Style: Minimal, dark theme          │
│  • Rules: No inline styles ever        │
│                                        │
└────────────────────────────────────────┘
```

STOP: It's like a persistent briefing document. Every session, Claude reads it first. No more forgetting!

USER: Ah, that's smart

---

## Let's Look at Your CLAUDE.md

ACTION: Open and show the CLAUDE.md file in their project.

STOP: Open `CLAUDE.md` in your project. What do you see in there?

USER: Describes content

---

## What Goes in CLAUDE.md?

Here's a template for what to include:

```markdown
# Project: [Your App Name]

## What This Is
[One sentence description]

## Tech Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Database: [If applicable]
- Auth: [If applicable]

## Design Rules
- Color palette: [Colors]
- Font: [Font name]
- Style: [e.g., "Minimal, clean, professional"]

## Code Rules
- NO inline styles
- Use TypeScript strict mode
- Components in /components folder
- [Any other preferences]

## Current Status
- [x] Basic setup done
- [ ] Hero section
- [ ] Features section
```

STOP: See how this gives Claude all the context it needs? You write it once, Claude remembers forever.

USER: Yes

---

## The Three Levels of CLAUDE.md

Actually, Claude Code can read CLAUDE.md files from THREE places:

```
┌─────────────────────────────────────────────────────┐
│  1. Global (~/.claude/CLAUDE.md)                    │
│     Your personal preferences for ALL projects     │
│                                                     │
│  2. Project Root (./CLAUDE.md)                      │
│     Specific rules for THIS project                │
│                                                     │
│  3. Subfolder (./folder/CLAUDE.md)                  │
│     Rules for specific parts of the project        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Most people just use the project-level CLAUDE.md** — that's enough for 90% of cases.

STOP: For this workshop, your project-level CLAUDE.md is what matters. But knowing about global is useful if you want preferences across ALL your projects.

USER: Got it

---

## Live Demo: Adding to CLAUDE.md

Let me show you how adding to CLAUDE.md changes my behavior.

ACTION: Ask them what styling preference to add (e.g., "always use rounded corners" or "prefer bold headings")

STOP: Give me a design preference you'd like me to remember. Something like "always use rounded corners" or "buttons should be large."

USER: Shares a preference

ACTION: Add that preference to CLAUDE.md in their project.

Done! I've added that to your CLAUDE.md.

Now, for the rest of this session AND every future session, I'll remember that preference.

STOP: Try asking me to create something — you'll see I follow that rule now!

USER: Tests the rule

ACTION: Demonstrate following the new rule.

See? I remembered. That's the power of CLAUDE.md.

---

## What About Conversations?

CLAUDE.md is for PERSISTENT knowledge — things that should always be true.

But what about stuff you learned IN a conversation?

**Option 1: Add it to CLAUDE.md yourself**

If you discover something important during a session, add it:

```
Hey Claude, add to CLAUDE.md that we decided to use Framer Motion for animations
```

**Option 2: /compact to summarize**

The `/compact` command compresses your conversation but keeps key decisions.

STOP: The combo of CLAUDE.md + /compact means you never truly lose context. Make sense?

USER: Yes

---

## Best Practices

**1. Keep CLAUDE.md updated:**
- After major decisions, add them
- After the session, review and clean up

**2. Be specific:**
```
# Bad
"Make it look good"

# Good
"Use Inter font, 4px border radius, zinc-800 backgrounds"
```

**3. Include examples when helpful:**
```
## Button Style
Use this pattern:
<Button className="bg-lime-500 text-black rounded-lg px-6 py-3" />
```

**4. Organize with headers:**
- Makes it easy to scan
- Makes it easy to update specific sections

STOP: Think of CLAUDE.md as your project's "style guide" + "decision log" combined. Got it?

USER: Yes

---

## Lesson 1.7 Complete!

**You now understand:**
- CLAUDE.md = persistent memory for Claude Code
- It's read at the START of every session
- Three levels: global, project, subfolder
- What to include: tech stack, design rules, code rules
- How to update it as your project evolves

**Key insight:**
> "CLAUDE.md is how you train Claude to work YOUR way."

**Module 1 Complete!**

Congratulations! You've finished Module 1 — The Foundations.

**What you've learned:**
- What is Claude Code (0.1)
- Terminal basics (0.2)
- The vibe coding problem (1.1)
- The Claude Code difference (1.2)
- Working with files & context (1.3)
- The three modes (1.4)
- Commands & power features (1.5)
- The agent mental model (1.6)
- CLAUDE.md & project memory (1.7)

**Next:** In Module 2, we start BUILDING. You'll define your Epic, create features, and bring your app to life!

> **Bonus:** Want to set up a status line to monitor context usage and costs? Type `/start-1-8` — it's optional but useful!

STOP: Ready for Module 2? Type `/start-2-1` when you're ready to build!

USER: Ready!

---

## Important Notes for Claude

- **Show the actual CLAUDE.md**: Let them see what's in their project
- **Live demo**: Actually add something and show it being remembered
- **Emphasize persistence**: This is the answer to the amnesia problem
- **Don't overwhelm**: Just project-level CLAUDE.md is enough for most

## Success Criteria

- [ ] Student understands CLAUDE.md is read at session start
- [ ] Student has looked at their project's CLAUDE.md
- [ ] Student has added something to CLAUDE.md
- [ ] Student has seen the preference being followed
- [ ] Student knows about the three levels (global/project/folder)
- [ ] Student understands how to keep CLAUDE.md updated
- [ ] Student has completed Module 1 foundations
- [ ] Student is ready for Module 2

---

*Part of the Claude Code Masterclass — Barcelona 2026*
