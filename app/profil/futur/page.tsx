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
      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD]">
        <div className="text-[#1A1A1B]">Chargement...</div>
      </div>
    )
  }

  // Si l'ADN n'est pas complété, afficher le placeholder verrouillé
  if (!adnCompleted) {
    return <LockedPlaceholder />
  }

  // Si l'ADN est complété, afficher le contenu (placeholder minimal pour l'instant)
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD] px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1A1B] mb-4">
          Votre futur
        </h1>
        <p className="text-lg text-[#4B5563]">
          Contenu à venir
        </p>
      </div>
    </div>
  )
}
