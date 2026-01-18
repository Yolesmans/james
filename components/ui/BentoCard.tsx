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
        'rounded-[28px] backdrop-blur-[10px]',
        'bg-card/80',
        'border border-gray-200',
        'p-6 md:p-8',
        variant === 'large' && 'md:p-12',
        className
      )}
    >
      {children}
    </div>
  )
}
