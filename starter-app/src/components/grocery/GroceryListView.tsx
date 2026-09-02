'use client'

import { GroceryListItem } from '@/lib/types'
import { groupGroceryListByCategory } from '@/lib/groceryListBuilder'

interface GroceryListViewProps {
  items: GroceryListItem[]
  onRemove: (name: string) => void
}

export function GroceryListView({ items, onRemove }: GroceryListViewProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-white/60">
        <p>Your pantry has all the ingredients! No grocery shopping needed.</p>
      </div>
    )
  }

  const grouped = groupGroceryListByCategory(items)
  const categoryOrder = ['produce', 'protein', 'dairy', 'pantry', 'other']

  return (
    <div className="space-y-6">
      {categoryOrder.map((category) => {
        const categoryItems = grouped.get(category)
        if (!categoryItems) return null

        return (
          <div key={category} className="bg-zinc-900 rounded-lg border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-lime-500 mb-4 capitalize">{category}</h3>
            <div className="space-y-2">
              {categoryItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between bg-zinc-950 rounded p-3"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="checkbox"
                      className="rounded w-5 h-5 cursor-pointer"
                      aria-label={`Check off ${item.name}`}
                    />
                    <div>
                      <p className="text-white">{item.name}</p>
                      <p className="text-sm text-white/50">
                        {item.quantity} {item.unit}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.name)}
                    className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {/* Export/Print section */}
      <div className="flex gap-2">
        <button
          onClick={() => window.print()}
          className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
        >
          🖨️ Print List
        </button>
        <button
          onClick={() => {
            const text = items
              .map((item) => `☐ ${item.name} - ${item.quantity} ${item.unit}`)
              .join('\n')
            navigator.clipboard.writeText(text)
            alert('List copied to clipboard!')
          }}
          className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
        >
          📋 Copy List
        </button>
      </div>
    </div>
  )
}
