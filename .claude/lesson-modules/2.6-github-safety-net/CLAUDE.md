# Lesson 2.6: GitHub & Your Safety Net

This lesson makes you FEARLESS.

We're going to:
1. Push your code to GitHub (your backup)
2. Create an Epic issue (your roadmap)
3. Prove the safety net works (break and fix!)

STOP: Ready to unlock your safety net?

USER: Yes!

---

## Why GitHub?

```
┌─────────────────────────────────────────────────────┐
│  WITHOUT GITHUB:                                     │
│                                                      │
│  💻 Code only on your computer                       │
│  😱 Laptop dies = everything gone                    │
│  🤷 No history of changes                            │
│  👤 Can't collaborate                                │
│                                                      │
├──────────────────────────────────────────────────────┤
│  WITH GITHUB:                                        │
│                                                      │
│  ☁️  Code backed up in the cloud                     │
│  📜 Complete history of every change                 │
│  🔙 Can go back to ANY point in time                 │
│  👥 Share with anyone                                │
│  📋 Track issues and progress                        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

STOP: GitHub is your safety net AND your portfolio. Ready?

USER: Yes

---

## The Easy Way: /github-init

Remember: if it feels like work, you're doing too much.

Instead of manually running git commands, we have:

```
/github-init
```

This ONE command:
- ✅ Initializes git (if needed)
- ✅ Creates .gitignore properly
- ✅ Makes initial commit
- ✅ Creates a NEW GitHub repository
- ✅ Pushes all your code
- ✅ Gives you the URL

STOP: Ready to run /github-init?

USER: Yes

---

## Running /github-init

ACTION: Execute the /github-init workflow:

```
🔗 GITHUB INIT

Initializing your repository...

• Checking git status...
• Creating .gitignore...
• Staging all files...
• Creating initial commit...
• Creating GitHub repository: [app-name]
• Pushing to GitHub...

✅ SUCCESS!

Your repository: https://github.com/[username]/[app-name]
```

STOP: Watch the magic... your code is being pushed to GitHub!

USER: Waiting

ACTION:
1. Run `git init` if needed
2. Create proper .gitignore
3. Run `git add .`
4. Run `git commit -m "Initial commit: project setup with PLAN.md"`
5. Create repo with `gh repo create [app-name] --private --push --source=.`
6. Show them the URL

---

## Your Code is in the Cloud!

Click the link to see your repository on GitHub.

You now have:
- ✅ All your code backed up
- ✅ PLAN.md visible online
- ✅ A professional repository
- ✅ The start of your portfolio

STOP: Open your GitHub repo. What do you see?

USER: Describes what they see

---

## Creating Your Epic Issue: /epic-create

Now let's create a beautiful Epic issue from your PLAN.md.

```
/epic-create
```

This command:
- ✅ Reads your PLAN.md
- ✅ Creates a formatted GitHub issue
- ✅ Adds feature checkboxes
- ✅ Highlights your MVP
- ✅ Applies proper labels

STOP: Ready to create your Epic issue?

USER: Yes

---

## Running /epic-create

ACTION: Create a GitHub issue from PLAN.md:

```
📋 CREATING EPIC ISSUE...

Reading PLAN.md...
Formatting issue content...
Creating GitHub issue...

✅ Epic Issue Created!

