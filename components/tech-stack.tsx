"use client"

import { motion } from "framer-motion"

export default function TechStack() {
  const technologies = [
    { name: "React", category: "Frontend", color: "from-blue-400 to-cyan-500", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", category: "Framework", color: "from-gray-700 to-black", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "TypeScript", category: "Language", color: "from-blue-600 to-blue-700", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Node.js", category: "Backend", color: "from-green-600 to-emerald-700", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Python", category: "AI/ML", color: "from-blue-500 to-yellow-500", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "PostgreSQL", category: "Database", color: "from-blue-700 to-indigo-900", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "MongoDB", category: "Database", color: "from-green-600 to-emerald-600", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Docker", category: "DevOps", color: "from-blue-500 to-blue-700", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "AWS", category: "Cloud", color: "from-orange-400 to-orange-600", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    { name: "Firebase", category: "Backend", color: "from-yellow-400 to-orange-500", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Tailwind CSS", category: "Styling", color: "from-cyan-400 to-cyan-600", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "GraphQL", category: "API", color: "from-pink-500 to-red-500", logo: "https://cdn.simpleicons.org/graphql/E10098" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
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
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with modern, scalable technologies and tools trusted by leading companies worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                rotateY: 5,
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
              }}
              className="group"
            >
              <div className="h-full p-6 rounded-lg glassmorphism border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="mb-3 flex justify-center items-center h-12"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'text-2xl font-bold';
                        fallback.textContent = tech.name.substring(0, 2);
                        e.currentTarget.parentElement?.appendChild(fallback);
                      }}
                    />
                  </motion.div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}