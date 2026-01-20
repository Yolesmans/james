'use client'

import { cn } from '@/lib/utils'

interface PulseBarSegmentedProps {
  profilsRecus: number
  profilsContactes: number
  profilsEnCours: number
  alignementsTermines: number
  interetsExprimes: number
  total: number
}

export default function PulseBarSegmented({
  profilsRecus,
  profilsContactes,
  profilsEnCours,
  alignementsTermines,
  interetsExprimes,
  total,
}: PulseBarSegmentedProps) {
  if (total === 0) {
    return (
      <div className="w-full h-3 bg-axiom-muted rounded-full">
        <div className="text-xs text-axiom-secondary mt-2 text-center">
          Aucun profil en résonance
        </div>
      </div>
    )
  }

  const segments = [
    { value: profilsRecus, label: 'Profils reçus', isValue: false },
    { value: profilsContactes, label: 'Profils contactés', isValue: false },
    { value: profilsEnCours, label: 'Profils en cours', isValue: false },
    { value: alignementsTermines, label: 'Alignements terminés', isValue: true },
    { value: interetsExprimes, label: 'Intérêts exprimés', isValue: true },
  ]

  return (
    <div className="space-y-3">
      <div className="w-full h-3 bg-axiom-muted rounded-full overflow-hidden flex">
        {segments.map((segment, index) => {
          if (segment.value === 0) return null
          const percent = (segment.value / total) * 100
          return (
            <div
              key={index}
              className={cn(
                'transition-all duration-500 ease-out',
                segment.isValue
                  ? 'bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope'
                  : 'bg-axiom-secondary/30'
              )}
              style={{ width: `${percent}%` }}
            />
          )
        })}
      </div>
      <div className="flex items-center gap-4 text-xs text-axiom-secondary flex-wrap">
        {segments.map((segment, index) => {
          if (segment.value === 0) return null
          return (
            <div key={index} className="flex items-center gap-2">
              <div
                className={cn(
                  'w-2 h-2 rounded-full',
                  segment.isValue 
                    ? 'bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope' 
                    : 'bg-axiom-secondary/30'
                )}
              />
              <span>
                {segment.label}: {segment.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
