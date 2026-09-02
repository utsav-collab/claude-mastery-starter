'use client'

import { CompletedMeal, useMealHistory } from '@/hooks/useMealHistory'

export function MealHistoryView() {
  const { history, clearHistory } = useMealHistory()

  if (history.length === 0) {
    return (
      <div className="text-center py-8 text-white/60">
        <p>No meals cooked yet. Mark meals as cooked to see them here!</p>
      </div>
    )
  }

  // Group by date
  const groupedByDate = new Map<string, CompletedMeal[]>()
  history.forEach((meal) => {
    const date = meal.cookedDate.split('T')[0]
    if (!groupedByDate.has(date)) {
      groupedByDate.set(date, [])
    }
    groupedByDate.get(date)!.push(meal)
  })

  // Sort dates in reverse (newest first)
  const sortedDates = Array.from(groupedByDate.keys()).sort().reverse()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Cooking History</h2>
        <button
          onClick={clearHistory}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
        >
          Clear History
        </button>
      </div>

      {sortedDates.map((date) => {
        const meals = groupedByDate.get(date)!
        const dateObj = new Date(date)
        const formattedDate = dateObj.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })

        return (
          <div key={date} className="bg-zinc-900 rounded-lg border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-lime-500 mb-4">{formattedDate}</h3>
            <div className="space-y-2">
              {meals.map((meal, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white">
                  <span className="text-lime-400">✓</span>
                  <span>{meal.recipeName}</span>
                  <span className="text-white/40 text-sm">
                    ({new Date(meal.cookedDate).toLocaleTimeString()})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      <div className="bg-zinc-900/50 rounded-lg border border-white/10 p-4 text-sm text-white/70">
        <p>📊 Total meals cooked: <span className="font-semibold text-white">{history.length}</span></p>
      </div>
    </div>
  )
}
