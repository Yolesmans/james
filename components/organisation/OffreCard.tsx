'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link2, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Offre, Poste, Manager } from '@/lib/organisation-data'

interface OffreCardProps {
  offre: Offre
  poste: Poste
  manager: Manager
  onGenererLiens?: () => void
}

export default function OffreCard({ offre, poste, manager, onGenererLiens }: OffreCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        'bg-white rounded-[32px] shadow-sm border border-[rgba(226,232,240,0.4)]',
        'transition-all duration-300 group',
        'hover:shadow-md hover:border-axiom-amethyst/20'
      )}
      style={{ backgroundColor: '#FFFFFF' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Duo visuel : Icône Poste + Avatar Manager */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{poste.icone}</div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-axiom-primary">
                {poste.titre}
              </h3>
              <p className="text-sm text-axiom-secondary mt-1">
                {manager.prenom} {manager.nom}
              </p>
            </div>
          </div>
          
          {/* Badge Améthyste pulsant si nouveaux Intérêts Confirmés */}
          {offre.nouveauxInteretsConfirmes > 0 && (
            <Badge 
              variant="success" 
              className="bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope text-white animate-pulse-slow shadow-sm"
            >
              {offre.nouveauxInteretsConfirmes} nouveau{offre.nouveauxInteretsConfirmes > 1 ? 'x' : ''}
            </Badge>
          )}
        </div>

        {/* Boutons masqués par défaut, visibles au hover */}
        <div
          className={cn(
            'flex items-center gap-3 transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          )}
        >
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-axiom-amethyst/20 text-axiom-amethyst hover:bg-axiom-amethyst/5"
            onClick={onGenererLiens || (() => window.location.href = `/organisation/offres/${offre.id}`)}
          >
            <Link2 className="w-4 h-4 mr-2" />
            Générer liens
          </Button>
          <Link href={`/organisation/offres/${offre.id}`}>
            <Button
              variant="default"
              size="sm"
              className="flex-1"
            >
              <Eye className="w-4 h-4 mr-2" />
              Voir détails
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
