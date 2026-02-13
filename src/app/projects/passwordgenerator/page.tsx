"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, RefreshCw, Shield, Key, AlertTriangle, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let charset = ""
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (includeNumbers) charset += "0123456789"
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?"

    if (charset === "") {
      setPassword("Please select at least one option")
      return
    }

    let newPassword = ""
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  const copyToClipboard = () => {
    if (password && password !== "Please select at least one option") {
      navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getPasswordStrength = () => {
    if (!password || password === "Please select at least one option") return 0
    
    let strength = 0
    if (password.length >= 12) strength += 25
    if (password.length >= 16) strength += 25
    if (includeUppercase && includeLowercase) strength += 25
    if (includeNumbers) strength += 12.5
    if (includeSymbols) strength += 12.5
    
    return Math.min(strength, 100)
  }

  const getStrengthColor = () => {
    const strength = getPasswordStrength()
    if (strength < 30) return "bg-red-500"
    if (strength < 60) return "bg-yellow-500"
    if (strength < 80) return "bg-blue-500"
    return "bg-green-500"
  }

  const getStrengthText = () => {
    const strength = getPasswordStrength()
    if (strength < 30) return "Weak"
    if (strength < 60) return "Fair"
    if (strength < 80) return "Good"
    return "Strong"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-between items-center mb-4">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Main Page</span>
            </motion.a>
            <ThemeToggle />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Password Generator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Create strong, secure passwords with customizable options
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              <span className="text-green-500 mr-2">✅</span>
              Generated locally in your browser
            </div>
            <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              <span className="text-green-500 mr-2">✅</span>
              No passwords are stored or sent anywhere
            </div>
          </div>
        </motion.div>

        {/* Warning Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-1">
                  ⚠️ Demo Warning
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-200">
                  This is a demonstration version only. <strong>DO NOT use this for real passwords.</strong> 
                  The original project was a private local Chrome extension that runs entirely on your device 
                  for maximum security. This web demo is for educational purposes only.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          {/* Password Display */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Key className="h-6 w-6 text-blue-500" />
              <input
                type="text"
                value={password}
                readOnly
                placeholder="Click generate to create a password"
                className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 outline-none"
              />
              <button
                onClick={copyToClipboard}
                disabled={!password || password === "Please select at least one option"}
                className="p-2 text-gray-500 hover:text-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {copied ? (
                  <Shield className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
            {password && password !== "Please select at least one option" && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Password Strength: {getStrengthText()}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {getPasswordStrength()}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor()}`}
                    style={{ width: `${getPasswordStrength()}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-6 mb-8">
            {/* Length Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password Length
                </label>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {length}
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="32"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">Include Uppercase Letters (A-Z)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">Include Lowercase Letters (a-z)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">Include Numbers (0-9)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">Include Symbols (!@#$%^&*)</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={generatePassword}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Generate Password</span>
          </motion.button>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
            🔒 Security Tips
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>• Use at least 16 characters for maximum security</li>
            <li>• Include a mix of uppercase, lowercase, numbers, and symbols</li>
            <li>• Avoid using personal information or common words</li>
            <li>• Use unique passwords for each account</li>
            <li>• Consider using a password manager for storage</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
