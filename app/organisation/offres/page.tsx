'use client'

import Link from 'next/link'
import OffreCard from '@/components/organisation/OffreCard'
import { mockOffres, getPosteById, getManagerById } from '@/lib/organisation-data'

export default function OffresPage() {
  const offresAvecDetails = mockOffres.map(offre => {
    const poste = getPosteById(offre.posteId)
    const manager = getManagerById(offre.managerId)
    return { offre, poste, manager }
  }).filter(item => item.poste && item.manager)

  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
              Liste des Offres
            </h1>
            <p className="text-lg text-axiom-secondary max-w-2xl mx-auto">
              Fusion visuelle Poste ↔ Manager
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offresAvecDetails.map(({ offre, poste, manager }) => (
              <OffreCard
                key={offre.id}
                offre={offre}
                poste={poste!}
                manager={manager!}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
