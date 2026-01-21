'use client'

import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { Copy, Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GhostLinkModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  profilId: string
}

export default function GhostLinkModal({ open, onOpenChange, profilId }: GhostLinkModalProps) {
  const [progress, setProgress] = useState(0)
  const [link, setLink] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (open && !link) {
      setIsGenerating(true)
      setProgress(0)
      
      // Simulation de génération de token avec barre de progression
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsGenerating(false)
            // Génération du lien unique
            const token = `ghost_${profilId}_${Date.now()}`
            const generatedLink = `${window.location.origin}/tunnel/start?token=${token}`
            setLink(generatedLink)
            return 100
          }
          return prev + 10
        })
      }, 150)

      return () => clearInterval(interval)
    }
  }, [open, link, profilId])

  const handleCopy = async () => {
    if (link) {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state on close
    setTimeout(() => {
      setLink(null)
      setProgress(0)
      setIsGenerating(false)
    }, 300)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-axiom-surface/95 backdrop-blur-md border border-[rgba(226,232,240,0.4)] rounded-axiom p-6 shadow-xl z-50">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="font-serif text-xl font-semibold text-axiom-primary">
              Lien Ghost
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-axiom-secondary hover:text-axiom-primary transition-colors">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="text-sm text-axiom-secondary mb-6">
            Le lien est une clé, jamais une injonction. Il reprend l'état exact du parcours.
          </Dialog.Description>

          {isGenerating && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="w-full h-2 bg-axiom-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-axiom-secondary text-center">
                  Génération du token en cours... {progress}%
                </p>
              </div>
            </div>
          )}

          {link && !isGenerating && (
            <div className="space-y-4">
              {/* Animation vaporeuse de succès */}
              <div className="flex items-center justify-center py-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-axiom-amethyst/20 to-axiom-heliotrope/20 flex items-center justify-center animate-pulse-slow">
                    <Check className="w-8 h-8 text-axiom-amethyst" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-axiom-amethyst/10 to-axiom-heliotrope/10 animate-ping" />
                </div>
              </div>

              <div className="bg-axiom-muted rounded-lg p-3 border border-[rgba(226,232,240,0.4)]">
                <p className="text-xs text-axiom-secondary mb-1 font-mono break-all">
                  {link}
                </p>
              </div>

              <Button
                onClick={handleCopy}
                variant="default"
                className="w-full"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Lien copié
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copier le lien
                  </>
                )}
              </Button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
