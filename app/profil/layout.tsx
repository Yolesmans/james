'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Settings } from 'lucide-react'
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
    <div className="min-h-screen bg-[#FDFDFD] relative">
      {/* Bulle de confiance - Lueur améthyste discrète */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(139,92,246,0.02)] via-transparent to-[rgba(139,92,246,0.02)]" />
      </div>
      
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-[rgba(26,26,27,0.08)] bg-[rgba(253,253,253,0.75)] backdrop-blur-[12px] relative">
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
                        ? 'text-[#1A1A1B]'
                        : 'text-[#4B5563] hover:text-[#1A1A1B]'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A1A1B]" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Settings Icon */}
            <Link
              href="/profil/settings"
              className={cn(
                'p-2 rounded-lg transition-colors duration-200',
                pathname === '/profil/settings'
                  ? 'text-[#1A1A1B] bg-[rgba(26,26,27,0.05)]'
                  : 'text-[#4B5563] hover:text-[#1A1A1B] hover:bg-[rgba(26,26,27,0.05)]'
              )}
              aria-label="Paramètres"
            >
              <Settings className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
