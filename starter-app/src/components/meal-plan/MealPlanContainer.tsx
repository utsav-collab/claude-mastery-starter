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

  // Load meal plan from localStorage on mount
  useEffect(() => {
    if (isLoaded && user) {
      try {
        const stored = localStorage.getItem('currentMealPlan')
        if (stored) {
          setMealPlan(JSON.parse(stored))
        }
      } catch (error) {
        console.error('Error loading meal plan:', error)
      }
    }
  }, [isLoaded, user])

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
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Your Meal Plan</h1>
        <button
          onClick={handleGeneratePlan}
          disabled={loading}
          className="px-8 py-3 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-600 disabled:opacity-50 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {loading ? 'Generating...' : 'Generate Plan'}
        </button>
      </div>

      {mealPlan ? (
        <div className="animate-fade-in">
          <MealPlanView plan={mealPlan} recipes={recipes} />
        </div>
      ) : (
        <div className="text-center py-16 text-white/60">
          <p className="text-lg">Click "Generate Plan" to create your weekly meal plan</p>
        </div>
      )}
    </div>
  )
}
