import { useState, useEffect } from 'react'

export interface CompletedMeal {
  recipeId: string
  recipeName: string
  cookedDate: string
  dayIndex: number
}

const STORAGE_KEY = 'mealHistory'

export function useMealHistory() {
  const [history, setHistory] = useState<CompletedMeal[]>([])
  const [loading, setLoading] = useState(true)

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setHistory(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Error loading meal history:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
      } catch (error) {
        console.error('Error saving meal history:', error)
      }
    }
  }, [history, loading])

  const markMealAsCooked = (recipeId: string, recipeName: string, dayIndex: number) => {
    const completedMeal: CompletedMeal = {
      recipeId,
      recipeName,
      cookedDate: new Date().toISOString(),
      dayIndex,
    }
    setHistory([...history, completedMeal])
  }

  const isMealCooked = (recipeId: string): boolean => {
    return history.some((meal) => meal.recipeId === recipeId)
  }

  const getMealsForDate = (date: Date): CompletedMeal[] => {
    const dateStr = date.toISOString().split('T')[0]
    return history.filter((meal) => meal.cookedDate.split('T')[0] === dateStr)
  }

  const clearHistory = () => {
    setHistory([])
  }

  return { history, loading, markMealAsCooked, isMealCooked, getMealsForDate, clearHistory }
}
