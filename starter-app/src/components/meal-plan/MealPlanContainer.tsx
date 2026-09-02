'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { MealPlanView } from './MealPlanView'
import { generateMealPlan } from '@/lib/mealPlanGenerator'
import { recipes } from '@/lib/recipes'
import { DietaryProfile } from '@/lib/types'

export function MealPlanContainer() {
  const { user, isLoaded } = useUser()
  const [mealPlan, setMealPlan] = useState(null)
  const [loading, setLoading] = useState(false)

  if (!isLoaded) return <div className="p-6">Loading...</div>
  if (!user) return <div className="p-6">Please sign in to view your meal plan</div>

  const userId = user.id

  const handleGeneratePlan = async () => {
    setLoading(true)
    try {
      // Load saved preferences from localStorage
      let profile: DietaryProfile = {
        dietTags: [],
        excludedIngredients: [],
        householdSize: 1,
        preferredCuisines: [],
      }

      try {
        const stored = localStorage.getItem('dietaryProfile')
        if (stored) {
          const parsed = JSON.parse(stored)
          profile = { ...profile, ...parsed }
        }
      } catch (error) {
        console.error('Error loading preferences:', error)
      }

      console.log('Generating plan with profile:', profile)
      const plan = generateMealPlan(profile, recipes)
      setMealPlan(plan)
      // Save meal plan to localStorage for grocery list generation
      localStorage.setItem('currentMealPlan', JSON.stringify(plan))
    } catch (error) {
      console.error('Error generating plan:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Your Meal Plan</h1>
        <button
          onClick={handleGeneratePlan}
          disabled={loading}
          className="px-6 py-2 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-600 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Plan'}
        </button>
      </div>

      {mealPlan ? (
        <MealPlanView plan={mealPlan} recipes={recipes} />
      ) : (
        <div className="text-center py-12 text-white/60">
          Click "Generate Plan" to create your weekly meal plan
        </div>
      )}
    </div>
  )
}
