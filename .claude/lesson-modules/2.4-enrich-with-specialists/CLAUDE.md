# Lesson 2.4: Enrich with Specialists

Your features are defined. Now let's make them BULLETPROOF.

We're going to have @frontend-lead and @backend-lead review and enrich your MVP feature.

STOP: Ready to see how specialists make features better?

USER: Yes

---

## Why Specialist Enrichment?

A Product Owner defines WHAT to build. But:

- **Frontend Lead** knows HOW to build the UI
- **Backend Lead** knows HOW to structure the data

When they review a feature, they catch things you'd miss:

| Specialist | What They Add |
|------------|---------------|
| @frontend-lead | UI states, responsive design, accessibility, animations |
| @backend-lead | Data models, API design, security, edge cases |

STOP: Two perspectives = better features. Let's enrich your MVP.

USER: Let's do it

---

## Step 1: Frontend Lead Review 🎨

Let me engage @frontend-lead to review your MVP feature.

ACTION: Read FEATURES.md, find the MVP, and review as Frontend Lead:

```
🎨 FRONTEND LEAD REVIEW

Reviewing: [MVP Feature Name]

I'm looking at this from a UI/UX perspective...

## UI Components Needed

Based on this feature, we'll need:
1. [Component 1] — [Purpose]
2. [Component 2] — [Purpose]
3. [Component 3] — [Purpose]

## States to Handle

Every UI element needs states:
- [ ] Loading state (while fetching data)
- [ ] Empty state (no data yet)
- [ ] Error state (something went wrong)
- [ ] Success state (action completed)

## Responsive Considerations

- Mobile (320px): [How it adapts]
- Tablet (768px): [How it adapts]
- Desktop (1024px+): [Full layout]

## Accessibility Notes

- [ ] Keyboard navigation
- [ ] Screen reader labels
- [ ] Color contrast (4.5:1 minimum)
- [ ] Focus indicators

## Micro-interactions

To make this feel premium:
- [Interaction 1]: [What happens]
- [Interaction 2]: [What happens]

## Questions for You

1. [Question about design preference]
2. [Question about behavior]
```

STOP: Review the Frontend Lead's enrichment. Any preferences or questions?

USER: Responds

ACTION: Update based on their input.

---

## Step 2: Backend Lead Review ⚙️

Now let's have @backend-lead review the same feature.

ACTION: Review the MVP feature as Backend Lead:

```
⚙️ BACKEND LEAD REVIEW

Reviewing: [MVP Feature Name]

I'm looking at this from a data/API perspective...

## Data Models Needed

Based on this feature, we need to store:

### [Model 1]
```typescript
interface [ModelName] {
  id: string;
  [field1]: [type];
  [field2]: [type];
  createdAt: Date;
  updatedAt: Date;
}
```

### [Model 2] (if needed)
```typescript
interface [ModelName] {
  id: string;
  [fields]
}
```

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/[resource] | Fetch all |
| GET | /api/[resource]/:id | Fetch one |
| POST | /api/[resource] | Create new |
| PATCH | /api/[resource]/:id | Update |
| DELETE | /api/[resource]/:id | Delete |

## Security Considerations

- [ ] Authentication required?
- [ ] Authorization (who can access what?)
- [ ] Input validation
- [ ] Rate limiting (if needed)

## Edge Cases

1. What if [edge case 1]?
2. What if [edge case 2]?
3. What if [edge case 3]?

## Database Choice

For this project, I recommend:
- **[Database]** because [reason]

## Questions for You

1. [Question about data requirements]
2. [Question about authentication]
```

STOP: Review the Backend Lead's enrichment. Any questions or decisions needed?

USER: Responds

ACTION: Update based on their input.

---

## The Enriched Feature

Now let's combine everything into an enriched feature spec.

ACTION: Update FEATURES.md with the enriched MVP:

```markdown
## 🎯 MVP Feature (ENRICHED)

### Feature [N]: [Name]

**What it does:** [Description]

**User Story:**
As a [user type], I want to [action], so that [benefit].

---

### Frontend Spec (@frontend-lead)

**Components:**
- [ ] [Component 1]
- [ ] [Component 2]
- [ ] [Component 3]

**States:**
- [ ] Loading state
- [ ] Empty state
- [ ] Error state
- [ ] Success state

**Responsive:** Mobile-first, adapts at 768px and 1024px

**Accessibility:** WCAG 2.1 AA compliant

---

### Backend Spec (@backend-lead)

**Data Model:**
```typescript
interface [Model] {
  // fields
}
```

**API Endpoints:**
- GET /api/[resource]
- POST /api/[resource]
- PATCH /api/[resource]/:id
- DELETE /api/[resource]/:id

**Security:** [Auth requirements]

---

### Acceptance Criteria

- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
- [ ] [Frontend state: criterion]
- [ ] [Backend edge case: criterion]

---
*Enriched by @frontend-lead and @backend-lead*
```

