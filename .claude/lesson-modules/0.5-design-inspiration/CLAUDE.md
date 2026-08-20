# Lesson 0.5: Design Inspiration & Visual DNA

Before you build, **collect inspiration**.

The best designs don't come from imagination — they come from studying what already works. We call this your **Visual DNA**: a clear description of the look and feel you want, so Claude builds something intentional instead of generic.

STOP: Have you ever saved screenshots of designs you liked?

USER: Yes / Sometimes / No

---

## Why Inspiration Matters 🎨

Here's a harsh truth:

> **If you don't collect inspiration first, AI will give you generic, template-looking designs.**

You know the look:
- Purple-to-blue gradients
- Glassmorphism everywhere
- Everything centered
- Generic stock photos
- Safe, boring layouts

**We're better than that.**

STOP: Ever seen an AI-generated website that looked... obviously AI?

USER: Yes / Definitely / All the time

---

## The "Taste Library" Concept 📚

Professional designers have what's called a **taste library** — a collection of references they've built over years.

You're going to build yours in 15 minutes.

> **Your taste library = Your defense against generic AI output**

When you can SHOW AI what you want, it delivers much better results.

| Without Inspiration | With Inspiration |
|--------------------|------------------|
| "Make it look good" | "Make it feel like Linear — minimal, dark, precise" |
| Generic output | Targeted output |
| AI decides | YOU decide |

STOP: Ready to build your taste library?

USER: Yes / Let's do it

---

## Where to Find Inspiration 🔍

### 1. Dribbble
**URL:** https://dribbble.com

The classics. Search for:
- "Dashboard UI"
- "SaaS landing page"
- "[Your app type] app"

**Pro tip:** Filter by "Popular" to see what resonates with people.

### 2. Awwwards
**URL:** https://awwwards.com

Award-winning websites. These are the best of the best.

**Pro tip:** Don't just look — ask yourself "What makes this feel good?"

### 3. Mobbin
**URL:** https://mobbin.com

Real app screenshots organized by patterns and flows. Great for studying how successful apps handle specific features.

**Pro tip:** Search for your specific feature (e.g., "onboarding flow", "settings page")

### 4. Godly
**URL:** https://godly.website

Curated landing pages with creative, non-standard layouts. Perfect for inspiration beyond the typical centered-content pattern.

### 5. Refero
**URL:** https://refero.design

Real product screenshots organized by pattern. See how real companies solve the same UI problems you're facing.

### 6. Pinterest
**URL:** https://pinterest.com

Great for building collections. Create a board for your project.

**Pro tip:** Search "[your industry] web design" or "modern SaaS UI"

STOP: Open one of these sites now. We'll browse together!

USER: Opened Dribbble / Opened Awwwards / Ready

---

## Study the Leaders 🏆

These companies have world-class design teams. Study their patterns:

| Company | URL | Why Study Them |
|---------|-----|----------------|
| **Linear** | linear.app | Clean, minimal, dark mode done right |
| **Vercel** | vercel.com | Bold typography, perfect spacing |
| **Stripe** | stripe.com | Clear hierarchy, beautiful gradients |
| **Notion** | notion.so | Whitespace, readable, human |
| **Raycast** | raycast.com | Dark mode, keyboard-first |
| **Arc Browser** | arc.net | Playful, colorful, different |

ACTION: Open 2-3 of these sites with the user. Point out what makes them special.

STOP: Which of these styles appeals to you most?

USER: I like [X] / Linear feels right / I prefer [Y]

---

## What to Look For 👁️

When saving inspiration, notice these elements:

### Colors
- Is it dark mode or light mode?
- What's the accent color?
- Warm tones or cool tones?

### Typography
- Big bold headlines or subtle?
- Tight letter-spacing or loose?
- One font or multiple?

### Spacing
- Cramped or lots of whitespace?
- How much breathing room?
- Dense information or minimal?

### Vibe
- Professional or playful?
- Technical or friendly?
- Minimal or feature-rich?

STOP: For the sites you liked, what specifically caught your eye?

USER: Describes what they noticed

---

## Let Me Build Your Inspiration Doc 🪄

Here's where Claude Code shows off.

Instead of YOU doing all the research, **let me create an inspiration document for you**.

Tell me:
1. What type of app are you building? (from lesson 0.4)
2. Do you prefer dark mode or light mode?
3. Minimal or feature-rich?
4. Any specific sites you already like?

