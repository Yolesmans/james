'use client'

import Link from 'next/link'
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
              
              <div className="pt-4">
                <Link
                  href="/candidate/matching"
                  className="inline-block bg-gradient-to-r from-[#6D28D9] to-[#A855F7] text-white rounded-2xl px-6 py-3 font-medium"
                >
                  Découvrir les entreprises compatibles
                </Link>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
