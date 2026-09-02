'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { DietaryProfileForm } from '@/components/meal-plan/DietaryProfileForm'
import { DietaryProfile } from '@/lib/types'

const DEFAULT_PROFILE: DietaryProfile = {
  dietTags: [],
  excludedIngredients: [],
  householdSize: 1,
  preferredCuisines: [],
}

export default function SettingsPage() {
  const { user, isLoaded } = useUser()
  const [profile, setProfile] = useState<DietaryProfile>(DEFAULT_PROFILE)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('dietaryProfile')
      if (stored) {
        const parsed = JSON.parse(stored)
        // Merge with defaults to ensure all fields exist
        setProfile({
          ...DEFAULT_PROFILE,
          ...parsed,
        })
      }
    } catch (error) {
      console.error('Error loading preferences:', error)
    }
  }, [])

  if (!isLoaded) return <div className="p-6">Loading...</div>
  if (!user) return <div className="p-6">Please sign in to manage preferences</div>

  const handleProfileChange = (newProfile: DietaryProfile) => {
    setProfile(newProfile)
    setSaved(false)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      // Save to localStorage
      localStorage.setItem('dietaryProfile', JSON.stringify(profile))
      console.log('Preferences saved:', profile)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (error) {
      console.error('Error saving preferences:', error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-lime-500">Settings</h1>
          <p className="text-white/60 mt-2">Manage your dietary preferences</p>
        </div>
      </header>

      {/* Settings Content */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Dietary Preferences Section */}
          <div className="bg-zinc-900 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Dietary Preferences</h2>
            <p className="text-white/60 mb-6">
              Set your dietary restrictions, allergies, and food dislikes.
              These will be respected when generating meal plans.
            </p>

            <DietaryProfileForm profile={profile} onChange={handleProfileChange} />

            {/* Save Button */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-6 py-2 bg-lime-500 hover:bg-lime-600 disabled:opacity-50 text-black font-semibold rounded-lg transition-colors"
              >
                {saving ? 'Saving...' : 'Save Preferences'}
              </button>
              {saved && <span className="text-lime-400">✓ Saved!</span>}
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-zinc-900/50 rounded-lg border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-2">How this works</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Set your dietary tags (vegetarian, vegan, keto, etc.)</li>
              <li>• Add any allergies or ingredients you want to avoid</li>
              <li>• Your preferences will be saved automatically</li>
              <li>• All generated meal plans will respect your preferences</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
