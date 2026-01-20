'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ProfilResonance } from '@/lib/organisation-data'

interface IntentionCandidatProps {
  profils: ProfilResonance[]
  onPlanifierEntretien: (profilId: string) => void
  onRetablirResonance: (profilId: string) => void
  onRelanceDouce: (profilId: string) => void
}

export default function IntentionCandidat({
  profils,
  onPlanifierEntretien,
  onRetablirResonance,
  onRelanceDouce,
}: IntentionCandidatProps) {
  const profilsConfirmes = profils.filter(p => p.intention === 'confirme')
  const profilsPlusTard = profils.filter(p => p.intention === 'plus-tard')
  const profilsEnCours = profils.filter(p => p.enCours && !p.alignementTermine)

  if (profilsConfirmes.length === 0 && profilsPlusTard.length === 0 && profilsEnCours.length === 0) {
    return null
  }

  return (
    <div className="bg-gradient-to-br from-axiom-amethyst/5 via-axiom-heliotrope/3 to-axiom-amethyst/5 rounded-axiom border border-axiom-amethyst/10 p-6">
      <h3 className="font-serif text-lg font-semibold text-axiom-primary mb-4">
        Intention Candidat
      </h3>

      <div className="space-y-6">
        {/* Intérêt confirmé */}
        {profilsConfirmes.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-axiom-amethyst/20 to-axiom-heliotrope/20 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-axiom-amethyst"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-axiom-primary">
                Intérêt confirmé ({profilsConfirmes.length})
              </span>
            </div>
            <div className="space-y-2">
              {profilsConfirmes.slice(0, 3).map((profil) => (
                <div
                  key={profil.id}
                  className="flex items-center justify-between bg-white rounded-lg p-3 border border-[rgba(226,232,240,0.4)]"
                >
                  <div>
                    <div className="text-sm font-medium text-axiom-primary">
                      {profil.identiteAnonyme}
                    </div>
                    <div className="text-xs text-axiom-secondary">
                      {profil.etiquettePersonnalite}
                    </div>
                  </div>
                  {!profil.entretienPlanifie && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onPlanifierEntretien(profil.id)}
                      className="border-axiom-amethyst/20 text-axiom-amethyst hover:bg-gradient-to-r hover:from-axiom-amethyst/5 hover:to-axiom-heliotrope/5"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      Planifier
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Intérêt "plus tard" */}
        {profilsPlusTard.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-axiom-amethyst" strokeWidth={1.5} />
              <span className="text-sm font-medium text-axiom-primary">
                Intérêt "plus tard" ({profilsPlusTard.length})
              </span>
            </div>
            <div className="space-y-3">
              {profilsPlusTard.slice(0, 2).map((profil) => (
                <div
                  key={profil.id}
                  className="bg-white rounded-lg p-4 border border-[rgba(226,232,240,0.4)]"
                >
                  <div className="mb-3">
                    <div className="text-sm font-medium text-axiom-primary mb-1">
                      {profil.identiteAnonyme}
                    </div>
                    <div className="text-xs text-axiom-secondary">
                      {profil.etiquettePersonnalite}
                    </div>
                  </div>
                  <p className="text-xs text-axiom-secondary italic mb-3 font-serif">
                    L'alignement est disponible.
                    <br />
                    Souhaitez-vous confirmer votre intérêt à votre rythme ?
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRetablirResonance(profil.id)}
                    className="text-axiom-amethyst hover:bg-gradient-to-r hover:from-axiom-amethyst/5 hover:to-axiom-heliotrope/5"
                  >
                    Rétablir la résonance
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profil en cours */}
        {profilsEnCours.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-axiom-secondary" strokeWidth={1.5} />
              <span className="text-sm font-medium text-axiom-primary">
                Profil en cours ({profilsEnCours.length})
              </span>
            </div>
            <div className="space-y-2">
              {profilsEnCours.slice(0, 2).map((profil) => (
                <div
                  key={profil.id}
                  className="flex items-center justify-between bg-white rounded-lg p-3 border border-[rgba(226,232,240,0.4)]"
                >
                  <div>
                    <div className="text-sm font-medium text-axiom-primary">
                      {profil.identiteAnonyme}
                    </div>
                    <div className="text-xs text-axiom-secondary">
                      Progression en cours
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRelanceDouce(profil.id)}
                    className="text-axiom-secondary hover:text-axiom-primary"
                  >
                    <MessageSquare className="w-3 h-3 mr-1" />
                    Relance douce
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
