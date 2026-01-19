import type { Metadata } from 'next'
import './globals.css'
import ConditionalHeader from '@/components/nav/ConditionalHeader'

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
      <body className="bg-axiom-bg text-axiom-primary font-sans">
        <ConditionalHeader />
        {children}
      </body>
    </html>
  )
}
