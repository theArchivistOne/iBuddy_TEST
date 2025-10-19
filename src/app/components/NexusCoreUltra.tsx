'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, TrendingUp, Shield, Zap, Network, BarChart3, Settings, Activity, CheckCircle, PlayCircle, PauseCircle, Sparkles, Rocket, Database, Globe, Clock, Brain, Atom, Wifi, Eye } from 'lucide-react';

type MessageType = 'user' | 'ai' | 'error' | 'system';

interface Message {
  id: string;
  type: MessageType;
  text: string;
  timestamp: number;
}

interface Agent {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'offline';
  tasksCompleted: number;
  performance: number;
  specialty: string;
  avatar: string;
}

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function NexusCoreUltra() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'chat' | 'agents' | 'analytics'>('dashboard');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      type: 'system', 
      text: '🚀 Enterprise KI-Ökosystem initialisiert. System online.', 
      timestamp: Date.now() 
    },
    { 
      id: '2', 
      type: 'ai', 
      text: 'Willkommen im Enterprise KI-Ökosystem! Ich bin Ihr AI Assistant. Wie kann ich Sie unterstützen?', 
      timestamp: Date.now() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(new Date());
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Agents Data
  const agents: Agent[] = [
    { id: '1', name: 'Quantum Alpha', status: 'active', tasksCompleted: 1247, performance: 98, specialty: 'AI Processing', avatar: '⚛️' },
    { id: '2', name: 'Neural Beta', status: 'active', tasksCompleted: 892, performance: 95, specialty: 'Data Analysis', avatar: '🧠' },
    { id: '3', name: 'Nexus Gamma', status: 'idle', tasksCompleted: 2103, performance: 97, specialty: 'Orchestration', avatar: '🌐' },
    { id: '4', name: 'Photon Delta', status: 'active', tasksCompleted: 567, performance: 92, specialty: 'Real-time', avatar: '💫' },
  ];

  // Neural Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize nodes
    const nodeCount = 50;
    const nodes: NeuralNode[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.lineWidth = 1;
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(167, 139, 250, 0.6)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Time and scroll effects
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Message handling
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Using your existing API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: data.response || 'Analysiere Ihre Anfrage...',
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'error',
        text: '❌ KI nicht verfügbar. Bitte versuchen Sie es später erneut.',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Neural Network Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}

        {/* Nebula Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]" />
        </div>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-80 backdrop-blur-2xl bg-black/60 border-r border-purple-500/30 p-6 flex flex-col">
          {/* Logo */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-purple-300 via-violet-300 to-blue-300 bg-clip-text text-transparent">
                  NEXUS
                </h1>
                <p className="text-xs tracking-widest text-purple-400 font-mono">ENTERPRISE AI v2.0</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-1 p-2 bg-green-500/10 rounded-lg border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400 font-mono tracking-wider">SYSTEM ONLINE</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-3">
            {[
              { id: 'dashboard', icon: <BarChart3 className="w-5 h-5" />, label: 'DASHBOARD' },
              { id: 'chat', icon: <Brain className="w-5 h-5" />, label: 'AI CHAT' },
              { id: 'agents', icon: <Atom className="w-5 h-5" />, label: 'AGENTS' },
              { id: 'analytics', icon: <Activity className="w-5 h-5" />, label: 'ANALYTICS' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all font-mono text-sm tracking-wider ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-purple-500/40 via-violet-500/40 to-blue-500/40 border-2 border-purple-400/50'
                    : 'hover:bg-white/5 border border-transparent hover:border-purple-500/20'
                }`}
              >
                <div className={activeTab === item.id ? 'text-purple-200' : 'text-purple-400'}>
                  {item.icon}
                </div>
                <span className={activeTab === item.id ? 'text-white' : 'text-purple-300'}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* System Status */}
          <div className="space-y-3">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-purple-400 font-mono">SYSTEM TIME</span>
              </div>
              <p className="text-xl font-mono text-white">{time.toLocaleTimeString()}</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-80 flex-1 p-8 min-h-screen">
          {/* Header */}
          <header className="backdrop-blur-2xl bg-black/40 border border-purple-500/30 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-purple-200 via-violet-200 to-blue-200 bg-clip-text text-transparent">
                  {activeTab === 'dashboard' && 'ENTERPRISE AI DASHBOARD'}
                  {activeTab === 'chat' && 'AI CHAT INTERFACE'}
                  {activeTab === 'agents' && 'AI AGENTS CONTROL'}
                  {activeTab === 'analytics' && 'SYSTEM ANALYTICS'}
                </h2>
                <p className="text-purple-400 font-mono text-sm">
                  Enterprise-ready KI-Ökosystem • DSGVO-konform • Multi-Agent
                </p>
              </div>
            </div>
          </header>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-6">
                {[
                  { icon: <TrendingUp className="w-6 h-6" />, label: 'REQUESTS', value: '2.4M', change: '+12.5%' },
                  { icon: <Atom className="w-6 h-6" />, label: 'AGENTS', value: '12', change: '+3' },
                  { icon: <Shield className="w-6 h-6" />, label: 'SECURITY', value: '99.9%', change: '+0.2%' },
                  { icon: <Zap className="w-6 h-6" />, label: 'SPEED', value: '0.1ms', change: 'OPTIMAL' }
                ].map((stat, idx) => (
                  <div key={idx} className="backdrop-blur-2xl bg-black/40 border border-purple-500/30 rounded-2xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-4">
                      {stat.icon}
                    </div>
                    <p className="text-4xl font-black mb-2 text-white">{stat.value}</p>
                    <p className="text-purple-400 text-xs mb-2 font-mono">{stat.label}</p>
                    <span className="text-green-400 text-xs font-semibold font-mono">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="backdrop-blur-2xl bg-black/40 border border-purple-500/30 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-purple-200 via-violet-200 to-blue-200 bg-clip-text text-transparent">
                        ENTERPRISE KI-ÖKOSYSTEM
                      </h3>
                      <p className="text-purple-300 text-sm leading-relaxed">
                        Skalierbares Multi-Agent-System mit Enterprise-Security.
                        Vollständig DSGVO-konform und production-ready.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm">
                      <Rocket className="w-5 h-5" />
                      ACTIVATE AI
                    </button>
                    <button className="px-6 py-4 bg-white/5 border-2 border-purple-500/50 rounded-xl font-bold text-sm">
                      DEMO
                    </button>
                  </div>
                </div>

                {/* Mini Chat Preview */}
                <div className="backdrop-blur-2xl bg-black/40 border border-purple-500/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Brain className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">AI CHAT</h4>
                        <p className="text-xs text-purple-400 font-mono">READY</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border-2 border-green-500/40 font-mono">
                      ACTIVE
                    </span>
                  </div>

                  <div className="space-y-3 mb-4 h-32 overflow-y-auto">
                    {messages.slice(-3).map((msg) => (
                      <div key={msg.id} className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] px-4 py-3 rounded-xl ${
                          msg.type === 'user'
                            ? 'bg-gradient-to-r from-purple-500 to-violet-500'
                            : 'bg-white/10 border border-purple-500/30'
                        }`}>
                          <p className="text-sm">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveTab('chat')}
                    className="w-full py-3 bg-gradient-to-r from-purple-500/30 to-violet-500/30 border-2 border-purple-500/50 rounded-xl font-bold text-sm"
                  >
                    OPEN CHAT INTERFACE →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Chat Tab */}
          {activeTab === 'chat' && (
            <div className="backdrop-blur-2xl bg-black/40 border border-purple-500/30 rounded-2xl overflow-hidden h-[calc(100vh-12rem)] flex flex-col">
              <div className="p-6 border-b border-purple-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">AI CHAT</h3>
                      <p className="text-sm text-purple-400 font-mono">ENTERPRISE READY</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-green-500/10 border-2 border-green-500/40 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-green-400 font-mono">ONLINE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-br from-purple-500 to-violet-500'
                        : 'bg-gradient-to-br from-green-500 to-emerald-500'
                    }`}>
                      {msg.type === 'user' ? <User className="w-6 h-6" /> : <Brain className="w-6 h-6" />}
                    </div>
                    <div className={`max-w-[70%] rounded-xl px-5 py-4 ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-violet-500'
                        : 'bg-white/10 border border-purple-500/30'
                    }`}>
                      <p className="text-sm leading-relaxed mb-1">{msg.text}</p>
                      <span className="text-xs opacity-60 font-mono">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center animate-pulse">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div className="bg-white/10 border border-purple-500/30 rounded-xl px-5 py-4 flex gap-1">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-6 border-t border-purple-500/30">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Enter your message..."
                    disabled={isLoading}
                    className="flex-1 bg-white/5 border-2 border-purple-500/30 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500 disabled:opacity-50 placeholder-purple-400/50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !input.trim()}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl transition-all disabled:opacity-50 font-bold"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Agents Tab */}
          {activeTab === 'agents' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-white">AI AGENTS</h2>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-bold text-sm">
                  + NEW AGENT
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {agents.map((agent) => (
                  <div key={agent.id} className="backdrop-blur-2xl bg-black/40 border border-purple-500/30 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-3xl">
                          {agent.avatar}
                        </div>
                        <div>
                          <h3 className="font-black text-white">{agent.name}</h3>
                          <p className="text-sm text-purple-400 font-mono">{agent.specialty}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full font-mono ${
                        agent.status === 'active'
                          ? 'bg-green-500/20 text-green-400 border-2 border-green-500/40'
                          : 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/40'
                      }`}>
                        {agent.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-400 font-mono">TASKS</span>
                        <span className="font-bold text-white">{agent.tasksCompleted.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-400 font-mono">PERFORMANCE</span>
                        <span className="font-bold text-white">{agent.performance}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all"
                          style={{ width: `${agent.performance}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 py-3 bg-purple-500/20 hover:bg-purple-500/30 border-2 border-purple-500/40 rounded-lg transition-all flex items-center justify-center gap-2 font-bold text-sm">
                        <Eye className="w-4 h-4" />
                        VIEW
                      </button>
                      <button className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-purple-500/30 rounded-lg transition-all flex items-center justify-center gap-2 font-bold text-sm">
                        {agent.status === 'active' ? (
                          <>
                            <PauseCircle className="w-4 h-4" />
                            PAUSE
                          </>
                        ) : (
                          <>
                            <PlayCircle className="w-4 h-4" />
                            START
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-white">SYSTEM ANALYTICS</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="backdrop-blur-2xl bg-black/40 border border-purple-500/30 rounded-2xl p-6">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-white">
                    <Activity className="w-5 h-5 text-purple-400" />
                    SYSTEM PERFORMANCE
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'CPU USAGE', value: 45 },
                      { label: 'MEMORY', value: 62 },
                      { label: 'NETWORK', value: 28 },
                      { label: 'STORAGE', value: 73 }
                    ].map((metric, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-purple-400 font-mono">{metric.label}</span>
                          <span className="font-bold text-white">{metric.value}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-violet-500 h-3 rounded-full"
                            style={{ width: `${metric.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="backdrop-blur-2xl bg-black/40 border border-purple-500/30 rounded-2xl p-6">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-white">
                    <Clock className="w-5 h-5 text-blue-400" />
                    ACTIVITY LOG
                  </h3>
                  <div className="space-y-3">
                    {[
                      { text: 'AI Agent completed task successfully', time: '2 min' },
                      { text: 'System health check passed', time: '5 min' },
                      { text: 'New workflow deployed to production', time: '12 min' },
                    ].map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-purple-500/5 border border-purple-500/30 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm text-white">{activity.text}</p>
                          <span className="text-xs text-purple-400 font-mono">{activity.time} ago</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}