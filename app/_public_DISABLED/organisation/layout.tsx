'use client'

import { useEffect } from 'react'

export default function OrganisationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark')
    root.style.backgroundColor = '#FDFDFD'
    root.style.color = '#1A1A1B'
  }, [])

  return <>{children}</>
}
