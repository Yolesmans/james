'use client'

import { useEffect, useState } from 'react'
import { getAdnCompleted } from '@/lib/adn'
import LockedPlaceholder from '@/components/profil/LockedPlaceholder'

export default function ProfilFuturPage() {
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

  // Si l'ADN n'est pas complété, afficher le placeholder verrouillé
  if (!adnCompleted) {
    return <LockedPlaceholder />
  }

  // Si l'ADN est complété, afficher le contenu
  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-4xl mx-auto px-4 pt-4 pb-12 md:pb-24">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
              Mon Horizon
            </h1>
            <p className="text-lg text-axiom-secondary">
              James explore avec vous les écosystèmes qui résonnent avec votre fréquence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
