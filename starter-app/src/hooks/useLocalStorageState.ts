'use client'

import { useEffect, useState } from 'react'

/**
 * A useState-like hook that persists its value to localStorage under `key`.
 * This is the single seam that gets swapped for Convex queries/mutations in
 * Module 3 without needing to change any consuming components.
 */
export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key)
      if (stored !== null) {
        setValue(JSON.parse(stored) as T)
      }
    } catch {
      // Ignore malformed localStorage content and fall back to initialValue.
    } finally {
      setHasLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    if (!hasLoaded) return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Ignore write failures (e.g. storage full or disabled).
    }
  }, [key, value, hasLoaded])

  return [value, setValue] as const
}
