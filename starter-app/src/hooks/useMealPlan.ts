'use client'

import { useLocalStorageState } from './useLocalStorageState'
import { MealPlan } from '@/lib/types'

const STORAGE_KEY = 'pantryplan.mealPlan'

export function useMealPlan() {
  return useLocalStorageState<MealPlan | null>(STORAGE_KEY, null)
}
