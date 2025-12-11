"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Startup",
      content:
        "Thiran360AI delivered our complete web application in just 3 months with exceptional quality. Their team is responsive and professional.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Raj Kumar",
      role: "Business Owner",
      content:
        "The free hosting and SEO package made it an easy decision. Our online store is now generating 3x more sales!",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Emma Davis",
      role: "Product Manager",
      content:
        "Working with Thiran360AI was seamless. They handled our complex ERP system with expertise and delivered on time.",
      rating: 5,
      avatar: "👩‍🔬",
    },
    {
      name: "Alex Chen",
      role: "Founder, AI Company",
      content:
        "Their AI chatbot solution transformed our customer service. Highly recommended for any growing business!",
      rating: 5,
      avatar: "👨‍💻",
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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance"
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients</span> Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Real experiences from businesses we've transformed
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="group">
              <div className="h-full p-6 rounded-lg glassmorphism border border-primary/20 hover:border-primary/50 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
