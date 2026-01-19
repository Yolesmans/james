import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'large'
}

export default function BentoCard({ children, className, variant = 'default' }: BentoCardProps) {
  return (
    <div
      className={cn(
        'rounded-[28px] backdrop-blur-sm',
        'bg-[#FFFFFF]',
        'border border-[rgba(226,232,240,0.5)]',
        'p-6 md:p-8',
        variant === 'large' && 'md:p-12',
        'transition-all duration-300',
        'relative overflow-hidden',
        'group',
        className
      )}
      style={{
        background: '#FFFFFF'
      }}
    >
      {/* Halo effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(168,85,247,0.03) 0%, transparent 70%)'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
