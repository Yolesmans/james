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
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#0F172A]">
              Mon ADN
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              James vous accompagne pour explorer votre fonctionnement et révéler votre Prisme.
            </p>
          </div>

          <BentoCard>
            <div className="space-y-6">
              <p className="text-[#475569]">
                Nous explorons ensemble votre réflexion pour révéler votre Prisme.
              </p>
              
              <div className="pt-4">
                <Button
                  onClick={handleCompleteAdn}
                  size="lg"
                  className="text-white font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(to right, #6D28D9, #A855F7)',
                    boxShadow: '0 10px 15px -3px rgba(109, 40, 217, 0.3)'
                  }}
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
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-t border-[rgba(26,26,27,0.1)] px-4 py-3">
          <div className="container max-w-4xl mx-auto">
            <p className="text-xs md:text-sm text-[#475569] text-center">
              Axiom est un sanctuaire. Vos données sont cryptées, privées et jamais vendues. Vous restez maître de votre ADN.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
