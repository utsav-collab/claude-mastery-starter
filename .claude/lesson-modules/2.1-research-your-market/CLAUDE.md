# Lesson 2.1: Research Your Market

Welcome to Module 2! 🚀

Before we define WHAT to build, let's do something most people skip: **RESEARCH**.

Remember the tentacles from Lesson 1.3? Now we put them to work.

STOP: Ready to let Claude Code do market research FOR you?

USER: Yes / Let's research

---

## Why Research First?

Most people jump straight to building. Then they discover:

- Someone already built it (better)
- Users hate a feature they thought was essential
- The real problem is different than they assumed

**10 minutes of research saves 10 hours of building the wrong thing.**

STOP: Ever built something only to realize nobody wanted it?

USER: Yes / I've done that

---

## What Claude Code Can Research 🔍

Remember the tentacles? Here's what we can discover:

| Research Type | What We Learn | How Claude Does It |
|--------------|---------------|-------------------|
| **Competitor Analysis** | What exists? What's missing? | Scrape competitor websites |
| **User Pain Points** | What frustrates people? | Search Reddit, forums |
| **Feature Ideas** | What do users wish existed? | Analyze reviews, complaints |
| **Pricing Research** | What do people pay? | Check competitor pricing |
| **Design Inspiration** | What looks good? | Scrape Dribbble, Awwwards |

STOP: I can do ALL of this automatically. You just tell me your idea.

USER: That's powerful

---

## Let's Research YOUR Idea

Tell me your app idea in one sentence. Don't worry about details — just the general concept.

Examples:
- "A habit tracker app"
- "An invoice tool for freelancers"
- "A meal planning app"

STOP: What's your app idea? One sentence is enough.

USER: Shares their idea

---

## Research Phase 1: Competitor Analysis 🏢

Let me find out what already exists in this space.

ACTION: Use web search/BrowserMCP to find 3-5 competitors for their app idea. Create a summary:
- Competitor names and URLs
- Key features they offer
- What users complain about (from reviews)
- Pricing if available

```
🔍 RESEARCHING COMPETITORS...

I'm searching for existing [app type] solutions to see:
- What features are table stakes
- What gaps exist in the market
- What users love/hate about current options
```

STOP: Let me do some research. This takes about 2 minutes...

USER: Waiting

ACTION: Present findings in a clear table format.

---

## Research Phase 2: User Pain Points 😤

Now let's find out what REAL users complain about.

ACTION: Search Reddit, ProductHunt, or forums for complaints about existing solutions in this space.

```
🔍 SEARCHING REDDIT & FORUMS...

Looking for:
- r/[relevant subreddit] complaints
- ProductHunt reviews
- App store reviews
- Forum discussions
```

STOP: Finding real user frustrations...

USER: Waiting

ACTION: Present the top 5-10 pain points users mention.

---

## Your Research Summary

Let me compile everything into a research document.

ACTION: Create RESEARCH.md with:
```markdown
# Market Research: [App Idea]

## Competitors Found

| Competitor | URL | Key Features | Weakness |
|------------|-----|--------------|----------|
| [Name 1] | [url] | [features] | [weakness] |
| [Name 2] | [url] | [features] | [weakness] |
| [Name 3] | [url] | [features] | [weakness] |

## User Pain Points (From Reddit/Forums)

1. **[Pain point 1]** - [Quote or summary]
2. **[Pain point 2]** - [Quote or summary]
3. **[Pain point 3]** - [Quote or summary]

## Market Gaps Identified

- [Gap 1]: Competitors don't do X well
- [Gap 2]: Users want Y but nobody offers it
- [Gap 3]: Pricing is too high for Z

## Opportunity

Based on this research, there's an opportunity to build:
[One sentence opportunity statement]

---
*Research conducted by Claude Code on [date]*
```

STOP: I've created RESEARCH.md with everything I found. Take a look!

USER: Reviews the research

---

## Insights From Your Research

Based on what I found, here are the key insights:

