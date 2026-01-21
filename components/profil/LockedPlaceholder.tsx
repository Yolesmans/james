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
    <div className="min-h-screen flex items-center justify-center bg-axiom-bg px-4 relative">
      {/* Background blur/gradient améthyste */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-[#A855F7] opacity-5 blur-3xl" />
      <div className="absolute inset-0 backdrop-blur-xl" />
      
      <div
        className={`relative z-10 w-full max-w-md transition-all duration-500 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <BentoCard className="text-center relative overflow-hidden">
          {/* Overlay gradient améthyste subtil */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-[#A855F7] opacity-[0.03] blur-2xl pointer-events-none" />
          
          <div
            className={`relative z-10 space-y-6 transition-opacity duration-500 ease-out ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto text-axiom-secondary">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-axiom-primary leading-tight">
              Le Prisme attend votre vérité.
            </h2>
            
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                variant="prestige"
                className="px-6 py-3"
              >
                <Link href="/profil/analyse">Commencer l'exploration avec James</Link>
              </Button>
            </div>
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
