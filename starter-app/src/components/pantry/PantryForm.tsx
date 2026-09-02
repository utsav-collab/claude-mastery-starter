'use client'

import { useState } from 'react'
import { PantryItem } from '@/lib/types'

interface PantryFormProps {
  onSubmit: (item: PantryItem) => void
  onCancel: () => void
  initialItem?: PantryItem
}

export function PantryForm({ onSubmit, onCancel, initialItem }: PantryFormProps) {
  const [name, setName] = useState(initialItem?.name || '')
  const [quantity, setQuantity] = useState(initialItem?.quantity || 1)
  const [unit, setUnit] = useState(initialItem?.unit || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      alert('Please enter an item name')
      return
    }
    if (!unit.trim()) {
      alert('Please select a unit')
      return
    }
    onSubmit({ name: name.trim(), quantity, unit })
    setName('')
    setQuantity(1)
    setUnit('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="item-name" className="block text-sm font-medium text-zinc-300 mb-2">
          Item Name
        </label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Chicken breast, Olive oil"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-zinc-300 mb-2">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min="0.1"
            step="0.1"
            value={quantity}
            onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </div>

        <div>
          <label htmlFor="unit" className="block text-sm font-medium text-zinc-300 mb-2">
            Unit
          </label>
          <select
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          >
            <option value="">Select unit</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="l">l</option>
            <option value="ml">ml</option>
            <option value="cup">cup</option>
            <option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
            <option value="piece">piece</option>
            <option value="can">can</option>
            <option value="box">box</option>
            <option value="jar">jar</option>
            <option value="bottle">bottle</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 rounded-lg bg-lime-500 px-4 py-2 font-semibold text-black hover:bg-lime-600 transition-colors"
        >
          {initialItem ? 'Update Item' : 'Add Item'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-lg border border-zinc-700 px-4 py-2 text-zinc-100 hover:bg-zinc-900 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
