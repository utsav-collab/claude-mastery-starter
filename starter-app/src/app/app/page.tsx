'use client'

import { MealPlanContainer } from '@/components/meal-plan/MealPlanContainer'

export default function AppPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-lime-500">PantryPlan</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto">
        <MealPlanContainer />
      </main>
    </div>
  )
}
