'use client'

import { motion } from 'framer-motion'
import { Building, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'ATOS',
    role: 'Data Engineer',
    period: 'Oct 2025 - Present',
    location: 'Pessac, France',
    description: [
      'Developed comprehensive AWS monitoring and cost optimization tools for Sanofi enterprise projects.',
      'Implemented automated resource tracking and performance monitoring solutions using AWS CloudWatch and Lambda.',
      'Designed infrastructure as code using Terraform to ensure consistent and scalable deployments.',
    ],
    technologies: ['AWS', 'Terraform', 'Python', 'CloudWatch', 'Lambda', 'Cost Optimization'],
  },
  {
    company: 'Stellantis',
    role: 'Data Engineer (Apprenticeship)',
    period: 'May 2025 - July 2025',
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
    period: 'Feb 2025 - July 2025',
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
    <section id="experience" className="relative py-32 sm:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="line-deco" />
            <span className="font-mono text-sm text-accent tracking-wider uppercase">03 / Experience</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Career <span className="gradient-text-accent">Trajectory</span>
          </h2>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${isLeft ? '' : 'md:direction-rtl'}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-bg shadow-lg shadow-accent/20 z-10 hidden md:block" />
                  
                  {/* Content */}
                  <div className={`md:col-span-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:col-start-2'}`}>
                    <div className="card-surface rounded-lg p-6 lg:p-8 group hover:border-accent-glow transition-all duration-500">
                      {/* Header */}
                      <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="inline-flex items-center gap-2 text-accent font-mono text-sm mb-2">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </span>
                        <h3 className="font-display text-xl font-bold text-text-primary">{exp.role}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted mt-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                            <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 mt-5 pt-4 border-t border-border ${isLeft ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
