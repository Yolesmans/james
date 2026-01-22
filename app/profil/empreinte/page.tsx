'use client'

import { motion } from 'framer-motion'
import Signature3D from '@/components/profil/Signature3D'
import TextScramble from '@/components/profil/TextScramble'

export default function ProfilEmpreintePage() {
  // MVP: Prénom généré dynamiquement (à remplacer par les scores réels)
  const prenom = 'James'

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h1 className="font-sans text-4xl md:text-5xl font-medium leading-tight" style={{ color: '#111827' }}>
            Révélation
          </h1>

          <div className="mb-8">
            <Signature3D />
          </div>

          <div className="space-y-4">
            <p className="font-sans text-lg" style={{ color: '#111827' }}>
              Votre signature unique
            </p>
            <div className="text-6xl md:text-8xl font-sans font-medium">
              <TextScramble text={prenom} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
