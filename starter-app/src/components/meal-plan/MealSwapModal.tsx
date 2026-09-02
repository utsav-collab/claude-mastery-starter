'use client'

import { Recipe } from '@/lib/types'
import { useState } from 'react'

interface MealSwapModalProps {
  currentRecipe: Recipe
  allRecipes: Recipe[]
  dayIndex: number
  onSwap: (recipeId: string) => void
  onCancel: () => void
}

export function MealSwapModal({
  currentRecipe,
  allRecipes,
  dayIndex,
  onSwap,
  onCancel,
}: MealSwapModalProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null)

  const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const dayName = DAY_NAMES[dayIndex] || `Day ${dayIndex + 1}`

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-lg border border-white/10 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Swap Meal for {dayName}</h2>
        <p className="text-white/60 mb-6">Currently: <span className="text-lime-400">{currentRecipe.name}</span></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {allRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedRecipe === recipe.id
                  ? 'bg-lime-500/20 border-lime-500'
                  : 'bg-zinc-800 border-zinc-700 hover:border-zinc-600'
              }`}
            >
              <h3 className="font-semibold text-white mb-2">{recipe.name}</h3>
              <p className="text-sm text-white/60 mb-2">{recipe.prepTimeMinutes} min</p>
              <ul className="text-xs text-white/50 space-y-1">
                {recipe.ingredients.slice(0, 3).map((ing) => (
                  <li key={ing.name}>
                    • {ing.quantity} {ing.unit} {ing.name}
                  </li>
                ))}
                {recipe.ingredients.length > 3 && (
                  <li>• +{recipe.ingredients.length - 3} more</li>
                )}
              </ul>
              {recipe.tags && recipe.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-lime-600/30 text-lime-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              if (selectedRecipe) {
                onSwap(selectedRecipe)
              }
            }}
            disabled={!selectedRecipe}
            className="flex-1 px-4 py-2 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-600 disabled:opacity-50 transition-colors"
          >
            Confirm Swap
          </button>
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
