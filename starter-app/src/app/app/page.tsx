'use client'

import { MealPlanContainer } from '@/components/meal-plan/MealPlanContainer'
import Link from 'next/link'

export default function AppPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-lime-500">PantryPlan</h1>
          <Link href="/settings" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
            Settings
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto">
        <MealPlanContainer />
      </main>
    </div>
  )
}
