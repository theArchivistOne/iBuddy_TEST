import React from "react";

export default function NexusOrganicAI() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Organic Gradient Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-purple-900/20 to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Grid */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 240, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-8 bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="text-white font-semibold">Nexus</span>
          </div>
          <div className="flex gap-6">
            {['Dashboard', 'Agents', 'System'].map((item) => (
              <button key={item} className="text-cyan-200/80 hover:text-cyan-400 transition-colors text-sm">
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Organic Flow */}
      <section className="pt-40 pb-32 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          {/* Animated Title */}
          <div className="relative inline-block mb-8">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                NEXUS
              </span>
            </h1>
            <div className="absolute -inset-4 bg-cyan-500/10 blur-xl rounded-full -z-10" />
          </div>

          {/* Flowing Subtitle */}
          <p className="text-2xl md:text-3xl text-cyan-200/80 max-w-3xl mx-auto leading-relaxed">
            Where artificial intelligence meets <span className="text-cyan-300">organic</span> intelligence
          </p>

          {/* Floating Metrics */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              { value: "98%", label: "Accuracy", emoji: "🎯" },
              { value: "47ms", label: "Response", emoji: "⚡" },
              { value: "24/7", label: "Uptime", emoji: "🌐" },
              { value: "AI", label: "Powered", emoji: "🧠" }
            ].map((metric, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
                  <div className="text-3xl mb-2">{metric.emoji}</div>
                  <div className="text-2xl font-bold text-cyan-300">{metric.value}</div>
                  <div className="text-cyan-200/60 text-sm">{metric.label}</div>
                </div>
                <div className="absolute inset-0 bg-cyan-400/5 rounded-2xl blur-md -z-10 group-hover:bg-cyan-400/10 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents - Organic Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20">
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Intelligent Systems
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Main Agents */}
            <div className="space-y-6">
              {[
                { 
                  name: "Neural Core", 
                  status: "active", 
                  description: "Central nervous system of the AI ecosystem",
                  gradient: "from-cyan-400/20 to-cyan-600/20",
                  pulse: true
                },
                { 
                  name: "Quantum Flow", 
                  status: "processing", 
                  description: "Real-time data stream analysis",
                  gradient: "from-purple-400/20 to-purple-600/20",
                  pulse: true
                }
              ].map((agent, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-8 hover:border-cyan-400/50 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      agent.status === 'active' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {agent.status.toUpperCase()}
                    </div>
                  </div>
                  <p className="text-cyan-200/70 text-lg leading-relaxed">{agent.description}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className={`w-2 h-2 rounded-full ${agent.pulse ? 'animate-pulse' : ''} ${
                      agent.status === 'active' ? 'bg-green-400' : 'bg-blue-400'
                    }`} />
                    <div className="text-cyan-400/60 text-sm">neural network v4.2</div>
                  </div>
                  
                  {/* Organic background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                </div>
              ))}
            </div>

            {/* Right Column - Support Systems */}
            <div className="space-y-6">
              {[
                { 
                  name: "Vision Engine", 
                  status: "active", 
                  description: "Multi-modal perception and understanding",
                  gradient: "from-purple-400/20 to-cyan-400/20"
                },
                { 
                  name: "Memory Matrix", 
                  status: "learning", 
                  description: "Continuous knowledge integration",
                  gradient: "from-cyan-400/20 to-purple-400/20"
                }
              ].map((agent, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-8 hover:border-purple-400/50 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      agent.status === 'active' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {agent.status.toUpperCase()}
                    </div>
                  </div>
                  <p className="text-cyan-200/70 text-lg leading-relaxed">{agent.description}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className={`w-2 h-2 rounded-full ${
                      agent.status === 'active' ? 'bg-green-400' : 'bg-amber-400'
                    }`} />
                    <div className="text-purple-400/60 text-sm">cognitive system</div>
                  </div>
                  
                  {/* Organic background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Begin the Journey
          </h2>
          <p className="text-xl text-cyan-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the evolution of intelligent systems. Where code meets consciousness.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold rounded-2xl text-lg hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              Initiate System
            </button>
            <button className="px-12 py-4 border-2 border-cyan-400/50 text-cyan-300 font-bold rounded-2xl text-lg hover:bg-cyan-400/10 transition-all duration-300">
              Explore Consciousness
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-16 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold">N</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Nexus Intelligence
            </span>
          </div>
          <p className="text-cyan-300/60 text-lg max-w-md mx-auto">
            Where artificial meets authentic intelligence
          </p>
          <div className="border-t border-cyan-500/10 mt-12 pt-8 text-cyan-400/40">
            © 2024 Nexus Cognitive Systems
          </div>
        </div>
      </footer>
    </div>
  );
}
