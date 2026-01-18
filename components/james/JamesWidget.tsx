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
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Ouvrir James"
        >
          <span className="font-mono text-xs font-semibold text-primary-foreground">J</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-card/95 backdrop-blur-md border border-white/10 rounded-[28px] p-6 shadow-xl z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="font-mono text-lg font-semibold text-foreground">
              Data/IA James
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-muted-foreground mb-4">
            FAQ placeholder - Questions fréquentes sur AXIOM
          </Dialog.Description>
          <div className="space-y-3 text-sm text-foreground">
            <p>Contenu FAQ à venir...</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
