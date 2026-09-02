import { DietaryProfile, MealPlan, MealPlanDay, Recipe } from './types'

const DAYS_IN_PLAN = 7

export function matchesProfile(recipe: Recipe, profile: DietaryProfile): boolean {
  const hasAllDietTags = profile.dietTags.every((tag) => recipe.tags.includes(tag))
  const hasExcludedIngredient = recipe.ingredients.some((ingredient) =>
    profile.excludedIngredients.some(
      (excluded) => ingredient.name.toLowerCase() === excluded.toLowerCase()
    )
  )
  return hasAllDietTags && !hasExcludedIngredient
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/**
 * Generates a 7-day meal plan from the given recipe pool, filtered by the
 * user's dietary profile. If fewer than 7 recipes match the profile, repeats
 * are allowed and `hasRepeats` is set to true so the UI can surface a notice.
 */
export function generateMealPlan(profile: DietaryProfile, recipePool: Recipe[]): MealPlan {
  const matching = shuffle(recipePool.filter((recipe) => matchesProfile(recipe, profile)))

  const days: MealPlanDay[] = []
  let hasRepeats = false

  for (let dayIndex = 0; dayIndex < DAYS_IN_PLAN; dayIndex++) {
    if (matching.length === 0) {
      // No recipes match the profile at all; nothing more we can do.
      break
    }
    if (dayIndex < matching.length) {
      days.push({ dayIndex, recipeId: matching[dayIndex].id })
    } else {
      hasRepeats = true
      const recipe = matching[dayIndex % matching.length]
      days.push({ dayIndex, recipeId: recipe.id })
    }
  }

  return {
    id: `plan-${Date.now()}`,
    createdAt: new Date().toISOString(),
    days,
    hasRepeats,
  }
}
