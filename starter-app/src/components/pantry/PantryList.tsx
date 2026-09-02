'use client'

import { useState } from 'react'
import { PantryItem } from '@/lib/types'
import { Button } from '@/components/ui/Button'

interface PantryListProps {
  pantry: PantryItem[]
  onChange: (pantry: PantryItem[]) => void
}

export function PantryList({ pantry, onChange }: PantryListProps) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [unit, setUnit] = useState('unit')

  function addItem() {
    if (!name.trim()) return
    onChange([...pantry, { name: name.trim(), quantity, unit }])
    setName('')
    setQuantity(1)
    setUnit('unit')
  }

  function removeItem(index: number) {
    onChange(pantry.filter((_, i) => i !== index))
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
      <h3 className="text-lg font-semibold text-zinc-100">Pantry</h3>

      <ul className="space-y-2">
        {pantry.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="flex items-center justify-between rounded-lg bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
          >
            <span>
              {item.quantity} {item.unit} {item.name}
            </span>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-zinc-500 hover:text-red-400 text-xs"
            >
              Remove
            </button>
          </li>
        ))}
        {pantry.length === 0 && <li className="text-sm text-zinc-500">No pantry items yet.</li>}
      </ul>

      <div className="flex flex-wrap gap-2 items-end">
        <div>
          <label htmlFor="pantry-name" className="block text-xs text-zinc-400 mb-1">
            Item
          </label>
          <input
            id="pantry-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100"
            placeholder="Rice"
          />
        </div>
        <div>
          <label htmlFor="pantry-quantity" className="block text-xs text-zinc-400 mb-1">
            Qty
          </label>
          <input
            id="pantry-quantity"
            type="number"
            min={0}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value) || 0)}
            className="w-20 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100"
          />
        </div>
        <div>
          <label htmlFor="pantry-unit" className="block text-xs text-zinc-400 mb-1">
            Unit
          </label>
          <input
            id="pantry-unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-24 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100"
          />
        </div>
        <Button type="button" variant="secondary" size="sm" onClick={addItem}>
          Add
        </Button>
      </div>
    </div>
  )
}
