# Lesson 2.2: Product Owner Creates Your Epic

Now that you have research, it's time to define your Epic.

But here's the twist: **You don't write it. The Product Owner agent does.**

STOP: Ready to meet your first AI specialist?

USER: Yes / Let's do it

---

## Meet @product-owner 🎯

Remember the agents from Lesson 1.4? Now you'll use one.

**@product-owner** is your AI Product Manager. They:

| What They Do | How It Helps You |
|--------------|------------------|
| Ask the right questions | You don't miss important details |
| Structure requirements | Professional format, not messy notes |
| Think about edge cases | Catches problems before you build |
| Write user stories | Clear acceptance criteria |
| Prioritize ruthlessly | Focus on what matters |

STOP: You're about to delegate to your first specialist. Exciting?

USER: Yes!

---

## How to Work with @product-owner

It's simple:

1. **Tell them your idea** (one sentence)
2. **Share your research** (the RESEARCH.md we created)
3. **Answer their questions** (they'll probe deeper)
4. **Approve the output** (or request changes)

Your job is to DESCRIBE and APPROVE. They do the structuring.

STOP: Ready to hand off to the Product Owner?

USER: Yes

---

## Engaging the Product Owner

Let me switch to Product Owner mode and help you define your Epic.

ACTION: Read RESEARCH.md first, then engage as a Product Owner agent:

```
🎯 PRODUCT OWNER MODE ACTIVATED

I've reviewed your market research. Now let me help you
define a focused Epic.

I'll ask you some questions to understand:
- WHO this is really for
- WHAT problem we're solving
- WHY this matters to users
- HOW we'll know it's successful
```

**Question 1: Based on the research, who is your PRIMARY user?**

Not "everyone" — one specific person. Give them a name if it helps.

Examples from your research:
- "Busy professionals who [pain point from research]"
- "Small business owners struggling with [competitor weakness]"

STOP: Who is this for? Be specific.

USER: Describes their user

---

**Question 2: What's the #1 problem we're solving?**

Look at your RESEARCH.md — which pain point are we attacking?

Pick ONE. The most painful one. The one people complained about most.

STOP: What's the core problem?

USER: Describes the problem

---

**Question 3: What does SUCCESS look like?**

When this is done and working, what can your user DO that they couldn't before?

Be concrete:
- ❌ "They'll be happier"
- ✅ "They can track all their habits in under 30 seconds"
- ✅ "They can see which invoices are unpaid at a glance"

STOP: What's the success outcome?

USER: Describes success

---

**Question 4: What are we NOT building (yet)?**

Based on competitor research, what features exist but we'll skip for V1?

This is crucial. Saying NO is how we ship fast.

STOP: What's out of scope for now?

USER: Lists exclusions

---

## Creating Your Epic Document

Perfect. Let me structure this as a professional Epic.

ACTION: Create EPIC.md with the Product Owner format:

```markdown
# Epic: [App Name]

> Created by @product-owner based on market research

## 🎯 Vision Statement

**For** [target user]
**Who** [has this problem]
**Our** [app name]
**Is a** [product category]
**That** [key benefit]
**Unlike** [competitors]
**We** [key differentiator from research]

## 👤 Target User

**Primary Persona:** [Name]
- **Who they are:** [Description]
- **Their biggest pain:** [From research]
- **What they've tried:** [Competitor solutions]
- **Why those failed:** [From research gaps]

## 🔥 Problem Statement

[Problem description based on research findings]

**Evidence from research:**
- [Pain point 1 from RESEARCH.md]
- [Pain point 2 from RESEARCH.md]
- [Pain point 3 from RESEARCH.md]

## ✅ Success Criteria

When this Epic is complete, users can:
1. [Success outcome 1]
2. [Success outcome 2]
3. [Success outcome 3]

## 🚫 Out of Scope (V1)

Based on market analysis, we're intentionally NOT building:
- [Exclusion 1] — Why: [reason]
- [Exclusion 2] — Why: [reason]
- [Exclusion 3] — Why: [reason]

## 📊 Competitive Advantage

Our differentiation based on research:
- Competitors do [X] poorly → We'll do [X] well
- Users complain about [Y] → We'll solve [Y]
- Gap in market for [Z] → We'll fill [Z]

---
*Epic defined by @product-owner agent*
*Based on market research from RESEARCH.md*
```

STOP: I've created your Epic. Review EPIC.md — does this capture your vision?

USER: Reviews and responds

ACTION: Make any adjustments they request.

---

## The Agent Difference

Notice what just happened:

| Manual Approach | Agent Approach |
|-----------------|----------------|
| You write from scratch | PO asks the right questions |
| Might miss details | Structured framework catches gaps |
| Generic format | Professional product format |
| Just your ideas | Ideas + research combined |

**You provided the vision. @product-owner provided the structure.**

STOP: See how the agent made this easier? That's the pattern for everything.

USER: Yes / Makes sense

---

## Module 2.2 Complete! 🎉

**You've accomplished:**
- ✅ Engaged your first specialist agent
- ✅ Answered Product Owner's questions
- ✅ Created a research-backed Epic
- ✅ Defined success criteria and scope

**Your project now has:**
```
project/
├── RESEARCH.md    ← Market intelligence
├── EPIC.md        ← Product vision (by @product-owner)
└── ...
```

**Key insight:**
> "You don't write specs. You describe what you want, and specialists structure it for you."

---

**Next Step:** Type `/start-2-3` to break your Epic into Features!

---

## 💬 Example Prompts for Students

Here are best-practice prompts you can use to work with @product-owner:

### 🎯 The Complete Epic Creation Prompt

```
Act like a Senior Product Owner with experience at top tech companies
(Airbnb, Stripe, Notion). You've shipped dozens of successful products.

I want to build: [one sentence description of your app idea]

I have completed market research in RESEARCH.md. Please read it first.

Your task is to help me create a professional Epic document.
Work with me step by step:

**Step 1: Discovery Questions**
Ask me these questions one at a time (wait for my answer before continuing):
1. WHO is my primary user? (specific persona, not "everyone")
2. What is the #1 PROBLEM they face? (reference the research pain points)
3. What does SUCCESS look like? (concrete, measurable outcome)
4. What are we explicitly NOT building in V1? (scope boundaries)

**Step 2: Epic Document**
After I've answered, create EPIC.md with:
- Vision statement (For/Who/Our/Is a/That/Unlike/We format)
- Target user persona with specific details
- Problem statement with evidence from RESEARCH.md
- Success criteria (3-5 concrete, testable outcomes)
- Out of scope items with reasoning
- Competitive advantage based on research gaps

**Step 3: Validation**
Ask me if anything feels wrong or missing.
Suggest improvements based on your PM experience.

Be opinionated. Push back if my ideas are too vague.
I want professional-grade output, not a rubber stamp.
```

### 🚀 Quick Epic from Research

```
Act like @product-owner — a Senior Product Manager.

Read my RESEARCH.md and create an Epic that:
1. Targets the #1 pain point users complained about
2. Differentiates from competitors' weaknesses
3. Has concrete success criteria I can actually measure

Ask me 4 questions to fill in gaps, then generate EPIC.md.
```

### 🔄 Epic Refinement

```
Act like a skeptical Product Owner reviewing my Epic.

Read EPIC.md and critique it step by step:
1. Is the target user specific enough to design for?
2. Are success criteria actually measurable?
3. Is the scope too ambitious for a V1?
4. Does it leverage the research findings?

For each issue, suggest a specific improvement.
Then update EPIC.md with the refined version.
```

### 🎭 Product Owner Interview Mode

```
Act like @product-owner conducting a product discovery session.

DON'T write the Epic yet. Instead, interview me like a PM would:
- Ask probing questions about my users
- Challenge assumptions I make
- Push for concrete examples
- Help me think through edge cases

After 5-6 questions, summarize what you learned and THEN
create the Epic based on our conversation.

Start with your first question.
```

### ❌ Scope Definition

```
Act like a Product Owner who's ruthless about scope.

I want to build EVERYTHING. That's a problem.

Review my EPIC.md and RESEARCH.md. Then help me:
1. Identify the ONE feature that proves the core value
2. List everything else as "V2 or later" with reasoning
3. Create a "What We're NOT Building" section

Remember: every feature added delays launch.
Be brutal. I need to ship, not dream.
```

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Read RESEARCH.md before asking questions
- Ask the 4 key questions conversationally
- Create EPIC.md with professional PO format
- Connect Epic to research findings
- Adjust based on feedback

**Teaching style:**
- Act AS the Product Owner agent
- Professional but friendly
- Reference their research throughout
- Make them feel like they have a real PM

**Success criteria:**
- [ ] Student answered all 4 questions
- [ ] EPIC.md created with full structure
- [ ] Epic references RESEARCH.md findings
- [ ] Success criteria are concrete
- [ ] Out of scope is defined
- [ ] Student understands agent delegation
- [ ] Student is ready for 2.3

---

*Part of the Claude Code Masterclass — Barcelona 2026*
