'use client'

import { useState, useRef, useEffect } from 'react'
import { Message } from '@/lib/mock-data'
import { MessageBubble } from './MessageBubble'
import { ChoiceButtons } from './ChoiceButtons'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

interface ChatUIProps {
  initialMessages: Message[]
}

export function ChatUI({ initialMessages }: ChatUIProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'candidate',
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInputValue('')

    // Simuler une réponse d'AXIOM après un délai
    setTimeout(() => {
      const axiomResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Merci pour votre réponse. Je prends note.',
        sender: 'axiom',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, axiomResponse])
    }, 1000)
  }

  const handleChoiceSelect = (choice: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: choice,
      sender: 'candidate',
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])

    // Simuler une réponse d'AXIOM
    setTimeout(() => {
      const axiomResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Parfait. Continuons.',
        sender: 'axiom',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, axiomResponse])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            <MessageBubble message={message} />
            {message.choices && message.sender === 'axiom' && (
              <ChoiceButtons
                choices={message.choices}
                onSelect={handleChoiceSelect}
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tapez votre message..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
