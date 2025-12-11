"use client"
import { motion } from "framer-motion"

export default function DemoVideoSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience Our Solutions In Action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch how our cutting-edge software transforms businesses through intelligent automation, seamless
            integration, and user-friendly interfaces
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Web Development", desc: "Modern responsive websites" },
            { title: "AI Integration", desc: "Smart automation solutions" },
            { title: "Mobile Apps", desc: "Cross-platform applications" },
            { title: "ERP Systems", desc: "Enterprise resource planning" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300">
                <div className="aspect-video bg-black/50 flex items-center justify-center relative overflow-hidden">
                  {/* Video placeholder with play button */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="w-16 h-16 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="/product.mp4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-3xl overflow-hidden border border-cyan-500/30 p-2">
            <div className="bg-black/80 rounded-2xl aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-cyan-600/30"></div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="relative z-10"
              >
                <svg className="w-24 h-24 text-accent/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <p className="absolute bottom-6 left-6 text-sm text-cyan-400">Full Demo - 5 minutes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
