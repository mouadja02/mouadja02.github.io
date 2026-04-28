'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

interface Skill {
  name: string
  icon: string
  category: string
  scope: string
  description: string
}

const skills: Skill[] = [
  // Cloud
  { name: 'Google Cloud Platform', icon: 'images/gcp.png', category: 'Cloud', scope: 'Cloud Infrastructure & BigQuery', description: 'Cloud infrastructure, BigQuery, and ML services for scalable data solutions.' },
  { name: 'Amazon Web Services', icon: 'images/aws.png', category: 'Cloud', scope: 'Enterprise Cloud Computing', description: 'Enterprise cloud computing, Lambda, S3, and data pipeline orchestration.' },
  { name: 'Cloudflare', icon: 'images/cloudflare.png', category: 'Cloud', scope: 'Edge Computing & CDN', description: 'Edge computing, CDN, and serverless deployments for global performance.' },
  
  // Data
  { name: 'Snowflake', icon: 'images/snowflake.png', category: 'Data', scope: 'Cloud Data Warehouse', description: 'Cloud data warehouse with zero-copy cloning and elastic compute.' },
  { name: 'Apache Spark', icon: 'images/spark.png', category: 'Data', scope: 'Distributed Data Processing', description: 'Distributed data processing engine for large-scale analytics and ETL.' },
  { name: 'PostgreSQL', icon: 'images/postgresql.png', category: 'Data', scope: 'Relational Database', description: 'Robust relational database for transactional and analytical workloads.' },
  { name: 'Airflow', icon: 'images/airflow.png', category: 'Data', scope: 'Workflow Orchestration', description: 'Workflow orchestration platform for scheduling and monitoring data pipelines.' },
  
  // ML / AI
  { name: 'Python', icon: 'images/python.png', category: 'ML / AI', scope: 'Primary Programming Language', description: 'Primary language for data engineering, ML model development, and scripting.' },
  { name: 'TensorFlow', icon: 'images/tf.png', category: 'ML / AI', scope: 'Deep Learning Framework', description: 'Deep learning framework for building and deploying neural networks.' },
  { name: 'Pinecone', icon: 'images/pinecone.png', category: 'ML / AI', scope: 'RAG Vector Database', description: 'Vector database for semantic search and AI-powered recommendation systems.' },
  { name: 'CUDA', icon: 'images/cuda.png', category: 'ML / AI', scope: 'GPU Parallel Computing', description: 'NVIDIA parallel computing platform for GPU-accelerated ML training.' },
  
  // DevOps
  { name: 'Docker', icon: 'images/docker.png', category: 'DevOps', scope: 'Containerization Platform', description: 'Containerization for reproducible environments and scalable deployments.' },
  { name: 'Terraform', icon: 'images/hashicorp.png', category: 'DevOps', scope: 'Infrastructure as Code', description: 'Infrastructure as Code for managing cloud resources declaratively.' },
  { name: 'GitHub', icon: 'images/github.png', category: 'DevOps', scope: 'Version Control & CI/CD', description: 'Version control, CI/CD workflows, and collaborative code management.' },
  { name: 'Bash', icon: 'images/bash.png', category: 'DevOps', scope: 'Shell Scripting & Automation', description: 'Shell scripting for automation, system administration, and data workflows.' },
  
  // Automation & Tools
  { name: 'n8n', icon: 'images/n8n.png', category: 'Automation', scope: 'Workflow Automation & AI Agents', description: 'Workflow automation platform for connecting APIs and building AI agents.' },
  { name: 'Claude Code', icon: 'images/claude-ai.png', category: 'Tools', scope: 'AI Coding Assistant', description: 'AI-powered coding assistant for rapid development and code review.' },
  { name: 'Cursor AI', icon: 'images/cursor-ai.png', category: 'Tools', scope: 'AI-First Code Editor', description: 'AI-first code editor with intelligent autocomplete and refactoring.' },
]

const categories = Array.from(new Set(skills.map(s => s.category)))

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="skills" className="relative py-32 sm:py-40" ref={sectionRef}>
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
            <span className="font-mono text-sm text-accent tracking-wider uppercase">02 / Skills</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Technical <span className="gradient-text-accent">Arsenal</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Hover over any tool to explore my expertise. Organized by domain for intuitive discovery.
          </p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-display text-lg font-bold text-text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent" />
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="card-surface rounded-lg p-5 flex flex-col items-center text-center group cursor-pointer relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="w-12 h-12 mb-3 relative transition-all duration-500 grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-110">
                        <Image 
                          src={getImagePath(skill.icon)} 
                          alt={`${skill.name} logo`} 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                      <h3 className="text-xs font-medium text-text-primary group-hover:text-accent transition-colors duration-300 leading-tight">{skill.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Cursor-following tooltip */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[100] pointer-events-none"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 10,
            }}
          >
            <div className="bg-bg-secondary border border-border rounded-lg shadow-2xl p-4 max-w-xs backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 relative">
                  <Image 
                    src={getImagePath(hoveredSkill.icon)} 
                    alt={hoveredSkill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text-primary text-sm">{hoveredSkill.name}</h4>
                  <span className="text-xs font-mono text-accent">{hoveredSkill.scope}</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">{hoveredSkill.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Skills
