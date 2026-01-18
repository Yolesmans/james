import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'

export default function ProfilPage() {
  return (
    <div className="min-h-screen py-24 md:py-32 px-4">
      <div className="container max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#1A1A1B] leading-tight">
            Vous ne cherchez pas un job.
            <br />
            Vous cherchez un endroit où fonctionner.
          </h1>
          <p className="text-lg text-[#4B5563] leading-relaxed">
            AXIOM identifie votre manière naturelle de travailler
            et vous met en relation avec des environnements cohérents.
          </p>
        </div>

        <div className="space-y-6">
          <BentoCard>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#10B981] mt-2" />
              <div>
                <h3 className="font-semibold text-[#1A1A1B] mb-1">Pas de CV</h3>
                <p className="text-sm text-[#4B5563]">
                  Aucune liste de compétences à remplir. Aucun formatage à maîtriser.
                </p>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#10B981] mt-2" />
              <div>
                <h3 className="font-semibold text-[#1A1A1B] mb-1">Pas de tri d'offres</h3>
                <p className="text-sm text-[#4B5563]">
                  AXIOM calcule la compatibilité et vous oriente directement vers les environnements alignés.
                </p>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#10B981] mt-2" />
              <div>
                <h3 className="font-semibold text-[#1A1A1B] mb-1">Pas de promesse marketing</h3>
                <p className="text-sm text-[#4B5563]">
                  Un résultat basé sur votre fonctionnement réel, pas sur des promesses vagues.
                </p>
              </div>
            </div>
          </BentoCard>
        </div>

        <div className="pt-4">
          <Button asChild size="lg" className="bg-[#10B981] hover:bg-[#10B981]/90 text-white">
            <Link href="/start">Lancer mon diagnostic</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
