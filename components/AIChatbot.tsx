'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Sarah, the secretary of Banker's Ville. How may I assist you today?"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // 当消息更新时滚动到底部
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, newMessage])
    setInput('')
    setIsLoading(true)

    try {
      console.log('Sending message:', newMessage)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, newMessage]
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch')
      }

      const data = await response.json()
      console.log('Received response:', data)
      setMessages(prev => [...prev, data])
    } catch (error) {
      console.error('Error in chat:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble responding right now. Please try again later."
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Messages Container - 固定高度和滚动设置 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[400px] scrollbar-thin scrollbar-thumb-[#00CCFF]/20 scrollbar-track-transparent">
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
        {/* 用于自动滚动的空白 div */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-[#00CCFF]/20 bg-[#1A0B2E]/80 backdrop-blur-sm">
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