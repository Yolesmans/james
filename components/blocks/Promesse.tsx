import Link from 'next/link'
import BentoCard from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/button'
import { copy } from '@/lib/copy'

export default function Promesse() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bloc Candidat */}
          <BentoCard variant="large">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                {copy.home.promesse.candidat.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {copy.home.promesse.candidat.text}
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/candidat">{copy.home.promesse.candidat.button}</Link>
              </Button>
            </div>
          </BentoCard>

          {/* Bloc Entreprise */}
          <BentoCard variant="large">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                {copy.home.promesse.entreprise.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {copy.home.promesse.entreprise.text}
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/entreprise">{copy.home.promesse.entreprise.button}</Link>
              </Button>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
