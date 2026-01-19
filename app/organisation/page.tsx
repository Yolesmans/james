'use client'

import BentoCard from '@/components/ui/BentoCard'

export default function OrganisationPage() {
  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
              Espace Organisation
            </h1>
            <p className="text-lg text-axiom-secondary max-w-2xl mx-auto">
              Cet espace sera bientôt configuré.
            </p>
          </div>

          <BentoCard>
            <div className="space-y-4">
              <p className="text-axiom-secondary">
                L'espace Organisation vous permettra de gérer votre entreprise et vos équipes.
              </p>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
