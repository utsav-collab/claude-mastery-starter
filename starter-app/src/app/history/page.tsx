import { MealHistoryView } from '@/components/meal-plan/MealHistoryView'

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-lime-500">Cooking History</h1>
          <p className="text-white/60 mt-2">Track meals you've cooked</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        <MealHistoryView />
      </main>
    </div>
  )
}
