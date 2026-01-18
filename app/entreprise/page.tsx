import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function EntreprisePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Le recrutement sans hasard.
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            AXIOM remplace les CV par un score de compatibilité humaine.
            <br />
            Moins de recrutement. Plus de justesse.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <Card className="border-border/40">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Réduction du turnover
                </h3>
                <p className="text-sm text-muted-foreground">
                  Des personnes alignées avec votre ADN managérial restent plus longtemps.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Moins de no-show
                </h3>
                <p className="text-sm text-muted-foreground">
                  La compatibilité révélée en amont réduit les désistements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Décisions basées sur le réel
                </h3>
                <p className="text-sm text-muted-foreground">
                  Des données de compatibilité, pas des CV décoratifs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/company/login">Découvrir la démo entreprise</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
