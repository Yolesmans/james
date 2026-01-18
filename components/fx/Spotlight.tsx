'use client'

import { useEffect } from 'react'

export default function Spotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calcul précis de la position relative à la fenêtre
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--cursor-x', `${x}%`)
      document.documentElement.style.setProperty('--cursor-y', `${y}%`)
    }

    // Desktop only
    if (window.innerWidth >= 768) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return null
}
