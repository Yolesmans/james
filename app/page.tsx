import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* SECTION HERO */}
      <section className="container px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-foreground leading-tight">
            La fin du recrutement au hasard.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AXIOM analyse comment vous fonctionnez réellement —
            candidat ou entreprise — puis calcule la compatibilité humaine
            avec un environnement de travail.
            <br />
            Sans CV. Sans promesses creuses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/candidat">Lancer le diagnostic</Link>
            </Button>
            <Link
              href="#comment-ca-marche"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Voir comment ça fonctionne
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION PROBLÈME */}
      <section className="container px-4 py-20 md:py-32 bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Le recrutement est devenu un bruit de fond.
            </h2>
          </div>

          {/* 3 blocs bento */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/40">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Des millions d'offres illisibles
                </h3>
                <p className="text-sm text-muted-foreground">
                  Des descriptions vagues qui ne révèlent rien de l'environnement réel.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Des CV décoratifs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Des compétences listées qui masquent la manière réelle de fonctionner.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Des erreurs de casting coûteuses
                </h3>
                <p className="text-sm text-muted-foreground">
                  Des recrutements qui échouent faute de compatibilité humaine.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl md:text-2xl font-serif font-semibold text-foreground">
              AXIOM ne cherche pas des profils.
              <br />
              Il révèle des compatibilités.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION ORIENTATION */}
      <section className="container px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bloc Candidat */}
            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                  Découvrir sa place.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vous n'êtes pas un CV.
                  AXIOM identifie vos moteurs réels et vous oriente
                  vers des environnements où vous pouvez vraiment fonctionner.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/candidat">Côté candidat</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bloc Entreprise */}
            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                  Recruter des humains compatibles.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  AXIOM ne vous apporte pas des candidatures.
                  Il vous apporte des personnes alignées avec votre ADN managérial.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/entreprise">Côté entreprise</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="container px-4 py-20 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Comment ça marche
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">1</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Entrée sans inscription – 3 questions simples
                </h3>
                <p className="text-muted-foreground">
                  Aucun formulaire long. Aucune barrière d'entrée. Trois questions pour commencer.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">2</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Analyse comportementale (pas de réponses idéales)
                </h3>
                <p className="text-muted-foreground">
                  Le moteur analyse votre manière naturelle de fonctionner, pas vos réponses stratégiques.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">3</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Portrait de compatibilité clair et lisible
                </h3>
                <p className="text-muted-foreground">
                  Un résultat immédiat qui révèle où vous pouvez vraiment fonctionner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container px-4 py-20 md:py-32">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Prêt à voir clair ?
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/candidat">Lancer le diagnostic</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