STOP: Your MVP feature is now bulletproof. Review the enriched spec!

USER: This is thorough

---

## The Power of Multiple Perspectives

Look what just happened:

| Single Perspective | Multiple Specialists |
|-------------------|---------------------|
| "Build a dashboard" | Components, states, responsive, accessible |
| "Store user data" | Models, APIs, security, edge cases |
| Miss edge cases | Edge cases documented |
| Start coding, hit problems | Problems solved before coding |

STOP: This is how professional teams work. Ready to continue?

USER: Yes!

---

## Module 2.4 Complete! 🎉

**You've accomplished:**
- ✅ Frontend Lead reviewed your MVP
- ✅ Backend Lead reviewed your MVP
- ✅ UI components identified
- ✅ Data models defined
- ✅ API endpoints planned
- ✅ Edge cases documented
- ✅ Feature is now bulletproof

**Your project now has:**
```
project/
├── RESEARCH.md    ← Market intelligence
├── EPIC.md        ← Product vision
├── FEATURES.md    ← Enriched features (specialists!)
└── ...
```

**Key insight:**
> "Two specialists reviewing one feature catches 10x more issues than one person alone."

---

**Next Step:** Type `/start-2-5` to set up your project foundation!

---

## 💬 Example Prompts for Students

Here are best-practice prompts for working with specialist agents:

### 🎯 The Complete Specialist Review Prompt

```
Act like TWO senior specialists reviewing my MVP feature:

**@frontend-lead**: You're a Senior Frontend Engineer with 8+ years
building React/Next.js applications. You've shipped apps used by
millions. You care deeply about UX, performance, and accessibility.

**@backend-lead**: You're a Senior Backend Engineer who's designed
systems at scale. You think about data models, API design, security,
and edge cases before writing code.

Read my MVP feature in FEATURES.md.

**@frontend-lead, review step by step:**

1. **Component Architecture**
   - What React components do I need?
   - How do they compose together?
   - What props does each component accept?

2. **UI States** (critical for polish)
   - Loading state: What does the user see while data loads?
   - Empty state: What if there's no data yet?
   - Error state: What if something fails?
   - Success state: How do we confirm actions worked?

3. **Responsive Design**
   - Mobile (320px): How does it adapt?
   - Tablet (768px): What changes?
   - Desktop (1024px+): Full experience

4. **Accessibility Checklist**
   - [ ] Keyboard navigation works
   - [ ] Screen reader labels present
   - [ ] Color contrast 4.5:1 minimum
   - [ ] Focus indicators visible

5. **Micro-interactions**
   - What animations make this feel premium?
   - Hover states, transitions, feedback

**@backend-lead, review step by step:**

1. **Data Model**
   ```typescript
   interface [ModelName] {
     // Define all fields with types
   }
   ```

2. **API Endpoints**
   | Method | Endpoint | Purpose | Auth Required? |
   |--------|----------|---------|----------------|

3. **Security Considerations**
   - Authentication: Who can access?
   - Authorization: What can each role do?
   - Input validation: What could go wrong?

4. **Edge Cases**
   - What if [edge case 1]?
   - What if [edge case 2]?
   - What if data is corrupted/missing?

5. **Database Recommendation**
   - Supabase vs Convex for this use case
   - Reasoning based on my specific needs

**Deliverable:**
Update FEATURES.md with an "Enriched Spec" section containing
both specialists' analysis. Include checkboxes for acceptance criteria.
```

### 🎨 Frontend Lead Deep Dive

