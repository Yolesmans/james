import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function CandidatPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Vous ne cherchez pas un job.
            <br />
            Vous cherchez un endroit où fonctionner.
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            AXIOM identifie votre manière naturelle de travailler
            et vous met en relation avec des environnements cohérents.
          </p>

          <div className="space-y-6 pt-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Pas de CV</h3>
                <p className="text-sm text-muted-foreground">
                  Aucune liste de compétences à remplir. Aucun formatage à maîtriser.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Pas de tri d'offres</h3>
                <p className="text-sm text-muted-foreground">
                  AXIOM calcule la compatibilité et vous oriente directement vers les environnements alignés.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Pas de promesse marketing</h3>
                <p className="text-sm text-muted-foreground">
                  Un résultat basé sur votre fonctionnement réel, pas sur des promesses vagues.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/candidate/login">Lancer mon diagnostic</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
