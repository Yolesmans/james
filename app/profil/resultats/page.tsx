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
      <div className="min-h-screen flex items-center justify-center bg-axiom-bg">
        <div className="text-axiom-primary">Chargement...</div>
      </div>
    )
  }

  // Si l'ADN n'est pas complété, afficher le contenu avec effet de verrouillage visuel
  if (!adnCompleted) {
    return (
      <div className="min-h-screen bg-axiom-bg pb-20 backdrop-blur-xl">
        <div className="container max-w-6xl mx-auto px-4 pt-4 pb-12 md:pb-24">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
                Le Prisme attend votre vérité.
              </h1>
            </div>

            {/* Bento Grid avec effet de verrouillage visuel */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="min-h-[200px] relative" style={{ filter: 'blur(12px)', opacity: 0.5 }}>
                  <BentoCard className="backdrop-blur-xl">
                    <div className="absolute top-4 right-4 z-10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-axiom-secondary">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 bg-[rgba(226,232,240,0.2)] rounded-lg flex items-center justify-center">
                        <span className="text-sm text-axiom-secondary">Data-viz placeholder</span>
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-axiom-primary">
                        Axe {item}
                      </h3>
                      <p className="text-sm text-axiom-secondary">
                        Résonance à explorer
                      </p>
                    </div>
                  </BentoCard>
                </div>
              ))}
            </div>
            
            {/* Overlay central avec invitation */}
            <div className="flex items-center justify-center mt-8">
              <BentoCard className="text-center max-w-md">
                <div className="space-y-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto text-axiom-secondary">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <p className="text-lg font-serif font-semibold text-axiom-primary">
                    Complétez votre ADN pour révéler votre Prisme
                  </p>
                  <Link 
                    href="/profil/analyse"
                    className="inline-block mt-4 px-6 py-3 bg-[linear-gradient(135deg,#6D28D9_0%,#A855F7_100%)] text-white font-semibold text-sm rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-sans"
                  >
                    Explorer mon ADN
                  </Link>
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Si l'ADN est complété, afficher le contenu avec BentoGrid
  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 pt-4 pb-12 md:pb-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
              Mon Prisme
            </h1>
            <p className="text-lg text-axiom-secondary max-w-2xl mx-auto">
              Découvrez les résonances de votre profil explorées avec James.
            </p>
          </div>

          {/* Bento Grid avec placeholders pour data-viz */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <BentoCard key={item} className="min-h-[200px]">
                <div className="space-y-4">
                  <div className="h-32 bg-[rgba(226,232,240,0.2)] rounded-lg flex items-center justify-center">
                    <span className="text-sm text-axiom-secondary">Data-viz placeholder</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-axiom-primary">
                    Axe {item}
                  </h3>
                  <p className="text-sm text-axiom-secondary">
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
