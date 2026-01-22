'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showStat, setShowStat] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => setShowStat(true), 2000)
    return () => clearTimeout(timer)
  }, [mounted])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative">
      <div className="fixed top-6 left-6 z-10 font-serif text-3xl md:text-4xl font-semibold" style={{ color: '#111827' }}>
        AXIOM
      </div>

      <div className="w-full max-w-5xl px-4">
        <div className="text-center mb-24">
          <h1 className="font-sans font-medium text-4xl md:text-6xl leading-tight" style={{ color: '#111827', letterSpacing: '-0.02em' }}>
            L'alignement parfait ne doit plus être du hasard... Mais une évidence.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/organisation" className="block group">
            <div className="bg-white rounded-2xl p-12 min-h-[240px] border border-[#F3F4F6] hover:shadow-2xl transition-all relative" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-sans font-medium mb-4" style={{ color: '#111827' }}>
                  Je cherche un moteur pour mon équipe
                </h2>
              </div>
            </div>
          </Link>

          <Link href="/profil/depart" className="block group">
            <div className="bg-white rounded-2xl p-12 min-h-[240px] border border-[#F3F4F6] hover:shadow-2xl transition-all relative" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-sans font-medium mb-4" style={{ color: '#111827' }}>
                  Je cherche un terrain pour mon talent
                </h2>
              </div>
            </div>
          </Link>
        </div>

        {showStat && (
          <div className="text-center">
            <p className="text-sm font-sans" style={{ color: '#111827' }}>
              70% des offres mentent. AXIOM rétablit la vérité.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}