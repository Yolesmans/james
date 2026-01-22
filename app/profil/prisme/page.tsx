'use client'

import { useEffect, useState } from 'react'
import BentoCard from '@/components/ui/BentoCard'
import { Lock } from 'lucide-react'

export default function ProfilPrismePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-4xl mx-auto px-4 pt-4 pb-12 md:pb-24">
        <BentoCard className="relative overflow-hidden" style={{ filter: 'blur(2px)', opacity: 0.7 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9]/10 to-[#A855F7]/10" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 py-12 text-center">
            <Lock className="w-8 h-8 text-axiom-amethyst" strokeWidth={1} />
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-axiom-primary">
              Le Prisme est encore voilé.
            </h2>
            <p className="text-sm text-axiom-secondary max-w-md">
              Terminez votre exploration ADN
              pour révéler votre structure profonde.
            </p>
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
