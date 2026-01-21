'use client'

import { mockManagers } from '@/lib/organisation-data'
import BentoCard from '@/components/ui/BentoCard'

export default function ManagersPage() {
  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
              Galerie de Managers
            </h1>
            <p className="text-lg text-axiom-secondary max-w-2xl mx-auto">
              Entités indépendantes. Gérez vos managers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockManagers.map((manager) => (
              <BentoCard key={manager.id}>
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-axiom-amethyst/20 to-axiom-heliotrope/20 flex items-center justify-center">
                    <span className="text-xl font-semibold text-axiom-amethyst">
                      {manager.avatar}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-axiom-primary">
                      {manager.prenom} {manager.nom}
                    </h3>
                    <p className="text-sm text-axiom-secondary mt-1">
                      {manager.departement}
                    </p>
                    <p className="text-xs text-axiom-secondary mt-2">
                      {manager.email}
                    </p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
