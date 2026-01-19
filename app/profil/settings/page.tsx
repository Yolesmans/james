'use client'

import { useEffect, useState } from 'react'
import BentoCard from '@/components/ui/BentoCard'

export default function ProfilSettingsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#0F172A]">
              Paramètres
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Gérez vos préférences et vos données.
            </p>
          </div>

          <BentoCard>
            <div className="space-y-6">
              <p className="text-[#475569]">
                Les paramètres seront disponibles prochainement.
              </p>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
