import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { copy } from '@/lib/copy'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1A1B]">
          {copy.home.finalCta.title}
        </h2>
        <Button asChild size="lg" className="bg-[#10B981] hover:bg-[#10B981]/90 text-white">
          <Link href="/start">{copy.home.finalCta.button}</Link>
        </Button>
      </div>
    </section>
  )
}
