# Lesson 0.2: Terminal Basics

Alright! You've seen Claude Code in action. Now let's make sure you understand this black box you're looking at.

Don't worry — the terminal is just a different way to talk to your computer.

STOP: Have you ever used a terminal before?

USER: Yes / No

[If yes: "Great! This will be quick review then."]
[If no: "Perfect! I'll explain everything. It's simpler than it looks."]

---

## What IS the Terminal? 💻

The terminal is just **text-based computer control**.

Instead of clicking buttons and icons, you type commands.

> **Analogy: Voice Commands**
>
> You know how you can say "Hey Siri, open Spotify"?
> The terminal is similar — but you TYPE instead of talk.
> And it's way more powerful.

```
Instead of:  📁 Click on folder → 📄 Click on file
You type:    ls (to see files)
             cd my-folder (to go into a folder)

That's it! Not magic — just typing instead of clicking.
```

STOP: Make sense so far?

USER: Yes

---

## The 5 Commands You Actually Need

Here's the truth: **You only need 5 commands.** That's it.

| Command | What it does | Plain English |
|---------|--------------|---------------|
| `pwd` | **P**rint **W**orking **D**irectory | "What folder am I in?" |
| `ls` | **L**i**s**t files | "What's here?" |
| `cd` | **C**hange **D**irectory | "Go to this folder" |
| `mkdir` | **M**a**k**e **Dir**ectory | "Create new folder" |
| `claude` | Start Claude Code | "Call the AI!" |

**That's the whole list.** Everything else? Just ask me!

STOP: Only 5 commands. Feel less scary?

USER: Yes / That's manageable

---

## Let's Practice: Where Am I?

Let's try the first command. Type this and press Enter:

```bash
pwd
```

ACTION: Wait for user to run `pwd`, then explain the output.

See that path? That's your current location on your computer — like an address.

STOP: What path do you see?

USER: Shows their path

---

## What's Here?

Now let's see what's in this folder:

```bash
ls
```

ACTION: Wait for user to run `ls`, show results.

This lists all files and folders here. Like opening Finder — but faster!

STOP: What files do you see?

USER: Lists what they see

---

## Moving Around

`cd` lets you navigate:

```bash
cd folder-name     # Go into a folder
cd ..              # Go back one level (parent)
cd ~               # Go to home folder
```

ACTION: Demonstrate by going into a subfolder and back

STOP: See how we moved? `cd` is like double-clicking folders.

USER: Got it

---

## The Secret: Just Describe What You Want 🪄

Here's the beautiful truth:

> **You don't need to memorize commands.**
>
> Just describe what you want in plain English. I'll handle the rest.

| You say... | I do... |
|------------|---------|
| "Show me what's in the src folder" | `ls src/` |
| "Create a folder called components" | `mkdir components` |
| "Where am I?" | `pwd` |
| "Go back up one folder" | `cd ..` |

**This is Claude Code's superpower.** You think in English. I translate to computer.

STOP: So if you forget a command, just describe what you want. I'll figure it out!

USER: That's amazing / So I just ask?

---

## You're Using Warp (Modern Terminal)

Your terminal is **Warp** — a modern terminal that's friendlier:

✅ **Autocomplete** — suggests as you type
✅ **Visual blocks** — each command is separated
✅ **AI built-in** — can explain commands
✅ **History search** — find past commands

It's like iPhone vs flip phone. Same concept, nicer experience.

STOP: Notice how Warp looks cleaner than old-school terminals?

USER: It does look nice

---

## Quick Practice

Let's do something fun:

ACTION: Create a folder called `test-folder`, go into it, create a file called `hello.txt` with "Hello from the terminal!", list contents, then clean up.

STOP: You just:
- Created a folder
- Went into it
- Created a file
- Listed contents
- Cleaned up

...all by just asking me!

USER: That was easy!

---

## Module 0.2 Complete! 🎉

**You now understand:**
- ✅ What the terminal is (typing instead of clicking)
- ✅ The 5 commands you need (pwd, ls, cd, mkdir, claude)
- ✅ That you can just DESCRIBE what you want
- ✅ How Warp makes it friendlier

```
┌─────────────────────────────────────────────────┐
│  🖥️ TERMINAL CHEAT SHEET                        │
│                                                 │
│  pwd             → Where am I?                  │
│  ls              → What's here?                 │
│  cd folder-name  → Go into folder               │
│  cd ..           → Go back up                   │
│  mkdir name      → Create folder                │
│                                                 │
│  💬 OR JUST DESCRIBE WHAT YOU WANT              │
│                                                 │
│  "What files are here?"                         │
│  "Go to the components folder"                  │
│  "Create a new folder called utils"             │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Key insight:**
> "The terminal isn't scary. And with Claude Code, you don't even need to know commands — just describe what you want."

---

**Next Step:** Type `/start-0-3` to verify your setup!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Have them run `pwd` and `ls` for real
- Demo `cd` navigation
- Do the create folder/file practice exercise
- Clean up test files at the end

**Teaching style:**
- Demystify the terminal
- Emphasize: "just describe what you want"
- Show real outputs, not just explain

**Success criteria:**
- [ ] Student ran `pwd` and knows where they are
- [ ] Student ran `ls` and saw files
- [ ] Student understands `cd` navigation
- [ ] Student knows they can describe commands in English
- [ ] Student is ready for 0.3

---

*Part of the Claude Code Masterclass — Barcelona 2026*
