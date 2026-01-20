'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface KPITileProps {
  icon: ReactNode
  value: number | string
  label: string
  className?: string
}

export default function KPITile({ icon, value, label, className }: KPITileProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-axiom border border-[rgba(226,232,240,0.4)] p-4 group',
        'transition-all duration-300 hover:border-axiom-amethyst/20 hover:shadow-sm hover:shadow-axiom-amethyst/5',
        className
      )}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="flex items-start gap-3">
        <div className="text-axiom-amethyst flex-shrink-0 mt-0.5 group-hover:text-axiom-heliotrope transition-colors">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-2xl font-semibold text-axiom-primary mb-1">
            {value}
          </div>
          <div className="text-xs text-axiom-secondary leading-relaxed">
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}
