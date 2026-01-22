'use client'

import { motion } from 'framer-motion'

export default function LHumainPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h1 className="font-sans text-4xl md:text-5xl font-medium leading-tight mb-4" style={{ color: '#111827' }}>
              L'Humain
            </h1>
            <p className="font-sans text-lg" style={{ color: '#111827', opacity: 0.7 }}>
              Profils managers
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl border" style={{
              background: '#FFFFFF',
              borderColor: '#F3F4F6',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
            }}>
              <p className="font-sans text-sm" style={{ color: '#111827', opacity: 0.7 }}>
                Les profils managers seront affichés ici.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
