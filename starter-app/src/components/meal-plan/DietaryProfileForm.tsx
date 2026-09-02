'use client'

import { DietaryProfile, DietTag, Cuisine } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

const ALL_DIET_TAGS: DietTag[] = [
  'vegetarian',
  'vegan',
  'gluten-free',
  'dairy-free',
  'nut-free',
  'pescatarian',
]

const ALL_CUISINES: Cuisine[] = [
  'indian',
  'chinese',
  'thai',
  'mexican',
  'italian',
  'japanese',
  'korean',
  'mediterranean',
  'french',
  'american',
]

interface DietaryProfileFormProps {
  profile: DietaryProfile
  onChange: (profile: DietaryProfile) => void
}

export function DietaryProfileForm({ profile, onChange }: DietaryProfileFormProps) {
  const [rawExclusions, setRawExclusions] = useState(profile.excludedIngredients.join('\n'))

  useEffect(() => {
    setRawExclusions(profile.excludedIngredients.join('\n'))
  }, [profile.excludedIngredients])

  function toggleTag(tag: DietTag) {
    const hasTag = profile.dietTags.includes(tag)
    onChange({
      ...profile,
      dietTags: hasTag
        ? profile.dietTags.filter((t) => t !== tag)
        : [...profile.dietTags, tag],
    })
  }

  function toggleCuisine(cuisine: Cuisine) {
    const hasCuisine = profile.preferredCuisines.includes(cuisine)
    onChange({
      ...profile,
      preferredCuisines: hasCuisine
        ? profile.preferredCuisines.filter((c) => c !== cuisine)
        : [...profile.preferredCuisines, cuisine],
    })
  }

  function handleExclusionsChange(value: string) {
    setRawExclusions(value)
    const excludedIngredients = value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
    onChange({ ...profile, excludedIngredients })
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-5">
      <div>
        <label htmlFor="household-size" className="block text-sm font-medium text-zinc-300 mb-2">
          Household size
        </label>
        <input
          id="household-size"
          type="number"
          min={1}
          value={profile.householdSize}
          onChange={(e) => onChange({ ...profile, householdSize: Number(e.target.value) || 1 })}
          className="w-24 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-zinc-300 mb-2">Dietary preferences</span>
        <div className="flex flex-wrap gap-2">
          {ALL_DIET_TAGS.map((tag) => {
            const active = profile.dietTags.includes(tag)
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-colors border',
                  active
                    ? 'bg-lime-500 text-black border-lime-500'
                    : 'bg-zinc-950 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                )}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-zinc-300 mb-2">Preferred cuisines</span>
        <div className="flex flex-wrap gap-2">
          {ALL_CUISINES.map((cuisine) => {
            const active = profile.preferredCuisines.includes(cuisine)
            return (
              <button
                key={cuisine}
                type="button"
                onClick={() => toggleCuisine(cuisine)}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-colors border capitalize',
                  active
                    ? 'bg-lime-500 text-black border-lime-500'
                    : 'bg-zinc-950 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                )}
              >
                {cuisine}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <label htmlFor="exclusions" className="block text-sm font-medium text-zinc-300 mb-2">
          Excluded ingredients (comma-separated)
        </label>
        <input
          id="exclusions"
          type="text"
          value={rawExclusions}
          onChange={(e) => {
            const value = e.target.value
            setRawExclusions(value)
            const items = value.split(',').map(item => item.trim()).filter(Boolean)
            onChange({ ...profile, excludedIngredients: items })
          }}
          placeholder="peanuts, shellfish, dairy"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600"
        />
        <p className="text-xs text-zinc-500 mt-2">
          {profile.excludedIngredients.length > 0
            ? `Current: ${profile.excludedIngredients.join(', ')}`
            : 'None yet'}
        </p>
      </div>
    </div>
  )
}
