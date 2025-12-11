"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    project: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", whatsapp: "", project: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance"
        >
          Ready to{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get Started?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Tell us about your project and let's build something amazing together
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 p-8 rounded-lg glassmorphism border border-primary/30"
        >
          {/* Name Input */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
              placeholder="Your name"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
              placeholder="your@email.com"
            />
          </motion.div>

          {/* WhatsApp Input */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-foreground mb-2">WhatsApp Number</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
              placeholder="+1 (555) 000-0000"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
            <textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
              placeholder="Describe your project..."
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(124, 58, 237, 0.6)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg transition-all"
          >
            {submitted ? (
              <>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-5 h-5"
                >
                  ✓
                </motion.div>
                Message Sent!
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-secondary font-medium"
            >
              Thank you! We'll contact you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
