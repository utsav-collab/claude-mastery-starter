'use client'

import { useLocalStorageState } from './useLocalStorageState'
import { DietaryProfile } from '@/lib/types'

const STORAGE_KEY = 'pantryplan.dietaryProfile'

const defaultProfile: DietaryProfile = {
  householdSize: 2,
  dietTags: [],
  excludedIngredients: [],
  preferredCuisines: [],
}

export function useDietaryProfile() {
  return useLocalStorageState<DietaryProfile>(STORAGE_KEY, defaultProfile)
}
