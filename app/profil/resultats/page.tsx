'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAdnCompleted } from '@/lib/adn'
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
        <div className="text-[#0F172A]">Chargement...</div>
      </div>
    )
  }

  // Si l'ADN n'est pas complété, afficher le contenu avec effet de verrouillage visuel
  if (!adnCompleted) {
    return (
      <div className="min-h-screen bg-[#FDFDFD] pb-20">
        <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#0F172A]">
                Le Prisme est dans l'ombre.
              </h1>
              <p className="text-lg text-[#475569] max-w-2xl mx-auto">
                Complétez votre ADN pour révéler votre Prisme.
              </p>
            </div>

            {/* Bento Grid avec effet de verrouillage visuel */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {/* Overlay central */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="text-center space-y-4 bg-white/90 backdrop-blur-sm rounded-[28px] p-8 border border-[rgba(226,232,240,0.5)]">
                  <p className="text-xl font-serif font-semibold text-[#0F172A]">
                    Complétez votre ADN pour révéler votre Prisme
                  </p>
                  <Link 
                    href="/profil/analyse"
                    className="inline-block mt-4 px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(to right, #6D28D9, #A855F7)',
                      boxShadow: '0 10px 15px -3px rgba(109, 40, 217, 0.3)'
                    }}
                  >
                    Explorer mon ADN
                  </Link>
                </div>
              </div>
              
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <BentoCard key={item} className="min-h-[200px] blur-md grayscale opacity-50">
                  <div className="space-y-4">
                    <div className="h-32 bg-[rgba(226,232,240,0.2)] rounded-lg flex items-center justify-center">
                      <span className="text-sm text-[#475569]">Data-viz placeholder</span>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-[#0F172A]">
                      Axe {item}
                    </h3>
                    <p className="text-sm text-[#475569]">
                      Résonance à explorer
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

  // Si l'ADN est complété, afficher le contenu avec BentoGrid
  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#0F172A]">
              Mon Prisme
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Découvrez les résonances de votre profil explorées avec James.
            </p>
          </div>

          {/* Bento Grid avec placeholders pour data-viz */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <BentoCard key={item} className="min-h-[200px]">
                <div className="space-y-4">
                  <div className="h-32 bg-[rgba(226,232,240,0.2)] rounded-lg flex items-center justify-center">
                    <span className="text-sm text-[#475569]">Data-viz placeholder</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#0F172A]">
                    Axe {item}
                  </h3>
                  <p className="text-sm text-[#475569]">
                    Résonance à explorer
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
