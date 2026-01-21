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
      <div className="w-full">
        <div className="w-full h-2 md:h-3 bg-[rgba(226,232,240,0.3)] rounded-full" />
        <div className="text-xs md:text-sm text-axiom-secondary mt-3 md:mt-4 text-center">
          Aucun profil en résonance
        </div>
      </div>
    )
  }

  const segments = [
    { value: profilsRecus, label: 'Profils reçus', isValue: false, color: 'bg-axiom-secondary/30' },
    { value: profilsContactes, label: 'Profils contactés', isValue: false, color: 'bg-axiom-secondary/50' },
    { value: profilsEnCours, label: 'Profils en cours', isValue: false, color: 'bg-axiom-amethyst/40' },
    { value: alignementsTermines, label: 'Alignements terminés', isValue: true, color: 'bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope' },
    { value: interetsExprimes, label: 'Intérêts exprimés', isValue: true, color: 'bg-gradient-to-r from-axiom-heliotrope to-axiom-amethyst' },
  ]

  const activeSegments = segments.filter(s => s.value > 0)

  return (
    <div className="space-y-4 md:space-y-5">
      {/* Barre de progression segmentée */}
      <div className="w-full h-2 md:h-3 bg-[rgba(226,232,240,0.3)] rounded-full overflow-hidden flex shadow-inner">
        {activeSegments.map((segment, index) => {
          const percent = (segment.value / total) * 100
          return (
            <div
              key={index}
              className={cn(
                'transition-all duration-700 ease-out',
                segment.color
              )}
              style={{ width: `${percent}%` }}
            />
          )
        })}
      </div>
      
      {/* Légende avec indicateurs */}
      <div className="space-y-2 md:space-y-3">
        {activeSegments.map((segment, index) => {
          const percent = total > 0 ? Math.round((segment.value / total) * 100) : 0
          return (
            <div 
              key={index} 
              className="flex items-center justify-between gap-3 md:gap-4 p-2 md:p-3 rounded-lg hover:bg-axiom-amethyst/5 transition-colors"
            >
              <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                <div
                  className={cn(
                    'w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0',
                    segment.isValue 
                      ? 'bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope shadow-sm' 
                      : 'bg-axiom-secondary/40'
                  )}
                />
                <span className="text-xs md:text-sm text-axiom-secondary font-medium truncate">
                  {segment.label}
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                <span className="text-sm md:text-base font-serif font-semibold text-axiom-primary">
                  {segment.value}
                </span>
                <span className="text-xs text-axiom-secondary">
                  ({percent}%)
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
