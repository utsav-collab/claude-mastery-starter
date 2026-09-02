import { GroceryListItem, IngredientCategory } from '@/lib/types'

const CATEGORY_LABELS: Record<IngredientCategory, string> = {
  produce: 'Produce',
  protein: 'Protein',
  dairy: 'Dairy',
  pantry: 'Pantry',
  other: 'Other',
}

interface GroceryListProps {
  items: GroceryListItem[]
}

export function GroceryList({ items }: GroceryListProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <p className="text-sm text-zinc-500">
          Your pantry already covers everything for this week&apos;s plan!
        </p>
      </div>
    )
  }

  const grouped = items.reduce<Record<string, GroceryListItem[]>>((acc, item) => {
    acc[item.category] = acc[item.category] ?? []
    acc[item.category].push(item)
    return acc
  }, {})

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-5">
      <h3 className="text-lg font-semibold text-zinc-100">Grocery List</h3>
      {Object.entries(grouped).map(([category, categoryItems]) => (
        <div key={category}>
          <h4 className="text-xs uppercase tracking-wider text-lime-500 font-medium mb-2">
            {CATEGORY_LABELS[category as IngredientCategory] ?? category}
          </h4>
          <ul className="space-y-1">
            {categoryItems.map((item) => (
              <li key={`${item.name}-${item.unit}`} className="text-sm text-zinc-300">
                {item.quantity} {item.unit} {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
