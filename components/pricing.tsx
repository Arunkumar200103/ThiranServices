"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects",
      price: "Starts at",
      amount: "$999",
      color: "from-primary to-purple-600",
      features: [
        "Website or App",
        "Up to 5 pages",
        "Basic responsive design",
        "Free 1 year hosting",
        "SEO optimization",
        "Email support",
      ],
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: "Starts at",
      amount: "$2,999",
      color: "from-secondary to-cyan-600",
      features: [
        "Complex web application",
        "Custom integrations",
        "E-Commerce or SaaS",
        "Free 1 year hosting",
        "Advanced SEO",
        "24/7 support",
        "Performance optimization",
        "SSL & Security",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale solutions",
      price: "Custom",
      amount: "Pricing",
      color: "from-accent to-pink-600",
      features: [
        "Full custom solution",
        "ERP/CRM systems",
        "Multiple platforms",
        "Dedicated team",
        "Advanced AI/ML features",
        "Priority 24/7 support",
        "Scalable infrastructure",
        "Training & Documentation",
      ],
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6 },
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
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include free 1-year hosting and SEO
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  viewport={{ once: true }}
                >
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white text-xs font-bold">
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              <div
                className={`h-full p-8 rounded-lg glassmorphism border transition-all duration-300 relative overflow-hidden ${
                  plan.popular ? "border-primary/80 bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                  <motion.div
                    className="mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-muted-foreground">{plan.price}</span>
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                      {plan.amount}
                    </div>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "glassmorphism border border-primary/30 hover:border-primary/50 text-foreground"
                    }`}
                  >
                    Get Started
                  </motion.button>

                  <div className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        className="flex items-start gap-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: fIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </motion.div>
                    ))}
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
