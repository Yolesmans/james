'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BentoCard from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const [showThemeSelector, setShowThemeSelector] = useState(false)
  const router = useRouter()

  const handleProfilClick = () => {
    setShowThemeSelector(true)
  }

  const handleThemeChoice = (theme: 'light' | 'dark') => {
    localStorage.setItem('axiom-theme', theme)
    router.push('/profil')
  }

  const handleOrganisationClick = () => {
    localStorage.setItem('axiom-theme', 'light')
    router.push('/organisation')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD] overflow-hidden">
      <div className="w-full max-w-4xl px-4">
        <div className="text-center mb-16">
          <p className="text-5xl font-serif text-[#1A1A1B]">
            L'alignement parfait ne doit plus être du hasard, mais une évidence.
          </p>
        </div>

        {!showThemeSelector ? (
          <div className="grid md:grid-cols-2 gap-6">
            <BentoCard
              className="cursor-pointer transition-all hover:scale-[1.02]"
              onClick={handleProfilClick}
            >
              <h2 className="text-2xl font-serif font-semibold text-[#1A1A1B]">
                Votre Profil
              </h2>
            </BentoCard>

            <BentoCard
              className="cursor-pointer transition-all hover:scale-[1.02]"
              onClick={handleOrganisationClick}
            >
              <h2 className="text-2xl font-serif font-semibold text-[#1A1A1B]">
                Votre Organisation
              </h2>
            </BentoCard>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <BentoCard>
              <div className="space-y-6">
                <p className="text-lg text-[#1A1A1B] text-center">
                  Choisissez votre univers : Clair / Sombre
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => handleThemeChoice('light')}
                    className="flex-1 bg-[#10B981] hover:bg-[#10B981]/90 text-white"
                  >
                    Clair
                  </Button>
                  <Button
                    onClick={() => handleThemeChoice('dark')}
                    className="flex-1 bg-[#10B981] hover:bg-[#10B981]/90 text-white"
                  >
                    Sombre
                  </Button>
                </div>
              </div>
            </BentoCard>
          </div>
        )}
      </div>
    </div>
  )
}
