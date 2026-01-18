import { Card, CardContent } from '@/components/ui/card'

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
              Axiom Labs
            </h1>
            <p className="text-lg text-muted-foreground">
              Recherche sur la compatibilité durable, la rétention existentielle,
              et la vision long terme du travail.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  Recherche sur compatibilité durable
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  AXIOM Labs explore comment la compatibilité humaine se maintient dans le temps.
                  Contrairement aux compétences, qui évoluent, la manière de fonctionner reste stable.
                  Cette stabilité permet de prédire la rétention à long terme.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  Rétention existentielle
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La rétention n'est pas qu'une question de salaire ou d'avantages.
                  C'est une question de compatibilité existentielle : est-ce que l'environnement
                  permet à la personne de fonctionner selon sa nature ? AXIOM Labs mesure cette dimension.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  IA & humain
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  AXIOM utilise l'IA pour analyser des patterns comportementaux complexes,
                  mais le résultat reste lisible et interprétable par des humains.
                  Pas de boîte noire. Pas de score mystérieux. Une compatibilité claire et actionnable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  Vision long terme du travail
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  AXIOM Labs explore comment le recrutement peut évoluer vers une approche
                  plus humaine et plus précise. Moins de volume. Plus de justesse.
                  Un futur où les erreurs de casting deviennent rares, parce que la compatibilité
                  est révélée en amont, avec précision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
