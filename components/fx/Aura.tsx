'use client'

export default function Aura() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 md:hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-black/5 blur-3xl animate-pulse-slow" />
      </div>
    </div>
  )
}
