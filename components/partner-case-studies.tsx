"use client"

import { motion } from "framer-motion"

interface CaseStudy {
  id: number
  title: string
  partner: string
  image: string
  challenge: string
  solution: string
  result: string
  metrics: { label: string; value: string }[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Enterprise Digital Transformation",
    partner: "TechVision Solutions",
    image: "/digital-transformation-enterprise.jpg",
    challenge: "Legacy systems integration and cloud migration",
    solution: "Implemented comprehensive cloud infrastructure with AI-driven automation",
    result: "Successfully migrated 500+ applications with zero downtime",
    metrics: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Performance Gain", value: "3.5x" },
      { label: "Deployment Time", value: "80% faster" },
    ],
  },
  {
    id: 2,
    title: "AI-Powered Analytics Platform",
    partner: "DataFlow Analytics",
    image: "/analytics-dashboard-ai.jpg",
    challenge: "Processing massive datasets in real-time",
    solution: "Built ML pipeline with predictive analytics engine",
    result: "Real-time insights for 100+ enterprise clients",
    metrics: [
      { label: "Data Processing", value: "10M+/sec" },
      { label: "Accuracy", value: "98.5%" },
      { label: "Time to Insight", value: "<100ms" },
    ],
  },
  {
    id: 3,
    title: "Cybersecurity Infrastructure",
    partner: "SecureNet Pro",
    image: "/cybersecurity-dashboard.jpg",
    challenge: "Multi-layer security for distributed teams",
    solution: "Zero-trust architecture with advanced threat detection",
    result: "Protected against 99.9% of threats annually",
    metrics: [
      { label: "Threat Detection Rate", value: "99.9%" },
      { label: "Response Time", value: "<2 seconds" },
      { label: "Network Coverage", value: "100%" },
    ],
  },
]

export default function PartnerCaseStudies() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Success Stories & Case Studies</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how our partnerships deliver transformative results across industries
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={index % 2 === 1 ? "md:order-2" : ""}
              >
                <div className="relative group rounded-xl overflow-hidden h-96">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-pink-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-cyan-300 text-sm font-semibold mb-2">Partner</p>
                      <p className="text-white text-xl font-bold">{study.partner}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>

                <div className="space-y-4 mb-6">
                  <div className="glassmorphism rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Challenge</p>
                    <p className="text-white">{study.challenge}</p>
                  </div>

                  <div className="glassmorphism rounded-lg p-4">
                    <p className="text-sm text-cyan-300 mb-2">Solution</p>
                    <p className="text-white">{study.solution}</p>
                  </div>

                  <div className="glassmorphism rounded-lg p-4 border-l-4 border-gradient-to-b from-purple-600 to-cyan-600">
                    <p className="text-sm text-green-300 mb-2">Result</p>
                    <p className="text-white">{study.result}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg p-4 text-center"
                    >
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">
                        {metric.value}
                      </p>
                      <p className="text-xs text-gray-400">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
