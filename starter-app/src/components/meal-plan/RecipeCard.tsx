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
      className={`rounded-xl border p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-105 ${
        localCooked
          ? 'border-lime-600 bg-lime-950/30 opacity-60'
          : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-widest text-lime-500 font-bold">
          {DAY_NAMES[dayIndex] ?? `Day ${dayIndex + 1}`}
        </span>
        {localCooked && <span className="text-xs text-lime-400 font-bold">✓ Cooked</span>}
      </div>

      <h3 className={`text-xl font-bold ${localCooked ? 'line-through text-zinc-500' : 'text-white'}`}>
        {recipe.name}
      </h3>

      <span className="text-sm text-zinc-400 font-medium">{recipe.prepTimeMinutes} min prep</span>

      <ul className="text-sm text-zinc-400 list-disc list-inside space-y-1.5">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.name} className="text-zinc-300">
            {ingredient.quantity} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>

      <div className="flex gap-2 pt-2">
        <button
          onClick={handleMarkCooked}
          className={`flex-1 px-5 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 active:scale-95 ${
            localCooked
              ? 'bg-lime-600 hover:bg-lime-700 text-white'
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          {localCooked ? '✓ Mark as Uncooked' : 'Mark as Cooked'}
        </button>
      </div>
    </div>
  )
}
