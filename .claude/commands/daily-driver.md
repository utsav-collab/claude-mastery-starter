# Daily Driver — Your Morning Workflow

Start your session with a quick creative brief. One command, ready to build.

## Process

### 1. Today's Focus
Ask: "What are you building or working on today?"
Listen — this shapes everything that follows.

### 2. Visual Direction (Surf CLI)
If Surf is installed and they're building something visual:
- Generate a quick mood image or visual reference
- "Let me generate a visual direction for today"
- Save to `output/daily/direction-{date}.png`
- This sets the creative tone before any code is written

### 3. Quick Plan
Based on what they said, suggest:
- The first thing to tackle (usually the hardest or most unclear part)
- One question to answer before starting

### 4. Summary
```
Good morning! Here's your brief:

Today: [what they're building]
Start with: [first recommended task]
[visual direction image if generated]

Ready when you are.
```

## Rules
- Skip Surf if it's not installed — don't error, just skip the image
- Keep the whole thing under 60 seconds
- One concrete suggestion, not a list of everything to do
- Don't create files or send anything without asking first
