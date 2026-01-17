'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ChoiceButtonsProps {
  choices: string[]
  onSelect: (choice: string) => void
}

export function ChoiceButtons({ choices, onSelect }: ChoiceButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {choices.map((choice, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onSelect(choice)}
          className="text-left whitespace-normal h-auto py-2 px-3"
        >
          {choice}
        </Button>
      ))}
    </div>
  )
}
