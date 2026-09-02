import { useState, useEffect } from 'react'
import { PantryItem } from '@/lib/types'

const STORAGE_KEY = 'pantryItems'

export function usePantry() {
  const [items, setItems] = useState<PantryItem[]>([])
  const [loading, setLoading] = useState(true)

  // Load pantry from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Error loading pantry:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  // Save pantry to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
      } catch (error) {
        console.error('Error saving pantry:', error)
      }
    }
  }, [items, loading])

  const addItem = (item: PantryItem) => {
    setItems([...items, item])
  }

  const updateItem = (name: string, updates: Partial<PantryItem>) => {
    setItems(items.map((item) => (item.name === name ? { ...item, ...updates } : item)))
  }

  const deleteItem = (name: string) => {
    setItems(items.filter((item) => item.name !== name))
  }

  const depletItem = (name: string, quantityUsed: number) => {
    setItems(
      items
        .map((item) => {
          if (item.name === name) {
            const newQuantity = item.quantity - quantityUsed
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
          }
          return item
        })
        .filter((item) => item !== null) as PantryItem[]
    )
  }

  return { items, loading, addItem, updateItem, deleteItem, depletItem }
}
