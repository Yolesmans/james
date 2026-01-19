'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ConditionalHeader() {
  const pathname = usePathname()
  
  if (pathname === '/') {
    return null
  }
  
  // Sur /profil/*, afficher le header mais sans le bouton CTA
  if (pathname?.startsWith('/profil')) {
    return <Header hideCta />
  }
  
  return <Header />
}
