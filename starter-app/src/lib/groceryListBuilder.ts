import { MealPlan, Recipe, GroceryListItem, PantryItem, IngredientCategory } from './types'

export function generateGroceryList(
  mealPlan: MealPlan,
  recipes: Recipe[],
  pantry: PantryItem[]
): GroceryListItem[] {
  // Create a map of pantry items by name for quick lookup
  const pantryMap = new Map<string, PantryItem>()
  pantry.forEach((item) => {
    pantryMap.set(item.name.toLowerCase(), item)
  })

  // Collect all ingredients from the meal plan
  const ingredientsNeeded = new Map<string, { quantity: number; unit: string; category: IngredientCategory }>()

  mealPlan.days.forEach((day) => {
    const recipe = recipes.find((r) => r.id === day.recipeId)
    if (!recipe) return

    recipe.ingredients.forEach((ingredient) => {
      const lowerName = ingredient.name.toLowerCase()
      
      // Check if we already have this ingredient in our list
      if (ingredientsNeeded.has(lowerName)) {
        const existing = ingredientsNeeded.get(lowerName)!
        existing.quantity += ingredient.quantity
      } else {
        ingredientsNeeded.set(lowerName, {
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          category: ingredient.category,
        })
      }
    })
  })

  // Filter out items that are already in the pantry
  const groceryItems: GroceryListItem[] = []

  ingredientsNeeded.forEach((needed, ingredientName) => {
    const pantryItem = pantryMap.get(ingredientName)

    // If item is in pantry and has sufficient quantity, skip it
    if (pantryItem && pantryItem.quantity > 0) {
      // Item is in pantry - optionally we could track partial quantities
      // For now, if it's in the pantry at all, we don't add it to grocery list
      return
    }

    // Add to grocery list
    groceryItems.push({
      name: ingredientName.charAt(0).toUpperCase() + ingredientName.slice(1),
      quantity: needed.quantity,
      unit: needed.unit,
      category: needed.category,
    })
  })

  // Sort by category
  groceryItems.sort((a, b) => a.category.localeCompare(b.category))

  return groceryItems
}

export function groupGroceryListByCategory(items: GroceryListItem[]): Map<string, GroceryListItem[]> {
  const grouped = new Map<string, GroceryListItem[]>()

  items.forEach((item) => {
    const category = item.category || 'other'
    if (!grouped.has(category)) {
      grouped.set(category, [])
    }
    grouped.get(category)!.push(item)
  })

  return grouped
}

export function formatGroceryListAsText(items: GroceryListItem[]): string {
  const grouped = groupGroceryListByCategory(items)
  const lines: string[] = []

  Array.from(grouped.entries()).forEach(([category, categoryItems]) => {
    lines.push(`\n${category.toUpperCase()}`)
    lines.push('-'.repeat(40))
    categoryItems.forEach((item) => {
      lines.push(`☐ ${item.name} - ${item.quantity} ${item.unit}`)
    })
  })

  return lines.join('\n')
}
