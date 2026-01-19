'use client'

import { useEffect, useState } from 'react'
import { getAdnCompleted } from '@/lib/adn'
import LockedPlaceholder from '@/components/profil/LockedPlaceholder'
import BentoCard from '@/components/ui/BentoCard'

export default function ProfilResultatsPage() {
  const [adnCompleted, setAdnCompleted] = useState<boolean | null>(null)

  useEffect(() => {
    setAdnCompleted(getAdnCompleted())
  }, [])

  // Afficher le placeholder pendant le chargement
  if (adnCompleted === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD]">
        <div className="text-[#1A1A1B]">Chargement...</div>
      </div>
    )
  }

  // Si l'ADN n'est pas complété, afficher le placeholder verrouillé
  if (!adnCompleted) {
    return <LockedPlaceholder />
  }

  // Si l'ADN est complété, afficher le contenu avec BentoGrid
  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1A1B]">
              Mon Prisme
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Découvrez les dimensions de votre profil révélées par James.
            </p>
          </div>

          {/* Bento Grid avec placeholders pour data-viz */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <BentoCard key={item} className="bg-white border-[rgba(26,26,27,0.1)] min-h-[200px]">
                <div className="space-y-4">
                  <div className="h-32 bg-[rgba(26,26,27,0.05)] rounded-lg flex items-center justify-center">
                    <span className="text-sm text-[#4B5563]">Data-viz placeholder</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#1A1A1B]">
                    Dimension {item}
                  </h3>
                  <p className="text-sm text-[#4B5563]">
                    Visualisation à venir
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
