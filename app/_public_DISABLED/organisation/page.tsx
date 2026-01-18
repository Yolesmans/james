import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'

export default function OrganisationPage() {
  return (
    <div className="min-h-screen py-24 md:py-32 px-4">
      <div className="container max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#1A1A1B] leading-tight">
            Le recrutement sans hasard.
          </h1>
          <p className="text-lg text-[#4B5563] leading-relaxed">
            AXIOM remplace les CV par un score de compatibilité humaine.
            <br />
            Moins de recrutement. Plus de justesse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <BentoCard>
            <h3 className="text-lg font-serif font-semibold text-[#1A1A1B] mb-2">
              Réduction du turnover
            </h3>
            <p className="text-sm text-[#4B5563]">
              Des personnes alignées avec votre ADN managérial restent plus longtemps.
            </p>
          </BentoCard>

          <BentoCard>
            <h3 className="text-lg font-serif font-semibold text-[#1A1A1B] mb-2">
              Moins de no-show
            </h3>
            <p className="text-sm text-[#4B5563]">
              La compatibilité révélée en amont réduit les désistements.
            </p>
          </BentoCard>

          <BentoCard>
            <h3 className="text-lg font-serif font-semibold text-[#1A1A1B] mb-2">
              Décisions basées sur le réel
            </h3>
            <p className="text-sm text-[#4B5563]">
              Des données de compatibilité, pas des CV décoratifs.
            </p>
          </BentoCard>
        </div>

        <div className="pt-4">
          <Button asChild size="lg" className="bg-[#10B981] hover:bg-[#10B981]/90 text-white">
            <Link href="/company/login">Découvrir la démo organisation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
