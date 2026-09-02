# Features: PantryPlan

> Breakdown by @product-owner from EPIC.md

## 🎯 MVP Feature (Build First!)

### Feature 2: Smart Weekly Meal Planner

**What it does:** Generate personalized weekly meal plans based on dietary preferences and available recipes. Users get a complete 7-day meal calendar they can browse and customize.

**User Story:**
As Maya, a busy home cook, I want to generate a weekly meal plan in seconds, so that I can stop wasting time manually picking recipes and instead focus on shopping and cooking.

**Why MVP:** This is the visible, tangible result. When a user sees a full week of meals appear instantly, they'll know the app works. It's the "wow moment" — the thing that makes them tell a friend about PantryPlan.

**Acceptance Criteria:**
- [ ] User can set dietary preferences (vegetarian, allergies, dislikes)
- [ ] App generates 7 unique meals from recipe database
- [ ] Meal plan respects all dietary constraints
- [ ] User can view full week at a glance
- [ ] Plan generates in under 2 seconds

---

## 🔴 P0 — Core Features (Must Have)

### Feature 1: Pantry Inventory Management
- **Description:** Users add items to their pantry, see what they have, and pantry automatically depletes as meals are marked as cooked
- **User Story:** As Maya, I want to maintain an accurate list of what's in my kitchen, so that the app can generate grocery lists I actually need
- **Acceptance Criteria:**
  - [ ] User can add items to pantry with quantity
  - [ ] User can edit/delete pantry items
  - [ ] Pantry persists across sessions
  - [ ] Items deplete when meals are marked as cooked

### Feature 3: Intelligent Grocery List Generator
- **Description:** Auto-generate shopping lists that account for ingredients already in pantry, eliminating duplicates and missing items
- **User Story:** As Maya, I want a grocery list that only includes what I actually need to buy, so that I stop wasting money on duplicates or forgetting things
- **Acceptance Criteria:**
  - [ ] App analyzes meal plan + pantry state
  - [ ] Generated list excludes items already in pantry
  - [ ] List is organized by grocery store section
  - [ ] User can export or print list
  - [ ] User can manually add/remove items from list

---

## 🟡 P1 — Important Features

### Feature 4: Single Meal Editor
- **Description:** Users can swap, reschedule, or replace any single meal without regenerating the entire week's plan
- **User Story:** As Maya, I want to swap Monday's pasta for something lighter without rebuilding my whole week, so that I maintain flexibility without losing the rest of my plan
- **Acceptance Criteria:**
  - [ ] User can click any day and pick a different meal
  - [ ] Grocery list automatically recalculates
  - [ ] Changes don't affect other days
  - [ ] User can undo recent changes

### Feature 5: Meal Completion Tracker
- **Description:** Users mark meals as "cooked" to update pantry inventory in real-time, keeping the system accurate for future plans
- **User Story:** As Maya, I want to check off meals as I cook them, so that the app knows what I've used and can generate accurate grocery lists for next week
- **Acceptance Criteria:**
  - [ ] User can mark meal as "cooked" from week view
  - [ ] Ingredients automatically deplete from pantry
  - [ ] Completed meals show with visual indicator
  - [ ] History of cooked meals is saved

### Feature 6: Dietary Preferences Setup
- **Description:** Users configure dietary restrictions, allergies, and food dislikes once, and all meal generation respects these constraints
- **User Story:** As Maya, I want to tell the app once about my vegetarian preference and nut allergy, so that I never have to worry about incompatible meals appearing in my plan
- **Acceptance Criteria:**
  - [ ] User can set dietary restrictions (vegetarian, vegan, keto, etc.)
  - [ ] User can add allergies
  - [ ] User can add food dislikes
  - [ ] Preferences persist across sessions
  - [ ] All meal generation respects constraints

---

## Workshop Focus

**Today we build:** Feature 2 — Smart Weekly Meal Planner (MVP)

**After workshop:** Features 1, 3 (P0 core), then Features 4, 5, 6 (P1 improvements)

---
*Features defined by @product-owner agent*
