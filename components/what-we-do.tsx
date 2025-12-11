"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Zap } from "lucide-react"

export default function WhatWeDo() {
  const cards = [
    {
      icon: Code,
      title: "Build Any Software",
      description: "Custom solutions tailored to your business needs",
      color: "from-primary to-purple-600",
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Intelligent tools and chatbots for modern businesses",
      color: "from-secondary to-cyan-600",
    },
    {
      icon: Smartphone,
      title: "Web, Android & iOS",
      description: "Cross-platform development across all devices",
      color: "from-accent to-pink-600",
    },
    {
      icon: Zap,
      title: "ERP & E-Commerce",
      description: "Enterprise solutions and online stores",
      color: "from-primary via-secondary to-accent",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance"
        >
          What We <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Do</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }} className="group">
                <div className="h-full p-6 rounded-lg glassmorphism border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} p-2.5 mb-4`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
