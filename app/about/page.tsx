"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Zap, Globe, Award, Lightbulb } from "lucide-react"
import Footer from "@/components/footer"
import AIChatbot from "@/components/ai-chatbot"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We leverage cutting-edge technology to deliver innovative solutions that drive business growth.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Focused",
      description: "Your success is our priority. We work closely with you to understand and exceed expectations.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Delivery",
      description: "Agile methodologies ensure fast, efficient project delivery without compromising quality.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and expertise across all time zones.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Industry-leading standards and rigorous testing ensure production-grade solutions.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "100+ successful projects with 95% client satisfaction rate and long-term partnerships.",
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
  <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 text-center">About Thiran360AI</h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
              We are a forward-thinking software development company dedicated to transforming businesses through
              innovative technology solutions.
            </p>
          </motion.div>
        </section>

        {/* Company Overview */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <img
                src="/team-collaboration-office-workspace.jpg"
                alt="Team collaboration"
                className="rounded-2xl border border-primary/20 shadow-2xl shadow-primary/20 w-full h-auto"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Founded with a vision to revolutionize software development, Thiran360AI brings together expert
                developers, designers, and strategists with over 150+ combined years of experience.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                We specialize in creating comprehensive digital solutions that span across all technologies - from
                modern web applications to enterprise-level systems.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Our mission is simple: deliver exceptional technology solutions that drive measurable business impact
                while building lasting partnerships with our clients.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Built on principles that guide every decision and project we undertake
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glassmorphism p-8 rounded-2xl border border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-secondary group-hover:text-accent transition-colors duration-300 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Statistics */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Team Members" },
              { number: "30+", label: "Countries Served" },
              { number: "95%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-2xl border border-primary/20"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
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
