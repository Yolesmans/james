import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'

export default function ProfilPage() {
  return (
    <div className="min-h-screen py-24 md:py-32 px-4 bg-[#FDFDFD] dark:bg-[#0A0A0A] transition-colors">
      <div className="container max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#1A1A1B] dark:text-[#FDFDFD] leading-tight transition-colors">
            Vous ne cherchez pas un job.
            <br />
            Vous cherchez un endroit où fonctionner.
          </h1>
          <p className="text-lg text-[#4B5563] dark:text-[#A0A0A0] leading-relaxed transition-colors">
            AXIOM identifie votre manière naturelle de travailler
            et vous met en relation avec des environnements cohérents.
          </p>
        </div>

        <div className="space-y-6">
          <BentoCard>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#10B981] mt-2" />
              <div>
                <h3 className="font-semibold text-[#1A1A1B] dark:text-[#FDFDFD] mb-1 transition-colors">Pas de CV</h3>
                <p className="text-sm text-[#4B5563] dark:text-[#A0A0A0] transition-colors">
                  Aucune liste de compétences à remplir. Aucun formatage à maîtriser.
                </p>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#10B981] mt-2" />
              <div>
                <h3 className="font-semibold text-[#1A1A1B] dark:text-[#FDFDFD] mb-1 transition-colors">Pas de tri d'offres</h3>
                <p className="text-sm text-[#4B5563] dark:text-[#A0A0A0] transition-colors">
                  AXIOM calcule la compatibilité et vous oriente directement vers les environnements alignés.
                </p>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#10B981] mt-2" />
              <div>
                <h3 className="font-semibold text-[#1A1A1B] dark:text-[#FDFDFD] mb-1 transition-colors">Pas de promesse marketing</h3>
                <p className="text-sm text-[#4B5563] dark:text-[#A0A0A0] transition-colors">
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
