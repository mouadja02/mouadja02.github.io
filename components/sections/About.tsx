'use client'

import React from 'react'
import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'
import { GraduationCap, Zap, Coffee } from 'lucide-react'

const About = () => {
  const stats = [
    {
      value: 'M.Eng',
      label: 'Engineering Graduate',
      icon: GraduationCap,
    },
    {
      value: '10+',
      label: 'Projects Completed',
      icon: Zap,
    },
    {
      value: '25+',
      label: 'Technologies Used',
      icon: Coffee,
    },
  ]

  const journey = [
      'Started with a foundation in signal processing and electronics.',
      'Transitioned to specializing in Machine Learning and Computer Vision.',
      'Focused on the practical application of Data Engineering in the cloud.',
      'Currently building and deploying production-ready ML systems.',
  ]

  return (
    <section id="about" className="py-24 sm:py-32">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left side: Bio and Journey */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div 
              className="p-8 bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 rounded-2xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4 font-heading">
                From Signals to Systems
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                I am a passionate and results-oriented engineer with a diverse background spanning signal processing, machine learning, and cloud-native data engineering. My journey has been driven by a relentless curiosity and a desire to build intelligent systems that solve real-world problems. I thrive in dynamic environments and I am always eager to learn and apply new technologies.
              </p>
            </motion.div>

            <motion.div 
              className="p-8 bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 rounded-2xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6 font-heading">
                    My Journey
                </h3>
                <ul className="space-y-4">
                    {journey.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <div className="mt-1 mr-4 flex-shrink-0 h-3 w-3 rounded-full bg-primary-500"></div>
                            <span className="text-lg text-secondary-600 dark:text-secondary-300">{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
          </div>

          {/* Right side: Stats and Quote */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center space-x-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="h-12 w-12 text-primary-500" />
                  <div>
                    <p className="text-4xl font-bold text-secondary-900 dark:text-white">{stat.value}</p>
                    <p className="text-md text-secondary-500 dark:text-secondary-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="p-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-xl text-white"
              whileHover={{ y: -5 }}
            >
              <blockquote className="text-xl italic font-semibold leading-relaxed">
                &ldquo;Continuous learning is not just my strategy — it&apos;s my competitive advantage.&rdquo;
              </blockquote>
              <p className="text-right mt-4 font-bold">- Mouad Jaouhari</p>
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default About 