'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground font-serif">AXIOM</span>
          </Link>
        </div>

        {/* Navigation au centre - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/candidat"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Candidat
          </Link>
          <Link
            href="/entreprise"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Entreprise
          </Link>
          <Link
            href="/labs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Axiom Labs
          </Link>
        </nav>

        {/* CTA à droite - Desktop */}
        <div className="hidden md:flex items-center">
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <Link href="/candidat">Lancer le diagnostic</Link>
          </Button>
        </div>

        {/* Menu hamburger - Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container px-4 py-4 space-y-3">
            <Link
              href="/candidat"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Candidat
            </Link>
            <Link
              href="/entreprise"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entreprise
            </Link>
            <Link
              href="/labs"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Axiom Labs
            </Link>
            <div className="pt-2">
              <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90">
                <Link href="/candidat" onClick={() => setMobileMenuOpen(false)}>
                  Lancer le diagnostic
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
