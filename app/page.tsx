'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import BentoCard from '@/components/ui/BentoCard'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [isPaused, setIsPaused] = useState(false)
  const firstPart = "L'alignement parfait ne doit plus être du hasard..."
  const secondPart = "mais une évidence !"
  const pauseDuration = 800 // Durée de la pause en millisecondes

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    let currentIndex = 0
    let paused = false
    const typingSpeed = 50 // Vitesse de frappe en millisecondes
    let timeoutId: NodeJS.Timeout | null = null

    const typeWriter = () => {
      // Première partie : jusqu'à "du hasard,"
      if (currentIndex < firstPart.length) {
        setDisplayedText(firstPart.slice(0, currentIndex + 1))
        setIsPaused(false)
        currentIndex++
        timeoutId = setTimeout(typeWriter, typingSpeed)
      } 
      // Pause après la première partie
      else if (currentIndex === firstPart.length && !paused) {
        paused = true
        setIsPaused(true)
        timeoutId = setTimeout(() => {
          paused = false
          setIsPaused(false)
          currentIndex++
          typeWriter()
        }, pauseDuration)
      }
      // Deuxième partie : "mais une évidence."
      else if (currentIndex > firstPart.length) {
        const secondPartIndex = currentIndex - firstPart.length - 1
        if (secondPartIndex < secondPart.length) {
          setDisplayedText(firstPart + '\n' + secondPart.slice(0, secondPartIndex + 1))
          setIsPaused(false)
          currentIndex++
          timeoutId = setTimeout(typeWriter, typingSpeed)
        }
      }
    }

    // Démarrer l'effet après un court délai
    const timer = setTimeout(typeWriter, 400)
    return () => {
      clearTimeout(timer)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [mounted, firstPart, secondPart, pauseDuration])

  return (
    <div className="min-h-screen flex items-center justify-center bg-axiom-bg overflow-hidden relative">
      {/* Logo AXIOM - Position fixed en haut à gauche */}
      <div
        className={`fixed top-6 left-6 z-10 font-serif text-3xl md:text-4xl font-semibold text-[#0F172A] transition-all duration-[900ms] ease-out ${
          mounted ? 'opacity-85 translate-y-0' : 'opacity-85 translate-y-0'
        }`}
      >
        AXIOM
      </div>

      <div className="w-full max-w-4xl px-4">
        {/* Manifeste - Phrase centrale */}
        <div
          className={`text-center mb-16 transition-all duration-[900ms] ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="font-serif font-semibold text-xl md:text-2xl text-[#0F172A] tracking-tight whitespace-pre-line">
            {displayedText || firstPart}
            {((displayedText.length < firstPart.length && displayedText.length > 0) || 
              isPaused ||
              (displayedText.includes('\n') && displayedText.length < firstPart.length + 1 + secondPart.length)) && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        </div>

        {/* Cartes - Votre Profil / Votre Organisation */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-[900ms] ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Link href="/profil" className="block group">
            <BentoCard className="cursor-pointer transition-all duration-500 ease-out h-full flex items-center justify-center min-h-[160px] md:min-h-[180px] relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02]">
              <h2 className="text-lg md:text-xl font-serif font-semibold text-axiom-primary text-center tracking-tight relative z-10 transition-all duration-300 group-hover:tracking-wide">
                Votre Profil
              </h2>
            </BentoCard>
          </Link>

          <Link href="/organisation" className="block group">
            <BentoCard className="cursor-pointer transition-all duration-500 ease-out h-full flex items-center justify-center min-h-[160px] md:min-h-[180px] relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02]">
              <h2 className="text-lg md:text-xl font-serif font-semibold text-axiom-primary text-center tracking-tight relative z-10 transition-all duration-300 group-hover:tracking-wide">
                Votre Organisation
              </h2>
            </BentoCard>
          </Link>
        </div>
      </div>
    </div>
  )
}
