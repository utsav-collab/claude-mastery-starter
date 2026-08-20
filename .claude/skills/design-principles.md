---
name: design-principles
description: Visual design principles to escape the "AI aesthetic" and create professional-looking interfaces.
---

# Design Principles — Kill the AI Aesthetic

## The Problem with AI-Generated UI

AI defaults to:
- Safe, boring colors
- Tight spacing (cramped)
- Everything centered
- Too many elements
- Generic gradients

**If it looks like AI made it, it's not done.**

## The 60-30-10 Color Rule

```
60% — Dominant (background, large areas)
30% — Secondary (cards, sections)
10% — Accent (CTAs, highlights)
```

**Pick ONE accent color.** Not two. Not three. ONE.

## Typography Hierarchy

Only THREE levels needed:

```typescript
// Tailwind classes
const typography = {
  h1: 'text-4xl md:text-6xl font-bold tracking-tight',      // Hero headlines
  h2: 'text-2xl md:text-3xl font-semibold',                  // Section headers
  body: 'text-base text-gray-600 leading-relaxed',           // Body text
};
```

**Don't use default fonts.** Avoid: Montserrat, Poppins, Open Sans.
Try: Inter, Satoshi, Plus Jakarta Sans, Space Grotesk.

## Spacing Rules

```typescript
// BAD - cramped (AI default)
<div className="p-2 space-y-2">

// GOOD - breathing room
<div className="p-8 space-y-6">
```

**Rule:** When in doubt, add MORE whitespace.

**The 4px/8px grid:**
- All spacing = multiples of 4px
- `p-4` = 16px, `p-6` = 24px, `p-8` = 32px

## Interactive States

Every clickable element needs:

```typescript
<button className="
  bg-blue-600 text-white      /* Default */
  hover:bg-blue-700           /* Hover */
  active:scale-[0.98]         /* Active/pressed */
  focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  /* Focus */
  disabled:opacity-50 disabled:cursor-not-allowed       /* Disabled */
">
```

## Animation Principles

1. **Subtle > Flashy** — 0.2s-0.3s duration
2. **Purpose > Decoration** — Animations guide attention
3. **ease-out for enters, ease-in for exits**

```typescript
// Good: subtle, purposeful
className="transition-all duration-200 hover:scale-[1.02]"

// Bad: flashy, distracting
className="animate-bounce animate-spin"
```

## The Magazine Test

Ask yourself:

> "Would this appear in a design magazine... or a Canva template?"

| Canva Template | Design Magazine |
|----------------|-----------------|
| Everything centered | Intentional asymmetry |
| Decorative gradients | Purposeful color |
| Tight spacing | Generous whitespace |
| Many colors | Restrained palette |
| Safe choices | Bold decisions |

## Quick Fixes

| AI Ick | Human Fix |
|--------|-----------|
| `p-2` everywhere | Use `p-6` or `p-8` |
| Rainbow of colors | Pick ONE accent |
| `text-center` on everything | Left-align body text |
| Generic gradient bg | Solid color or subtle grain |
| 12px body text | 16px minimum |

## Color Palette Template

```typescript
// Choose ONE of these palettes
const palette = {
  // Warm & Approachable
  warm: {
    bg: '#FDFBF7',
    text: '#1A1A1A',
    accent: '#E07A5F',
  },
  // Cool & Professional
  cool: {
    bg: '#0A0A0A',
    text: '#FAFAFA',
    accent: '#3B82F6',
  },
  // Earthy & Grounded
  earth: {
    bg: '#F5F5F0',
    text: '#2D2D2D',
    accent: '#4A7C59',
  },
};
```
