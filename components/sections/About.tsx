'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Zap, Coffee, ArrowUpRight, Code2, Cloud, Brain, Database } from 'lucide-react'

const About = () => {
  const stats = [
    { value: 'M.Eng', label: 'Engineering Graduate', icon: GraduationCap },
    { value: '10+', label: 'Projects Completed', icon: Zap },
    { value: '25+', label: 'Technologies Used', icon: Coffee },
  ]

  const expertise = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'AWS & GCP certified. Designing scalable, cost-efficient cloud infrastructure.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building end-to-end pipelines with Spark, Kafka, Snowflake, and Airflow.',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'From research to production: TensorFlow, NLP, computer vision, and MLOps.',
    },
    {
      icon: Code2,
      title: 'AI Automation',
      description: 'n8n workflows, LLM integrations, and intelligent agents for business automation.',
    },
  ]

  return (
    <section id="about" className="relative py-32 sm:py-40">
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
            <span className="font-mono text-sm text-accent tracking-wider uppercase">01 / About</span>
          </div>
          <h2 className="section-title max-w-3xl">
            From Signals to <span className="gradient-text-accent">Systems</span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Bio */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-surface rounded-lg p-8 lg:p-10 h-full">
              <p className="text-lg text-text-secondary leading-relaxed">
                I am a passionate and results-oriented engineer with a diverse background spanning signal processing, machine learning, and cloud-native data engineering. My journey has been driven by a relentless curiosity and a desire to build intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mt-4">
                I thrive in dynamic environments and I am always eager to learn and apply new technologies. Whether it is architecting data pipelines or deploying ML models, I bring a systematic approach to every challenge.
              </p>
              
              {/* Quote */}
              <div className="mt-8 pt-8 border-t border-border">
                <blockquote className="text-lg italic text-text-primary leading-relaxed">
                  &ldquo;Continuous learning is not just my strategy — it is my competitive advantage.&rdquo;
                </blockquote>
                <p className="text-right mt-2 font-mono text-sm text-accent">— Mouad Jaouhari</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + Expertise */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-surface rounded-lg p-4 text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <stat.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-text-primary">{stat.value}</p>
                  <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Expertise areas */}
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="card-surface rounded-lg p-5 flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-dim border border-accent-glow flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-sm">{item.title}</h3>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
