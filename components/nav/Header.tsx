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
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out group hover:bg-gray-900 hover:border-gray-700">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-serif font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">AXIOM</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/candidat"
              className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-300 hover:text-gray-900 group-hover:hover:text-white"
            >
              Candidat
            </Link>
            <Link
              href="/entreprise"
              className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-300 hover:text-gray-900 group-hover:hover:text-white"
            >
              Entreprise
            </Link>
            <Link
              href="/labs"
              className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-300 hover:text-gray-900 group-hover:hover:text-white"
            >
              Axiom Labs
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
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
              className="text-gray-900 transition-colors duration-300 group-hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
              <Link href="/start">Lancer</Link>
            </Button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
