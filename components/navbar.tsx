"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/Thiranlogo.png" alt="Thiran360AI Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="hidden sm:inline font-bold text-lg gradient-text">Thiran360AI</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative group text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden md:block">
            <Link href="#contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
