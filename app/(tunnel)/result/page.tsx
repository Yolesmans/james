import BentoCard from '@/components/ui/BentoCard'

export default function ResultPage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4">
      <div className="container max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Vos résultats
          </h1>
          <p className="text-lg text-muted-foreground">
            Portrait de compatibilité
          </p>
        </div>

        <BentoCard variant="large">
          <div className="space-y-6">
            <p className="text-foreground">
              Placeholder pour les résultats du diagnostic.
            </p>
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
