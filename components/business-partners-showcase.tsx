"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Partner {
  id: number
  name: string
  logo: string
  description: string
  category: string
  website?: string
}

const businessPartners: Partner[] = [
  {
    id: 1,
    name: "TechVision Solutions",
    logo: "/tech-company-logo-blue.jpg",
    description: "Leading cloud infrastructure and digital transformation partner",
    category: "Technology",
    website: "#",
  },
  {
    id: 2,
    name: "InnovateLabs",
    logo: "/innovation-lab-logo.jpg",
    description: "AI and machine learning research and development",
    category: "AI & ML",
    website: "#",
  },
  {
    id: 3,
    name: "DigitalWave",
    logo: "/digital-wave-logo.jpg",
    description: "Digital marketing and brand strategy experts",
    category: "Marketing",
    website: "#",
  },
  {
    id: 4,
    name: "SecureNet Pro",
    logo: "/cybersecurity-logo.jpg",
    description: "Enterprise security and compliance solutions",
    category: "Security",
    website: "#",
  },
  {
    id: 5,
    name: "DataFlow Analytics",
    logo: "/data-analytics-logo.jpg",
    description: "Big data analytics and business intelligence",
    category: "Analytics",
    website: "#",
  },
  {
    id: 6,
    name: "CloudBridge Systems",
    logo: "/cloud-systems-logo.jpg",
    description: "Multi-cloud integration and management platform",
    category: "Cloud",
    website: "#",
  },
]

const categories = ["All", "Technology", "AI & ML", "Marketing", "Security", "Analytics", "Cloud"]

export default function BusinessPartnersShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPartners =
    selectedCategory === "All"
      ? businessPartners
      : businessPartners.filter((partner) => partner.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Our Trusted Business Partners</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Collaborate with industry leaders and innovators. We partner with the best to deliver exceptional solutions
            for your business.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/50"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPartners.map((partner) => (
            <motion.div key={partner.id} variants={itemVariants} className="relative">
              {/* Card */}
              <div className="relative z-10 glassmorphism rounded-xl p-8 h-full flex flex-col justify-between overflow-hidden">
                {/* Logo */}
                <div className="mb-6 h-24 bg-white/5 rounded-lg p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Partner info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{partner.description}</p>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${
                      partner.category === "Technology"
                        ? "from-blue-600/30 to-blue-400/30 text-blue-300"
                        : partner.category === "AI & ML"
                          ? "from-purple-600/30 to-purple-400/30 text-purple-300"
                          : partner.category === "Marketing"
                            ? "from-pink-600/30 to-pink-400/30 text-pink-300"
                            : partner.category === "Security"
                              ? "from-red-600/30 to-red-400/30 text-red-300"
                              : partner.category === "Analytics"
                                ? "from-green-600/30 to-green-400/30 text-green-300"
                                : "from-cyan-600/30 to-cyan-400/30 text-cyan-300"
                    }`}
                  >
                    {partner.category}
                  </span>
                </div>

                {/* Action button — NEVER HIDES */}
                <button className="w-full mt-6 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
