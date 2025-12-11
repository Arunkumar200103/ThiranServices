"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    "All technologies supported",
    "Experienced developers",
    "Free 1-year hosting",
    "SEO included",
    "Fast delivery",
    "Affordable pricing",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-accent to-pink-600 bg-clip-text text-transparent">Thiran360AI</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Reasons List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-lg glassmorphism border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-lg font-medium text-foreground">{reason}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Image/Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 rounded-lg glassmorphism border border-secondary/30 neon-glow">
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                >
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20"
                >
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20"
                >
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
