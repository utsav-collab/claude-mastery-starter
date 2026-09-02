'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { usePantry } from '@/hooks/usePantry'
import { GroceryListView } from './GroceryListView'
import { generateGroceryList } from '@/lib/groceryListBuilder'
import { recipes } from '@/lib/recipes'
import { MealPlan, GroceryListItem, DietaryProfile } from '@/lib/types'

export function GroceryListContainer() {
  const { user, isLoaded } = useUser()
  const { items: pantryItems, loading: pantryLoading } = usePantry()
  const [groceryList, setGroceryList] = useState<GroceryListItem[]>([])
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null)
  const [loading, setLoading] = useState(false)

  if (!isLoaded || pantryLoading) return <div className="p-6">Loading...</div>
  if (!user) return <div className="p-6">Please sign in to view your grocery list</div>

  const handleGenerateList = async () => {
    setLoading(true)
    try {
      // Load the meal plan from localStorage (could be modified)
      let storedPlan = localStorage.getItem('mealPlanModifications')

      if (!storedPlan) {
        storedPlan = localStorage.getItem('currentMealPlan')
      }

      if (!storedPlan) {
        alert('Please generate a meal plan first!')
        setLoading(false)
        return
      }

      const plan = JSON.parse(storedPlan)
      setMealPlan(plan)

      // Generate the grocery list (will use modified meals if swapped)
      const list = generateGroceryList(plan, recipes, pantryItems)
      setGroceryList(list)
    } catch (error) {
      console.error('Error generating grocery list:', error)
      alert('Error generating grocery list. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAddItem = () => {
    const name = prompt('Enter item name:')
    if (!name) return

    const quantity = prompt('Enter quantity:', '1')
    if (!quantity) return

    const unit = prompt('Enter unit (kg, g, piece, etc.):', 'piece')
    if (!unit) return

    const category = prompt('Enter category (produce, protein, dairy, pantry, other):', 'other')
    if (!category) return

    const newItem: GroceryListItem = {
      name,
      quantity: parseFloat(quantity),
      unit,
      category,
    }

    setGroceryList([...groceryList, newItem])
  }

  const handleRemoveItem = (name: string) => {
    setGroceryList(groceryList.filter((item) => item.name !== name))
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Grocery List</h1>
        <div className="flex gap-4">
          <button
            onClick={handleGenerateList}
            disabled={loading}
            className="px-8 py-3 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-600 disabled:opacity-50 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {loading ? 'Generating...' : mealPlan ? 'Refresh List' : 'Generate from Meal Plan'}
          </button>
          <button
            onClick={handleAddItem}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            + Add Item
          </button>
        </div>
      </div>

      {groceryList.length > 0 ? (
        <>
          <div className="bg-zinc-900 rounded-lg border border-white/10 p-6 animate-fade-in">
            <p className="text-white/70 text-lg">
              Total items: <span className="font-bold text-lime-400">{groceryList.length}</span>
            </p>
          </div>
          <GroceryListView items={groceryList} onRemove={handleRemoveItem} />
        </>
      ) : (
        <div className="text-center py-16 text-white/60">
          <p className="text-lg">Click "Generate from Meal Plan" to create your grocery list</p>
        </div>
      )}
    </div>
  )
}
