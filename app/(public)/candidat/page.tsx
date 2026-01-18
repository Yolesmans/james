import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'
import { copy } from '@/lib/copy'

export default function CandidatPage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4">
      <div className="container max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight whitespace-pre-line">
            {copy.candidat.h1}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {copy.candidat.body}
          </p>
        </div>

        <div className="space-y-6">
          {copy.candidat.bullets.map((bullet, index) => (
            <BentoCard key={index}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{bullet}</h3>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

        <div className="pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/start">{copy.candidat.cta}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
