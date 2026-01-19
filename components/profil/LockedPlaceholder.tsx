'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'

export default function LockedPlaceholder() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD] px-4">
      <div
        className={`w-full max-w-md transition-all duration-500 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <BentoCard className="text-center bg-white border-[rgba(26,26,27,0.1)]">
          <div
            className={`space-y-6 transition-opacity duration-500 ease-out ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A1A1B] leading-tight">
              Pour révéler votre Prisme, James doit d'abord explorer votre ADN.
            </h2>
            
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#1A1A1B] hover:bg-[#1A1A1B]/90 text-white font-medium"
              >
                <Link href="/profil/analyse">Commencer l'analyse</Link>
              </Button>
            </div>
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
