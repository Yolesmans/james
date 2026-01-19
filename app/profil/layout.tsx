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
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-[rgba(26,26,27,0.08)] bg-[rgba(253,253,253,0.75)] backdrop-blur-[12px]">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-16">
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
                        ? 'text-[#0F172A]'
                        : 'text-[#475569] hover:text-[#0F172A]'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6D28D9]" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Badge Sanctuaire + Settings */}
            <div className="flex items-center gap-3">
              {/* Badge Sanctuaire Activé */}
              <div className="hidden md:flex items-center gap-2 text-xs text-[#475569]">
                <div className="w-2 h-2 rounded-full bg-[#6D28D9] animate-pulse" />
                <Shield className="h-3.5 w-3.5" strokeWidth={1} />
                <span>Sanctuaire Activé</span>
              </div>
              
              {/* Settings Icon */}
              <Link
                href="/profil/settings"
                className={cn(
                  'p-2 rounded-lg transition-colors duration-200',
                  pathname === '/profil/settings'
                    ? 'text-[#0F172A] bg-[rgba(226,232,240,0.3)]'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-[rgba(226,232,240,0.3)]'
                )}
                aria-label="Paramètres"
              >
                <Settings className="h-5 w-5" />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      {children}
    </div>
  )
}
