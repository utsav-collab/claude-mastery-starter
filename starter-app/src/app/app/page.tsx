'use client'

import { MealPlanContainer } from '@/components/meal-plan/MealPlanContainer'
import Link from 'next/link'

export default function AppPage() {
  return (
    <div className="min-h-screen bg-black text-white animate-fade-in">
      {/* Header */}
      <header className="border-b border-white/10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold text-lime-500">PantryPlan</h1>
          <nav className="flex gap-4">
            <Link href="/pantry" className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 font-medium">
              Pantry
            </Link>
            <Link href="/grocery" className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 font-medium">
              Grocery List
            </Link>
            <Link href="/history" className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 font-medium">
              History
            </Link>
            <Link href="/settings" className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 font-medium">
              Settings
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto">
        <MealPlanContainer />
      </main>
    </div>
  )
}
