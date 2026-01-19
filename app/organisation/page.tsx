'use client'

import BentoCard from '@/components/ui/BentoCard'

export default function OrganisationPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1A1B]">
              Espace Organisation
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Cet espace sera bientôt configuré.
            </p>
          </div>

          <BentoCard className="bg-white border-[rgba(26,26,27,0.1)]">
            <div className="space-y-4">
              <p className="text-[#4B5563]">
                L'espace Organisation vous permettra de gérer votre entreprise et vos équipes.
              </p>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
