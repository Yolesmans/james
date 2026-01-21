'use client'

import { Button } from '@/components/ui/button'
import { Calendar, MessageSquare, Link2, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ProfilResonance } from '@/lib/organisation-data'

interface ProfilsTableProps {
  profils: ProfilResonance[]
  onPlanifierEntretien: (profilId: string) => void
  onRetablirContact: (profilId: string) => void
  onGenererLien: (profilId: string) => void
}

export default function ProfilsTable({ 
  profils, 
  onPlanifierEntretien, 
  onRetablirContact,
  onGenererLien
}: ProfilsTableProps) {
  if (profils.length === 0) {
    return (
      <div className="text-center py-12 text-axiom-secondary">
        <p>Aucun profil en résonance pour cette offre.</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {profils.map((profil) => (
        <div
          key={profil.id}
          className="bg-axiom-surface border border-[rgba(226,232,240,0.4)] rounded-axiom p-4 hover:border-axiom-amethyst/20 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            {/* Colonne 1: Identité anonyme */}
            <div className="flex-1">
              <div className="font-medium text-axiom-primary">
                {profil.identiteAnonyme}
              </div>
            </div>

            {/* Colonne 2: Score d'Alignement (jauge circulaire améthyste fine) */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-axiom-muted"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - profil.scoreAlignement / 100)}`}
                    className="text-axiom-amethyst transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-axiom-primary">
                    {profil.scoreAlignement}%
                  </span>
                </div>
              </div>
            </div>

            {/* Colonne 3: Étiquette de personnalité (Instrument Serif) */}
            <div className="flex-1 text-center">
              <div className="font-serif text-axiom-primary">
                {profil.etiquettePersonnalite}
              </div>
            </div>

            {/* Colonne 4: Intention */}
            <div className="flex-1 text-center">
              {profil.intention === 'confirme' && (
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-axiom-amethyst/20 to-axiom-heliotrope/20 flex items-center justify-center mx-auto">
                  <svg
                    className="w-3 h-3 text-axiom-amethyst"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
              {profil.intention === 'plus-tard' && (
                <Clock className="w-5 h-5 text-axiom-amethyst mx-auto" strokeWidth={1.5} />
              )}
              {!profil.intention && (
                <span className="text-axiom-secondary text-sm">—</span>
              )}
            </div>

            {/* Actions ONE-CLICK */}
            <div className="flex-1 flex items-center justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onGenererLien(profil.id)}
                className="text-axiom-secondary hover:text-axiom-primary"
                title="Générer lien Ghost"
              >
                <Link2 className="w-4 h-4" />
              </Button>
              {!profil.entretienPlanifie && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onPlanifierEntretien(profil.id)}
                  className="border-axiom-amethyst/20 text-axiom-amethyst hover:bg-axiom-amethyst/5"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  Planifier
                </Button>
              )}
              {profil.contacte && !profil.intention && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRetablirContact(profil.id)}
                  className="text-axiom-secondary hover:text-axiom-primary"
                >
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Rétablir le contact
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
