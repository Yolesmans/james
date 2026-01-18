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
        'bg-card',
        'border border-[rgba(26,26,27,0.12)] dark:border-[rgba(253,253,253,0.15)]',
        'p-6 md:p-8',
        variant === 'large' && 'md:p-12',
        className
      )}
    >
      {children}
    </div>
  )
}
