'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('axiom-theme') as Theme | null
    if (stored === 'light' || stored === 'dark') {
      setThemeState(stored)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.style.backgroundColor = '#0A0A0A'
      root.style.color = '#FDFDFD'
    } else {
      root.classList.remove('dark')
      root.style.backgroundColor = '#FDFDFD'
      root.style.color = '#1A1A1B'
    }
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('axiom-theme', newTheme)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
