"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function PortfolioShowcase() {
  const portfolioItems = [
    
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/ecommerce-dashboard-with-products.jpg",
      description:
        "Built a full-featured e-commerce platform with payment integration, real-time inventory, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "Mobile Fitness App",
      category: "Mobile Development",
      image: "/fitness-tracking-app.png",
      description:
        "Developed iOS and Android fitness tracking app with real-time workout monitoring and social features.",
      technologies: ["React Native", "Firebase", "Swift"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "AI Customer Support",
      category: "AI/ML Solution",
      image: "/artificial-intelligence-chatbot-interface.jpg",
      description:
        "Created an intelligent chatbot system that handles customer inquiries 24/7 with 95% resolution rate.",
      technologies: ["Python", "NLP", "Node.js", "MongoDB"],
      color: "from-cyan-500/20 to-blue-500/20",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase of our recent projects demonstrating expertise across various technologies
          </p>
        </motion.div>

        <div className="space-y-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-cols-subgrid lg:col-span-full lg:[grid-auto-flow:dense]" : ""}`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-lg overflow-hidden border border-primary/20 h-96 group ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50`}></div>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="px-2 py-1 rounded-full bg-primary/20 w-fit mb-4">
                  <span className="text-xs font-semibold text-primary">{item.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ gap: "12px" }}
                  className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
                >
                  View Case Study
                  <ExternalLink size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
