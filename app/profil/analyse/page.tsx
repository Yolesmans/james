'use client'

import { useEffect, useState } from 'react'
import { getAdnCompleted, setAdnCompleted } from '@/lib/adn'
import BentoCard from '@/components/ui/BentoCard'
import Link from 'next/link'

export default function ProfilAnalysePage() {
  const [mounted, setMounted] = useState(false)
  const [adnCompleted, setAdnCompletedState] = useState(false)

  useEffect(() => {
    setMounted(true)
    setAdnCompletedState(getAdnCompleted())
  }, [])

  const handleCompleteAdn = () => {
    setAdnCompleted(true)
    setAdnCompletedState(true)
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
              James vous accompagne pour explorer votre fonctionnement
              et révéler votre Prisme.
            </p>
          </div>

          <BentoCard>
            <div className="space-y-6">
              <p className="text-axiom-secondary">
                Nous explorons ensemble votre manière de réfléchir,
                de décider et d'interagir avec le réel.
              </p>
              
              <div className="pt-4">
                <Link
                  href="/profil/analyse"
                  onClick={handleCompleteAdn}
                  className="inline-block bg-gradient-to-r from-[#6D28D9] to-[#A855F7] text-white rounded-2xl px-6 py-3 font-medium"
                >
                  {adnCompleted ? 'Continuer mon ADN' : 'Compléter mon ADN'}
                </Link>
              </div>
            </div>
          </BentoCard>

          <p className="text-xs text-axiom-secondary text-center">
            Il n'y a pas de bonne réponse.
            Seulement la vôtre.
          </p>
        </div>
      </div>
    </div>
  )
}
