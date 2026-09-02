'use client'

import { PantryItem } from '@/lib/types'

interface PantryViewProps {
  items: PantryItem[]
  onEdit: (item: PantryItem) => void
  onDelete: (name: string) => void
}

export function PantryView({ items, onEdit, onDelete }: PantryViewProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-white/60">
        <p>Your pantry is empty. Add some items to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between bg-zinc-900 rounded-lg border border-white/10 p-4"
        >
          <div className="flex-1">
            <p className="font-semibold text-white">{item.name}</p>
            <p className="text-sm text-white/60">
              {item.quantity} {item.unit}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(item)}
              className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(item.name)}
              className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
