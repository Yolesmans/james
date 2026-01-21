'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { X, MessageSquare } from 'lucide-react'

interface RetablirContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  profilId: string
  onConfirm: () => void
}

export default function RetablirContactModal({ 
  open, 
  onOpenChange, 
  profilId,
  onConfirm 
}: RetablirContactModalProps) {
  const handleConfirm = () => {
    onConfirm()
    onOpenChange(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-axiom-surface/95 backdrop-blur-md border border-[rgba(226,232,240,0.4)] rounded-axiom p-6 shadow-xl z-50">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="font-serif text-xl font-semibold text-axiom-primary">
              Rétablir le contact
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-axiom-secondary hover:text-axiom-primary transition-colors">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="text-sm text-axiom-secondary mb-6 space-y-4">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-axiom-amethyst mt-0.5 flex-shrink-0" />
              <p className="font-serif italic text-base text-axiom-primary">
                AXIOM a stabilisé votre alignement.
                <br />
                Souhaitez-vous le découvrir ?
              </p>
            </div>
            <p className="text-sm text-axiom-secondary">
              Le même lien sera envoyé, reprenant l'état exact du parcours. Aucun compte requis.
            </p>
          </Dialog.Description>

          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Annuler
            </Button>
            <Button
              variant="default"
              onClick={handleConfirm}
            >
              Rétablir le contact
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
