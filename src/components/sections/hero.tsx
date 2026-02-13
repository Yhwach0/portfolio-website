"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Youtube, Music, Mail } from "lucide-react"
import { profile } from "@/content/profile"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              {profile.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-medium"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {profile.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 pt-4"
          >
            {profile.socials.slice(0, 4).map((social, index) => {
              const getIcon = (name: string) => {
                switch (name.toLowerCase()) {
                  case 'github': return <Github className="h-5 w-5" />
                  case 'youtube': return <Youtube className="h-5 w-5" />
                  case 'spotify': return <Music className="h-5 w-5" />
                  case 'email': return <Mail className="h-5 w-5" />
                  default: return <span className="text-sm font-medium">{social.name[0]}</span>
                }
              }
              
              const getColors = (name: string) => {
                switch (name.toLowerCase()) {
                  case 'github': return 'bg-gray-800 hover:bg-gray-700 text-white'
                  case 'youtube': return 'bg-red-600 hover:bg-red-700 text-white'
                  case 'spotify': return 'bg-green-600 hover:bg-green-700 text-white'
                  case 'email': return 'bg-blue-600 hover:bg-blue-700 text-white'
                  default: return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }
              }
              
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-3 rounded-full transition-colors ${getColors(social.name)}`}
                  aria-label={social.name}
                >
                  {getIcon(social.name)}
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
