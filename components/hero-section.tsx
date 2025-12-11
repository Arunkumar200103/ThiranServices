"use client"

import { motion } from "framer-motion"
import { Zap, ArrowRight, Check, Sparkles } from "lucide-react"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 relative bg-gradient-to-br from-[#0a0a1b] via-[#0f0f24] to-[#1a1a35] text-white overflow-hidden mt-[-30]">

      {/* Main Container - Grid Layout */}
      <div className="max-w-7xl w-full relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
        
        {/* Left Side - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Enhanced Badge with Gradient */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30 shadow-lg shadow-indigo-500/20"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-semibold text-gray-100">
            by Thiran360AI
            </span>
          </motion.div>

          {/* Enhanced Title with Animation */}
          <h1
            
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 sm:mb-6"
          >
            <span className="relative inline-block">
              <span className="text-4xl md:text-6xl font-bold gradient-text mb-6 text-center">Thiran360AI
              </span>
             
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">Enterprise Software Solutions</span>
          </h1>

          {/* Enhanced Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed"
          >
            Transform your business with custom software development. We deliver scalable{" "}
            <span className="text-indigo-400 font-semibold">web applications</span>,{" "}
            <span className="text-purple-400 font-semibold">mobile solutions</span>,{" "}
            <span className="text-pink-400 font-semibold">cloud infrastructure</span>, and{" "}
            <span className="text-blue-400 font-semibold">AI-powered systems</span> that drive measurable results.
          </motion.p>

          {/* Enhanced Key Benefits */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2.5 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12"
          >
            {[
              { text: "1 Year Free Hosting", icon: Sparkles, gradient: "from-indigo-500 to-purple-500" },
              { text: "SEO Optimization", icon: Zap, gradient: "from-purple-500 to-pink-500" },
              { text: "Expert Team", icon: Check, gradient: "from-pink-500 to-indigo-500" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative px-3 py-2.5 sm:px-5 lg:px-6 sm:py-3 lg:py-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/20 hover:border-white/40 backdrop-blur-xl transition-all cursor-pointer overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <Icon size={16} className="sm:w-5 sm:h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-200">{item.text}</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all group-hover:scale-105"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <div className="relative flex items-center justify-center gap-2 text-white">
                Request Quote
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white hover:border-white/50 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Schedule Consultation
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Enhanced Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-gray-400 flex items-center gap-2"
          >
            <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] text-indigo-400" />
            <span className="hidden sm:inline">Trusted by 500+ businesses globally • ISO 27001 Certified • 24/7 Support</span>
            <span className="sm:hidden">500+ businesses • ISO 27001 • 24/7 Support</span>
          </motion.p>

        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="relative mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full aspect-square"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
           
            
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden backdrop-blur-xl shadow-2xl">
              <img
                src="https://i.cdn.newsbytesapp.com/images/l72920250806160011.jpeg?tr=w-720,h-405,fo-auto"
                alt="Digital Solutions"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">Projects Delivered</div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-xs sm:text-sm text-gray-300">Client Satisfaction</div>
            </motion.div>
          </motion.div>

          {/* Floating Icon */}
          <motion.div
            className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/30 backdrop-blur-xl shadow-xl shadow-indigo-500/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-xl sm:rounded-2xl blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <Zap className="relative w-6 h-6 sm:w-8 sm:h-8 text-indigo-300" />
            </motion.div>
          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}