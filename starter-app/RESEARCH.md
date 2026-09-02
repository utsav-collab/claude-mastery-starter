# Market Research: Meal Planning App

## Competitors Found

| Competitor | Key Features | Weakness |
|------------|--------------|----------|
| Mealime | Free tier, quick <30-min recipes, auto grocery list | No AI, no recipe import, variety plateaus after a few weeks |
| Paprika | One-time purchase ($4.99), great recipe clipper, offline | Fully manual — no AI planning, no automatic meal plans |
| Plan to Eat | Shared household calendar, drag-and-drop, recipe import | No AI suggestions, no pantry awareness |
| PlateJoy | 50+ data point AI personalization, Instacart sync | $99/year, no free tier, shut down mid-2025 per some sources — signals fragile unit economics for premium-only AI planners |
| eMeals | Store-tuned lists (Walmart/Kroger/Instacart), niche diet templates | Manual curation, no AI, no pantry logic |
| Eat This Much | Precise macro/calorie targeting | Built for solo users only — no family/household support |
| Ollie | Family-friendly swaps, pantry photo upload | Re-prompts for pantry every week instead of maintaining it |
| Samsung Food (Whisk) | Large recipe library, community recipes | Immediate upsell prompts, plans ignore stated dietary prefs, only one store per list |
| AnyList | Best-in-class shared/live grocery list | Meal planning itself is minimal — it's really a list app |

## User Pain Points (From App Store Reviews, GitHub Issues, and Product Forums)

1. **Shopping lists don't match the plan** — Multiple reviews describe generated grocery lists missing ingredients or duplicating others with "no obvious pattern," forcing manual double-checking every week.
2. **Dietary restrictions/allergies get silently ignored** — Users with allergies (egg, nut) report the app still suggesting incompatible recipes, or preferences resetting after being set.
3. **Rigid, un-editable plans** — Rescheduling a single meal is described as "tedious," and some apps force regenerating the *entire* week just to fix one bad dinner.
4. **No pantry awareness that persists** — Several apps only ask about pantry contents once (onboarding) instead of tracking it as a living inventory, so the grocery list stops reflecting what's actually left at home.
5. **Recipe variety plateaus / repetition** — Users report the same style of recipe (e.g. "a lot of tray bakes") being suggested repeatedly across weeks once the novelty period ends.
6. **Recipes assume unrealistic time/effort** — "30-minute" recipes that assume pre-chopped, prepped ingredients; real weeknights don't match the plan's assumptions.
7. **Subscription/billing frustration** — A recurring, sharp complaint across reviews: opaque cancellation windows, being charged for a full year after a short trial, and unhelpful refund policies.
8. **No family/multi-person support** — Popular macro-focused tools (Eat This Much, Prospre) are explicitly single-user only, forcing separate plans per household member.
9. **Poor onboarding** — Long preference surveys before any value is shown; some users "bounce" before ever seeing a generated plan.

## Market Gaps Identified

- **Persistent, living pantry tracking**: most apps treat pantry input as a one-time quiz rather than an inventory that decrements as you cook — a clear, repeatedly-cited gap.
- **Granular editing**: very few apps let you swap a single meal without regenerating (or manually rebuilding) the whole week.
- **Household-aware planning that isn't all-or-nothing**: most tools are either single-user (macro apps) or single-shared-plan (family apps) — mixing different dietary needs within one household plan is rare.
- **Trustworthy, accurate shopping lists**: list-generation bugs and mismatches are one of the most consistently repeated complaints across otherwise well-reviewed apps.
- **Fair, transparent pricing**: billing/refund complaints appear across nearly every paid app in this research, suggesting real user goodwill available for a tool with clear, low-friction pricing.

## Opportunity

There's an opportunity to build a meal planning app focused on **a persistent pantry that actually updates as you cook, single-meal-level editing (no full-week regeneration), and a shopping list that's demonstrably accurate** — directly targeting the three most-repeated frustrations found in this research, while keeping onboarding and pricing simple and transparent.

---
*Research conducted by Claude Code, Module 2 exercise*
