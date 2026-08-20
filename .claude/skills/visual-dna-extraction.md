# Visual DNA Extraction

Extract the *essence* of a visual style — not what is literally shown, but WHY it feels the way it does. Reverse-engineer visual DNA into reusable creative principles for your own designs.

## When to Use This Skill

- Analyzing competitor websites for inspiration
- Understanding why award-winning designs "feel" premium
- Creating style guides from reference images
- Preparing to clone or improve upon a design

---

## Core Philosophy

**Never describe literally.** The goal is extracting principles that work for ANY subject.

Ask: *"What would someone who's never seen this design need to know to recreate this feeling?"*

---

## The Six Dimensions of Visual DNA

### 1. Light Character

How does light behave in this design?

```markdown
## Light Analysis

**Direction:** Where does light conceptually come from?
**Quality:** Hard and dramatic or soft and diffused?
**Shadows:** Deep and contrasty or subtle and graduated?
**Highlights:** Crisp or bloomed?

**Emotional Impact:** What mood does the lighting create?
```

### 2. Color Psychology

What's the emotional temperature?

```markdown
## Color DNA

**Temperature:** Warm (yellows, oranges) or cool (blues, greens)?
**Saturation:** Vibrant and energetic or muted and sophisticated?
**Contrast:** High drama or subtle harmony?
**Accent Strategy:** Where is color used for emphasis?

**Palette Extraction:**
- Primary: #XXXXXX (used for: )
- Secondary: #XXXXXX (used for: )
- Accent: #XXXXXX (used for: )
- Background: #XXXXXX
- Text: #XXXXXX
```

### 3. Composition Grammar

How do elements relate to each other?

```markdown
## Composition Analysis

**Grid:** Strict columns or organic flow?
**Whitespace:** Generous breathing room or dense information?
**Hierarchy:** How does the eye travel through the design?
**Edge Behavior:** What happens at the boundaries?

**Spatial Tension:** Is there dynamic asymmetry or balanced symmetry?
```

### 4. Typography Character

What personality does the type have?

```markdown
## Typography DNA

**Voice:** What would this typography sound like if it spoke?
**Weight Distribution:** Bold headlines vs light body?
**Spacing:** Tight tracking (urgent) or loose (refined)?
**Style Era:** Modern geometric, classic serif, humanist sans?

**Font Choices:**
- Headlines: [Family] at [weight]
- Body: [Family] at [weight]
- Accent: [Family] at [weight]
```

### 5. Motion & Tempo

How does time feel in this design?

```markdown
## Motion DNA

**Pace:** Fast and energetic or slow and deliberate?
**Easing:** Snappy and responsive or smooth and elegant?
**Entrance:** How do elements arrive on screen?
**Scroll Behavior:** Static, parallax, sticky, transforming?

**Animation Character:**
- Entry: [fade/slide/scale] over [duration] with [easing]
- Hover: [effect] over [duration]
- Scroll: [behavior] at [threshold]
```

### 6. Cultural Fingerprint

What design movements or eras does this reference?

```markdown
## Cultural DNA

**Era:** What decade/period does this evoke?
**Movement:** Bauhaus, Swiss, Brutalist, Material, etc.?
**Influences:** What designers, brands, or sites does this remind you of?
**Audience:** Who would feel at home here?

**Ghost Present:** Whose design philosophy haunts this work?
```

---

## Output Format

After analyzing a design, produce this report:

### Style Manifesto

*2-3 poetic sentences capturing the soul of this design. No jargon. Write it like explaining the feeling to someone who will never see it.*

### Technical Translation

Actionable choices for recreating this feeling:

```markdown
## To Recreate This Style

### Colors
- Background: #XXXXXX
- Text primary: #XXXXXX
- Text muted: #XXXXXX
- Accent: #XXXXXX
- Border: #XXXXXX

### Typography
- Headings: [Font] at [sizes] with [weight]
- Body: [Font] at [size] with [line-height]
- Mono: [Font] for code blocks

### Spacing
- Section padding: [value]
- Component gaps: [value]
- Text rhythm: [value]

### Effects
- Shadows: [values]
- Border radius: [value]
- Gradients: [if applicable]

### Animations
- Duration: [range]
- Easing: [curve name]
- Entrance: [pattern]
```

### Anti-Patterns

What would INSTANTLY break this feeling?

```markdown
## Never Do This

- ❌ [Specific violation that breaks the style]
- ❌ [Another mistake to avoid]
- ❌ [Third anti-pattern]
```

### Implementation Prompt

Ready-to-use instructions for Claude to build in this style:

```markdown
## Build Prompt

"Build a [component] in this style:
- Colors: [key colors]
- Typography: [key fonts]
- Spacing: [key values]
- Animations: [key behaviors]
- Mood: [2-3 word description]

Reference: [Style Manifesto summary]"
```

---

## Quick Reference Table

| Dimension | Core Question |
|-----------|---------------|
| Light | What personality does light have here? |
| Color | What's the emotional temperature? |
| Composition | What does empty space mean? |
| Typography | What would this type sound like if it spoke? |
| Motion | How does time feel in this design? |
| Culture | Whose ghost is present? |

---

## Example Analysis: Linear.app

### Style Manifesto

*Technology as theater. Dark space as infinite possibility. Typography so crisp it could cut glass. Every element earns its place through purpose, not decoration. This is software that believes in itself.*

### Technical Translation

```markdown
## Colors
- Background: #0A0A0B (near-black)
- Text primary: #F5F5F5 (off-white)
- Text muted: #8B8B8B (medium gray)
- Accent: #5E6AD2 (purple-blue)
- Border: rgba(255,255,255,0.1)

## Typography
- Headlines: Inter Variable, 600-700 weight, tight tracking
- Body: Inter, 400 weight, 1.6 line-height
- Sizes: 48px hero, 24px section, 16px body

## Spacing
- Generous: 120px+ section padding
- Consistent: 8px grid rhythm
- Breathing room around CTAs

## Effects
- Shadows: subtle glows, not drop shadows
- Borders: 1px rgba with low opacity
- Gradients: subtle radial backgrounds

## Animations
- Duration: 200-400ms
- Easing: cubic-bezier with slight overshoot
- Scroll: smooth parallax, sticky navigation
```

### Anti-Patterns

- ❌ Bright colors competing for attention
- ❌ Decorative illustrations or icons
- ❌ Dense information layouts
- ❌ Visible borders (use space instead)
- ❌ Generic stock photography

---

## Integration with Other Commands

After extracting Visual DNA:

1. **Use with `/clone-hero`**: Apply extracted styles to rebuild sections
2. **Use with `/redesign`**: Transform generic UI using these principles
3. **Save to PLAN.md**: Document style guide for the project

---

*Part of the Claude Code Masterclass — Barcelona 2026*
