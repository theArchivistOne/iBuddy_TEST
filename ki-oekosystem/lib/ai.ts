import { OpenAI } from '@langchain/openai'

export const askAI = async (question: string): Promise<string> => {
  const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.7,
  })
  
  const response = await model.invoke(`
  Du bist ein hilfreicher KI-Assistent. Beantworte diese Frage:
  
  "${question}"
  
  Antworte auf Deutsch und sei präzise.
  `)
  
  return response
}