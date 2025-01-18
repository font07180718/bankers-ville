'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import Image from 'next/image'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, newMessage])
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const response: Message = {
        role: 'assistant',
        content: "Hello! I'm Sarah, the secretary of Banker's Ville. How may I assist you today?"
      }
      setMessages(prev => [...prev, response])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                message.role === 'user'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-white/5 text-white border border-[#00CCFF]/20'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-[#00CCFF]/20 rounded-2xl p-3">
              <div className="flex space-x-1.5">
                <div className="w-1.5 h-1.5 bg-[#00CCFF] rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-[#00CCFF] rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-[#00CCFF] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-[#00CCFF]/20">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full px-3 py-2 text-sm bg-white/5 border border-[#00CCFF]/20 rounded-full 
                       text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-[#00CCFF]/40"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="p-2 bg-[#00CCFF] rounded-full text-white hover:bg-[#00CCFF]/80 
                     transition-colors disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  )
} 