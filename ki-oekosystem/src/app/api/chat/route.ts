import { NextResponse } from 'next/server'
import { OpenAI } from '@langchain/openai'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()
    
    console.log('🔍 START API Call - Key:', process.env.OPENAI_API_KEY?.substring(0, 10) + '...')
    
    // Test: Einfache OpenAI Abfrage
    const model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY!,
      temperature: 0.1,  // Niedriger für konsistente Antworten
      modelName: "gpt-3.5-turbo-instruct",  // Einfachereres Model
      maxTokens: 150,
    })

    console.log('🚀 Sende zu OpenAI...')
    
    const response = await model.invoke(`Antworte kurz auf Deutsch: "${message}"`)
    
    console.log('✅ ERFOLG! Antwort:', response)
    
    return NextResponse.json({ answer: response })

  } catch (error: any) {
    console.error('❌ DETAILED ERROR:', error)
    console.error('❌ Error Message:', error.message)
    console.error('❌ Error Stack:', error.stack)
    
    return NextResponse.json({ 
      answer: `❌ Fehler: ${error.message}` 
    })
  }
}