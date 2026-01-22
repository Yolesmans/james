'use client'

import { motion } from 'framer-motion'
import BentoGrid from '@/components/organisation/BentoGrid'

export default function OrganisationDashboard() {
  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="font-sans text-4xl md:text-5xl font-medium leading-tight mb-4" style={{ color: '#111827' }}>
              Dashboard
            </h1>
            <p className="font-sans text-lg" style={{ color: '#111827', opacity: 0.7 }}>
              AXIOM stabilise votre structure de fonctionnement.
            </p>
          </div>

          <BentoGrid />
        </motion.div>
      </div>
    </div>
  )
}