STOP: Answer those questions and I'll research + create your inspiration doc!

USER: Shares their preferences

---

## Creating Your Inspiration Document

ACTION: Based on user's app idea and preferences, create a file called `DESIGN-INSPIRATION.md` with:

```markdown
# Design Inspiration for [App Name]

## Your Design Direction
- **Mode:** [Dark/Light]
- **Vibe:** [Minimal/Bold/etc.]
- **Feel:** [One phrase, e.g., "Clean and confident like Linear"]

## Reference Sites to Study

### Primary Inspiration
| Site | URL | Why Study It |
|------|-----|--------------|
| [Best match] | [url] | [Specific reason] |
| [Second match] | [url] | [Specific reason] |
| [Third match] | [url] | [Specific reason] |

### Color Inspiration
- [Color palette suggestions based on vibe]
- [Specific hex codes if relevant]

### Typography Notes
- [Font suggestions]
- [Sizing guidance]

### Layout Patterns
- [Specific patterns that fit their app type]

### What to AVOID (AI Aesthetic)
- ❌ Purple-to-blue gradients
- ❌ Glassmorphism everywhere
- ❌ Everything centered
- ❌ Generic stock photos
- ❌ Tight spacing

## Screenshots to Collect
Before building, screenshot these elements from the reference sites:
1. [ ] Hero section you love
2. [ ] Navigation style you like
3. [ ] Card/component design
4. [ ] Color usage example
5. [ ] Typography example

## Quick Reference When Prompting
When asking Claude to build UI, say:
> "Make it feel like [Primary Reference] — [key characteristics]"
```

STOP: I just created `DESIGN-INSPIRATION.md` in your project! Open it and take a look.

USER: I see it! / That's amazing / Wow

---

## Review Your Inspiration Doc ⭐

Open the `DESIGN-INSPIRATION.md` file I just created.

Look at the reference sites I suggested. Do they match your vision?

ACTION: If user wants changes, update the DESIGN-INSPIRATION.md file.

STOP: Do the references feel right? Want me to adjust anything?

USER: Looks good / Change [X] / Add [Y]

---

## Your Design Document is Ready! 📄

You now have a `DESIGN-INSPIRATION.md` file in your project that includes:

- ✅ Your design direction (mode, vibe, feel)
- ✅ Reference sites matched to your app
- ✅ Color and typography guidance
- ✅ What to avoid (the AI aesthetic)
- ✅ A checklist for collecting screenshots
- ✅ Prompt templates for later

**This is your design bible for the project.**

Whenever we build UI, we'll reference this document!

STOP: Pretty cool that I just did the research for you?

USER: Yes / That's the power of Claude Code!

---

## Organize Your References

Create a `design-research/` folder in your project. This becomes your reference library that you (and Claude) can use throughout development.

```
project-root/
  design-research/
    references/
      hero-sections/       # Landing page heroes you love
      dashboards/          # Dashboard layouts that work
      cards/               # Card designs with good spacing
      navigation/          # Nav patterns you like
      color-palettes/      # Color screenshots
      typography/          # Font usage examples
    VISUAL-DNA.md          # Your extracted Visual DNA summary
    MOOD-BOARD.md          # Links + descriptions of references
```

> **Pro tip:** Name screenshots like `linear-dashboard-spacing.png` or `stripe-hero-typography.png` — helps you remember what you liked about each reference.

ACTION: If the user is ready, help them create the `design-research/` folder structure in their project.

STOP: Want me to set up this folder structure for you?

USER: Yes / I'll do it later

---

## Extract Your Visual DNA

After collecting 5+ references, look for patterns. What do your favorites have in common? Analyze these **6 dimensions**:

| Dimension | What to Look For |
|-----------|-----------------|
| **Color** | Primary palette, accent colors, warm vs cool neutrals, contrast levels |
| **Typography** | Font families, heading sizes, letter-spacing, line-height |
| **Spacing** | Padding density, gap sizes, whitespace ratio, breathing room |
| **Layout** | Grid system, asymmetry, section structure, content alignment |
| **Imagery** | Photo style, illustration approach, icon style |
| **Motion** | Animation timing, hover effects, transition types |

Write a short summary in `VISUAL-DNA.md` describing the style you want:

```markdown
# Visual DNA

**Color:** Dark background with warm neutrals (like Linear/Raycast).
Single accent color: electric blue. Minimal color usage — let the content breathe.

**Typography:** Inter or similar geometric sans-serif. Tight letter-spacing
on headings. Large hero text, generous line-height on body.

**Spacing:** Very generous — lots of whitespace. Large padding on sections.
Nothing should feel cramped.

**Layout:** Left-aligned content, not centered. Full-width sections
with contained content.

**Motion:** Subtle fade-ups on scroll. No bouncy animations.
Smooth hover transitions.
```

STOP: See how specific that is? That's the difference between "make it look good" and actual design direction.

USER: Yes / This is great

---

## Why This Matters for Your PRD

In Modules 1 and 2, you'll create a **PRD** (Product Requirements Document) — the spec that tells Claude exactly what to build.

When your PRD references your Visual DNA, Claude doesn't guess what "looks good" means. **It knows.**

```markdown
## Design Direction

See design-research/VISUAL-DNA.md for the full style guide.
Reference screenshots are in design-research/references/.

Key design principles:
- Follow the Visual DNA for all color, typography, and spacing decisions
- When unsure about a design choice, check the reference screenshots
- Never use AI defaults (Montserrat, decorative gradients, cramped spacing)
```

> Your Visual DNA turns vague instructions like "make it look good" into specific direction like "use these exact colors, fonts, and spacing." That specificity is what separates generic AI output from intentional design.

STOP: This is the payoff — your research becomes your design system before you even start building.

USER: Smart / Love it

---

## The Cheat Code 🎮

Here's the cheat code for beautiful AI-generated designs:

> **When prompting, ALWAYS reference your inspiration.**

Instead of:
> "Build me a landing page"

Say:
> "Build me a landing page. I want it to feel like Linear — minimal, dark mode, lots of whitespace, confident typography. Reference these screenshots: [link]"

**Specific references = Specific results**

STOP: Make sense?

USER: Yes / Got it

---

## Module 0.5 Complete! 🎉

**You now have:**
- ✅ A taste library (5-10 saved designs)
- ✅ Top 3 references to guide your project
- ✅ A `design-research/` folder structure
- ✅ Your Visual DNA (6 dimensions)
- ✅ A design direction summary
- ✅ The cheat code for better AI design output

**Remember:**
> "Your Visual DNA is your defense against generic AI output."

---

**🎉 Module 0 Complete!**

You've finished all the pre-work:
- ✅ 0.1: What is Claude Code (tentacles!)
- ✅ 0.2: Terminal basics (5 commands)
- ✅ 0.3: Setup verified (all tools ready)
- ✅ 0.4: Project idea (you know what to build)
- ✅ 0.5: Design inspiration (you know what it should look like)

**Next Step:** Type `/start-module-1` to begin the AI Fundamentals!

This is where we learn HOW AI thinks — so you can work with it better.

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Ask about their app type, mode preference, and vibe
- CREATE the `DESIGN-INSPIRATION.md` file with researched recommendations
- Match reference sites to their specific app type
- Include specific, actionable guidance

**Teaching style:**
- Show off Claude Code's ability to DO research for them
- This is a "wow moment" — they just got a design doc without lifting a finger
- Enthusiastic about the result

**Success criteria:**
- [ ] Student answered the preference questions
- [ ] DESIGN-INSPIRATION.md file was created in their project
- [ ] File includes relevant references for their app type
- [ ] Student understands the 6 Visual DNA dimensions
- [ ] Student knows about the design-research/ folder structure
- [ ] Student understands how Visual DNA connects to PRDs
- [ ] Student sees the value of AI doing research

**Creating the DESIGN-INSPIRATION.md:**
Based on their app type, include appropriate references:
- **Dashboard/SaaS:** Linear, Vercel, Raycast
- **Consumer app:** Notion, Arc, Superhuman
- **Creative/Portfolio:** Awwwards winners, Dribbble
- **E-commerce:** Stripe, Shopify themes
- **Community:** Discord, Slack

**If they're stuck on preferences:**
- Ask: "Dark mode or light mode?"
- Ask: "Minimal or feature-rich?"
- Ask: "Professional or playful?"
- These binary choices unlock everything else

---

*Part of the Claude Code Masterclass — Barcelona 2026*