```
Act like @frontend-lead — a Senior Frontend Engineer who's worked
at companies like Vercel, Linear, or Framer. You obsess over details.

Review my [feature name] and provide a complete UI specification.

Think step by step:

1. **Component Breakdown**
   List every component I need with:
   - Component name (PascalCase)
   - Purpose (one sentence)
   - Props it accepts
   - Children it contains

2. **State Management**
   - What local state does each component need?
   - Any global state required?
   - Where should data fetching happen?

3. **The Four UI States** (I want ALL of these)
   For the main component, describe:
   - Loading: Skeleton? Spinner? What exactly?
   - Empty: Illustration? Call-to-action? Copy?
   - Error: Message? Retry button? Fallback?
   - Success: Confirmation? Transition? What next?

4. **Responsive Behavior**
   - Mobile-first approach: What's the base?
   - Breakpoint changes: What shifts at 768px? 1024px?
   - Touch targets: Are buttons 44px minimum?

5. **Accessibility Audit**
   Check this feature against WCAG 2.1 AA.
   Flag any potential issues and how to fix them.

6. **Micro-interactions** (make it feel premium)
   - Button hover/active states
   - Form input focus states
   - Loading transitions
   - Success/error feedback animations

Output as a Frontend Spec I can hand to any developer.
```

### ⚙️ Backend Lead Deep Dive

```
Act like @backend-lead — a Senior Backend Engineer who's designed
systems handling millions of requests. You think about scale,
security, and maintainability.

Review my [feature name] and provide a complete backend specification.

Think step by step:

1. **Data Model Design**
   Define TypeScript interfaces for all entities:
   ```typescript
   interface Entity {
     id: string;
     // ... all fields with types
     createdAt: Date;
     updatedAt: Date;
   }
   ```
   Explain WHY each field exists.

2. **API Endpoint Design**
   For each endpoint:
   - Method & path (RESTful naming)
   - Request body schema
   - Response schema
   - Error responses
   - Rate limiting needs?

3. **Security Analysis**
   - Authentication: How do we verify identity?
   - Authorization: Row-level security? Role-based?
   - Input validation: What sanitization needed?
   - Common vulnerabilities: SQL injection? XSS? CSRF?

4. **Edge Case Handling**
   List 5-10 edge cases and how to handle each:
   - What if user submits empty data?
   - What if referenced item is deleted?
   - What if network fails mid-operation?
   - What if concurrent updates conflict?

5. **Database Choice**
   For my specific use case, recommend:
   - Supabase (Postgres + Auth + Realtime) OR
   - Convex (Reactive + TypeScript-first)

   Justify based on: my data patterns, auth needs, real-time requirements.

6. **Performance Considerations**
   - What queries might be slow?
   - What should be indexed?
   - Any caching needed?

Output as a Backend Spec with code examples.
```

### 🔄 Dual Specialist Review

```
I need @frontend-lead AND @backend-lead to review my MVP feature
as a team, coordinating their recommendations.

Read FEATURES.md and work together step by step:

1. @frontend-lead: What data do you need from the backend?
2. @backend-lead: Design the API to serve that data
3. @frontend-lead: Confirm the API shape works for your components
4. @backend-lead: Flag any frontend assumptions that complicate backend
5. Both: Agree on the contract between frontend and backend

Then each provide your full spec.
Update FEATURES.md with the coordinated enrichment.
```

### 🗄️ Database Decision

```
Act like @backend-lead making a critical infrastructure decision.

My app: [describe your app and its data needs]

Compare Supabase vs Convex for my specific use case:

| Factor | Supabase | Convex | My Need |
|--------|----------|--------|---------|
| Data Model | Relational (Postgres) | Document-based | ? |
| Real-time | Subscriptions | Reactive by default | ? |
| Auth | Built-in | External (Clerk) | ? |
| Type Safety | Generated types | Native TypeScript | ? |
| Learning Curve | SQL knowledge helps | JS-only, simpler | ? |

Based on my specific app requirements, recommend ONE and explain why.
Don't hedge — make a decision I can commit to.
```

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Review as Frontend Lead (UI perspective)
- Review as Backend Lead (data perspective)
- Update FEATURES.md with enriched spec
- Make sure edge cases are documented

**Teaching style:**
- Switch personas clearly (Frontend vs Backend)
- Ask clarifying questions as each specialist
- Show how specialists think differently
- Make the enrichment feel valuable

**Success criteria:**
- [ ] Frontend review completed
- [ ] Backend review completed
- [ ] Components identified
- [ ] Data models defined
- [ ] Edge cases documented
- [ ] FEATURES.md updated
- [ ] Student sees value of multi-perspective review
- [ ] Student ready for project setup

---

*Part of the Claude Code Masterclass — Barcelona 2026*
