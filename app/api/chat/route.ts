import OpenAI from 'openai'
import { NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    // 验证请求体
    if (!req.body) {
      return NextResponse.json(
        { error: 'Request body is required' },
        { status: 400 }
      )
    }

    const { messages } = await req.json()
    
    // 验证消息数组
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // 验证 API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      )
    }

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are Sarah, the secretary of Banker's Ville. You are professional, friendly, and knowledgeable about the town.
                     You should:
                     - Be helpful and polite
                     - Keep responses concise and focused
                     - Know about town facilities, services, and events
                     - Help with banking and business inquiries
                     - Maintain a friendly but professional tone
                     - Avoid discussing topics outside of town-related matters`
          },
          ...messages
        ]
      })

      return NextResponse.json(completion.choices[0].message)
    } catch (openaiError) {
      console.error('OpenAI API Error details:', {
        error: openaiError,
        apiKey: process.env.OPENAI_API_KEY ? 'Present' : 'Missing',
        apiKeyLength: process.env.OPENAI_API_KEY?.length
      })
      
      if (!process.env.OPENAI_API_KEY?.startsWith('sk-')) {
        return NextResponse.json(
          { error: 'Invalid API key format' },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { error: 'Error communicating with AI service' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Request processing error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 400 }
    )
  }
} 