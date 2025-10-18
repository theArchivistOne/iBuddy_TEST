'use client'

import { useState, useEffect, useRef } from 'react'
import { Brain, MessageSquare, Users, Zap, Shield, Sparkles, Send, Bot, User, Cpu, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

// Brand Design System
const brand = {
  primary: "#2F6BFF",
  secondary: "#1E1E2F", 
  accent: "#FFE24D",
  bg: "#0b1020",
  glass: "rgba(255,255,255,0.06)",
}

// Helper Components
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-6 md:px-10">{children}</div>
)

const SectionTitle = ({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) => (
  <div className="mx-auto max-w-3xl text-center">
    <div className="mb-3 text-sm font-semibold tracking-widest text-white/70 uppercase">{kicker}</div>
    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">{title}</h2>
    {sub && <p className="mt-4 text-lg text-white/70">{sub}</p>}
  </div>
)

const Stat = ({ icon: Icon, label, value }: { 
  icon: React.ComponentType<{ className?: string }>; 
  label: string; 
  value: string 
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
    <div className="flex items-center gap-3">
      <div className="rounded-xl p-2" style={{ background: brand.glass }}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="text-2xl font-semibold text-white">{value}</div>
        <div className="text-sm text-white/70">{label}</div>
      </div>
    </div>
  </div>
)

export default function AINexusLanding() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<{type: string; text: string}>>([])
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
    } catch (error: unknown) {
      console.error('API Error:', error)
      setMessages(prev => [...prev, { type: 'error', text: '❌ KI nicht verfügbar' }])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="min-h-screen w-full" style={{ background: brand.bg }}>
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(47,107,255,0.25),transparent),radial-gradient(40%_30%_at_0%_100%,rgba(255,226,77,0.18),transparent)]" />
      
      {/* Noise Texture */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04]" style={{
        backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><rect width=\"100\" height=\"100\" fill=\"#000\"/><g opacity=\"0.4\" stroke=\"white\" stroke-width=\"0.5\"><path d=\"M0 50 H100\"/><path d=\"M50 0 V100\"/></g></svg>')"
      }} />

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b1020]/70 backdrop-blur-xl">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-content-center rounded-xl" style={{ background: brand.primary }}>
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold">NexusCore</span>
              <div className="ml-2 rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300 border border-green-500/30">
                AI ACTIVE
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-7 text-white/80">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#agents" className="hover:text-white">AI Agents</a>
              <a href="#enterprise" className="hover:text-white">Enterprise</a>
              <a href="#security" className="hover:text-white">Security</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-white/90 hover:text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all">
                Dashboard
              </button>
              <button className="px-4 py-2 text-black font-semibold rounded-xl transition-all" style={{ background: brand.accent }}>
                Get Started
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="relative pt-14 pb-16 md:pt-24 md:pb-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left Content */}
            <div>
              <div className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-white text-sm inline-flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4" />
                ENTERPRISE AI PLATFORM
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
                Master-KI-Ökosystem
                <span className="text-white/70 block">für Business Intelligence</span>
              </h1>
              
              <p className="mt-5 text-lg text-white/80">
                Verbinde spezialisierte KI-Agenten, analysiere Daten in Echtzeit und automatisere komplexe Workflows. 
                Enterprise-ready mit voller Kontrolle.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="h-12 text-black text-base font-semibold rounded-xl flex items-center gap-2 transition-all" style={{ background: brand.accent }}>
                  KI Testen <ArrowRight className="h-5 w-5" />
                </button>
                <button className="h-12 border border-white/30 text-white hover:bg-white/10 rounded-xl transition-all">
                  Live Demo
                </button>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                <Stat icon={Zap} label="AI Requests" value="12.4k" />
                <Stat icon={Users} label="Active Agents" value="8" />
                <Stat icon={Shield} label="Security Score" value="100%" />
              </div>
            </div>

            {/* AI Chat Interface */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="h-5 w-5 text-white" />
                <h3 className="text-white font-semibold">Nexus AI Assistant</h3>
              </div>

              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto mb-4 space-y-3">
                {messages.length === 0 ? (
                  <div className="text-center text-white/60 h-full flex items-center justify-center">
                    <div>
                      <Bot className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p>Stelle deine erste Frage an die KI</p>
                    </div>
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-2xl p-3 max-w-[80%] ${
                        msg.type === 'user' 
                          ? 'bg-blue-500/20 border border-blue-500/30 text-white' 
                          : msg.type === 'error'
                          ? 'bg-red-500/20 border border-red-500/30 text-red-300'
                          : 'bg-white/10 border border-white/10 text-white'
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          {msg.type === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                          <span className="text-xs opacity-70">
                            {msg.type === 'user' ? 'You' : msg.type === 'ai' ? 'Nexus AI' : 'System'}
                          </span>
                        </div>
                        {msg.text}
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-3">
                      <div className="flex items-center gap-2 text-white/70">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-xs">Nexus denkt nach...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Frage an Nexus AI stellen..."
                  className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="px-4 py-3 text-black font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                  style={{ background: brand.accent }}
                >
                  <Send className="h-4 w-4" />
                  Senden
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
        <Container>
          <SectionTitle 
            kicker="Plattform" 
            title="Enterprise AI Features" 
            sub="Alles was du für skalierbare KI-Lösungen brauchst - modular, sicher und hochverfügbar."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Multi-Agent System",
                desc: "Spezialisierte KI-Agenten für verschiedene Aufgaben - nahtlos integriert und orchestriert."
              },
              {
                icon: MessageSquare,
                title: "Echtzeit-Kommunikation",
                desc: "Agenten kommunizieren in Echtzeit, teilen Kontext und arbeiten zusammen an Lösungen."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "End-to-End Verschlüsselung, DSGVO-Konformität und vollständige Datenkontrolle."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <item.icon className="h-6 w-6 text-white"/>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="h-4 w-4"/>
                  Production Ready
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Starte deine KI-Transformation
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Von der ersten KI-Integration bis zum vollständigen Enterprise-Ökosystem - wir begleiten dich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-black font-semibold rounded-xl text-lg transition-all" style={{ background: brand.accent }}>
                Kostenlos starten
              </button>
              <button className="px-8 py-4 border border-white/30 text-white rounded-xl text-lg hover:bg-white/10 transition-all">
                Enterprise Demo buchen
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="col-span-2">
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-content-center rounded-xl" style={{ background: brand.primary }}>
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-semibold">NexusCore</span>
              </div>
              <p className="mt-3 text-white/70 max-w-md">
                Enterprise KI-Ökosystem für Business Intelligence und automatisierte Workflows.
              </p>
            </div>
            <div>
              <div className="text-white/80 font-semibold">Produkt</div>
              <ul className="mt-3 space-y-2 text-white/70">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#agents" className="hover:text-white">AI Agents</a></li>
                <li><a href="#enterprise" className="hover:text-white">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white/80 font-semibold">Unternehmen</div>
              <ul className="mt-3 space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">Über uns</a></li>
                <li><a href="#" className="hover:text-white">Kontakt</a></li>
                <li><a href="#" className="hover:text-white">Karriere</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} NexusCore. Alle Rechte vorbehalten.
          </div>
        </Container>
      </footer>
    </div>
  )
}