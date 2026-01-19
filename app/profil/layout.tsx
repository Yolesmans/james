'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Settings, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Mon Espace', href: '/profil' },
  { label: 'Mon ADN', href: '/profil/analyse' },
  { label: 'Mon Prisme', href: '/profil/resultats' },
  { label: 'Mon Horizon', href: '/profil/futur' },
]

export default function ProfilLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-axiom-bg">
      {/* Header Navigation - Barre flottante premium */}
      <header className="sticky top-16 z-30 w-full">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 pt-2">
          <div className="bg-axiom-surface border border-[rgba(226,232,240,0.4)] rounded-axiom shadow-sm">
            <nav className="flex items-center justify-between h-16 px-4 md:px-6">
              {/* Navigation Tabs */}
              <div className="flex items-center space-x-1 md:space-x-2 overflow-x-auto scrollbar-hide">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
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

              {/* Badge Sanctuaire + Settings */}
              <div className="flex items-center gap-3">
                {/* Badge Sanctuaire de données */}
                <div className="hidden md:flex items-center gap-2 text-[12px] text-axiom-primary/60">
                  <div className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse-slow" />
                  <Shield className="w-3 h-3 text-[#A855F7]" strokeWidth={1} />
                  <span>Sanctuaire de données</span>
                </div>
                
                {/* Settings Icon */}
                <Link
                  href="/profil/settings"
                  className={cn(
                    'p-2 rounded-lg transition-colors duration-200',
                    pathname === '/profil/settings'
                      ? 'text-axiom-primary bg-[rgba(226,232,240,0.3)]'
                      : 'text-axiom-secondary hover:text-axiom-primary hover:bg-[rgba(226,232,240,0.3)]'
                  )}
                  aria-label="Paramètres"
                >
                  <Settings className="h-5 w-5" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      {children}
    </div>
  )
}
