# Lesson 4.2: Typography & Color with Purpose

Two elements make 80% of the design impact: **Typography** and **Color**.

Get these right, and your app instantly looks professional.

STOP: Ready to upgrade your fonts and colors?

USER: Yes!

---

## Typography: Stop Using AI Defaults

**DO NOT USE these fonts:**
- ❌ Montserrat
- ❌ Poppins
- ❌ Open Sans
- ❌ Roboto

Why? They're the AI defaults. Everyone uses them. They scream "I didn't think about fonts."

**Instead, RESEARCH your font:**

### Font Resources:
- [Google Fonts](https://fonts.google.com) — Filter by style
- [Fontshare](https://fontshare.com) — Modern, free fonts
- [Font Pair](https://fontpair.co) — Curated combinations

STOP: Have you thought about your font before? Let's research one now.

USER: Responds

---

## Typography Rules

### Rule 1: ONE Font Family
Two fonts maximum. One is often enough.

### Rule 2: THREE Hierarchy Levels
- **Headlines** — Big, bold, attention-grabbing
- **Body** — Readable, comfortable
- **Small/Caption** — Supporting details

That's it. Three levels.

### Rule 3: Proper Sizing

```tsx
// Headlines (Hero)
<h1 className="text-5xl md:text-7xl font-bold tracking-tight">

// Section Headers
<h2 className="text-3xl font-semibold">

// Body Text
<p className="text-base text-slate-600 leading-relaxed">

// Captions
<span className="text-sm text-slate-400">
```

STOP: Three levels. That's all you need.

USER: Got it

---

## Implementing Your Font

ACTION: Add your chosen font to `src/app/layout.tsx`:

```tsx
import { Inter } from 'next/font/google'

const font = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

**To use a different font:**
```tsx
import { Outfit } from 'next/font/google'  // or any Google Font

const font = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
})
```

STOP: Update your font. Did the app's feel change?

USER: Yes! / It looks different

---

## Color: Pick ONE Accent with Meaning

### The 60-30-10 Rule

```
┌─────────────────────────────────────────────────┐
│  60% — DOMINANT                                 │
│  Background, large areas                        │
│  Example: bg-slate-900, bg-white                │
├─────────────────────────────────────────────────┤
│  30% — SECONDARY                                │
│  Cards, sections, containers                    │
│  Example: bg-slate-800, bg-slate-50             │
├─────────────────────────────────────────────────┤
│  10% — ACCENT                                   │
│  CTAs, important actions ONLY                   │
│  Example: bg-indigo-500, bg-emerald-500         │
└─────────────────────────────────────────────────┘
```

STOP: Accent color is rare and precious. Use it sparingly.

USER: Got it

---

## Choose Your Accent Color

**Pick ONE that has MEANING:**

| Color | Meaning | Good For |
|-------|---------|----------|
| **Blue** | Trust, reliability | Finance, B2B |
| **Green** | Growth, success | Health, productivity |
| **Purple** | Premium, creative | SaaS, design tools |
| **Orange** | Energy, action | E-commerce, social |
| **Indigo** | Professional, tech | Developer tools |

**Don't pick a color just because it looks nice. Pick it because it MEANS something.**

STOP: What's YOUR accent color and why?

USER: Tells their color

---

## Neutral Temperature

Your neutrals should be consistent:

| Temperature | Colors | Feeling |
|-------------|--------|---------|
| **Warm** | Cream, Beige, Stone | Cozy, human |
| **Cool** | Slate, Cool Gray | Technical, modern |
| **Pure** | White, Gray | Clean, minimal |

**Pick ONE temperature for all neutrals.**

```tsx
// Cool neutrals (recommended for tech)
bg-slate-900  // Dark background
bg-slate-800  // Card background
text-slate-300  // Body text
text-slate-400  // Muted text

// Warm neutrals (friendly apps)
bg-stone-900
bg-stone-800
text-stone-300
text-stone-400
```

STOP: Cool or warm? Pick your neutral temperature.

USER: Picks one

---

## Apply Your Palette

ACTION: Update your global styles with consistent colors.

**Dark Mode Example:**
```tsx
// Main background
<main className="bg-slate-900 text-slate-100">

// Cards
<div className="bg-slate-800/50 border border-slate-700">

// Primary buttons (accent color!)
<button className="bg-indigo-500 hover:bg-indigo-600">

// Secondary buttons
<button className="bg-slate-700 hover:bg-slate-600">

// Text hierarchy
<h1 className="text-white">
<p className="text-slate-300">
<span className="text-slate-400">
```

STOP: Apply your palette. Is your accent color rare (10%)?

USER: Yes / Updated

---

## Module 4.2 Complete! 🎉

**You've accomplished:**
- ✅ Researched and chose a custom font
- ✅ Applied three-level typography hierarchy
- ✅ Chose an accent color with MEANING
- ✅ Selected warm or cool neutrals
- ✅ Applied 60-30-10 color rule

**Your design now has:**
- Intentional typography (not defaults)
- Meaningful accent color
- Consistent neutral temperature
- Professional color hierarchy

**Key insight:**
> "Typography and color are 80% of design. Research your font. Give your accent color meaning. Be consistent with neutrals. That's it."

---

**Next Step:** Type `/start-4-3` for spacing and whitespace mastery!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Help them choose a font (not defaults!)
- Implement font in layout.tsx
- Choose accent color with meaning
- Select neutral temperature
- Apply the palette consistently

**Teaching style:**
- Make typography research feel important
- Color should have MEANING, not just look nice
- 60-30-10 is the key rule

**Success criteria:**
- [ ] Custom font chosen and implemented
- [ ] Three-level typography applied
- [ ] Accent color chosen with meaning
- [ ] Neutral temperature selected
- [ ] 60-30-10 rule applied
- [ ] Student is ready for 4.3

---

*Part of the Claude Code Masterclass — Barcelona 2026*
