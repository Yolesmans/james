'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAdnCompleted } from '@/lib/adn'
import BentoCard from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/button'

const MANIFESTE_STORAGE_KEY = 'axiom_profil_manifeste_vu'

export default function ProfilPage() {
  const [mounted, setMounted] = useState(false)
  const [adnCompleted, setAdnCompleted] = useState(false)
  const [showManifeste, setShowManifeste] = useState(false)

  useEffect(() => {
    setMounted(true)
    setAdnCompleted(getAdnCompleted())
    
    // Vérifier si le manifeste a déjà été vu
    if (typeof window !== 'undefined') {
      const manifesteVu = localStorage.getItem(MANIFESTE_STORAGE_KEY)
      if (!manifesteVu) {
        setShowManifeste(true)
      }
    }
  }, [])

  const handleEnterEspace = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(MANIFESTE_STORAGE_KEY, 'true')
    }
    setShowManifeste(false)
  }

  // Afficher le manifeste d'entrée si première visite
  if (showManifeste) {
    return (
      <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-serif font-semibold text-[#1A1A1B] leading-relaxed">
              Ici, le monde extérieur n'existe plus.
              <br />
              Ce que vous confiez à James est protégé, crypté,
              <br />
              et n'appartient qu'à vous.
              <br />
              Soyez authentique,
              <br />
              vous êtes dans votre sanctuaire.
            </p>
          </div>
          <Button
            onClick={handleEnterEspace}
            size="lg"
            className="bg-[#1A1A1B] hover:bg-[#1A1A1B]/90 text-white font-medium"
          >
            Entrer dans mon espace
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          {/* Carte de bienvenue */}
          <BentoCard className="bg-white border-[rgba(26,26,27,0.1)]">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1A1B]">
                Bienvenue dans votre espace
              </h1>
              <p className="text-lg text-[#4B5563]">
                Explorez votre ADN, découvrez votre Prisme et visualisez votre Horizon.
              </p>
            </div>
          </BentoCard>

          {/* Widget de progression ADN */}
          <BentoCard className="bg-white border-[rgba(26,26,27,0.1)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-semibold text-[#1A1A1B]">
                  Progression de votre ADN
                </h2>
                <span className="text-sm text-[#4B5563]">
                  {adnCompleted ? 'Complété' : 'En cours'}
                </span>
              </div>
              
              {/* Barre de progression */}
              <div className="w-full h-2 bg-[rgba(26,26,27,0.08)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1A1A1B] rounded-full transition-all duration-800 ease-out"
                  style={{ width: mounted ? (adnCompleted ? '100%' : '40%') : '0%' }}
                />
              </div>

              <p className="text-sm text-[#4B5563]">
                {adnCompleted
                  ? 'Votre ADN est complété. Vous pouvez maintenant accéder à votre Prisme et votre Horizon.'
                  : 'Continuez votre analyse pour débloquer votre Prisme et votre Horizon.'}
              </p>

              {!adnCompleted && (
                <div className="pt-2">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#1A1A1B] hover:bg-[#1A1A1B]/90 text-white font-medium"
                  >
                    <Link href="/profil/analyse">
                      Reprendre l'analyse avec James
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
