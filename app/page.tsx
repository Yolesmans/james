'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import BentoCard from '@/components/ui/BentoCard'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-axiom-bg overflow-hidden relative">
      {/* Logo AXIOM - Position fixed en haut à gauche */}
      <div className="fixed top-6 left-6 z-10 font-serif text-3xl md:text-4xl font-semibold text-axiom-primary">
        AXIOM
      </div>

      <div className="w-full max-w-4xl px-4">
        {/* Texte central EXACT */}
        <div className="text-center mb-16">
          <p className="font-serif font-semibold text-xl md:text-2xl text-axiom-primary tracking-tight">
            L'alignement parfait ne doit plus être du hasard.
          </p>
        </div>

        {/* Deux cartes cliquables UNIQUEMENT */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/profil" className="block">
            <BentoCard className="cursor-pointer h-full min-h-[160px] md:min-h-[180px]">
              <div className="space-y-3">
                <h2 className="text-lg md:text-xl font-serif font-semibold text-axiom-primary">
                  Votre Profil
                </h2>
                <p className="text-sm text-axiom-secondary">
                  Explorez votre fonctionnement, révélez votre Prisme, clarifiez votre Horizon.
                </p>
              </div>
            </BentoCard>
          </Link>

          <Link href="/organisation" className="block">
            <BentoCard className="cursor-pointer h-full min-h-[160px] md:min-h-[180px]">
              <div className="space-y-3">
                <h2 className="text-lg md:text-xl font-serif font-semibold text-axiom-primary">
                  Votre Organisation
                </h2>
                <p className="text-sm text-axiom-secondary">
                  Comprenez votre structure, vos rôles et vos équilibres internes.
                </p>
              </div>
            </BentoCard>
          </Link>
        </div>
      </div>
    </div>
  )
}
