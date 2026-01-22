'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'

const cliches = ['Dynamique', 'Esprit d\'équipe', 'Autonome', 'Polyvalent', 'Motivé']

interface PosteCard {
  id: string
  titre: string
  description: string
}

export default function LeCadrePage() {
  const [postes, setPostes] = useState<PosteCard[]>([
    { id: '1', titre: '', description: '' }
  ])
  const [showDrawer, setShowDrawer] = useState(false)
  const [selectedPosteId, setSelectedPosteId] = useState<string | null>(null)

  const checkCliché = (text: string): boolean => {
    return cliches.some(cliche => 
      text.toLowerCase().includes(cliche.toLowerCase())
    )
  }

  const handleTextChange = (id: string, field: 'titre' | 'description', value: string) => {
    setPostes(prev => prev.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ))
  }

  const handleLierManager = (posteId: string) => {
    setSelectedPosteId(posteId)
    setShowDrawer(true)
  }

  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="font-sans text-4xl md:text-5xl font-medium leading-tight mb-4" style={{ color: '#111827' }}>
            Le Cadre
          </h1>
          <p className="font-sans text-lg" style={{ color: '#111827', opacity: 0.7 }}>
            Vision terrain
          </p>
        </div>

        <div className="space-y-6">
          {postes.map((poste) => (
            <motion.div
              key={poste.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl border"
              style={{
                background: '#FFFFFF',
                borderColor: '#F3F4F6',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#111827' }}>
                    Titre du poste
                  </label>
                  <input
                    type="text"
                    value={poste.titre}
                    onChange={(e) => {
                      handleTextChange(poste.id, 'titre', e.target.value)
                    }}
                    className="w-full p-3 rounded-xl border focus:outline-none focus:border-[#7C3AED] transition-colors"
                    style={{
                      background: '#FFFFFF',
                      borderColor: checkCliché(poste.titre) ? '#EF4444' : '#F3F4F6',
                      color: checkCliché(poste.titre) ? '#EF4444' : '#111827',
                    }}
                    placeholder="Ex: Développeur Full Stack"
                  />
                  {checkCliché(poste.titre) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 p-3 rounded-lg"
                      style={{ background: 'rgba(239, 68, 68, 0.1)' }}
                    >
                      <p className="text-sm" style={{ color: '#EF4444' }}>
                        Ce terme est vide de sens. Soyez plus spécifique sur la réalité du terrain.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#111827' }}>
                    Description
                  </label>
                  <textarea
                    value={poste.description}
                    onChange={(e) => {
                      handleTextChange(poste.id, 'description', e.target.value)
                    }}
                    className="w-full p-3 rounded-xl border focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                    style={{
                      background: '#FFFFFF',
                      borderColor: checkCliché(poste.description) ? '#EF4444' : '#F3F4F6',
                      color: checkCliché(poste.description) ? '#EF4444' : '#111827',
                      minHeight: '120px',
                    }}
                    placeholder="Décrivez le poste..."
                    rows={4}
                  />
                  {checkCliché(poste.description) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 p-3 rounded-lg"
                      style={{ background: 'rgba(239, 68, 68, 0.1)' }}
                    >
                      <p className="text-sm" style={{ color: '#EF4444' }}>
                        Ce terme est vide de sens. Soyez plus spécifique sur la réalité du terrain.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleLierManager(poste.id)}
                    className="px-6 py-3 rounded-xl font-medium transition-all"
                    style={{
                      background: '#7C3AED',
                      color: '#FFFFFF',
                    }}
                  >
                    Lier un Manager
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Drawer latéral */}
      <Dialog.Root open={showDrawer} onOpenChange={setShowDrawer}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-[#F3F4F6] shadow-2xl z-50 p-6 overflow-y-auto">
            <Dialog.Title className="font-sans text-2xl font-medium mb-6" style={{ color: '#111827' }}>
              Associer un Manager
            </Dialog.Title>
            <Dialog.Description className="text-sm mb-6" style={{ color: '#111827', opacity: 0.7 }}>
              Sélectionnez un manager pour ce poste.
            </Dialog.Description>
            <div className="space-y-4">
              {/* Liste des managers à implémenter */}
              <p className="text-sm" style={{ color: '#111827', opacity: 0.7 }}>
                Liste des managers à venir...
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowDrawer(false)}
                className="px-6 py-3 rounded-xl font-medium transition-all"
                style={{
                  background: '#7C3AED',
                  color: '#FFFFFF',
                }}
              >
                Fermer
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
