'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export default function JamesWidget() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[linear-gradient(135deg,#6D28D9_0%,#A855F7_100%)] flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Ouvrir James"
        >
          <span className="font-mono text-xs font-semibold text-white">J</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-axiom-surface/95 backdrop-blur-md border border-[rgba(226,232,240,0.4)] rounded-axiom p-6 shadow-xl z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="font-mono text-lg font-semibold text-axiom-primary">
              Data/IA James
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-axiom-secondary hover:text-axiom-primary">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-axiom-secondary mb-4">
            FAQ placeholder - Questions fréquentes sur AXIOM
          </Dialog.Description>
          <div className="space-y-3 text-sm text-axiom-primary">
            <p>Contenu FAQ à venir...</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
