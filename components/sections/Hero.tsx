'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = React.useMemo(() => [
    'Cloud Computing',
    'Machine Learning',
    'Data Engineering',
    'MLOps',
    'Data Pipelines',
    'AI Solutions'
  ], [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000) // Longer pause
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % texts.length)
      }
    }, isDeleting ? 60 : 120) // Slower typing

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = getAssetPath('/resume.pdf')
    link.download = 'Mouad_Jaouhari_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-white dark:bg-secondary-900">
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-secondary-50 mb-4">
            Mouad Jaouhari
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-heading">
            I transform complex data into intelligent solutions.
          </p>
          <div className="mt-6 text-lg sm:text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 font-mono h-8 flex items-center justify-center">
            <span className="border-b-2 border-accent-500">{currentText}</span>
            <span className="animate-ping ml-1">|</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={scrollToContact}
            className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg shadow-lg hover:bg-primary-700 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-primary-800 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center">
              <ArrowDown className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
              Contact Me
            </span>
          </button>
          <button 
            onClick={downloadResume}
            className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-primary-600 dark:text-primary-300 bg-transparent border-2 border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:text-white transition-colors duration-300"
          >
            <FileText className="mr-2 h-5 w-5" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 
