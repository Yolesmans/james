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
    <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD] overflow-hidden relative">
      {/* Logo AXIOM - Position fixed en haut à gauche */}
      <div
        className={`fixed top-6 left-6 z-10 font-serif text-xl text-[#1A1A1B] transition-all duration-[900ms] ease-out ${
          mounted ? 'opacity-85 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        AXIOM
      </div>

      <div className="w-full max-w-4xl px-4">
        {/* Manifeste - Phrase centrale */}
        <div
          className={`text-center mb-16 transition-all duration-[900ms] ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="font-serif font-semibold text-4xl md:text-6xl text-[#1A1A1B] tracking-tight">
            L'alignement parfait ne doit plus être du hasard, mais une évidence.
          </p>
        </div>

        {/* Cartes - Votre Profil / Votre Organisation */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-[900ms] ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Link href="/profil" className="block">
            <BentoCard className="cursor-pointer transition-all duration-300 hover:bg-[#FAFAFA] hover:border-[rgba(26,26,27,0.2)] hover:-translate-y-0.5 bg-white border-[rgba(26,26,27,0.08)]">
              <h2 className="text-2xl font-serif font-semibold text-[#1A1A1B]">
                Votre Profil
              </h2>
            </BentoCard>
          </Link>

          <Link href="/organisation" className="block">
            <BentoCard className="cursor-pointer transition-all duration-300 hover:bg-[#FAFAFA] hover:border-[rgba(26,26,27,0.2)] hover:-translate-y-0.5 bg-white border-[rgba(26,26,27,0.08)]">
              <h2 className="text-2xl font-serif font-semibold text-[#1A1A1B]">
                Votre Organisation
              </h2>
            </BentoCard>
          </Link>
        </div>
      </div>
    </div>
  )
}
