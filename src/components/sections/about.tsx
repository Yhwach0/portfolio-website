"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {profile.name}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                {profile.title}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {profile.about}
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
              >
                <Mail className="h-5 w-5 text-blue-500" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-blue-500 transition-colors"
                >
                  {profile.email}
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="pt-6 flex flex-wrap gap-3"
            >
              {["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
