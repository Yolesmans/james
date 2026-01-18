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
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#10B981] hover:bg-[#10B981]/90 flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Ouvrir James"
        >
          <span className="font-mono text-xs font-semibold text-white">J</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-md border border-[rgba(26,26,27,0.12)] rounded-[28px] p-6 shadow-xl z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="font-mono text-lg font-semibold text-[#1A1A1B]">
              Data/IA James
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-[#4B5563] hover:text-[#1A1A1B]">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-[#4B5563] mb-4">
            FAQ placeholder - Questions fréquentes sur AXIOM
          </Dialog.Description>
          <div className="space-y-3 text-sm text-[#1A1A1B]">
            <p>Contenu FAQ à venir...</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
