"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Footer from "@/components/footer"
import { link } from "fs"
import AIChatbot from "@/components/ai-chatbot"

export default function Portfolio() {
  const projects = [
    {
  title: "CodingBoss – Learning Platform",
  description: "Modern e-learning platform with course listings and responsive UI",
  image: "/codingboss-website-preview.png",
  tags: ["Django", "React", "Tailwind CSS"],
  metrics: { users: "10K+", revenue: "$50K+", uptime: "99.9%" },
  color: "from-indigo-500 to-purple-500",
    link: "https://codingboss.in/",
},

{
  title: "MSR Automation – Industrial Solutions",
  description: "Corporate website showcasing industrial automation services",
  image: "/msr-automation-preview.png",
  tags: ["React", "Framer Motion", "Tailwind"],
  metrics: { users: "5K+", clients: "50+", uptime: "99.99%" },
  color: "from-amber-500 to-orange-500",
  likn: "https://www.msrautomation.com",
},

{
  title: "Hindi Academy – Learning Portal",
  description: "Frontend learning portal with chapters, lessons, and SEO pages",
  image: "/hindi-academy-preview.png",
  tags: ["Next.js", "Tailwind", "Vercel"],
  metrics: { users: "20K+", lessons: "200+", uptime: "100%" },
  color: "from-pink-500 to-purple-500",
  link: "https://hindi-academy-sable.vercel.app/",
},

    {
      title: "E-Commerce Platform",
      description: "Full-featured online marketplace with 50,000+ products",
      image: "/ecommerce-dashboard-modern-design.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      metrics: { users: "100K+", revenue: "$2M+", uptime: "99.9%" },
      color: "from-primary to-secondary",
    },
    {
      title: "AI Chatbot Platform",
      description: "Intelligent customer support system with NLP",
      image: "/ai-chatbot-interface.png",
      tags: ["Python", "TensorFlow", "React", "AWS"],
      metrics: { tickets: "50K+", satisfaction: "98%", avgTime: "2min" },
      color: "from-secondary to-accent",
    },
    {
      title: "Healthcare Management System",
      description: "Enterprise ERP for hospital operations",
      image: "/healthcare-management-dashboard.png",
      tags: ["React", "Java", "Oracle", "Kubernetes"],
      metrics: { hospitals: "50+", patients: "500K+", staff: "5K+" },
      color: "from-accent to-primary",
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      image: "/fitness-app-interface.png",
      tags: ["React Native", "Firebase", "Wearables", "ML"],
      metrics: { downloads: "1M+", rating: "4.8⭐", active: "500K+" },
      color: "from-primary to-accent",
      
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time trading and analytics platform",
      image: "/financial-dashboard-trading.jpg",
      tags: ["Vue.js", "Python", "Redis", "WebSockets"],
      metrics: { traders: "10K+", volume: "$1B+", latency: "<10ms" },
      color: "from-secondary to-primary",
    },
    {
      title: "Supply Chain Management",
      description: "Logistics and inventory optimization system",
      image: "/supply-chain-network.png",
      tags: ["Next.js", "Golang", "MongoDB", "IoT"],
      metrics: { shipments: "100K+", efficiency: "+35%", savings: "$5M+" },
      color: "from-accent to-secondary",
    },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 text-center">Our Portfolio</h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
              Showcasing our best work across diverse industries and technologies
            </p>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glassmorphism rounded-2xl border border-primary/20 overflow-hidden hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-primary/10">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs text-foreground/60 capitalize">{key}</div>
                        <div className="text-sm font-semibold text-secondary">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex-1 px-3 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-sm font-semibold text-primary transition-colors flex items-center justify-center gap-2"
>
  <ExternalLink size={16} /> View
</a>

                    <button className="flex-1 px-3 py-2 bg-secondary/10 hover:bg-secondary/20 rounded-lg text-sm font-semibold text-secondary transition-colors flex items-center justify-center gap-2">
                      <Github size={16} /> Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Footer />
      </div>
      <AIChatbot />
    </main>
  )
}