Issue #1: [Epic Title]
URL: https://github.com/[username]/[app-name]/issues/1
```

The issue includes:
- Your vision statement
- Feature checklist with checkboxes
- MVP highlighted
- Technical specs summary
- Labels: `epic`, `mvp`

STOP: Open the issue link. Look at that professional formatting!

USER: That's beautiful!

---

## The Safety Net Demo 🛡️

Now let's PROVE the safety net works.

**We're going to:**
1. Break something on purpose
2. See it's broken
3. Fix it with ONE command
4. See it's working again

Ready for something that might feel scary? Trust the process.

STOP: I'm going to intentionally break your app. Trust me — we'll fix it. Ready?

USER: Okay / Let's do it

---

### Breaking Something

ACTION: Make an obvious breaking change (syntax error or delete important content).

I just broke your app.

STOP: Check your browser — what happened?

USER: Describes the error

---

### The Magic Revert

Now watch this:

```bash
git checkout .
```

ACTION: Run `git checkout .` to revert changes.

STOP: Check your browser now!

USER: It's fixed!

---

## That's the Safety Net

**One command, everything restored.**

```
┌─────────────────────────────────────────────────────┐
│  SAFETY NET COMMANDS                                 │
│                                                      │
│  git checkout .        → Undo all changes            │
│  git checkout [file]   → Undo one file               │
│  git reset --hard      → Nuclear option (careful!)   │
│                                                      │
│  Or just ask me: "Claude, undo my last changes"      │
│                                                      │
└─────────────────────────────────────────────────────┘
```

STOP: Feel the freedom? You can try ANYTHING knowing you can always revert.

USER: Yes!

---

## The Commit Workflow

Going forward, here's the pattern:

```
1. Work on something
       ↓
2. Test it — make sure it works
       ↓
3. Commit: "Claude, commit these changes"
       ↓
4. Continue working...
       ↓
💥 Something breaks?
       ↓
git checkout . (back to last commit!)
```

**Pro tip:** Commit often! Each commit is a save point.

STOP: Commit when things work. Revert when they break. Simple?

USER: Got it

---

## Module 2.6 Complete! 🎉

**You've accomplished:**
- ✅ Pushed code to GitHub with /github-init
- ✅ Created Epic issue with /epic-create
- ✅ Experienced the break/revert safety net
- ✅ Learned the commit workflow

**Your GitHub now has:**
- Repository with all your code
- Issue #1: Your Epic with feature checklist
- Professional documentation

**Safety net commands:**
```
git checkout .                    # Undo all changes
git add . && git commit -m "msg"  # Save checkpoint
git push                          # Backup to cloud
```

---

## 🎉 Module 2 Complete!

**You've accomplished the ENTIRE planning phase:**

| Lesson | What You Did |
|--------|--------------|
| 2.1 | Researched market with Claude's tentacles |
| 2.2 | @product-owner created your Epic |
| 2.3 | Broke Epic into prioritized Features |
| 2.4 | @frontend-lead + @backend-lead enriched MVP |
| 2.5 | Created project with /workshop-start |
| 2.6 | Pushed to GitHub with /github-init |

**Your project has:**
```
~/Desktop/[app-name]/
├── PLAN.md        ← Complete blueprint
├── CLAUDE.md      ← AI context
├── src/           ← Your code
└── GitHub repo with Epic issue!
```

**Key insight:**
> "Research → Epic → Features → Enrich → Build → Ship. That's the professional workflow."

---

**Next Step:** Type `/start-module-3` to start building with AI agents!

---

## 💬 Example Prompts for Students

### Quick Start (Recommended)
```
/github-init
/epic-create
```

### Safety Net Request
```
Claude, I broke something. Undo all my changes since the last commit.
```

### Commit Workflow
```
Commit my current changes with a descriptive message
that follows conventional commit format.
```

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Execute /github-init workflow
- Execute /epic-create workflow
- Do the break/revert demo (crucial!)
- Show commit workflow

**Teaching style:**
- Celebrate the GitHub repo
- Make the Epic issue feel professional
- The safety net demo builds confidence
- Reassure during the "breaking" part

**Success criteria:**
- [ ] Code pushed to GitHub
- [ ] Epic issue created
- [ ] Student saw break/revert demo
- [ ] Student understands commit workflow
- [ ] Student feels safe to experiment
- [ ] Student completed Module 2
- [ ] Student ready for Module 3

---

*Part of the Claude Code Masterclass — Barcelona 2026*
