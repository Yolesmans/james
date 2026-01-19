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
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          {/* Carte de bienvenue */}
          <BentoCard>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
                Bienvenue dans votre espace
              </h1>
              <p className="text-lg text-axiom-secondary">
                Explorez votre ADN, découvrez votre Prisme et visualisez votre Horizon.
              </p>
            </div>
          </BentoCard>

          {/* Widget de progression ADN */}
          <BentoCard>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-semibold text-axiom-primary">
                  Progression de votre ADN
                </h2>
                <span className="text-xs text-axiom-primary/40">
                  Progression : {mounted ? (adnCompleted ? '100%' : '40%') : '0%'}
                </span>
              </div>
              
              {/* Barre de progression */}
              <div className="w-full rounded-full overflow-hidden" style={{ height: '4px', backgroundColor: 'rgba(241, 245, 249, 0.5)' }}>
                <div
                  className="rounded-full transition-all duration-800 ease-out bg-gradient-to-r from-[#6D28D9] to-[#A855F7]"
                  style={{
                    height: '4px',
                    width: mounted ? (adnCompleted ? '100%' : '40%') : '0%'
                  }}
                />
              </div>

              <p className="text-sm text-axiom-secondary">
                {adnCompleted
                  ? 'Votre ADN est complété. Vous pouvez maintenant accéder à votre Prisme et votre Horizon.'
                  : 'Continuez votre analyse pour débloquer votre Prisme et votre Horizon.'}
              </p>

              {!adnCompleted && (
                <div className="pt-2">
                  <Button
                    asChild
                    size="lg"
                    variant="prestige"
                    className="px-6 py-3"
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
