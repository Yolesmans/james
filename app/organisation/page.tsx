'use client'

import OffreCard from '@/components/organisation/OffreCard'
import { mockOffres, mockPostes, mockManagers, getPosteById, getManagerById } from '@/lib/organisation-data'

export default function OrganisationDashboard() {
  const offresAvecDetails = mockOffres
    .filter(offre => offre.statut !== 'archivee')
    .map(offre => {
      const poste = getPosteById(offre.posteId)
      const manager = getManagerById(offre.managerId)
      return { offre, poste, manager }
    })
    .filter(item => item.poste && item.manager)

  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-12">
          {/* En-tête avec slogan */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
              Espace Organisation
            </h1>
            <p className="text-lg text-axiom-secondary max-w-2xl mx-auto font-serif italic">
              L'alignement parfait ne doit plus être du hasard…
              <br />
              Mais une évidence.
            </p>
          </div>

          {/* Grille de cartes d'Offres (Monolithes) */}
          {offresAvecDetails.length > 0 ? (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-axiom-secondary">
                Aucune offre active pour le moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
