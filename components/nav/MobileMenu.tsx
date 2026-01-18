'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md border-l border-gray-200 p-6 shadow-xl">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="text-gray-900 hover:text-gray-600 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-6">
          <Link
            href="/candidat"
            className="block text-lg font-medium text-gray-900 hover:text-primary transition-colors duration-300"
            onClick={onClose}
          >
            Candidat
          </Link>
          <Link
            href="/entreprise"
            className="block text-lg font-medium text-gray-900 hover:text-primary transition-colors duration-300"
            onClick={onClose}
          >
            Entreprise
          </Link>
          <Link
            href="/labs"
            className="block text-lg font-medium text-gray-900 hover:text-primary transition-colors duration-300"
            onClick={onClose}
          >
            Axiom Labs
          </Link>
          <div className="pt-4">
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300">
              <Link href="/start" onClick={onClose}>
                Lancer le diagnostic
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
