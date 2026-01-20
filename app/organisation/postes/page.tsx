'use client'

import { mockPostes } from '@/lib/organisation-data'
import BentoCard from '@/components/ui/BentoCard'

export default function PostesPage() {
  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
              Bibliothèque de Postes
            </h1>
            <p className="text-lg text-axiom-secondary max-w-2xl mx-auto">
              Entités indépendantes. Créez et gérez vos postes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPostes.map((poste) => (
              <BentoCard key={poste.id}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{poste.icone}</div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-axiom-primary">
                        {poste.titre}
                      </h3>
                      <p className="text-sm text-axiom-secondary mt-1">
                        {poste.departement}
                      </p>
                    </div>
                  </div>
                  <p className="text-axiom-secondary text-sm">
                    {poste.description}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
