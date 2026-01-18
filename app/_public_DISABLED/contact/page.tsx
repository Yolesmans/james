import BentoCard from '@/components/ui/BentoCard'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4">
      <div className="container max-w-2xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Contact
          </h1>
        </div>

        <BentoCard variant="large">
          <p className="text-muted-foreground leading-relaxed">
            Formulaire de contact à venir.
          </p>
        </BentoCard>
      </div>
    </div>
  )
}
