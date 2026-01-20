'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, MessageSquare, Link2, X, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ProfilResonance } from '@/lib/organisation-data'

interface ListingPrecisionProps {
  profils: ProfilResonance[]
  isOpen: boolean
  onClose: () => void
  onPlanifierEntretien: (profilId: string) => void
  onRetablirContact: (profilId: string) => void
  onGenererLien: (profilId: string) => void
}

export default function ListingPrecision({
  profils,
  isOpen,
  onClose,
  onPlanifierEntretien,
  onRetablirContact,
  onGenererLien,
}: ListingPrecisionProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop blur */}
      <div
        className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-full md:w-[600px] bg-axiom-surface shadow-xl z-50',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[rgba(226,232,240,0.4)]">
            <h2 className="font-serif text-xl font-semibold text-axiom-primary">
              Profils en Résonance
            </h2>
            <button
              onClick={onClose}
              className="text-axiom-secondary hover:text-axiom-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {profils.length === 0 ? (
              <div className="text-center py-12 text-axiom-secondary">
                <p>Aucun profil en résonance pour cette offre.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {profils.map((profil) => (
                  <div
                    key={profil.id}
                    className="bg-white border border-[rgba(226,232,240,0.4)] rounded-axiom p-4 hover:border-axiom-amethyst/20 transition-all duration-300"
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
                              strokeWidth="3"
                              fill="none"
                              className="text-axiom-muted"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="currentColor"
                              strokeWidth="3"
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
                              strokeWidth={2}
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
                            <Calendar className="w-3 h-3 mr-1" />
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
                            <MessageSquare className="w-3 h-3 mr-1" />
                            Rétablir
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
