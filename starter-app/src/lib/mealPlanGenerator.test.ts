import { describe, it, expect } from 'vitest'
import { generateMealPlan } from './mealPlanGenerator'
import { recipes } from './recipes'
import { DietaryProfile, Recipe } from './types'

describe('generateMealPlan', () => {
  it('generates exactly 7 days when the pool has enough matching recipes', () => {
    const profile: DietaryProfile = {
      householdSize: 2,
      dietTags: [],
      excludedIngredients: [],
    }

    const plan = generateMealPlan(profile, recipes)

    expect(plan.days).toHaveLength(7)
  })

  it('only selects recipes matching every required diet tag', () => {
    const profile: DietaryProfile = {
      householdSize: 2,
      dietTags: ['vegan'],
      excludedIngredients: [],
    }

    const plan = generateMealPlan(profile, recipes)
    const recipeById = new Map(recipes.map((recipe) => [recipe.id, recipe]))

    for (const day of plan.days) {
      const recipe = recipeById.get(day.recipeId)
      expect(recipe?.tags).toContain('vegan')
    }
  })

  it('never selects a recipe containing an excluded ingredient', () => {
    const shrimpRecipe: Recipe = {
      id: 'shrimp-dish',
      name: 'Shrimp Dish',
      tags: [],
      prepTimeMinutes: 10,
      ingredients: [{ name: 'Shrimp', quantity: 1, unit: 'cup', category: 'protein' }],
      instructions: ['Cook shrimp.'],
    }
    const chickenRecipe: Recipe = {
      id: 'chicken-dish',
      name: 'Chicken Dish',
      tags: [],
      prepTimeMinutes: 10,
      ingredients: [{ name: 'Chicken', quantity: 1, unit: 'cup', category: 'protein' }],
      instructions: ['Cook chicken.'],
    }
    const profile: DietaryProfile = {
      householdSize: 2,
      dietTags: [],
      excludedIngredients: ['shrimp'],
    }

    const plan = generateMealPlan(profile, [shrimpRecipe, chickenRecipe])

    expect(plan.days.every((day) => day.recipeId === 'chicken-dish')).toBe(true)
    expect(plan.hasRepeats).toBe(true)
  })
})
