import BentoCard from '@/components/ui/BentoCard'
import { copy } from '@/lib/copy'

export default function LabsPage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            {copy.labs.h1}
          </h1>
          <p className="text-lg text-muted-foreground whitespace-pre-line">
            {copy.labs.body}
          </p>
        </div>

        <BentoCard variant="large">
          <p className="text-muted-foreground leading-relaxed">
            Contenu de recherche à venir.
          </p>
        </BentoCard>
      </div>
    </div>
  )
}
