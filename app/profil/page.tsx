'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAdnCompleted } from '@/lib/adn'
import BentoCard from '@/components/ui/BentoCard'
import { Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MANIFESTE_STORAGE_KEY = 'axiom_profil_manifeste_vu'

export default function ProfilPage() {
  const [mounted, setMounted] = useState(false)
  const [adnCompleted, setAdnCompleted] = useState(false)
  const [showManifeste, setShowManifeste] = useState(false)

  useEffect(() => {
    setMounted(true)
    setAdnCompleted(getAdnCompleted())
    
    // Vérifier si le manifeste a déjà été vu
    if (typeof window !== 'undefined') {
      const manifesteVu = localStorage.getItem(MANIFESTE_STORAGE_KEY)
      if (!manifesteVu) {
        setShowManifeste(true)
      }
    }
  }, [])

  const handleEnterEspace = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(MANIFESTE_STORAGE_KEY, 'true')
    }
    setShowManifeste(false)
  }

  // Afficher le manifeste d'entrée si première visite
  if (showManifeste) {
    return (
      <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-serif font-semibold text-[#1A1A1B] leading-relaxed">
              Ici, le monde extérieur n'existe plus.
              <br />
              Ce que vous confiez à James est protégé, crypté,
              <br />
              et n'appartient qu'à vous.
              <br />
              Soyez authentique,
              <br />
              vous êtes dans votre sanctuaire.
            </p>
          </div>
          <Button
            onClick={handleEnterEspace}
            size="lg"
            className="bg-[#1A1A1B] hover:bg-[#1A1A1B]/90 text-white font-medium"
          >
            Entrer dans mon espace
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 pt-4 pb-12 md:pb-24">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Carte principale (gauche) */}
          <BentoCard>
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-serif font-semibold text-axiom-primary mb-2">
                  Bienvenue chez vous.<br />
                  Ravi de vous revoir, [Prénom].
                </h1>
              </div>
              
              {/* Cercle de progression violet */}
              <div className="flex items-center justify-center py-6">
                <div className="relative w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(226, 232, 240, 0.3)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.4)}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6D28D9" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-serif font-semibold text-axiom-primary">40 %</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-axiom-secondary text-center">
                Votre exploration est en cours.
              </p>

              <div className="pt-2">
                <Link 
                  href="/profil/analyse"
                  className="inline-block w-full text-center bg-gradient-to-r from-[#6D28D9] to-[#A855F7] text-white rounded-2xl px-6 py-3 font-medium"
                >
                  Reprendre l'analyse avec James
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* Carte secondaire (droite) */}
          <BentoCard>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-axiom-amethyst" strokeWidth={1} />
                <h2 className="text-xl font-serif font-semibold text-axiom-primary">
                  Sanctuaire de données
                </h2>
              </div>
              <p className="text-sm text-axiom-secondary">
                Vos réponses vous appartiennent.
                Elles ne sont ni revendues, ni exploitées, ni interprétées sans vous.
              </p>
            </div>
          </BentoCard>
        </div>

        {/* Carte inférieure large (verrouillée) */}
        <BentoCard className="relative overflow-hidden" style={{ filter: 'blur(2px)', opacity: 0.7 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9]/10 to-[#A855F7]/10" />
          <div className="relative z-10 flex items-center justify-center gap-4 py-8">
            <Lock className="w-6 h-6 text-axiom-amethyst" strokeWidth={1} />
            <p className="text-lg font-serif font-semibold text-axiom-primary">
              Le Prisme attend votre vérité.
            </p>
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
