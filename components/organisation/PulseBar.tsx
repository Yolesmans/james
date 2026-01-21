'use client'

import { cn } from '@/lib/utils'

interface PulseBarProps {
  bruit: number
  valeur: number
  total: number
}

export default function PulseBar({ bruit, valeur, total }: PulseBarProps) {
  if (total === 0) {
    return (
      <div className="w-full h-2 bg-axiom-muted rounded-full">
        <div className="text-xs text-axiom-secondary mt-2 text-center">
          Aucun profil en résonance
        </div>
      </div>
    )
  }

  const bruitPercent = (bruit / total) * 100
  const valeurPercent = (valeur / total) * 100

  return (
    <div className="space-y-2">
      <div className="w-full h-2 bg-axiom-muted rounded-full overflow-hidden flex">
        {/* Segment Bruit */}
        {bruit > 0 && (
          <div
            className="bg-axiom-secondary/30 transition-all duration-500"
            style={{ width: `${bruitPercent}%` }}
          />
        )}
        {/* Segment Valeur */}
        {valeur > 0 && (
          <div
            className="bg-axiom-amethyst transition-all duration-500"
            style={{ width: `${valeurPercent}%` }}
          />
        )}
      </div>
      <div className="flex items-center gap-4 text-xs text-axiom-secondary">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-axiom-secondary/30" />
          <span>Bruit : {bruit} profil{bruit > 1 ? 's' : ''} non terminé{bruit > 1 ? 's' : ''}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-axiom-amethyst" />
          <span>Valeur : {valeur} alignement{valeur > 1 ? 's' : ''} finalisé{valeur > 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  )
}
