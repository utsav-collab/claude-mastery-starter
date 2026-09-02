'use client'

import { useLocalStorageState } from './useLocalStorageState'
import { PantryItem } from '@/lib/types'

const STORAGE_KEY = 'pantryplan.pantry'

export function usePantry() {
  return useLocalStorageState<PantryItem[]>(STORAGE_KEY, [])
}
