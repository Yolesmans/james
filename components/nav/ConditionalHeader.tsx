'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from './Header'

export default function ConditionalHeader() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Pendant l'hydratation, ne rien afficher pour éviter les mismatches
  if (!mounted) {
    return null
  }
  
  if (!pathname) {
    return null
  }
  
  if (pathname === '/') {
    return null
  }
  
  // Sur /profil/analyse, masquer complètement le header (Focus Mode)
  if (pathname === '/profil/analyse') {
    return null
  }
  
  // Sur /profil/*, afficher le header mais sans le bouton CTA
  if (pathname.startsWith('/profil')) {
    return <Header hideCta />
  }
  
  return <Header />
}
