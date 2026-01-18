import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4">
      <div className="container max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Diagnostic
          </h1>
          <p className="text-lg text-muted-foreground">
            Analyse comportementale en cours...
          </p>
        </div>

        <BentoCard variant="large">
          <div className="space-y-6">
            <p className="text-foreground">
              Placeholder pour les questions du diagnostic.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/diagnostic/email">Suivant</Link>
            </Button>
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
