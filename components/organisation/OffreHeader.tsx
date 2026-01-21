'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, MessageSquare, Archive, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Offre, Poste, Manager } from '@/lib/organisation-data'

interface OffreHeaderProps {
  offre: Offre
  poste: Poste
  manager: Manager
  onVoirProfils: () => void
  onRetablirContact: () => void
  onCloturer: () => void
  hasNext?: boolean
  hasPrev?: boolean
  onNext?: () => void
  onPrev?: () => void
}

export default function OffreHeader({
  offre,
  poste,
  manager,
  onVoirProfils,
  onRetablirContact,
  onCloturer,
  hasNext,
  hasPrev,
  onNext,
  onPrev,
}: OffreHeaderProps) {
  const getStatutBadge = () => {
    switch (offre.statut) {
      case 'active':
        return (
          <Badge variant="success" className="bg-axiom-amethyst text-white">
            Active
          </Badge>
        )
      case 'veille':
        return (
          <Badge variant="info" className="bg-axiom-heliotrope text-white">
            En veille
          </Badge>
        )
      case 'archivee':
        return (
          <Badge variant="secondary" className="bg-axiom-secondary/20 text-axiom-secondary">
            <Archive className="w-3 h-3 mr-1" />
            Clôturée
          </Badge>
        )
    }
  }

  // Icône Poste - pictogramme ligne fine (métier)
  const getPosteIcon = () => {
    // Pour l'instant, on utilise un SVG simple, mais on pourrait avoir des icônes spécifiques par métier
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-axiom-amethyst"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
      </svg>
    )
  }

  return (
    <div className="bg-white rounded-[32px] shadow-sm border border-[rgba(226,232,240,0.4)] p-6">
      <div className="flex items-start justify-between gap-4">
        {/* Navigation entre offres (desktop) */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(226,232,240,0.4)] text-axiom-secondary hover:text-axiom-primary hover:border-axiom-amethyst/20 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Contenu principal */}
        <div className="flex-1 flex items-start gap-4">
          {/* Icône Poste */}
          <div className="flex-shrink-0">
            {getPosteIcon()}
          </div>

          {/* Informations */}
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-2xl font-semibold text-axiom-primary mb-2">
              {poste.titre}
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                {/* Avatar Manager */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-axiom-amethyst/20 to-axiom-heliotrope/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-axiom-amethyst">
                    {manager.avatar}
                  </span>
                </div>
                <span className="text-sm text-axiom-secondary">
                  {manager.prenom} {manager.nom}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-axiom-secondary">Statut :</span>
                {getStatutBadge()}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation suivante (desktop) */}
        {hasNext && (
          <button
            onClick={onNext}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(226,232,240,0.4)] text-axiom-secondary hover:text-axiom-primary hover:border-axiom-amethyst/20 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Actions rapides */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="default"
            size="sm"
            onClick={onVoirProfils}
          >
            <Eye className="w-4 h-4 mr-2" />
            Voir les profils
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onRetablirContact}
            className="border-axiom-amethyst/20 text-axiom-amethyst hover:bg-axiom-amethyst/5"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Rétablir le contact
          </Button>
          {offre.statut !== 'archivee' && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onCloturer}
              className="text-axiom-secondary hover:text-axiom-primary"
            >
              <Archive className="w-4 h-4 mr-2" />
              Clôturer
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
