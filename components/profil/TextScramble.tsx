'use client'

import { useEffect, useState } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
}

export default function TextScramble({ text, className = '' }: TextScrambleProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isScrambling, setIsScrambling] = useState(true)

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let scrambleText = ''
    let iterations = 0
    const maxIterations = 30

    const interval = setInterval(() => {
      if (iterations < maxIterations) {
        scrambleText = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
        setDisplayedText(scrambleText)
        iterations++
      } else {
        setDisplayedText(text)
        setIsScrambling(false)
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [text])

  return (
    <span className={className} style={{ color: '#111827' }}>
      {displayedText}
    </span>
  )
}
