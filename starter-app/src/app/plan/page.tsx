'use client'

import { useMemo } from 'react'
import { useMealPlan } from '@/hooks/useMealPlan'
import { usePantry } from '@/hooks/usePantry'
import { useDietaryProfile } from '@/hooks/useDietaryProfile'
import { generateMealPlan } from '@/lib/mealPlanGenerator'
import { buildGroceryList } from '@/lib/groceryListBuilder'
import { recipes } from '@/lib/recipes'
import { DietaryProfileForm } from '@/components/meal-plan/DietaryProfileForm'
import { MealPlanGenerator } from '@/components/meal-plan/MealPlanGenerator'
import { MealPlanView } from '@/components/meal-plan/MealPlanView'
import { PantryList } from '@/components/pantry/PantryList'
import { GroceryList } from '@/components/grocery/GroceryList'

export default function PlanPage() {
  const [profile, setProfile] = useDietaryProfile()
  const [plan, setPlan] = useMealPlan()
  const [pantry, setPantry] = usePantry()

  const groceryList = useMemo(() => {
    if (!plan) return []
    return buildGroceryList(plan, recipes, pantry)
  }, [plan, pantry])

  function handleGenerate() {
    setPlan(generateMealPlan(profile, recipes))
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">PantryPlan</h1>
        <p className="text-zinc-400">
          Generate a weekly dinner plan and a grocery list that actually matches it.
        </p>
      </header>

      <section className="grid lg:grid-cols-2 gap-6">
        <DietaryProfileForm profile={profile} onChange={setProfile} />
        <PantryList pantry={pantry} onChange={setPantry} />
      </section>

      <section className="space-y-4">
        <MealPlanGenerator onGenerate={handleGenerate} />
        {plan && <MealPlanView plan={plan} recipes={recipes} />}
      </section>

      {plan && (
        <section>
          <GroceryList items={groceryList} />
        </section>
      )}
    </div>
  )
}
