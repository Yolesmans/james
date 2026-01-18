import BentoCard from '@/components/ui/BentoCard'
import { copy } from '@/lib/copy'

export default function BentoGrid() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {copy.home.probleme.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {copy.home.probleme.cards.map((card, index) => (
            <BentoCard key={index}>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {card}
              </h3>
            </BentoCard>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-xl md:text-2xl font-serif font-semibold text-foreground whitespace-pre-line">
            {copy.home.probleme.punchline}
          </p>
        </div>
      </div>
    </section>
  )
}
