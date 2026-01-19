'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Header({ hideCta = false }: { hideCta?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Masquer le header si on scroll vers le bas et qu'on a scrollé plus de 50px
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsScrolled(true)
      } 
      // Afficher le header si on scroll vers le haut ou qu'on est en haut
      else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsScrolled(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full border-b border-[rgba(26,26,27,0.08)] bg-[rgba(253,253,253,0.75)] backdrop-blur-[12px] transition-transform duration-300 ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-serif font-semibold text-axiom-primary">AXIOM</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/profil"
              className="text-sm font-medium text-axiom-secondary hover:text-axiom-primary transition-colors duration-200"
            >
              Votre Profil
            </Link>
            <Link
              href="/organisation"
              className="text-sm font-medium text-axiom-secondary hover:text-axiom-primary transition-colors duration-200"
            >
              Votre Organisation
            </Link>
            <Link
              href="/labs"
              className="text-sm font-medium text-axiom-secondary hover:text-axiom-primary transition-colors duration-200"
            >
              Axiom Labs
            </Link>
          </nav>

          {/* CTA Desktop - Masqué sur /profil/* */}
          {!hideCta && (
            <div className="hidden md:flex items-center">
              <Button 
                asChild 
                size="sm" 
                variant="prestige"
                className="px-4 py-2"
              >
                <Link href="/start">Lancer le diagnostic</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu"
              className="text-axiom-primary"
            >
              <Menu className="h-5 w-5" />
            </Button>
            {!hideCta && (
              <Button 
                asChild 
                size="sm" 
                variant="prestige"
                className="px-4 py-2"
              >
                <Link href="/start">Lancer</Link>
              </Button>
            )}
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} hideCta={hideCta} />
    </>
  )
}
