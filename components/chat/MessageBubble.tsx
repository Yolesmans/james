'use client'

import { Message } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isAxiom = message.sender === 'axiom'

  return (
    <div
      className={cn(
        'flex w-full mb-4',
        isAxiom ? 'justify-start' : 'justify-end'
      )}
    >
      <div
        className={cn(
          'max-w-[80%] rounded-lg px-4 py-3',
          isAxiom
            ? 'bg-muted text-foreground'
            : 'bg-primary text-primary-foreground'
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.text}
        </p>
        {message.link && (
          <a
            href={message.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm underline hover:opacity-80"
          >
            Accéder au formulaire →
          </a>
        )}
      </div>
    </div>
  )
}
