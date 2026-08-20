# Lesson 1.8: The Status Line (Bonus)

> This is a **bonus lesson** — optional but useful. You can skip this and go straight to Module 2 with `/start-2-1`.

In Lesson 1.1, you learned that **context = expensive**. The longer your conversation, the more each message costs — and the worse the quality gets.

But how do you KNOW when your context is getting full? You can't see it... unless you set up a **status line**.

STOP: Ready to get a real-time dashboard for your Claude Code sessions?

USER: Yes

---

## What Is the Status Line?

The status line is a **customizable bar at the bottom of your Claude Code terminal**. It shows you useful information at a glance — without consuming any API tokens.

Think of it like the dashboard in your car:
- **Fuel gauge** = how full your context is
- **Speedometer** = which model you're using
- **GPS** = which git branch you're on
- **Trip meter** = how much this session has cost

> You wouldn't drive without a dashboard. Don't code without a status line.

STOP: A real-time dashboard, always visible. No extra cost. Make sense?

USER: Yes / Love it

---

## What Can It Show?

You can customize your status line to show whatever matters to you. The most useful things:

| Info | Why It Matters |
|------|---------------|
| **Context %** | Know when to start a new session or run `/compact` |
| **Model name** | See if you're on Sonnet, Opus, or Haiku |
| **Git branch** | Always know which branch you're working on |
| **Session cost** | Track spending in real time |

**The critical one is Context %.** When you see it hitting 70-80%, that's your signal to either:
1. Run `/compact` to compress the conversation
2. Start a fresh session for the next task

STOP: Context % is your most important metric. When it's high, quality drops and cost rises.

USER: Got it

---

## Quick Setup: The /statusline Command

The fastest way to set up a status line is with the `/statusline` command. Just describe what you want in plain English:

```
/statusline show model name and context percentage with a progress bar
```

Or be more specific:

```
/statusline show model, git branch, context bar with color coding, and session cost
```

Claude generates a script and updates your settings automatically. That's it!

ACTION: Help the student set up their status line. Ask what they want to see, then run `/statusline` with their preferences. If they're unsure, suggest: "show model, context bar with color coding, git branch, and session cost"

STOP: Let's set up YOUR status line right now. What would you like to see? (Or I can suggest a good default!)

USER: [Their preference or "use the default"]

---

## How It Works Behind the Scenes

When you ran `/statusline`, Claude created two things:

**1. A script** at `~/.claude/statusline.sh` that generates the status bar text.

**2. A settings entry** in `~/.claude/settings.json`:

```json
{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.sh"
  }
}
```

The script runs every few seconds and updates the bar. It doesn't use any API tokens — it just reads local data.

> You can edit the script later if you want to customize the colors, layout, or add new info.

STOP: Simple setup. Script generates the bar, settings point to the script. No API cost.

USER: Nice

---

## Reading Your Status Line

Now that it's set up, here's how to use it:

| Context % | What It Means | What to Do |
|-----------|---------------|-----------|
| **0-30%** | Fresh and clean | Keep working, plenty of room |
| **30-60%** | Getting used | Normal for a good session |
| **60-80%** | Getting expensive | Consider `/compact` soon |
| **80%+** | Quality dropping | Start a new session or `/compact` now |

**Remember from Lesson 1.1:**
- At 80% context, each message costs **4x more** than at 20%
- Quality degrades because Claude has too much to process
- Fresh sessions = better results + lower cost

STOP: Think of 70% as your yellow light. Start wrapping up or compacting.

USER: Makes sense

---

## Pro Tips

1. **Color coding** — If your status line has colors, green = good, yellow = watch out, red = compact now
2. **Git branch** — Always check this before making changes. Working on the wrong branch is a common mistake
3. **Session cost** — Helps you understand which tasks are expensive vs cheap
4. **Model name** — Confirms you're using the right model for the task (Sonnet for daily work, Opus for complex architecture)

STOP: Your status line is now your copilot. Always visible, always useful.

USER: This is great

---

## Module 1.8 Complete!

**You now know how to:**
- ✅ Set up a status line with `/statusline`
- ✅ Monitor context usage in real time
- ✅ Know when to start fresh or run `/compact`
- ✅ Track session cost and model
- ✅ Read git branch without switching windows

```
┌─────────────────────────────────────────────────┐
│  STATUS LINE CHEAT SHEET                        │
│                                                 │
│  Setup:   /statusline [describe what you want]  │
│  Config:  ~/.claude/settings.json               │
│  Script:  ~/.claude/statusline.sh               │
│                                                 │
│  CONTEXT THRESHOLDS:                            │
│  0-30%  → Fresh, keep going                     │
│  30-60% → Normal session                        │
│  60-80% → Consider /compact                     │
│  80%+   → New session or /compact NOW           │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

**Bonus lesson complete!** You now have a real-time dashboard for your sessions.

**Next Step:** Type `/start-2-1` to begin Module 2 — Building Your App!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Help student set up their status line using `/statusline`
- If they don't have a preference, suggest a good default with context bar, model, git branch, and cost
- Verify the status line appears after setup
- Show them how to read the context percentage

**Teaching style:**
- Connect back to Lesson 1.1's "context = expensive" concept
- Make it practical — they set it up during this lesson
- Use the car dashboard analogy
- Emphasize the 70% threshold as their action trigger

**Success criteria:**
- [ ] Student has a working status line
- [ ] Student understands what each section shows
- [ ] Student knows when to compact or start fresh
- [ ] Student is ready for Module 2

---

*Part of the Claude Code Masterclass — Barcelona 2026*
