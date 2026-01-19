'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAdnCompleted } from '@/lib/adn'
import BentoCard from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/button'

export default function ProfilPage() {
  const [mounted, setMounted] = useState(false)
  const [adnCompleted, setAdnCompleted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setAdnCompleted(getAdnCompleted())
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          {/* Carte de bienvenue */}
          <BentoCard>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#0F172A]">
                Bienvenue dans votre espace
              </h1>
              <p className="text-lg text-[#475569]">
                Explorez votre ADN, découvrez votre Prisme et visualisez votre Horizon.
              </p>
            </div>
          </BentoCard>

          {/* Widget de progression ADN */}
          <BentoCard>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-semibold text-[#0F172A]">
                  Progression de votre ADN
                </h2>
                <span className="text-sm text-[#475569]">
                  {adnCompleted ? 'Complété' : 'En cours'}
                </span>
              </div>
              
              {/* Barre de progression */}
              <div className="w-full h-2 bg-[rgba(226,232,240,0.3)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-800 ease-out animate-pulse"
                  style={{
                    width: mounted ? (adnCompleted ? '100%' : '40%') : '0%',
                    background: 'linear-gradient(to right, #6D28D9, #A855F7)'
                  }}
                />
              </div>

              <p className="text-sm text-[#475569]">
                {adnCompleted
                  ? 'Votre ADN est complété. Vous pouvez maintenant accéder à votre Prisme et votre Horizon.'
                  : 'Continuez votre analyse pour débloquer votre Prisme et votre Horizon.'}
              </p>

              {!adnCompleted && (
                <div className="pt-2">
                  <Button
                    asChild
                    size="lg"
                    className="text-white font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(to right, #6D28D9, #A855F7)',
                      boxShadow: '0 10px 15px -3px rgba(109, 40, 217, 0.3)'
                    }}
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
