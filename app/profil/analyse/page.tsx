'use client'

import { useEffect, useState } from 'react'
import { setAdnCompleted } from '@/lib/adn'
import BentoCard from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/button'

export default function ProfilAnalysePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCompleteAdn = () => {
    setAdnCompleted(true)
    // Optionnel: redirection ou notification
  }

  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-4xl mx-auto px-4 pt-4 pb-12 md:pb-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
              Mon ADN
            </h1>
            <p className="text-lg text-axiom-secondary max-w-2xl mx-auto">
              James vous accompagne pour explorer votre fonctionnement et révéler votre Prisme.
            </p>
          </div>

          <BentoCard>
            <div className="space-y-6">
              <p className="text-axiom-secondary">
                Nous explorons ensemble votre réflexion pour révéler votre Prisme.
              </p>
              
              <div className="pt-4">
                <Button
                  onClick={handleCompleteAdn}
                  size="lg"
                  variant="prestige"
                  className="px-6 py-3"
                >
                  Compléter mon ADN
                </Button>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Bandeau de confidentialité */}
      {mounted && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-axiom-surface/80 backdrop-blur-sm border-t border-[rgba(226,232,240,0.4)] px-4 py-3">
          <div className="container max-w-4xl mx-auto">
            <p className="text-xs md:text-sm text-axiom-secondary text-center">
              Axiom est un sanctuaire. Vos données sont cryptées, privées et jamais vendues. Vous restez maître de votre ADN.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
