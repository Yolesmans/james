'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-serif font-semibold text-foreground">AXIOM</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/candidat"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Candidat
            </Link>
            <Link
              href="/entreprise"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Entreprise
            </Link>
            <Link
              href="/labs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Axiom Labs
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="/start">Lancer le diagnostic</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="/start">Lancer</Link>
            </Button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
