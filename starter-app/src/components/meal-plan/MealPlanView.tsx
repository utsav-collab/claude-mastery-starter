import { MealPlan, Recipe } from '@/lib/types'
import { RecipeCard } from './RecipeCard'

interface MealPlanViewProps {
  plan: MealPlan
  recipes: Recipe[]
}

export function MealPlanView({ plan, recipes }: MealPlanViewProps) {
  const recipeById = new Map(recipes.map((recipe) => [recipe.id, recipe]))

  return (
    <div className="space-y-4">
      {plan.hasRepeats && (
        <p className="text-sm text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2">
          Not enough recipes matched your preferences to avoid repeats this week.
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plan.days.map((day) => {
          const recipe = recipeById.get(day.recipeId)
          if (!recipe) return null
          return <RecipeCard key={day.dayIndex} dayIndex={day.dayIndex} recipe={recipe} />
        })}
      </div>
    </div>
  )
}
