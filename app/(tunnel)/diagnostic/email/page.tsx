import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'

export default function EmailPage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4">
      <div className="container max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Votre email
          </h1>
          <p className="text-lg text-muted-foreground">
            Pour recevoir vos résultats
          </p>
        </div>

        <BentoCard variant="large">
          <div className="space-y-6">
            <p className="text-foreground">
              Placeholder pour la saisie d'email.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/result">Voir mes résultats</Link>
            </Button>
          </div>
        </BentoCard>
      </div>
    </div>
  )
}
