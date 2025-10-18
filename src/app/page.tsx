import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Zap, Shield, Globe, Terminal, Sparkles, Cctv, Network, Code2, Bot, MessageSquare } from "lucide-react";

// ULTIMATIVE CYBER BRAND
const cyber = {
  primary: "#00F0FF",    
  secondary: "#7B61FF",  
  accent: "#FF2D75",     
  matrix: "#00FF41",     
  bg: "#0A0B14",         
  glass: "rgba(255,255,255,0.08)",
  grid: "rgba(0, 240, 255, 0.1)"
};

// Cyber Container
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>
);

// Cyber Title Component
const CyberTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"
    >
      {title}
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-cyan-200/80 max-w-3xl mx-auto"
    >
      {subtitle}
    </motion.p>
  </div>
);

// Cyber Card mit Hologramm Effekt
const CyberCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className={`relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/50 to-cyan-900/20 backdrop-blur-xl p-6 ${className}`}
    style={{
      boxShadow: "0 8px 32px 0 rgba(0, 240, 255, 0.1)",
    }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-50" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

// Matrix Rain Background
const MatrixRain = () => (
  <div className="fixed inset-0 -z-10 opacity-20">
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-transparent to-purple-900/20" />
    <div className="matrix-rain" />
  </div>
);

// Hologramm AI Agent
const AIAgent = ({ name, description, status, icon: Icon }: any) => (
  <CyberCard className="group">
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
          status === 'online' ? 'bg-green-400 animate-pulse' : 'bg-amber-400'
        }`} />
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
        <p className="text-cyan-200/70 text-sm leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 mt-3">
          <div className={`text-xs px-2 py-1 rounded-full ${
            status === 'online' 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
          }`}>
            {status === 'online' ? 'ACTIVE' : 'STANDBY'}
          </div>
          <div className="text-xs text-cyan-300/60">AI CORE v4.2</div>
        </div>
      </div>
    </div>
  </CyberCard>
);

export default function NexusAIDashboard() {
  const aiAgents = [
    {
      name: "NEXUS CORE",
      description: "Master-KI mit Multi-Agenten Orchestrierung. Verarbeitet komplexe Workflows und verteilt Tasks an spezialisierte Agents.",
      status: "online",
      icon: Brain
    },
    {
      name: "CYBER SECURITY", 
      description: "Echtzeit-Bedrohungserkennung und DSGVO-Compliance Monitoring. Schützt dein gesamtes KI-Ökosystem.",
      status: "online",
      icon: Shield
    },
    {
      name: "WEB AGENT",
      description: "Automatisierte Web-Entwicklung und Deployment. Erstellt responsive Interfaces in Echtzeit.",
      status: "online",
      icon: Globe
    },
    {
      name: "DEV OPS",
      description: "Infrastructure as Code und CI/CD Automation. Skaliert deine KI-Systeme automatisch.",
      status: "online", 
      icon: Terminal
    },
    {
      name: "DATA FLOW",
      description: "Echtzeit-Datenverarbeitung und Vector Embeddings. Pflegt deine Wissensbasis aktuell.",
      status: "standby",
      icon: Network
    },
    {
      name: "CHAT INTERFACE",
      description: "Natürliche Sprachverarbeitung mit Multi-Modalität. Dein primärer Zugang zum System.",
      status: "online",
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cyber Background Effects */}
      <MatrixRain />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10" />
      
      {/* Animated Grid */}
      <div className="fixed inset-0 -z-10 opacity-30" style={{
        backgroundImage: \`linear-gradient(\${cyber.grid} 1px, transparent 1px), linear-gradient(90deg, \${cyber.grid} 1px, transparent 1px)\`,
        backgroundSize: '50px 50px'
      }} />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  NEXUS
                </h1>
                <div className="text-xs text-cyan-400/60">AI ECOSYSTEM v4.2</div>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center gap-8">
              {['DASHBOARD', 'AGENTS', 'ANALYTICS', 'SETTINGS'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ color: cyber.primary }}
                  className="text-cyan-200/70 hover:text-cyan-400 text-sm font-medium cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="text-right">
                <div className="text-cyan-400 text-sm">SYSTEM STATUS</div>
                <div className="text-green-400 text-xs flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  ALL SYSTEMS NOMINAL
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </header>

      {/* Main Hero */}
      <section className="relative pt-20 pb-32">
        <Container>
          <CyberTitle 
            title="ENTERPRISE KI-ÖKOSYSTEM" 
            subtitle="Multi-Agenten Architektur mit Echtzeit-Kommunikation. DSGVO-konform, skalierbar, modular."
          />

          {/* Live System Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: "12.8K", label: "REQUESTS/MIN", icon: Zap },
              { value: "99.97%", label: "UPTIME", icon: Shield },
              { value: "47ms", label: "RESPONSE TIME", icon: Cpu },
              { value: "256", label: "ACTIVE AGENTS", icon: Network }
            ].map((metric, index) => (
              <CyberCard key={index} className="text-center">
                <metric.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-cyan-300/60 text-sm mt-1">{metric.label}</div>
              </CyberCard>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* AI Agents Grid */}
      <section className="py-20 border-t border-cyan-500/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
              ACTIVE AI AGENTS
            </h2>
            <p className="text-cyan-200/70 text-lg">
              Dein Team spezialisierter KI-Assistenten arbeitet in Echtzeit zusammen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAgents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AIAgent {...agent} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              BEREIT FÜR DIE NÄCHSTE STUFE?
            </h2>
            <p className="text-cyan-200/70 text-xl mb-8 max-w-2xl mx-auto">
              Integriere Nexus in dein Unternehmen. Skaliere von 1 auf 1000+ User mit Enterprise-grade KI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl text-lg"
              >
                ENTERPRISE DEMO STARTEN
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-bold rounded-xl text-lg"
              >
                API DOCS EXPLOREN
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  NEXUS
                </span>
              </div>
              <p className="text-cyan-200/70 max-w-md">
                Enterprise KI-Ökosystem für die nächste Generation intelligenter Geschäftsanwendungen.
              </p>
            </div>
            {['PRODUKT', 'UNTERNEHMEN', 'RESSOURCEN', 'RECHTSLICHES'].map((category) => (
              <div key={category}>
                <div className="text-cyan-400 font-bold mb-4">{category}</div>
                <div className="space-y-2 text-cyan-200/70 text-sm">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="cursor-pointer hover:text-cyan-400 transition-colors">
                      Link {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-cyan-400/60">
            © {new Date().getFullYear()} NEXUS AI ECOSYSTEM. Alle Rechte vorbehalten.
          </div>
        </Container>
      </footer>
    </div>
  );
}
EOF