'use client'

import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react'

interface MatchingBadgeProps {
  status: 'aligned' | 'conditional' | 'not_aligned'
}

export function MatchingBadge({ status }: MatchingBadgeProps) {
  const config = {
    aligned: {
      label: 'Aligné',
      icon: CheckCircle2,
      variant: 'success' as const,
    },
    conditional: {
      label: 'Alignement conditionnel',
      icon: AlertCircle,
      variant: 'warning' as const,
    },
    not_aligned: {
      label: 'Pas aligné actuellement',
      icon: XCircle,
      variant: 'destructive' as const,
    },
  }

  const { label, icon: Icon, variant } = config[status]

  return (
    <Badge variant={variant} className="flex items-center gap-1">
      <Icon className="h-3 w-3" />
      {label}
    </Badge>
  )
}
