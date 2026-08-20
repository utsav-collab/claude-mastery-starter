# Lesson 1.6: Epic → Feature → Ticket

Now let's learn the structure that professional teams use to break down work.

This is how companies like Google, Stripe, and Airbnb organize their development. And it's exactly what we'll use with our AI team.

STOP: Ready to learn how the pros break down work?

USER: Yes

---

## The Problem with Vague Requests

**Bad:** "Build me a recipe app"

What does that even mean?
- User accounts?
- Recipe saving?
- Search?
- Categories?
- Comments?
- Ratings?
- Sharing?

The AI doesn't know. YOU don't know. So you get... something random.

STOP: Vague input = vague output. That's why we need structure.

USER: Makes sense

---

## The Three Levels 📊

| Level | What It Is | Size | Example |
|-------|------------|------|---------|
| **Epic** | The big goal | Weeks/months | "User Authentication System" |
| **Feature** | A chunk of that goal | Days | "Login page" |
| **Ticket** | One specific task | Hours | "Create email input with validation" |

Think of it like:
- **Epic** = A book
- **Feature** = A chapter
- **Ticket** = A page

STOP: Epic > Feature > Ticket. Big to small.

USER: Got it

---

## Level 1: Epics 📘

**An Epic is a BIG goal.** It's what you'd put on a roadmap.

**Examples of Epics:**
- "User Authentication" (everything around login)
- "Product Catalog" (displaying, searching products)
- "Shopping Cart" (cart functionality)
- "Payment System" (checkout, payments)
- "Admin Dashboard" (backend management)

**How to create Epics:**

Ask yourself: "What are the 4-6 major parts of my app?"

Each Epic should:
- Have a clear goal
- Be able to stand alone
- Be too big for one agent (that's why we break it down!)

STOP: Epics are chapters of your app. What are yours?

USER: Thinking about it

---

## Level 2: Features 📄

**A Feature is one chunk of an Epic.** It's what a team might work on for a sprint.

**Example: Epic "User Authentication"**

Features:
1. Registration page
2. Login page
3. Forgot password flow
4. Email verification
5. Profile settings

Each Feature is:
- Specific enough to build
- Has a clear user story
- Estimated: 1-4 hours of work

STOP: Features are sections within a chapter. More specific than Epic.

USER: Got it

---

## Level 3: Tickets 🎫

**A Ticket is ONE specific task.** This is what an agent actually works on.

**Example: Feature "Login page"**

Tickets:
1. Create login form component
2. Add email input with validation
3. Add password input with show/hide
4. Create "Forgot password" link
5. Add "Remember me" checkbox
6. Connect to authentication API
7. Handle error states
8. Add loading state
9. Redirect on success

Each Ticket is:
- Completable in 10-30 minutes
- Crystal clear — no ambiguity
- Has acceptance criteria

STOP: Tickets are single tasks. Clear, specific, actionable.

USER: Very specific

---

## The Power of Acceptance Criteria

Every ticket needs **Acceptance Criteria** — how do we know it's done?

**Bad Ticket:**
> "Add login functionality"

**Good Ticket:**
> **Ticket:** Create login form component
>
> **Acceptance Criteria:**
> - [ ] Email input with validation (format check)
> - [ ] Password input with show/hide toggle
> - [ ] Submit button with loading state
> - [ ] Error messages display below inputs
> - [ ] Follows DLS styling
> - [ ] Responsive on mobile

STOP: Acceptance criteria = checklist for done. No ambiguity!

USER: That's so much clearer

---

## Let Agents Create Your Tickets! 🤖

Here's the magic: **You don't write tickets yourself!**

Ask an agent:

```
I want to build user authentication.
Break this into Features and Tickets.
For each Ticket, include acceptance criteria.
```

The agent creates the tickets. You review and adjust.

STOP: AI writes the plan. You approve the plan. AI executes the plan.

USER: So I'm really just directing

---

## Enriching Tickets with Specialists

For important tickets, have multiple agents review:

### 1. Product Owner Agent
```
You are a Product Owner. Enrich this ticket:
[ticket description]

Add:
- User story (As a [user] I want [action] so that [goal])
- Acceptance criteria
- Edge cases
- Priority (must-have, should-have, nice-to-have)
```

### 2. Backend Agent
```
You are a Backend Developer. Review this ticket:
[ticket + PO enrichment]

Add:
- Database models needed
- API endpoints
- Security considerations
```

### 3. Frontend Agent
```
You are a Frontend Developer. Review this ticket:
[ticket + previous enrichments]

Add:
- UI components needed
- States (loading, error, success)
- Responsive considerations
```

### 4. Creative Agent
```
You are a Creative Director. Review this ticket:
[ticket + all enrichments]

Add:
- What makes this NOT look AI-generated?
- Micro-interactions
- Polish details
```

STOP: Each specialist adds their perspective. The ticket becomes bulletproof!

USER: That's smart teamwork

---

## Full Example

**Epic:** Recipe Sharing App

**Feature:** User Registration

**Tickets:**
1. Create registration form UI
2. Add email validation
3. Add password strength indicator
4. Connect to Supabase auth
5. Send verification email
6. Create welcome screen
7. Add error handling
8. Mobile responsive adjustments

**Each Ticket has:**
- Clear scope
- Acceptance criteria
- Technical notes from agents

STOP: From vague "recipe app" to crystal clear tickets. See the power?

USER: Massive difference

---

## Quick Reference

```
┌─────────────────────────────────────────────────┐
│  📊 THE BREAKDOWN STRUCTURE                     │
│                                                 │
│  EPIC        → The big goal (weeks)             │
│    └─ FEATURE   → A chunk (days)                │
│         └─ TICKET   → One task (hours)          │
│                                                 │
│  GOOD TICKET HAS:                               │
│  ✅ Clear description                           │
│  ✅ Acceptance criteria                         │
│  ✅ Technical notes                             │
│  ✅ Estimated time                              │
│  ✅ Dependencies noted                          │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Module 1.6 Complete! 🎉

**You now understand:**
- ✅ Epic (big goal) → Feature (chunk) → Ticket (task)
- ✅ Why vague requests fail
- ✅ What makes a good ticket
- ✅ Acceptance criteria = done checklist
- ✅ Using agents to create and enrich tickets

**Key insight:**
> "Vague input = vague output. Specific tickets = specific results. Break everything down until it's crystal clear."

---

**Next Step:** Type `/start-1-7` to learn about CLAUDE.md and project memory!

---

## Notes for Claude (Hidden from Student)

**Teaching style:**
- Use concrete examples
- Show progression from vague to specific
- Emphasize agents helping write tickets

**Success criteria:**
- [ ] Student understands Epic > Feature > Ticket
- [ ] Student knows what makes good tickets
- [ ] Student sees how agents help with planning
- [ ] Student ready for 1.7

---

*Part of the Claude Code Masterclass — Barcelona 2026*
