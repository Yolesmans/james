import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/nav/Header'

export const metadata: Metadata = {
  title: 'AXIOM - Recrutement sans CV',
  description: 'Plateforme de recrutement innovante',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
