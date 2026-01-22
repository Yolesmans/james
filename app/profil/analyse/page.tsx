'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Deluminateur from '@/components/profil/Deluminateur'

const questions = [
  { id: 1, text: 'Question 1' },
  { id: 2, text: 'Question 2' },
  { id: 3, text: 'Question 3' },
]

export default function ProfilAnalysePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [inputText, setInputText] = useState('')
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleNext = () => {
    if (inputText.trim()) {
      // Simuler l'aspiration des particules
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setInputText('')
      }
    }
  }

  const handleTextSubmit = () => {
    // Les particules sont gérées dans le composant Deluminateur
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Barre de progression violette 2px en haut */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-white z-50">
        <motion.div
          className="h-full"
          style={{ background: '#7C3AED' }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="font-sans text-lg" style={{ color: '#111827' }}>
            Oubliez ce qu'on attend de vous. Dites ce que vous êtes.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-sans text-2xl font-medium mb-8" style={{ color: '#111827' }}>
                {questions[currentQuestion].text}
              </h2>
            </div>

            <div className="mb-8">
              <Deluminateur onTextSubmit={handleTextSubmit} />
            </div>

            <div className="space-y-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tapez votre réponse..."
                className="w-full p-4 rounded-2xl border border-[#F3F4F6] focus:outline-none focus:border-[#7C3AED] resize-none"
                style={{ 
                  background: '#FFFFFF',
                  color: '#111827',
                  minHeight: '120px'
                }}
                rows={4}
              />

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!inputText.trim()}
                  className="px-8 py-3 rounded-2xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    background: inputText.trim() ? '#7C3AED' : '#E5E7EB',
                    color: '#FFFFFF'
                  }}
                >
                  Suivant
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
