'use client'

import { MealPlan, Recipe } from '@/lib/types'
import { RecipeCard } from './RecipeCard'
import { MealSwapModal } from './MealSwapModal'
import { useMealHistory } from '@/hooks/useMealHistory'
import { useMealPlanEditor } from '@/hooks/useMealPlanEditor'
import { useState } from 'react'

interface MealPlanViewProps {
  plan: MealPlan
  recipes: Recipe[]
}

export function MealPlanView({ plan, recipes }: MealPlanViewProps) {
  const recipeById = new Map(recipes.map((recipe) => [recipe.id, recipe]))
  const { isMealCooked, markMealAsCooked } = useMealHistory()
  const { mealPlan, swapMeal, undo, canUndo, resetToOriginal } = useMealPlanEditor(plan)
  const [swapModalDay, setSwapModalDay] = useState<number | null>(null)

  const currentPlan = mealPlan || plan

  const handleMarkCooked = (recipeName: string, recipeId: string, dayIndex: number) => {
    markMealAsCooked(recipeId, recipeName, dayIndex)
  }

  const handleSwapMeal = (recipeId: string) => {
    if (swapModalDay !== null) {
      swapMeal(swapModalDay, recipeId)
      setSwapModalDay(null)
    }
  }

  const currentSwapRecipe = swapModalDay !== null
    ? currentPlan.days.find(d => d.dayIndex === swapModalDay)
    : null

  return (
    <div className="space-y-4">
      {plan.hasRepeats && (
        <p className="text-sm text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2">
          Not enough recipes matched your preferences to avoid repeats this week.
        </p>
      )}

      {/* Editor Controls */}
      <div className="flex gap-2">
        <button
          onClick={undo}
          disabled={!canUndo}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white rounded-lg transition-colors text-sm"
        >
          ↶ Undo
        </button>
        <button
          onClick={resetToOriginal}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
        >
          Reset to Original
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPlan.days.map((day) => {
          const recipe = recipeById.get(day.recipeId)
          if (!recipe) return null
          return (
            <div key={day.dayIndex} className="relative">
              <RecipeCard
                dayIndex={day.dayIndex}
                recipe={recipe}
                isCooked={isMealCooked(day.recipeId)}
                onMarkCooked={() => handleMarkCooked(recipe.name, recipe.id, day.dayIndex)}
              />
              <button
                onClick={() => setSwapModalDay(day.dayIndex)}
                className="absolute top-2 right-2 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
              >
                Swap
              </button>
            </div>
          )
        })}
      </div>

      {/* Swap Modal */}
      {swapModalDay !== null && currentSwapRecipe && (
        <MealSwapModal
          currentRecipe={recipeById.get(currentSwapRecipe.recipeId)!}
          allRecipes={recipes}
          dayIndex={swapModalDay}
          onSwap={handleSwapMeal}
          onCancel={() => setSwapModalDay(null)}
        />
      )}
    </div>
  )
}
