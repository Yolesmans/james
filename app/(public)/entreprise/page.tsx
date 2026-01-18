import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'
import { copy } from '@/lib/copy'

export default function EntreprisePage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4">
      <div className="container max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            {copy.entreprise.h1}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {copy.entreprise.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {copy.entreprise.bullets.map((bullet, index) => (
            <BentoCard key={index}>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {bullet}
              </h3>
            </BentoCard>
          ))}
        </div>

        <div className="pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/company/login">{copy.entreprise.cta}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
