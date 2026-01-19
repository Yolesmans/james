'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BentoCard from '@/components/ui/BentoCard'

export default function LockedPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        <BentoCard className="text-center bg-white border-[rgba(26,26,27,0.1)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A1A1B] leading-tight">
              Pour révéler votre Prisme, James doit d'abord explorer votre ADN.
            </h2>
            
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#1A1A1B] hover:bg-[#1A1A1B]/90 text-white font-medium"
              >
                <Link href="/profil/analyse">Explorer mon ADN</Link>
              </Button>
            </div>
          </motion.div>
        </BentoCard>
      </motion.div>
    </div>
  )
}
