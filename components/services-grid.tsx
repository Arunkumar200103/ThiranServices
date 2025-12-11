"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Tablet, Database, ShoppingCart, Brain, Search, Palette, Wrench } from "lucide-react"

export default function ServicesGrid() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Responsive, modern websites built with React, Next.js, and latest web technologies",
      details: "Custom designs, fast performance, mobile-first approach",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Native and cross-platform Android apps with seamless user experience",
      details: "Google Play ready, optimized for all devices",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Tablet,
      title: "iOS Development",
      description: "High-quality iOS apps for all Apple devices with native features",
      details: "App Store compliant, SwiftUI and Objective-C expertise",
      color: "from-gray-500 to-slate-600",
    },
    {
      icon: Database,
      title: "Custom ERP Solutions",
      description: "Tailored enterprise resource planning systems for complex operations",
      details: "Scalable, secure, and fully customizable",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platforms",
      description: "Full-featured online stores with payment integration and inventory management",
      details: "Shopify, WooCommerce, custom solutions with analytics",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Brain,
      title: "AI Chatbots & Tools",
      description: "Intelligent automation and AI-powered solutions for customer service",
      details: "NLP, machine learning, 24/7 support automation",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Optimize visibility and drive organic traffic with proven strategies",
      details: "On-page SEO, content strategy, analytics and reporting",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love and engage with",
      details: "User research, wireframing, prototyping, design systems",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing updates, bug fixes, and technical support for your projects",
      details: "24/7 monitoring, regular updates, security patches",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance"
        >
          Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Comprehensive solutions covering all aspects of software development, design, and digital innovation
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
                }}
                className="group"
              >
                <div className="h-full p-6 rounded-lg glassmorphism border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${service.color} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <p className="text-xs text-secondary font-medium">{service.details}</p>
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
