'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProfilDepartPage() {
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
            Introduction brève
          </h1>
          
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#111827' }}>
            Bienvenue dans votre espace Odyssée. Ici, vous allez explorer votre fonctionnement, révéler votre signature unique et découvrir les terrains qui vous correspondent vraiment.
          </p>

          <div className="pt-8">
            <Link
              href="/profil/analyse"
              className="inline-block px-8 py-4 rounded-2xl font-medium transition-all"
              style={{ 
                background: '#7C3AED',
                color: '#FFFFFF'
              }}
            >
              Commencer l'analyse
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
