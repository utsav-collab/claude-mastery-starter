import { describe, it, expect } from 'vitest'
import { buildGroceryList } from './groceryListBuilder'
import { MealPlan, Recipe } from './types'

describe('buildGroceryList', () => {
  it('merges quantities of the same ingredient across multiple recipes', () => {
    const recipeA: Recipe = {
      id: 'recipe-a',
      name: 'Recipe A',
      tags: [],
      prepTimeMinutes: 10,
      ingredients: [{ name: 'Rice', quantity: 2, unit: 'cup', category: 'pantry' }],
      instructions: [],
    }
    const recipeB: Recipe = {
      id: 'recipe-b',
      name: 'Recipe B',
      tags: [],
      prepTimeMinutes: 10,
      ingredients: [{ name: 'Rice', quantity: 1, unit: 'cup', category: 'pantry' }],
      instructions: [],
    }
    const plan: MealPlan = {
      id: 'plan-1',
      createdAt: new Date().toISOString(),
      hasRepeats: false,
      days: [
        { dayIndex: 0, recipeId: 'recipe-a' },
        { dayIndex: 1, recipeId: 'recipe-b' },
      ],
    }

    const list = buildGroceryList(plan, [recipeA, recipeB], [])

    expect(list).toEqual([{ name: 'Rice', quantity: 3, unit: 'cup', category: 'pantry' }])
  })

  it('subtracts pantry quantities and omits items fully covered by the pantry', () => {
    const recipe: Recipe = {
      id: 'recipe-a',
      name: 'Recipe A',
      tags: [],
      prepTimeMinutes: 10,
      ingredients: [
        { name: 'Rice', quantity: 3, unit: 'cup', category: 'pantry' },
        { name: 'Garlic', quantity: 2, unit: 'unit', category: 'produce' },
      ],
      instructions: [],
    }
    const plan: MealPlan = {
      id: 'plan-1',
      createdAt: new Date().toISOString(),
      hasRepeats: false,
      days: [{ dayIndex: 0, recipeId: 'recipe-a' }],
    }

    // Pantry already has 3 cups of rice (fully covers it) and 1 unit of garlic (partial).
    const list = buildGroceryList(plan, [recipe], [
      { name: 'Rice', quantity: 3, unit: 'cup' },
      { name: 'Garlic', quantity: 1, unit: 'unit' },
    ])

    expect(list).toEqual([{ name: 'Garlic', quantity: 1, unit: 'unit', category: 'produce' }])
  })
})
