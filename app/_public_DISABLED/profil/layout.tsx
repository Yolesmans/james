import { ThemeProvider } from '@/components/ThemeProvider'

export default function ProfilLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
