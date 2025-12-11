"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Cloud, ShoppingCart, BarChart3, Lock, Users, Zap } from "lucide-react"
import Footer from "@/components/footer"
import AIChatbot from "@/components/ai-chatbot"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      features: ["React/Next.js", "Full Stack Development", "Responsive Design", "Performance Optimized"],
      color: "from-primary to-secondary",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
      color: "from-secondary to-accent",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      features: ["ML Models", "AI Chatbots", "Data Analysis", "Predictive Analytics"],
      color: "from-accent to-primary",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      features: ["AWS/Azure/GCP", "Microservices", "DevOps", "Infrastructure as Code"],
      color: "from-primary to-accent",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce",
      description: "Complete online store solutions with payment integration",
      features: ["Shopify/WooCommerce", "Custom Platforms", "Payment Integration", "Inventory Management"],
      color: "from-secondary to-primary",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "ERP Systems",
      description: "Enterprise resource planning systems for large organizations",
      features: ["Custom ERP", "Supply Chain", "Financial Management", "HR Systems"],
      color: "from-accent to-secondary",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Security Solutions",
      description: "Comprehensive security and compliance solutions",
      features: ["Penetration Testing", "Data Protection", "GDPR Compliance", "Encryption"],
      color: "from-primary to-secondary",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Consulting",
      description: "Expert technology consulting and strategy",
      features: ["Tech Strategy", "Digital Transformation", "Process Optimization", "Best Practices"],
      color: "from-secondary to-accent",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Support & Maintenance",
      description: "24/7 support and maintenance for your applications",
      features: ["24/7 Monitoring", "Bug Fixes", "Updates", "Performance Tuning"],
      color: "from-accent to-primary",
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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 text-center">Our Services</h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
              Comprehensive software solutions across all technologies. We deliver excellence in every project.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glassmorphism p-8 rounded-2xl border border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glassmorphism gradient-border rounded-2xl p-12 text-center border border-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Don't see what you're looking for? We can create custom solutions tailored to your specific needs.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </motion.div>
        </section>

        <Footer />
      </div>
      <AIChatbot />
    </main>
  )
}
