"use client"

import { motion } from "framer-motion"
import { Heart, Github, Youtube, Music, Mail } from "lucide-react"
import { profile } from "@/content/profile"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center space-x-4">
            {profile.socials.map((social) => {
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
                  default: return 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }
              }
              
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-3 rounded-lg transition-colors ${getColors(social.name)}`}
                  aria-label={social.name}
                >
                  {getIcon(social.name)}
                </motion.a>
              )
            })}
          </div>

          <div className="space-y-2">
            <p className="text-gray-300">
              © {currentYear} {profile.name}.
            </p>
            <p className="text-sm text-gray-400 flex items-center justify-center space-x-2">
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
