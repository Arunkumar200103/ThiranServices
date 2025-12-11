"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We understand your vision, requirements, and business goals through detailed consultation.",
      color: "from-primary to-purple-600",
    },
    {
      number: "02",
      title: "Design & Strategy",
      description: "Our designers create stunning UI/UX designs and architects build scalable solutions.",
      color: "from-primary via-secondary to-cyan-600",
    },
    {
      number: "03",
      title: "Development",
      description: "Expert developers build your solution using cutting-edge technologies and best practices.",
      color: "from-secondary to-cyan-400",
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing ensures bug-free, high-performance applications ready for production.",
      color: "from-cyan-600 to-blue-600",
    },
    {
      number: "05",
      title: "Launch & Deploy",
      description: "Smooth deployment with free hosting, SEO optimization, and deployment support.",
      color: "from-accent to-pink-500",
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Ongoing updates, monitoring, and support to keep your application running smoothly.",
      color: "from-pink-500 to-rose-600",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Our{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A streamlined, collaborative approach that ensures quality delivery every single time
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, y: -10 }} className="group">
              <div className="h-full p-6 rounded-lg glassmorphism border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} text-white font-bold text-lg mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                  <motion.div
                    className="mt-4 flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle size={16} />
                    <span className="text-sm font-medium">Ready to proceed</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hidden lg:block mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{ originX: 0 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
