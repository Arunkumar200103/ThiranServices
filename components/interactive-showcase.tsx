"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "Web Development",
      description: "Build scalable, modern web applications with cutting-edge technologies",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      gradient: "from-purple-600 to-blue-600",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android",
      features: ["React Native", "Flutter", "Firebase", "Real-time Sync"],
      gradient: "from-cyan-600 to-teal-600",
    },
    {
      title: "AI Solutions",
      description: "Intelligent automation powered by advanced machine learning models",
      features: ["LLM Integration", "Chatbots", "Data Analytics", "Predictive ML"],
      gradient: "from-pink-600 to-rose-600",
    },
    {
      title: "Cloud & DevOps",
      description: "Robust infrastructure deployment and continuous integration",
      features: ["AWS & Azure", "Docker", "Kubernetes", "CI/CD Pipelines"],
      gradient: "from-green-600 to-emerald-600",
    },
  ]

  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden bg-slate-950 min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Complete Technology Stack
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore our comprehensive solutions across all major technology domains
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {tabs.map((tab, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div>
            <h3
              className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${tabs[activeTab].gradient} bg-clip-text text-transparent`}
            >
              {tabs[activeTab].title}
            </h3>
            <p className="text-lg text-slate-400 mb-8">{tabs[activeTab].description}</p>
            <div className="grid grid-cols-2 gap-4">
              {tabs[activeTab].features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tabs[activeTab].gradient}`}></div>
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image showcase */}
          <motion.div
            className="relative h-80 md:h-96"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${tabs[activeTab].gradient} rounded-2xl opacity-20 blur-2xl`}
            ></div>
            <div className="absolute inset-0 rounded-2xl border border-slate-700 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative"
              >
                {/* Web Development - Code Editor Mockup */}
                {activeTab === 0 && (
                  <div className="w-full h-full p-6 font-mono text-sm">
                    <div className="bg-slate-800 rounded-lg h-full p-4 overflow-hidden border border-slate-700">
                      <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="text-purple-400">import <span className="text-blue-400">React</span> from <span className="text-green-400">'react'</span></div>
                        <div className="text-purple-400">import <span className="text-blue-400">{'{ useState }'}</span> from <span className="text-green-400">'react'</span></div>
                        <div className="mt-4"></div>
                        <div className="text-blue-400">function <span className="text-yellow-400">App</span>() {'{'}</div>
                        <div className="pl-4 text-purple-400">const [<span className="text-blue-400">count</span>, <span className="text-blue-400">setCount</span>] = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">0</span>)</div>
                        <div className="mt-2"></div>
                        <div className="pl-4 text-purple-400">return (</div>
                        <div className="pl-8 text-green-400">{'<div className="app">'}</div>
                        <div className="pl-12 text-green-400">{'<h1>Count: {count}</h1>'}</div>
                        <div className="pl-12 text-green-400">{'<button onClick={() => setCount(count + 1)}>'}</div>
                        <div className="pl-16 text-white">Increment</div>
                        <div className="pl-12 text-green-400">{'</button>'}</div>
                        <div className="pl-8 text-green-400">{'</div>'}</div>
                        <div className="pl-4 text-purple-400">)</div>
                        <div className="text-blue-400">{'}'}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Apps - Phone Mockup */}
                {activeTab === 1 && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-64 h-[500px] bg-black rounded-[3rem] border-8 border-slate-700 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
                      <div className={`w-full h-full bg-gradient-to-br ${tabs[activeTab].gradient} p-6 pt-10`}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                          <div className="h-24 bg-white/20 rounded-xl mb-3"></div>
                          <div className="h-3 bg-white/30 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-white/30 rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              className="aspect-square bg-white/20 backdrop-blur-sm rounded-2xl"
                            ></motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Solutions - Neural Network */}
                {activeTab === 2 && (
                  <div className="w-full h-full p-8">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <defs>
                        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#db2777" />
                          <stop offset="100%" stopColor="#f43f5e" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Input layer */}
                      {[60, 120, 180, 240].map((y, i) => (
                        <motion.circle
                          key={`input-${i}`}
                          cx="50"
                          cy={y}
                          r="12"
                          fill="url(#aiGrad)"
                          filter="url(#glow)"
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                      
                      {/* Hidden layer */}
                      {[50, 100, 150, 200, 250].map((y, i) => (
                        <motion.circle
                          key={`hidden-${i}`}
                          cx="200"
                          cy={y}
                          r="15"
                          fill="url(#aiGrad)"
                          filter="url(#glow)"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                      
                      {/* Output layer */}
                      {[90, 150, 210].map((y, i) => (
                        <motion.circle
                          key={`output-${i}`}
                          cx="350"
                          cy={y}
                          r="12"
                          fill="url(#aiGrad)"
                          filter="url(#glow)"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                        />
                      ))}
                      
                      {/* Connections */}
                      {[60, 120, 180, 240].map((y1) =>
                        [50, 100, 150, 200, 250].map((y2, i) => (
                          <motion.line
                            key={`conn1-${y1}-${y2}`}
                            x1="50"
                            y1={y1}
                            x2="200"
                            y2={y2}
                            stroke="url(#aiGrad)"
                            strokeWidth="1"
                            opacity="0.3"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                          />
                        ))
                      )}
                    </svg>
                  </div>
                )}

                {/* Cloud & DevOps - Server Infrastructure */}
                {activeTab === 3 && (
                  <div className="w-full h-full p-8 flex flex-col justify-center gap-8">
                    <div className="space-y-6">
                      {/* Load Balancer */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`h-16 bg-gradient-to-r ${tabs[activeTab].gradient} rounded-lg flex items-center justify-center font-semibold text-white shadow-lg`}
                      >
                        Load Balancer
                      </motion.div>
                      
                      {/* Server cluster */}
                      <div className="grid grid-cols-3 gap-4">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              y: [0, -8, 0],
                              boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 20px rgba(16, 185, 129, 0.5)', '0 0 0 rgba(16, 185, 129, 0)']
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="h-32 bg-slate-700 rounded-lg border-2 border-emerald-500/50 flex flex-col items-center justify-center"
                          >
                            <div className="text-3xl mb-2">🖥️</div>
                            <div className="text-xs text-emerald-400">Server {i + 1}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Database */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="h-16 bg-slate-700 rounded-lg border-2 border-emerald-500/50 flex items-center justify-center gap-2"
                      >
                        <span className="text-2xl">💾</span>
                        <span className="font-semibold text-emerald-400">Database Cluster</span>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
              
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 pointer-events-none`}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}