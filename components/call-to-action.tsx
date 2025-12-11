"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"

export default function CallToAction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl"></div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 glassmorphism border border-primary/30">
            <motion.div variants={itemVariants} className="flex items-start gap-4 mb-6">
              <motion.div
                className="p-3 rounded-lg bg-gradient-to-br from-secondary to-accent flex-shrink-0"
                whileHover={{ rotate: 360, scale: 1.1 }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Ready to Transform Your Vision Into Reality?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                  Start your project journey today with Thiran360AI. Our team of experts is ready to build the solution
                  you need with innovation and excellence.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124, 58, 237, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg transition-all"
              >
                Get Your Quote Today
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#7c3aed" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 glassmorphism border-2 border-secondary hover:border-primary text-foreground transition-all"
              >
                Schedule Call
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
