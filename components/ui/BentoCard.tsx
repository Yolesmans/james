import { ReactNode, CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'large'
  style?: CSSProperties
}

export default function BentoCard({ children, className, variant = 'default', style }: BentoCardProps) {
  return (
    <div
      className={cn(
        'rounded-[32px]',
        'bg-white',
        'border',
        'p-10',
        variant === 'large' && 'md:p-10',
        'transition-all',
        'relative overflow-hidden',
        'group',
        'shadow-sm',
        'border-[rgba(226,232,240,0.4)]',
        'group-hover:border-axiom-amethyst/20',
        'group-hover:shadow-md',
        className
      )}
      style={{ backgroundColor: '#FFFFFF', ...style }}
    >
      {/* Halo effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-sanctuary-glow"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
