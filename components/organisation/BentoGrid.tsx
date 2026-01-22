'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BentoCard {
  id: string
  title: string
  description: string
  href: string
  span?: 'col-span-1' | 'col-span-2' | 'row-span-1' | 'row-span-2'
  isIncomplete?: boolean
}

const bentoCards: BentoCard[] = [
  {
    id: '1',
    title: 'Le Cadre',
    description: 'Vision terrain',
    href: '/organisation/le-cadre',
    span: 'col-span-1',
  },
  {
    id: '2',
    title: "L'Humain",
    description: 'Profils managers',
    href: '/organisation/l-humain',
    span: 'col-span-1',
  },
  {
    id: '3',
    title: 'Alignement',
    description: 'Offres actives',
    href: '/organisation/alignement',
    span: 'col-span-2',
    isIncomplete: true,
  },
]

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 auto-rows-fr">
      {bentoCards.map((card) => (
        <motion.div
          key={card.id}
          className={`${card.span || 'col-span-1'} relative group`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={card.href} className="block h-full">
            <div
              className="h-full p-8 rounded-2xl border transition-all relative overflow-hidden"
              style={{
                background: card.isIncomplete
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)'
                  : '#FFFFFF',
                borderColor: '#F3F4F6',
                backdropFilter: card.isIncomplete ? 'blur(10px)' : 'none',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
              }}
            >
              {card.isIncomplete && (
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(124, 58, 237, 0.1) 10px, rgba(124, 58, 237, 0.1) 20px),
                      repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(124, 58, 237, 0.1) 10px, rgba(124, 58, 237, 0.1) 20px)
                    `,
                  }}
                />
              )}
              <div className="relative z-10">
                <h3 className="font-sans text-2xl font-medium mb-2" style={{ color: '#111827' }}>
                  {card.title}
                </h3>
                <p className="font-sans text-sm" style={{ color: '#111827', opacity: 0.7 }}>
                  {card.description}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
