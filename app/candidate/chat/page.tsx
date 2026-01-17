import { ChatUI } from '@/components/chat/ChatUI'
import { mockMessages } from '@/lib/mock-data'

export default function CandidateChat() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        <div className="border-b p-4 bg-card">
          <h1 className="text-xl font-semibold">Chat AXIOM</h1>
          <p className="text-sm text-muted-foreground">
            Posez vos questions, répondez aux miennes
          </p>
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatUI initialMessages={mockMessages} />
        </div>
      </div>
    </div>
  )
}
