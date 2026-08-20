# Lesson 2.3: Break Into Features

Your Epic defines the WHAT. Now we break it into HOW.

Features are the building blocks — each one a deliverable piece of your app.

STOP: Ready to slice your Epic into manageable pieces?

USER: Yes

---

## Why Features Matter

An Epic is too big to build at once. It's like saying "build a house."

Features are the rooms:
- Living room (Dashboard)
- Kitchen (Core functionality)
- Bathroom (User settings)
- Bedroom (Nice-to-haves)

You build one room at a time. When all rooms are done, you have a house.

STOP: Pizza slices, rooms in a house — Features are manageable chunks. Got it?

USER: Yes

---

## The Product Owner Continues

@product-owner isn't done yet. Let's have them break down your Epic.

ACTION: Read EPIC.md and suggest 4-6 features based on the vision and research.

```
🎯 PRODUCT OWNER: FEATURE BREAKDOWN

Based on your Epic, here are the features I recommend:

📦 FEATURE 1: [Core Feature Name]
   → [One sentence: what it does]
   → Priority: P0 (Must have)

📦 FEATURE 2: [Second Feature Name]
   → [One sentence: what it does]
   → Priority: P0 (Must have)

📦 FEATURE 3: [Third Feature Name]
   → [One sentence: what it does]
   → Priority: P1 (Important)

📦 FEATURE 4: [Fourth Feature Name]
   → [One sentence: what it does]
   → Priority: P1 (Important)

📦 FEATURE 5: [Fifth Feature Name]
   → [One sentence: what it does]
   → Priority: P2 (Nice to have)
```

STOP: Review these features. Want to add, remove, or change any?

USER: Responds with feedback

ACTION: Adjust features based on feedback.

---

## Pick Your MVP Feature 🎯

Here's the crucial question:

> **Which ONE feature would give you the biggest dopamine hit if it worked by end of day?**

Not the most complex. Not the most "important."

The one that would make you go "YES! It actually works!"

STOP: Look at your features. Which one excites you most?

USER: Picks their MVP feature

---

## Creating the Features Document

Let me document your features with clear priorities.

ACTION: Create FEATURES.md:

```markdown
# Features: [App Name]

> Breakdown by @product-owner from EPIC.md

## 🎯 MVP Feature (Build First!)

### Feature [N]: [Name]

**What it does:** [Description]

**User Story:**
As a [user type], I want to [action], so that [benefit].

**Why MVP:** [Why this is the dopamine hit feature]

**Acceptance Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

---

## 🔴 P0 — Core Features

### Feature 1: [Name]
- **Description:** [What it does]
- **User Story:** As a [user], I want [action], so that [benefit]
- **Status:** [ ] Not started

### Feature 2: [Name]
- **Description:** [What it does]
- **User Story:** As a [user], I want [action], so that [benefit]
- **Status:** [ ] Not started

---

## 🟡 P1 — Important Features

### Feature 3: [Name]
- **Description:** [What it does]
- **User Story:** As a [user], I want [action], so that [benefit]
- **Status:** [ ] Not started

---

## 🟢 P2 — Nice to Have

### Feature 4: [Name]
- **Description:** [What it does]
- **User Story:** As a [user], I want [action], so that [benefit]
- **Status:** [ ] Not started

---

## Workshop Focus

**Today we build:** Feature [N] — [MVP Name]

**After workshop:** P0 features, then P1

---
*Features defined by @product-owner agent*
```

STOP: I've created FEATURES.md. Your MVP is highlighted at the top!

USER: Looks good

---

## The Feature Framework

Each feature has:

| Element | Purpose | Example |
|---------|---------|---------|
| **Name** | Quick reference | "User Dashboard" |
| **Description** | What it does | "Shows all items at a glance" |
| **User Story** | Why it matters | "As a user, I want..." |
| **Acceptance Criteria** | How we know it's done | Checkboxes |
| **Priority** | When to build | P0, P1, P2 |

STOP: This structure keeps everyone aligned. Make sense?

USER: Yes

---

## Module 2.3 Complete! 🎉

**You've accomplished:**
- ✅ Broke Epic into 4-6 features
- ✅ Assigned priorities (P0/P1/P2)
- ✅ Picked your MVP feature
- ✅ Created user stories for each
- ✅ Documented in FEATURES.md

