# Lesson 3.4: Building the UI with Frontend Lead

Time to build something REAL! 🎨

You have auth. You have a database. Now let's build the UI that connects them.

But we're not just going to slap something together. We're going to use the **Frontend Lead Agent** to THINK before we build.

STOP: Ready to build your first real feature?

USER: Yes!

---

## The Frontend Lead Philosophy

Remember the Frontend Lead's mantra:

> **"Don't build what they asked for. Build what they NEED."**

The Frontend Lead workflow:
1. **CLARIFY** — "What problem are we solving?"
2. **RESEARCH** — Look up best practices
3. **CONCEPTS** — Propose 2-3 directions
4. **CONFIRM** — "Which direction feels right?"
5. **BUILD** — Implement the chosen approach

**This is how senior designers work.** Now your AI does it too.

STOP: Thinking before building. That's professional development.

USER: Got it

---

## Pick Your Feature

Based on your EPIC.md, what's your main feature?

Examples:
| If Your App Is... | Build This |
|-------------------|------------|
| Client portal | Invoice list with status |
| Course platform | Lesson progress tracker |
| Booking system | Available slots calendar |
| Task manager | Kanban board |
| Social app | Post feed with likes |
| Inventory system | Item list with quantities |

STOP: What feature should we build? (Pick something from your P0 list!)

USER: Describes their feature

---

## Use the Frontend Lead

Let's invoke the Frontend Lead agent:

ACTION: Type this command:

```
/frontend-lead Build a [FEATURE NAME] — propose concepts first
```

For example:
```
/frontend-lead Build an inventory item list — propose concepts first
```

Watch what happens:
1. Claude asks clarifying questions
2. Researches best practices
3. Proposes 2-3 design concepts
4. Waits for YOUR choice

STOP: Run the command and see the concepts!

USER: Shows concepts / Picks one

---

## Concepts in Action

The Frontend Lead will present something like:

```
💡 Concepts:

## Concept A: Card Grid
**Vibe:** Visual, Pinterest-style
**Approach:** Items as cards in responsive grid
**Tradeoff:** Great for visual items, less data density

## Concept B: Data Table
**Vibe:** Professional, spreadsheet-like
**Approach:** Items in rows with sortable columns
**Tradeoff:** High data density, less visual

## Concept C: List with Details
**Vibe:** Notion-like, clean
**Approach:** Simple list, click to expand details
**Tradeoff:** Balanced, works for most cases

→ Which direction resonates?
```

STOP: Pick the concept that fits YOUR app's personality!

USER: Picks a concept

---

## Build It!

Once you've chosen, the Frontend Lead will build:

1. **Component structure** — Files in the right places
2. **TypeScript interfaces** — Proper types for props
3. **Tailwind styling** — Following design principles
4. **Responsive design** — Mobile-first approach

Watch as it creates your component!

STOP: Is the component building? Let it work its magic.

USER: Yes / It's building

---

## UX Principles Applied

Notice how the Frontend Lead applies these principles:

### Whitespace
```tsx
// ❌ Cramped (AI default)
<div className="p-2 gap-2">

// ✅ Breathing room (Frontend Lead)
<div className="p-6 gap-6">
```

### Visual Hierarchy
```tsx
// ONE primary action per screen
// THREE levels of text hierarchy max
// SIXTY percent empty space minimum
```

### Avoiding "AI Style"
- Generous whitespace (not cramped)
- Intentional asymmetry (not everything centered)
- Fewer elements, more impact
- Real design references (not generic patterns)

STOP: Good UI breathes. Notice the spacing!

USER: I see it

---

## Review the Component

Once built, let's review it:

ACTION: Type this command:

```
/design-check the [component name]
```

This runs the **Design Taste Guardian** to check:
- 60/30/10 color rule
- Typography hierarchy
- Spacing on 4px grid
- Interactive states (hover, focus, etc.)

STOP: Run the design check. Any suggestions to improve?

USER: Shows results

---

## Make It Interactive

Your component should have:

- [ ] **Loading state** — Shows while data fetches
- [ ] **Empty state** — Shows when no data
- [ ] **Error state** — Shows if something breaks
- [ ] **Hover effects** — Visual feedback
- [ ] **Click handlers** — Ready for actions

**Ask Claude:**
> "Add loading, empty, and error states to this component"

STOP: Interactive states make your UI feel polished!

USER: Done / States added

---

## Module 3.4 Complete! 🎉

**You've accomplished:**
- ✅ Used Frontend Lead to think before building
- ✅ Chose from multiple design concepts
- ✅ Built your main UI component
- ✅ Applied UX principles (whitespace, hierarchy)
- ✅ Ran design check for quality
- ✅ Added interactive states

**Your component now:**
- Looks intentional, not AI-generated
- Has proper loading/empty/error states
- Uses Tailwind best practices
- Is ready to connect to data!

**Key insight:**
> "The Frontend Lead asks questions a senior designer would ask. 'What's the main action?' 'Who's the user?' 'What's the vibe?' These questions lead to better design."

---

**Next Step:** Type `/start-3-5` to connect your UI to the database!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Invoke /frontend-lead for their feature
- Present 2-3 design concepts
- Build the chosen concept
- Run /design-check
- Add interactive states

**Teaching style:**
- Emphasize THINKING before building
- Let them choose the concept
- Celebrate the polished result

**Success criteria:**
- [ ] Frontend Lead invoked
- [ ] Design concept chosen
- [ ] Component built
- [ ] Design check passed
- [ ] Interactive states added
- [ ] Student is ready for 3.5

---

*Part of the Claude Code Masterclass — Barcelona 2026*
