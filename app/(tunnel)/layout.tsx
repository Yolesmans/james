import Header from '@/components/nav/Header'
import Spotlight from '@/components/fx/Spotlight'
import Aura from '@/components/fx/Aura'

export default function TunnelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="spotlight-bg min-h-screen relative">
      <Spotlight />
      <Aura />
      <Header />
      <main className="relative z-10">{children}</main>
    </div>
  )
}
