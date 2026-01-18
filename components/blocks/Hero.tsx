import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { copy } from '@/lib/copy'

export default function Hero() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-tight">
          {copy.home.hero.h1}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
          {copy.home.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/start">{copy.home.hero.cta}</Link>
          </Button>
          <Link
            href="#comment-ca-marche"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {copy.home.hero.secondaryLink}
          </Link>
        </div>
      </div>
    </section>
  )
}