**Your project now has:**
```
project/
├── RESEARCH.md    ← Market intelligence
├── EPIC.md        ← Product vision
├── FEATURES.md    ← Feature breakdown + MVP
└── ...
```

**Key insight:**
> "Pick ONE feature for maximum dopamine. Ship it. Then add more."

---

**Next Step:** Type `/start-2-4` to have specialists enrich your features!

---

## 💬 Example Prompts for Students

Here are best-practice prompts for breaking your Epic into features:

### 🎯 The Complete Feature Breakdown Prompt

```
Act like @product-owner — a Senior Product Manager skilled at breaking
large initiatives into shippable increments.

Read my EPIC.md which contains my product vision and success criteria.

Your task is to break this Epic into features. Work step by step:

**Step 1: Feature Identification**
Identify 4-6 distinct features that together deliver the Epic.
Each feature should be:
- Independently valuable (delivers user benefit on its own)
- Testable (clear way to verify it works)
- Sized for 2-4 hours of work maximum

**Step 2: Prioritization**
Assign each feature a priority:
- P0 (Must have): Without this, the product is useless
- P1 (Important): Significantly improves the experience
- P2 (Nice to have): Polish, can wait for V2

**Step 3: User Stories**
For each feature, write a user story:
"As a [specific user], I want to [action], so that [concrete benefit]"

**Step 4: MVP Selection**
Ask me: "Which ONE feature would give you the biggest dopamine hit
if it worked by the end of today?"

This becomes my MVP — the first thing I build.

**Step 5: Deliverable**
Create FEATURES.md with:
- MVP feature highlighted at the top with full details
- Remaining features organized by priority
- User stories for each
- Acceptance criteria checkboxes

Be ruthless about scope. Fewer features = faster shipping.
```

### 🎲 The Dopamine Question

```
Act like a product coach helping me pick my MVP.

Here are my potential features:
[List your features]

For each one, evaluate:
1. How visible is the result? (Can I SEE it working?)
2. How quickly can I build it? (Hours, not days)
3. How satisfying is completion? (Dopamine factor 1-10)

Then ask me: "Which one would make you literally say 'YES!'
out loud if it worked by tonight?"

That's my MVP. Help me commit to it.
```

### 📝 User Story Workshop

```
Act like a Product Owner running a user story writing workshop.

For each feature in my FEATURES.md, help me write better user stories.

A good user story:
- Specifies the exact user (not "user" but "busy professional")
- Describes observable action (not internal state)
- Explains concrete benefit (not vague improvement)

Bad: "As a user, I want a dashboard, so that I'm informed"
Good: "As a freelancer managing 5+ clients, I want to see
      all unpaid invoices at a glance, so that I can follow up
      before they're 30 days overdue"

Review my features and upgrade each user story to be specific
and testable.
```

### ⚖️ Priority Check

```
Act like a skeptical CTO reviewing my feature priorities.

Look at my features in FEATURES.md and challenge my priorities:

1. Is anything marked P0 that's actually P1?
   (Does the product TRULY fail without it?)

2. Is anything marked P1 that should be P0?
   (Am I under-prioritizing something critical?)

3. Should any P2 just be deleted entirely?
   (Is it adding complexity without clear value?)

Be harsh. Every P0 feature delays my launch.
I should have 2-3 P0 features maximum, not 5.
```

### 🔪 Scope Knife

```
Act like a startup advisor who's seen too many projects fail
from scope creep.

Review my EPIC.md and FEATURES.md. Then:

1. What features can I CUT without losing core value?
2. What features are "nice to have" disguised as "must have"?
3. What's the MINIMUM I could launch with to test my hypothesis?

Remember: A shipped MVP beats a perfect product that never launches.
Cut ruthlessly. I can always add features later.
```

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Read EPIC.md before suggesting features
- Suggest 4-6 features with clear priorities
- Help them pick the MVP (dopamine hit question)
- Create FEATURES.md with full structure

**Teaching style:**
- Continue as Product Owner
- Make MVP selection feel important
- Keep P0 tight (2-3 features max)
- Emphasize user stories

**Success criteria:**
- [ ] 4-6 features defined
- [ ] MVP feature selected
- [ ] Priorities assigned
- [ ] FEATURES.md created
- [ ] Student is excited about MVP
- [ ] Student ready for specialist enrichment

---

*Part of the Claude Code Masterclass — Barcelona 2026*
