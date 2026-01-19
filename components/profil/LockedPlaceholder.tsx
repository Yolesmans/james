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
        <BentoCard className="text-center">
          <div
            className={`space-y-6 transition-opacity duration-500 ease-out ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#0F172A] leading-tight">
              Pour révéler votre Prisme, explorons ensemble votre ADN.
            </h2>
            
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="text-white font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #6D28D9, #A855F7)',
                  boxShadow: '0 10px 15px -3px rgba(109, 40, 217, 0.3)'
                }}
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
