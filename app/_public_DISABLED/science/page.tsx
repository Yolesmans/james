import BentoCard from '@/components/ui/BentoCard'
import { copy } from '@/lib/copy'

export default function SciencePage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            {copy.science.h1}
          </h1>
          <p className="text-lg text-muted-foreground whitespace-pre-line">
            {copy.science.body}
          </p>
        </div>

        <div className="space-y-6">
          {copy.science.sections.map((section, index) => (
            <BentoCard key={index} variant="large">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {section}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Contenu à venir pour {section.toLowerCase()}.
              </p>
            </BentoCard>
          ))}
        </div>
      </div>
    </div>
  )
}
