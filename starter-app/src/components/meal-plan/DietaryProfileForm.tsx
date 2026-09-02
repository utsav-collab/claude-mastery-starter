'use client'

import { DietaryProfile, DietTag } from '@/lib/types'
import { cn } from '@/lib/utils'

const ALL_DIET_TAGS: DietTag[] = [
  'vegetarian',
  'vegan',
  'gluten-free',
  'dairy-free',
  'nut-free',
  'pescatarian',
]

interface DietaryProfileFormProps {
  profile: DietaryProfile
  onChange: (profile: DietaryProfile) => void
}

export function DietaryProfileForm({ profile, onChange }: DietaryProfileFormProps) {
  function toggleTag(tag: DietTag) {
    const hasTag = profile.dietTags.includes(tag)
    onChange({
      ...profile,
      dietTags: hasTag
        ? profile.dietTags.filter((t) => t !== tag)
        : [...profile.dietTags, tag],
    })
  }

  function updateExclusions(value: string) {
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
        <label htmlFor="exclusions" className="block text-sm font-medium text-zinc-300 mb-2">
          Excluded ingredients (comma separated, e.g. allergies)
        </label>
        <input
          id="exclusions"
          type="text"
          value={profile.excludedIngredients.join(', ')}
          onChange={(e) => updateExclusions(e.target.value)}
          placeholder="peanuts, shellfish"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600"
        />
      </div>
    </div>
  )
}
