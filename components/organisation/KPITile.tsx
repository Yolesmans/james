'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface KPITileProps {
  icon: ReactNode
  value: number | string
  label: string
  className?: string
  total?: number
  showProgress?: boolean
}

export default function KPITile({ 
  icon, 
  value, 
  label, 
  className,
  total,
  showProgress = false 
}: KPITileProps) {
  const percentage = total && typeof value === 'number' ? Math.round((value / total) * 100) : null
  
  return (
    <div
      className={cn(
        'bg-white rounded-axiom border border-[rgba(226,232,240,0.4)] p-4 md:p-6 group relative overflow-hidden',
        'transition-all duration-300 hover:border-axiom-amethyst/20 hover:shadow-md hover:shadow-axiom-amethyst/10',
        'axiom-glow-hover',
        className
      )}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Halo effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-sanctuary-glow" />
      
      <div className="relative z-10">
        <div className="flex items-start gap-3 md:gap-4">
          {/* Icon avec badge gradient violet */}
          <div className="flex-shrink-0 p-2 md:p-2.5 rounded-lg bg-gradient-to-br from-axiom-amethyst/10 to-axiom-heliotrope/10 group-hover:from-axiom-amethyst/20 group-hover:to-axiom-heliotrope/20 transition-all">
            <div className="text-axiom-amethyst group-hover:text-axiom-heliotrope transition-colors">
              {icon}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Valeur principale */}
            <div className="text-2xl md:text-3xl font-serif font-semibold text-axiom-primary mb-1 md:mb-2">
              {value}
            </div>
            
            {/* Label */}
            <div className="text-xs md:text-sm text-axiom-secondary leading-relaxed font-medium">
              {label}
            </div>
            
            {/* Pourcentage si disponible */}
            {showProgress && percentage !== null && (
              <div className="mt-2 md:mt-3">
                <div className="w-full h-1.5 bg-[rgba(226,232,240,0.3)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="text-xs text-axiom-secondary mt-1">
                  {percentage}%
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