ACTION: Summarize 3-5 key insights from the research:
1. What competitors do well (don't reinvent)
2. What competitors do poorly (your opportunity)
3. What users desperately want (your focus)
4. What you should probably skip (already solved)

STOP: These insights will guide your Epic. Does anything surprise you?

USER: Responds to insights

---

## The Power of Research-First

Look what we just accomplished:

| Without Research | With Research |
|-----------------|---------------|
| "I'll build a habit tracker" | "I'll build a habit tracker focused on [specific gap]" |
| Guess at features | Features based on real complaints |
| Hope people want it | Know people want it (they're complaining!) |
| Compete on everything | Compete on your unique angle |

STOP: You now know MORE than most founders do before they start building!

USER: This is valuable

---

## Module 2.1 Complete! 🎉

**You've accomplished:**
- ✅ Competitor analysis (who's in the space)
- ✅ User pain point discovery (what people hate)
- ✅ Market gap identification (your opportunity)
- ✅ Research document created

**Your project now has:**
```
project/
├── RESEARCH.md    ← Market intelligence!
└── ...
```

**Key insight:**
> "Research isn't optional. It's how you build something people actually want."

---

**Next Step:** Type `/start-2-2` to have the Product Owner agent create your Epic!

---

## 💬 Example Prompts for Students

Here are best-practice prompts you can use to research your market:

### 🎯 The Complete Market Research Prompt

```
Act like a senior market research analyst with 10 years of experience
in competitive analysis and user research.

I want to build a [habit tracker / invoice tool / meal planner] app.

Your task is to conduct comprehensive market research. Please work
step by step:

**Step 1: Competitor Analysis**
- Find 5-7 existing solutions in this space
- For each competitor, identify: name, URL, key features, pricing
- Note what users praise in reviews
- Note what users complain about

**Step 2: User Pain Points**
- Search Reddit (r/productivity, r/apps, etc.) for complaints
- Look for patterns in what frustrates users
- Find direct quotes that show emotional pain points
- Identify the top 5 most common frustrations

**Step 3: Market Gaps**
- Based on competitor weaknesses and user complaints
- What do users want that nobody offers well?
- What's overpriced in this market?
- Where is the opportunity?

**Step 4: Deliverable**
Create RESEARCH.md with:
- Competitor comparison table
- Top user pain points with evidence
- Market gaps identified
- One-sentence opportunity statement

Be thorough. This research will guide my entire product strategy.
```

### 🔍 Quick Competitor Scan

```
Act like a competitive intelligence analyst.

Find the top 5 competitors to [my app idea]. For each one:
1. Name and URL
2. Their main value proposition (one sentence)
3. Pricing model
4. Biggest weakness based on user reviews

Present as a comparison table, then tell me which gap I should target.
```

### 😤 User Pain Point Deep Dive

```
Act like a user researcher who specializes in finding unmet needs.

Search Reddit, ProductHunt, and app store reviews for people
complaining about [existing solutions to my problem].

Find me:
- The 5 most emotional complaints (with quotes)
- Recurring themes across multiple sources
- What users say they wish existed
- Any "I would pay for X" statements

Format as a pain point report with direct evidence.
```

### 📊 Gap Analysis

```
Act like a product strategist identifying market opportunities.

Given this context about the [app type] market:
- Competitors: [list them]
- User complaints: [list main ones]

Analyze step by step:
1. What do ALL competitors do poorly?
2. What do users consistently ask for?
3. Where is the pricing gap?
4. What's my differentiation opportunity?

Be specific. I need actionable insights, not generic advice.
```

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Use web search to find competitors
- Search Reddit/forums for pain points
- Create RESEARCH.md with findings
- Summarize insights clearly

**Teaching style:**
- Show the tentacles in action
- Make them feel like they have insider knowledge
- Connect research to building decisions

**Success criteria:**
- [ ] 3-5 competitors identified
- [ ] User pain points discovered
- [ ] RESEARCH.md created
- [ ] Student understands the market opportunity
- [ ] Student is ready for Product Owner to create Epic

**Research sources to try:**
- Google search: "[app type] alternatives"
- Reddit: "r/[relevant] [app type] frustrating"
- ProductHunt: Search for similar products
- G2/Capterra: If it's a SaaS tool

---

*Part of the Claude Code Masterclass — Barcelona 2026*
