'use client'

import BentoCard from '@/components/ui/BentoCard'

export default function ProfilFuturPage() {
  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-4xl mx-auto px-4 pt-4 pb-12 md:pb-24">
        <div className="space-y-8">
          <BentoCard>
            <div className="space-y-6 text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-semibold text-axiom-primary">
                Votre Horizon se dessine.
              </h1>
              <p className="text-sm text-axiom-secondary">
                L'Horizon n'est accessible
                qu'une fois le Prisme révélé.
              </p>
              <p className="text-xs text-axiom-secondary">
                Il ne s'agit pas d'un métier,
                mais d'un champ de cohérence possible.
              </p>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
