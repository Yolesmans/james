'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Dashboard', href: '/organisation' },
  { label: 'Postes', href: '/organisation/postes' },
  { label: 'Managers', href: '/organisation/managers' },
  { label: 'Offres', href: '/organisation/offres' },
]

export default function OrganisationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsScrolled(true)
      } 
      else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsScrolled(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="min-h-screen bg-axiom-bg">
      {/* Header Navigation - Barre flottante premium */}
      <header className={`sticky ${isScrolled ? 'top-0' : 'top-16'} z-50 w-full transition-all duration-300`}>
        <div className="container max-w-6xl mx-auto px-4 md:px-6 pt-2">
          <div className="bg-axiom-surface backdrop-blur-xl border border-[rgba(226,232,240,0.4)] rounded-axiom shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}>
            <nav className="flex items-center justify-center h-16 px-4 md:px-6 relative">
              {/* Navigation Tabs - Centrée */}
              <div className="flex items-center space-x-1 md:space-x-2 overflow-x-auto scrollbar-hide">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/organisation' && pathname.startsWith(item.href))
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap',
                        isActive
                          ? 'text-axiom-primary'
                          : 'text-axiom-secondary hover:text-axiom-primary'
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6D28D9] via-[#6D28D9] to-transparent"
                        />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Badge Sanctuaire - Positionné à droite */}
              <div className="absolute right-4 md:right-6 flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[rgba(226,232,240,0.4)] text-[12px] text-axiom-primary/70 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse-slow" />
                  <Shield className="w-3 h-3 text-[#A855F7]" strokeWidth={1} />
                  <span className="font-medium">Sanctuaire Organisation</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className={`transition-all duration-300 ${isScrolled ? 'pt-0' : 'pt-4'}`}>
        {children}
      </div>
    </div>
  )
}
