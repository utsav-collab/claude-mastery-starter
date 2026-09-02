'use client'

import { Recipe } from '@/lib/types'
import { useState } from 'react'

const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

interface RecipeCardProps {
  dayIndex: number
  recipe: Recipe
  isCooked?: boolean
  onMarkCooked?: (recipeName: string) => void
}

export function RecipeCard({ dayIndex, recipe, isCooked = false, onMarkCooked }: RecipeCardProps) {
  const [localCooked, setLocalCooked] = useState(isCooked)

  const handleMarkCooked = () => {
    setLocalCooked(!localCooked)
    if (!localCooked && onMarkCooked) {
      onMarkCooked(recipe.name)
    }
  }

  return (
    <div
      className={`rounded-xl border p-4 flex flex-col gap-2 transition-all ${
        localCooked
          ? 'border-lime-600 bg-lime-950/30 opacity-60'
          : 'border-zinc-800 bg-zinc-900/50'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs uppercase tracking-wider text-lime-500 font-medium">
          {DAY_NAMES[dayIndex] ?? `Day ${dayIndex + 1}`}
        </span>
        {localCooked && <span className="text-xs text-lime-400 font-semibold">✓ Cooked</span>}
      </div>

      <h3 className={`text-lg font-semibold ${localCooked ? 'line-through text-zinc-500' : 'text-zinc-100'}`}>
        {recipe.name}
      </h3>

      <span className="text-sm text-zinc-500">{recipe.prepTimeMinutes} min</span>

      <ul className="text-sm text-zinc-400 list-disc list-inside space-y-0.5">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.quantity} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>

      <button
        onClick={handleMarkCooked}
        className={`mt-4 px-4 py-2 rounded-lg font-semibold transition-colors ${
          localCooked
            ? 'bg-lime-600 hover:bg-lime-700 text-white'
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        {localCooked ? '✓ Mark as Uncooked' : 'Mark as Cooked'}
      </button>
    </div>
  )
}
