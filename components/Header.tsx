'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">AXIOM</span>
          </Link>
        </div>

        {/* Navigation au centre */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/candidate/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Candidat
          </Link>
          <Link
            href="/company/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Entreprise
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* Bouton CTA à droite */}
        <div className="flex items-center">
          <Button asChild size="sm">
            <Link href="/candidate/login">Se connecter</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
