# Epic: PantryPlan

> Created by @product-owner based on market research (RESEARCH.md)

## 🎯 Vision Statement

**For** busy home cooks who plan most of their own weeknight dinners
**Who** waste money and time because their grocery list doesn't match what they actually need
**Our** app, PantryPlan,
**Is a** meal planning tool
**That** keeps a living pantry inventory and generates grocery lists you can actually trust
**Unlike** Mealime, Plan to Eat, and PlateJoy
**We** track your pantry as it depletes and let you edit one meal without blowing up the whole week's plan

## 👤 Target User

**Primary Persona:** Maya, 34
- **Who they are:** Cooks 4-5 dinners a week for herself and her partner, works full-time, plans meals on Sunday
- **Their biggest pain:** Her grocery list from her current app never quite matches her plan — she either forgets things or buys duplicates because the app doesn't know what's already in her fridge
- **What they've tried:** Mealime (free, but list gaps), Plan to Eat (better calendar, still no pantry logic)
- **Why those failed:** Both treat pantry input as a one-time setup step, not something that updates as she actually cooks

## 🔥 Problem Statement

Existing meal planning apps generate grocery lists that don't reflect what's already in the user's kitchen, and force a full weekly re-plan just to change one dinner — creating wasted trips, duplicate purchases, and frustration that erodes trust in the app.

**Evidence from research:**
- "Shopping lists don't match the plan" — the single most repeated complaint across app reviews (missing/duplicated ingredients)
- "No pantry awareness that persists" — most apps ask about pantry contents once at onboarding, never again
- "Rigid, un-editable plans" — rescheduling or swapping a single meal often forces regenerating the entire week

## ✅ Success Criteria

When this Epic is complete, users can:
1. Generate a personalized weekly meal plan that respects their dietary preferences
2. See a grocery list that's automatically adjusted for what's already in their pantry
3. Swap or edit any single meal in the week without regenerating the rest of the plan
4. Mark a meal as cooked and have the pantry inventory update accordingly

## 🚫 Out of Scope (V1)

Based on market analysis, we're intentionally NOT building:
- **Grocery store/Instacart integration** — Why: adds significant integration complexity; users can still use the exported list manually for V1
- **Macro/calorie tracking** — Why: Eat This Much and Prospre already own this niche well; diluting focus here weakens our core differentiator
- **Multi-person / mixed-dietary household plans** — Why: complex to get right (per research, only Melio attempts this); V1 targets a single dietary profile per household
- **Native mobile apps** — Why: ship a web app first to validate the core loop before investing in iOS/Android

## 📊 Competitive Advantage

Our differentiation based on research:
- Competitors treat pantry input as a one-time quiz → We maintain it as a living inventory that decrements as meals are cooked
- Users complain grocery lists don't match plans → We generate lists directly from confirmed pantry state, not just recipe ingredient lists
- Competitors force full-week regeneration for one bad meal → We support single-meal edits without disturbing the rest of the plan

---
*Epic defined by @product-owner agent*
*Based on market research from RESEARCH.md*
