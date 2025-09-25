'use client'

import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react'

const experiences = [
    {
      company: 'Stellantis',
      role: 'Data Engineer (Apprenticeship)',
      period: 'May 2025 - Present',
      location: 'Pessac, France',
      description: [
        'Architected and implemented EL data pipelines migrating from Hadoop to a modern AWS and Snowflake stack.',
        'Designed and orchestrated scalable data processing workflows using services like AWS Glue, Lambda, and Step Functions.',
        'Optimized data flow efficiency, reducing processing times and improving data quality across legacy and modern systems.',
      ],
      technologies: ['AWS', 'Snowflake', 'Python', 'SQL', 'Airflow', 'Hadoop'],
    },
    {
      company: 'Eviden',
      role: 'Data Science Intern',
      period: 'Feb 2025 - Present',
      location: 'Pessac, France',
      description: [
        'Developed a comprehensive Bitcoin market analysis solution using Snowflake and advanced machine learning algorithms.',
        'Engineered a real-time blockchain data pipeline to ingest and process on-chain indicators for predictive modeling.',
        'Built a sophisticated DQN (Deep Q-Network) model for developing and testing algorithmic trading strategies.',
      ],
      technologies: ['Snowflake', 'Python', 'TensorFlow', 'Airflow', 'Streamlit'],
    },
    {
        company: 'École de technologie supérieure',
        role: 'Research Intern',
        period: 'May 2024 - Sep 2024',
        location: 'Montreal, Canada',
        description: [
            'Conducted research on optimizing routing algorithms for satellite communications in non-terrestrial networks.',
            'Developed and simulated multi-hop routing strategies, improving data latency and network efficiency.',
            'Published findings in an IEEE research paper, contributing to the field of satellite IoT communication.',
        ],
        technologies: ['MATLAB', 'C++', 'Algorithm Design', 'Network Simulation'],
    },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="relative">
        {/* Vertical timeline bar */}
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-secondary-200 dark:bg-secondary-700"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
                <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary-50 dark:border-secondary-900"></div>
              
              <motion.div 
                className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center w-full`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Spacer */}
                <div className="hidden sm:block sm:w-1/2"></div>
                
                {/* Card */}
                <div className="w-full sm:w-1/2 sm:px-8">
                  <div className="bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2 font-heading">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-4">
                        <Building size={16} /> {exp.company}
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary-600 dark:text-secondary-400 mb-6">
                        <div className="flex items-center gap-2"><Calendar size={14} /> {exp.period}</div>
                        <div className="flex items-center gap-2"><MapPin size={14} /> {exp.location}</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="text-primary-500 mr-3 mt-1">&#10148;</span>
                                <span className="text-secondary-700 dark:text-secondary-300">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 