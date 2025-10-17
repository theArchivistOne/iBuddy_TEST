'use client'

import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<{type: string, text: string}>>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    
    setIsLoading(true)
    setMessages(prev => [...prev, { type: 'user', text: message }])
    setMessage('')
    
    try {
      const aiResponse = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      })
      
      const data = await aiResponse.json()
      setMessages(prev => [...prev, { type: 'ai', text: data.answer }])
    } catch (error) {
      setMessages(prev => [...prev, { type: 'error', text: '❌ SYSTEM ERROR' }])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Matrix-style glow effect
  const [pulse, setPulse] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 3)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Animated Scan Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(0,255,255,0.05)_95%)] bg-[size:100%_4px] animate-scan"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Floating Data Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-cyan-400/30 text-xs font-mono animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        >
          {['0', '1'][Math.floor(Math.random() * 2)]}
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className={`w-3 h-3 rounded-full bg-cyan-400 ${pulse === 0 ? 'shadow-lg shadow-cyan-400' : 'opacity-50'} transition-all`}></div>
            <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tighter">
              CYBER_AI
            </h1>
            <div className={`w-3 h-3 rounded-full bg-purple-400 ${pulse === 2 ? 'shadow-lg shadow-purple-400' : 'opacity-50'} transition-all`}></div>
          </div>
          <p className="text-cyan-300/80 text-lg font-light tracking-widest uppercase">NEURAL INTERFACE SYSTEM</p>
          <div className="mt-2 inline-flex items-center gap-2 text-cyan-400/60 text-sm font-mono">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            SYSTEM_STATUS: <span className="text-green-400">ONLINE</span>
          </div>
        </div>

        {/* Main Interface */}
        <div className="max-w-5xl mx-auto">
          {/* Terminal Container */}
          <div className="bg-black/80 backdrop-blur-lg rounded-lg border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 mb-6 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-b border-cyan-500/20 px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-cyan-300 text-sm font-mono flex-1 text-center">TERMINAL_INTERFACE</div>
              </div>
            </div>
            
            {/* Chat Display */}
            <div className="h-96 p-6 overflow-y-auto bg-gradient-to-b from-black/50 to-cyan-900/10">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-cyan-400 text-6xl mb-4 animate-pulse">⟠</div>
                    <p className="text-cyan-300/80 font-mono text-lg mb-2">NEURAL_CORE_AWAITING_INPUT</p>
                    <p className="text-cyan-400/50 text-sm font-mono">INITIATE_PROTOCOL: QUERY_SYSTEM</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 font-mono">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-2xl rounded border-l-4 px-4 py-3 ${
                        msg.type === 'user' 
                          ? 'border-cyan-400 bg-cyan-500/10 text-cyan-100'
                          : msg.type === 'error'
                          ? 'border-red-400 bg-red-500/10 text-red-300'
                          : 'border-purple-400 bg-purple-500/10 text-purple-100'
                      }`}>
                        <div className="flex items-center gap-2 mb-1 text-xs opacity-70">
                          <span>{msg.type === 'user' ? 'USER' : msg.type === 'ai' ? 'AI_CORE' : 'SYSTEM'}</span>
                          <span className="text-cyan-400/50">|</span>
                          <span className="text-cyan-400/50">{new Date().toLocaleTimeString()}</span>
                        </div>
                        <div className="text-sm leading-relaxed">{msg.text}</div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="border-l-4 border-cyan-400 bg-cyan-500/10 rounded px-4 py-3 max-w-2xl">
                        <div className="flex items-center gap-3 text-cyan-400 text-sm">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          </div>
                          <span>PROCESSING_NEURAL_RESPONSE</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
          </div>

          {/* Input Console */}
          <div className="bg-black/90 backdrop-blur-lg rounded-lg border border-cyan-500/30 p-1 shadow-2xl shadow-cyan-500/10">
            <form onSubmit={handleSubmit} className="flex">
              <div className="flex items-center px-4 text-cyan-400 font-mono text-sm">
                &gt;
              </div>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="ENTER_QUERY_PROTOCOL..."
                className="flex-1 bg-transparent border-none text-cyan-100 placeholder-cyan-400/50 font-mono text-sm py-4 focus:outline-none focus:ring-0"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-mono text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/25 transition-all m-1 rounded"
              >
                {isLoading ? 'EXECUTING' : 'EXECUTE'}
              </button>
            </form>
          </div>

          {/* System Dashboard */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {[
              { label: 'NEURAL_LOAD', value: '42%', color: 'cyan' },
              { label: 'MEMORY_USAGE', value: '68%', color: 'blue' },
              { label: 'RESPONSE_TIME', value: '0.4s', color: 'purple' },
              { label: 'UPTIME', value: '99.8%', color: 'green' }
            ].map((stat, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-lg rounded border border-cyan-500/20 p-4">
                <div className="text-cyan-400/70 text-xs font-mono mb-1">{stat.label}</div>
                <div className={`text-2xl font-bold text-${stat.color}-400 font-mono`}>{stat.value}</div>
                <div className="mt-2 w-full bg-cyan-900/30 rounded-full h-1">
                  <div 
                    className={`bg-${stat.color}-400 h-1 rounded-full transition-all duration-1000`}
                    style={{ width: stat.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}