import { Card, CardContent } from '@/components/ui/card'

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
              Science
            </h1>
            <p className="text-lg text-muted-foreground">
              Ce que le moteur mesure, ce qu'il ne mesure pas, et pourquoi le CV est insuffisant.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  Ce que le moteur mesure
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    AXIOM analyse les moteurs comportementaux réels : votre manière naturelle de prendre des décisions,
                    votre rapport à l'autonomie, votre besoin de structure, votre façon de gérer l'incertitude.
                  </p>
                  <p>
                    Le moteur identifie des patterns de compatibilité avec des environnements de travail spécifiques,
                    basés sur des données comportementales, pas sur des compétences listées.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  Ce qu'il ne mesure pas
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    AXIOM ne mesure pas vos compétences techniques, votre niveau d'expérience,
                    ni vos diplômes. Ces éléments restent pertinents, mais ils ne suffisent pas
                    à prédire une compatibilité durable.
                  </p>
                  <p>
                    Le moteur se concentre sur le fonctionnement réel, pas sur les attributs
                    traditionnellement valorisés dans un CV.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  Pourquoi le CV est insuffisant
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Un CV liste des compétences et des expériences, mais ne révèle rien de la manière
                    dont une personne fonctionne réellement dans un environnement donné.
                  </p>
                  <p>
                    Deux personnes avec des CV identiques peuvent avoir des compatibilités radicalement
                    différentes avec le même environnement de travail. AXIOM mesure cette différence.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  RGPD, données minimales, éthique
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    AXIOM collecte uniquement les données nécessaires au calcul de compatibilité.
                    Aucune donnée personnelle superflue. Aucun tracking marketing.
                  </p>
                  <p>
                    Vos données sont chiffrées, stockées de manière sécurisée, et vous pouvez
                    les supprimer à tout moment. Conformité RGPD totale.
                  </p>
                  <p>
                    Le moteur ne discrimine pas. Il mesure la compatibilité, pas la valeur.
                    Aucun biais basé sur l'âge, le genre, l'origine, ou tout autre attribut
                    non pertinent pour le fonctionnement réel.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
