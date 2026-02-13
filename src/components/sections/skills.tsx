"use client"

import { motion } from "framer-motion"
import { profile } from "@/content/profile"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
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

export function Skills() {
  const frontendSkills = profile.skills.filter(skill => skill.category === "frontend")
  const backendSkills = profile.skills.filter(skill => skill.category === "backend")

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & Expertise
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
          className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Frontend Skills */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-2 h-6 sm:h-8 bg-blue-500 mr-3 rounded-full"></span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base md:text-lg
                             bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700
                             hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ease-in-out"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-2 h-6 sm:h-8 bg-purple-500 mr-3 rounded-full"></span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base md:text-lg
                             bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700
                             hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 ease-in-out"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
