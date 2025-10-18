import React from "react";

// Ultra Cyber Design - aber nur mit stabilen Web Features
export default function NexusCyberAI() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cyber Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/10 to-black -z-10" />
      
      {/* Animated Grid - Pure CSS = STABIL */}
      <div 
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Header */}
      <header className="border-b border-cyan-500/30 bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <div className="text-white font-bold">N</div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                NEXUS
              </h1>
              <div className="text-xs text-cyan-400/60">AI ECOSYSTEM</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {['DASHBOARD', 'AGENTS', 'SYSTEM'].map((item) => (
              <button key={item} className="text-cyan-300/80 hover:text-cyan-400 text-sm font-medium transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Hero */}
      <section className="pt-32 pb-40 text-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              NEXUS CORE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-200/80 max-w-3xl mx-auto mb-12">
            ENTERPRISE KI-ÖKOSYSTEM • MULTI-AGENT ARCHITECTURE • REAL-TIME PROCESSING
          </p>

          {/* Cyber Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "12.8K", label: "REQ/MIN", color: "from-cyan-400 to-cyan-600" },
              { value: "99.97%", label: "UPTIME", color: "from-green-400 to-green-600" },
              { value: "47ms", label: "LATENCY", color: "from-purple-400 to-purple-600" },
              { value: "256", label: "AGENTS", color: "from-cyan-400 to-purple-600" }
            ].map((metric, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-cyan-300/60 text-sm mt-2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ACTIVE AI AGENTS
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "NEXUS CORE", status: "ONLINE", desc: "Master AI Orchestration" },
              { name: "SECURITY AI", status: "ONLINE", desc: "Threat Detection & GDPR" },
              { name: "WEB AGENT", status: "ONLINE", desc: "Real-time Development" },
              { name: "DATA FLOW", status: "STANDBY", desc: "Vector Processing" },
              { name: "CHAT API", status: "ONLINE", desc: "Multi-Modal Interface" },
              { name: "DEV OPS", status: "ONLINE", desc: "Auto-Scaling Infrastructure" }
            ].map((agent, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    agent.status === 'ONLINE' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {agent.status}
                  </div>
                </div>
                <p className="text-cyan-200/70 text-sm">{agent.desc}</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className={`w-2 h-2 rounded-full ${
                    agent.status === 'ONLINE' ? 'bg-green-400 animate-pulse' : 'bg-amber-400'
                  }`} />
                  <div className="text-cyan-400/60 text-xs">AI CORE v4.2</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-y border-cyan-500/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            READY FOR NEXT-GEN AI?
          </h2>
          <p className="text-cyan-200/80 text-xl mb-8">
            Scale from 1 to 1000+ users with enterprise-grade artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl text-lg hover:opacity-90 transition-opacity">
              START ENTERPRISE TRIAL
            </button>
            <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-500/10 transition-colors">
              EXPLORE API DOCS
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/30 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <div className="text-white font-bold text-sm">N</div>
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              NEXUS
            </span>
          </div>
          <p className="text-cyan-400/60">
            Enterprise AI Ecosystem for the Next Generation
          </p>
          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-cyan-400/40 text-sm">
            © 2024 NEXUS AI ECOSYSTEM. All systems operational.
          </div>
        </div>
      </footer>
    </div>
  );
}
