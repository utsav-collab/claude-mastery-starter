import { GroceryListItem, MealPlan, PantryItem, Recipe } from './types'

function ingredientKey(name: string, unit: string): string {
  return `${name.toLowerCase()}::${unit.toLowerCase()}`
}

/**
 * Builds a consolidated, categorized grocery list for a meal plan.
 *
 * Ingredients across all recipes in the plan are merged by name+unit
 * (summing quantities), then reduced by whatever quantity is already
 * available in the pantry. Items fully covered by the pantry are omitted.
 */
export function buildGroceryList(
  plan: MealPlan,
  recipes: Recipe[],
  pantry: PantryItem[]
): GroceryListItem[] {
  const recipeById = new Map(recipes.map((recipe) => [recipe.id, recipe]))
  const merged = new Map<string, GroceryListItem>()

  for (const day of plan.days) {
    const recipe = recipeById.get(day.recipeId)
    if (!recipe) continue

    for (const ingredient of recipe.ingredients) {
      const key = ingredientKey(ingredient.name, ingredient.unit)
      const existing = merged.get(key)
      if (existing) {
        existing.quantity += ingredient.quantity
      } else {
        merged.set(key, {
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          category: ingredient.category,
        })
      }
    }
  }

  const pantryByKey = new Map(
    pantry.map((item) => [ingredientKey(item.name, item.unit), item.quantity])
  )

  const result: GroceryListItem[] = []
  for (const item of merged.values()) {
    const key = ingredientKey(item.name, item.unit)
    const pantryQuantity = pantryByKey.get(key) ?? 0
    const remaining = item.quantity - pantryQuantity
    if (remaining > 0) {
      result.push({ ...item, quantity: remaining })
    }
  }

  return result.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
}
