export type DietTag =
  | 'vegetarian'
  | 'vegan'
  | 'gluten-free'
  | 'dairy-free'
  | 'nut-free'
  | 'pescatarian'

export type IngredientCategory =
  | 'produce'
  | 'protein'
  | 'dairy'
  | 'pantry'
  | 'other'

export interface Ingredient {
  name: string
  quantity: number
  unit: string
  category: IngredientCategory
}

export interface Recipe {
  id: string
  name: string
  tags: DietTag[]
  prepTimeMinutes: number
  ingredients: Ingredient[]
  instructions: string[]
}

export interface DietaryProfile {
  householdSize: number
  dietTags: DietTag[]
  excludedIngredients: string[]
}

export interface MealPlanDay {
  dayIndex: number
  recipeId: string
}

export interface MealPlan {
  id: string
  createdAt: string
  days: MealPlanDay[]
  /** True when the recipe pool had fewer than 7 matching recipes and repeats were required. */
  hasRepeats: boolean
}

export interface PantryItem {
  name: string
  quantity: number
  unit: string
}

export interface GroceryListItem {
  name: string
  quantity: number
  unit: string
  category: IngredientCategory
}
