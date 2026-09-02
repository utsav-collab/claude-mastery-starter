import { useState, useEffect } from 'react'
import { MealPlan, MealPlanDay } from '@/lib/types'

export interface ModifiedMealPlan extends MealPlan {
  originalDays?: MealPlanDay[]
}

const STORAGE_KEY = 'mealPlanModifications'

export function useMealPlanEditor(initialPlan: MealPlan | null) {
  const [mealPlan, setMealPlan] = useState<ModifiedMealPlan | null>(initialPlan)
  const [history, setHistory] = useState<ModifiedMealPlan[]>([])

  // Load modifications from localStorage on mount
  useEffect(() => {
    if (initialPlan) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const modifications = JSON.parse(stored)
          if (modifications.id === initialPlan.id) {
            setMealPlan(modifications)
            setHistory([modifications])
          }
        }
      } catch (error) {
        console.error('Error loading meal plan modifications:', error)
      }
    }
  }, [initialPlan?.id])

  // Save modifications to localStorage
  useEffect(() => {
    if (mealPlan) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mealPlan))
      } catch (error) {
        console.error('Error saving meal plan modifications:', error)
      }
    }
  }, [mealPlan])

  const swapMeal = (dayIndex: number, newRecipeId: string) => {
    if (!mealPlan) return

    const originalDays = mealPlan.originalDays || mealPlan.days

    const updatedDays = mealPlan.days.map((day) =>
      day.dayIndex === dayIndex ? { ...day, recipeId: newRecipeId } : day
    )

    const newPlan: ModifiedMealPlan = {
      ...mealPlan,
      days: updatedDays,
      originalDays,
    }

    setMealPlan(newPlan)
    setHistory([...history, newPlan])
  }

  const undo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory)
      setMealPlan(newHistory[newHistory.length - 1])
    }
  }

  const canUndo = history.length > 1

  const resetToOriginal = () => {
    if (mealPlan?.originalDays) {
      const resetPlan: ModifiedMealPlan = {
        ...mealPlan,
        days: mealPlan.originalDays,
        originalDays: mealPlan.originalDays,
      }
      setMealPlan(resetPlan)
      setHistory([resetPlan])
    }
  }

  return { mealPlan, swapMeal, undo, canUndo, resetToOriginal }
}
