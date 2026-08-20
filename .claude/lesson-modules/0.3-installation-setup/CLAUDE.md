# Lesson 0.3: Installation & Setup Verification

Let's make sure everything is working before we dive into the real content!

This lesson verifies your setup is complete. If something's missing, we'll fix it together.

STOP: Ready to check your setup?

USER: Yes / Let's check

---

## The Setup Checklist ✅

You need these tools installed for the masterclass:

| Tool | What it's for | Check command |
|------|---------------|---------------|
| **Node.js** | Runs JavaScript/websites | `node --version` |
| **npm** | Installs packages | `npm --version` |
| **Git** | Version control (undo button!) | `git --version` |
| **Claude Code** | Your AI assistant (that's me!) | `claude --version` |
| **GitHub account** | Store your code online | We'll check this |
| **Vercel CLI** | Deploy your app to the internet | `vercel --version` |
| **Vercel account** | Hosting for your app | We'll check this |

Let's verify each one.

STOP: Ready to run some checks?

USER: Yes / Go ahead

---

## Check 1: Node.js

ACTION: Run `node --version` and display the result

**Expected:** A version number like `v20.x.x` or `v22.x.x`

STOP: Do you see a version number? If you see an error, let me know!

USER: I see a version / It works / (or: I got an error)

---

## Check 2: npm

ACTION: Run `npm --version` and display the result

**Expected:** A version number like `10.x.x`

npm comes bundled with Node.js, so if Node works, npm should too.

STOP: Version number showing?

USER: Yes / Works

---

## Check 3: Git

ACTION: Run `git --version` and display the result

**Expected:** Something like `git version 2.x.x`

Git is your safety net. It tracks all changes so you can always undo!

STOP: Git working?

USER: Yes / It's there

---

## Check 4: Claude Code

Well... if you're reading this, Claude Code is working! 🎉

But let's double-check the version:

ACTION: Run `claude --version` and display the result

**Expected:** Something like `claude-code 1.x.x`

STOP: All good?

USER: Yes / Claude is working

---

## Check 5: GitHub Account

For this, I need you to confirm:

1. Do you have a GitHub account at github.com?
2. Are you logged in on this computer?

We can test this:

ACTION: Run `gh auth status` to check GitHub CLI authentication (if installed)

**If you see "Logged in"** — Perfect! ✅
**If you see an error** — No worries, we'll set this up later or use the web interface.

STOP: Is your GitHub account ready? (It's okay if `gh` isn't installed — we can work around it)

USER: Yes / I have an account / Need to set up

---

## Check 6: Vercel CLI

Vercel is where your app goes live on the internet. Let's install the CLI and log in.

ACTION: Run `vercel --version` to check if it's installed

**If not installed:**
```bash
npm install -g vercel
```

**Then log in:**
```bash
vercel login
```

This opens your browser. Sign up or log in with your **GitHub account** (recommended — links everything together).

STOP: Is Vercel CLI installed and are you logged in?

USER: Yes / Just set it up / Need help

---

## Check 7: Vercel Account Verification

ACTION: Run `vercel whoami` to verify you're authenticated

**Expected:** Your Vercel username or email

If you see an error, run `vercel login` again.

**Why this matters:**
- Module 5 deploys your app to Vercel
- Claude can deploy directly from the terminal
- Every `git push` will auto-deploy your app

STOP: Vercel shows your username?

USER: Yes / It works

---

## Bonus Check: Warp Terminal

You should be using **Warp** as your terminal (it's the modern, pretty one).

Quick signs you're in Warp:
- Commands appear in "blocks" with borders
- There's an AI button (✨ or similar)
- The interface looks modern and clean

STOP: Are you in Warp? (If you're in a different terminal, that's okay too — things will still work)

USER: Yes / I'm in Warp / Using something else

---

## Setup Summary

Let me summarize what we found:

ACTION: Create a quick summary showing which tools are installed and their versions

---

## All Set? 🎉

If everything is working:

```
✅ Node.js    → Can run web applications
✅ npm        → Can install packages
✅ Git        → Can track changes (safety net!)
✅ Claude     → Your AI assistant is ready
✅ GitHub     → Can store code in the cloud
✅ Vercel     → Can deploy to the internet
```

**You're ready for the masterclass!**

---

## Troubleshooting (If Something's Missing)

### Missing Node.js?
Go to https://nodejs.org and download the LTS version. Install, restart terminal, try again.

### Missing Git?
- **Mac:** Run `xcode-select --install`
- **Windows:** Download from https://git-scm.com

### GitHub not logged in?
We'll handle authentication when we push code. Or you can run:
```bash
gh auth login
```

### Claude not working?
If you're reading this... it's working! 😄

STOP: Any issues we need to fix?

USER: All good / Everything works / (or describes an issue)

---

## Module 0.3 Complete! 🎉

**Your setup is verified:**
- ✅ Node.js is installed
- ✅ npm is ready
- ✅ Git is available
- ✅ Claude Code is running
- ✅ GitHub is configured (or will be)
- ✅ Vercel CLI installed and authenticated

**You're officially ready to learn!**

---

**Next Step:** Type `/start-1-1` to begin Module 1: AI Fundamentals!

This is where the REAL learning begins. We'll understand HOW AI works so you can use it better.

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Run version checks for node, npm, git, claude
- Run `gh auth status` if available
- Create a summary of installed tools

**Teaching style:**
- Quick verification, not deep teaching
- Be encouraging even if something's missing
- Offer simple fixes for common issues

**Success criteria:**
- [ ] Node.js verified
- [ ] Git verified
- [ ] Claude verified
- [ ] Vercel CLI installed and authenticated
- [ ] Student knows their setup status
- [ ] Student is ready for Module 1

**If issues found:**
- Provide clear, simple fixes
- Don't let students get stuck — offer workarounds
- Main things: Node and Git. GitHub can be configured later.

---

*Part of the Claude Code Masterclass — Barcelona 2026*
