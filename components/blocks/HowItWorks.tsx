import Link from 'next/link'
import BentoCard from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/button'
import { copy } from '@/lib/copy'

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-20 md:py-32 px-4">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-axiom-primary">
            {copy.home.howItWorks.title}
          </h2>
        </div>

        <div className="space-y-6">
          {copy.home.howItWorks.steps.map((step, index) => (
            <BentoCard key={index}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-axiom-amethyst/10 flex items-center justify-center">
                  <span className="font-semibold text-lg text-axiom-amethyst">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-axiom-primary leading-relaxed">{step}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
