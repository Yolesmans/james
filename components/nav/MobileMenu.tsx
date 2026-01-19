'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  hideCta?: boolean
}

export default function MobileMenu({ isOpen, onClose, hideCta = false }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 bg-axiom-surface/95 backdrop-blur-md border-l border-[rgba(226,232,240,0.4)] p-6 shadow-xl">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="text-axiom-primary hover:text-axiom-secondary transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-6">
          <Link
            href="/profil"
            className="block text-lg font-medium text-axiom-primary hover:text-axiom-amethyst transition-colors duration-200"
            onClick={onClose}
          >
            Votre Profil
          </Link>
          <Link
            href="/organisation"
            className="block text-lg font-medium text-axiom-primary hover:text-axiom-amethyst transition-colors duration-200"
            onClick={onClose}
          >
            Votre Organisation
          </Link>
          <Link
            href="/labs"
            className="block text-lg font-medium text-axiom-primary hover:text-axiom-amethyst transition-colors duration-200"
            onClick={onClose}
          >
            Axiom Labs
          </Link>
          {!hideCta && (
            <div className="pt-4">
              <Button 
                asChild 
                variant="prestige"
                className="w-full"
              >
                <Link href="/start" onClick={onClose}>
                  Lancer le diagnostic
                </Link>
              </Button>
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}
