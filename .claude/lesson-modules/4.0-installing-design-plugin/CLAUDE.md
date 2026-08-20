# Lesson 4.0: Installing the Design Plugin

Welcome to Module 4! Before we dive into design principles, let's install a powerful tool that will help us throughout this module.

Remember **Plugins** from Lesson 1.4? Official power-ups from Anthropic that extend Claude Code's capabilities.

STOP: Ready to supercharge your design workflow?

USER: Yes! / Let's install it!

---

## What is the Design Plugin?

Anthropic's **Design Plugin** adds specialized design capabilities:

```
┌─────────────────────────────────────────────────┐
│  DESIGN PLUGIN CAPABILITIES                     │
│                                                 │
│  🎨 Advanced color analysis                     │
│  📐 Spacing and layout suggestions              │
│  🔤 Typography recommendations                  │
│  ✨ Visual hierarchy checks                     │
│  🚫 AI aesthetic detection                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Why install it now?**

We're about to learn design principles in lessons 4.1-4.4. The Design Plugin will help you:
- Identify issues in your current design
- Get specific, actionable suggestions
- Verify your improvements

STOP: The plugin + your knowledge = professional results!

USER: Makes sense

---

## Step 1: Check Available Plugins

First, let's see what plugins are available:

ACTION: Run this command in your terminal:

```bash
claude plugins list
```

You should see a list of official Anthropic plugins, including:
- **design** — Design analysis and suggestions
- **memory** — Long-term memory across sessions
- **web** — Enhanced web browsing

STOP: Can you see the design plugin in the list?

USER: Yes! / I see it

---

## Step 2: Install the Design Plugin

Now let's install it:

ACTION: Run this command:

```bash
claude plugins install design
```

**What happens:**
1. Claude downloads the plugin
2. Verifies it's from Anthropic (official)
3. Adds it to your Claude Code installation
4. Ready to use immediately!

STOP: Did the installation succeed?

USER: Yes! / Installed successfully

---

## Step 3: Verify Installation

Let's make sure it's working:

ACTION: Run this command:

```bash
claude plugins status
```

You should see:
```
✅ design - installed (v1.x.x)
```

**The plugin is now active** in all your Claude Code sessions!

STOP: Design plugin verified?

USER: Yes!

---

## Step 4: Quick Demo

Let's see the plugin in action. In your Claude Code session, try:

```
Analyze the design of my current app
```

The Design Plugin will:
1. Scan your UI components
2. Check for common design issues
3. Suggest specific improvements

**You'll notice:**
- More detailed design feedback
- Specific code suggestions
- References to design principles

STOP: Did you get more detailed design feedback than before?

USER: Yes! / It's much better

---

## How It Works With Our Lessons

In the upcoming lessons:

| Lesson | Plugin Helps With |
|--------|-------------------|
| 4.1 Design Philosophy | Detecting AI aesthetic |
| 4.2 Typography & Color | Color ratio analysis |
| 4.3 Spacing | Whitespace measurement |
| 4.4 Animations | Timing recommendations |

**The plugin enhances `/design-check`** — making it even more powerful!

STOP: The plugin is your design co-pilot for this module.

USER: Ready to use it!

---

## Module 4.0 Complete! 🎉

**You've accomplished:**
- ✅ Understood what the Design Plugin does
- ✅ Installed the plugin successfully
- ✅ Verified it's working
- ✅ Saw a quick demo of its capabilities

**Your toolkit now includes:**
- Claude Code (your AI assistant)
- Workshop agents (`/product-owner`, `/frontend-lead`, etc.)
- Workshop skills (`/ship`, `/work-on`, etc.)
- **Design Plugin** (official Anthropic extension)

**Key insight:**
> "Plugins are official power-ups that make Claude Code even better. The Design Plugin will be your secret weapon for creating professional, non-AI-looking designs."

---

**Next Step:** Type `/start-4-1` to learn the Design Philosophy!

---

## Troubleshooting

### Plugin Not Found
```bash
# Update Claude Code first
claude update

# Then try again
claude plugins install design
```

### Permission Error
```bash
# Run with elevated permissions if needed
sudo claude plugins install design
```

### Plugin Not Working
```bash
# Check plugin status
claude plugins status

# Restart Claude Code
# Close terminal and open new session
```

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Guide through plugin installation
- Verify installation succeeded
- Show quick demo of capabilities
- Connect to upcoming lessons

**Teaching style:**
- Make it feel like unlocking a power-up
- Installation should be quick and easy
- Demo should show immediate value
- Build excitement for Module 4

**Success criteria:**
- [ ] Student installed design plugin
- [ ] Installation verified
- [ ] Quick demo completed
- [ ] Student understands plugin's value
- [ ] Student is ready for 4.1

---

*Part of the Claude Code Masterclass — Barcelona 2026*
