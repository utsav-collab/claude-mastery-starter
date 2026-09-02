'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface MealPlanGeneratorProps {
  onGenerate: () => void
}

export function MealPlanGenerator({ onGenerate }: MealPlanGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  function handleClick() {
    setIsGenerating(true)
    // Generation is synchronous today, but this seam keeps the UI ready for
    // an async/LLM-backed generator later without changing the component API.
    setTimeout(() => {
      onGenerate()
      setIsGenerating(false)
    }, 150)
  }

  return (
    <Button type="button" onClick={handleClick} disabled={isGenerating}>
      {isGenerating ? 'Generating…' : 'Generate Plan'}
    </Button>
  )
}
