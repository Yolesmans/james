import Spotlight from '@/components/fx/Spotlight'
import Aura from '@/components/fx/Aura'

export default function TunnelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="shadow-aura-bg min-h-screen relative">
      <Spotlight />
      <Aura />
      <main className="relative z-10">{children}</main>
    </div>
  )
}
