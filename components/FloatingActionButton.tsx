'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const FloatingActionButton = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Mouad_Jaouhari_Resume.pdf'
    link.click()
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
    >
      <button
        onClick={downloadResume}
        className="group relative flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        aria-label="Download Resume"
      >
        <Download className="w-8 h-8" />
        
        <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 px-4 py-2 bg-secondary-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Download Resume
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-secondary-800"></div>
        </div>
      </button>
    </motion.div>
  )
}

export default FloatingActionButton 