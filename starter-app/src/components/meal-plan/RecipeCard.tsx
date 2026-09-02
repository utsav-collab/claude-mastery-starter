import { Recipe } from '@/lib/types'

const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

interface RecipeCardProps {
  dayIndex: number
  recipe: Recipe
}

export function RecipeCard({ dayIndex, recipe }: RecipeCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 flex flex-col gap-2">
      <span className="text-xs uppercase tracking-wider text-lime-500 font-medium">
        {DAY_NAMES[dayIndex] ?? `Day ${dayIndex + 1}`}
      </span>
      <h3 className="text-lg font-semibold text-zinc-100">{recipe.name}</h3>
      <span className="text-sm text-zinc-500">{recipe.prepTimeMinutes} min</span>
      <ul className="text-sm text-zinc-400 list-disc list-inside space-y-0.5">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.quantity} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
