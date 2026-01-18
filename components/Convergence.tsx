import Link from 'next/link'
import BentoCard from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/button'

export default function Convergence() {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Bloc gauche - Votre Profil */}
          <BentoCard variant="large" className="text-center md:text-left">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1A1B] leading-tight">
                Votre Profil
              </h2>
              <p className="text-[#4B5563] leading-relaxed text-lg">
                Découvrez votre manière naturelle de fonctionner.
                AXIOM identifie vos moteurs réels et vous oriente
                vers des environnements où vous pouvez vraiment vous épanouir.
              </p>
              <Button asChild variant="outline" className="border-[rgba(26,26,27,0.12)] hover:bg-[rgba(26,26,27,0.04)] text-[#1A1A1B]">
                <Link href="/profil">Découvrir la rencontre</Link>
              </Button>
            </div>
          </BentoCard>

          {/* Point de convergence - IA James */}
          <div className="flex items-center justify-center py-8 md:py-0">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center">
              <span className="font-mono text-2xl font-semibold text-[#10B981]">J</span>
            </div>
          </div>

          {/* Bloc droit - Votre Organisation */}
          <BentoCard variant="large" className="text-center md:text-right">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1A1B] leading-tight">
                Votre Organisation
              </h2>
              <p className="text-[#4B5563] leading-relaxed text-lg">
                Recrutez des humains compatibles.
                AXIOM ne vous apporte pas des candidatures.
                Il vous apporte des personnes alignées avec votre ADN managérial.
              </p>
              <Button asChild variant="outline" className="border-[rgba(26,26,27,0.12)] hover:bg-[rgba(26,26,27,0.04)] text-[#1A1A1B]">
                <Link href="/organisation">Découvrir la rencontre</Link>
              </Button>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
