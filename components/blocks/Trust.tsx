import BentoCard from '@/components/ui/BentoCard'
import { copy } from '@/lib/copy'

export default function Trust() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
            {copy.home.trust.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {copy.home.trust.bullets.map((bullet, index) => (
            <BentoCard key={index}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-axiom-amethyst mt-2" />
                <p className="text-axiom-primary leading-relaxed">{bullet}</p>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
