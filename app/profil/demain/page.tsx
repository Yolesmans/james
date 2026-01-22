'use client'

import { motion } from 'framer-motion'

export default function ProfilDemainPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h1 className="font-sans text-4xl md:text-5xl font-medium leading-tight" style={{ color: '#111827' }}>
            Matching inversé
          </h1>
          
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#111827' }}>
            Le Scrutateur analyse les terrains qui correspondent à votre signature. Les offres qui vous conviennent vraiment apparaîtront ici.
          </p>

          <div className="mt-12 p-8 rounded-2xl border border-[#F3F4F6]" style={{ background: '#FFFFFF' }}>
            <p className="font-sans text-sm" style={{ color: '#111827' }}>
              Alignement détecté. L'échange peut commencer.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
