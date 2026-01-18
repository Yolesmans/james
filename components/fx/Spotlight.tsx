'use client'

import { useEffect } from 'react'

export default function Spotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--shadow-x', `${x}%`)
      document.documentElement.style.setProperty('--shadow-y', `${y}%`)
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
