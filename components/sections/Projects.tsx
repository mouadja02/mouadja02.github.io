'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, X, ArrowUpRight, Star, GitFork } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

const projects = [
  {
    title: 'Murmur',
    category: 'AI / Desktop App',
    description: 'A desktop overlay that listens to your voice, transcribes locally, runs through a local LLM with prompt-engineering skills, and pastes refined output anywhere.',
    technologies: ['TypeScript', 'Electron', 'Whisper', 'Ollama', 'Local LLM'],
    imageUrl: 'images/murmur.png',
    githubUrl: 'https://github.com/mouadja02/murmur',
    featured: true,
    details: {
      features: [
        'Voice-to-text transcription using local Whisper model.',
        'Prompt-engineering "skills" for different output formats.',
        'Works with any app: Cursor, Claude, ChatGPT, VS Code, terminal.',
        'Fully local - no cloud dependencies for privacy.',
      ],
    }
  },
  {
    title: 'Skills Showcase',
    category: 'DevOps',
    description: 'A comprehensive collection of automation scripts, GitHub Actions workflows, and infrastructure templates for modern development workflows.',
    technologies: ['GitHub Actions', 'Bash', 'Docker', 'Terraform', 'CI/CD'],
    imageUrl: 'images/skills.jpg',
    githubUrl: 'https://github.com/mouadja02/skills',
    details: {
      features: [
        'Reusable GitHub Actions workflows for CI/CD pipelines.',
        'Infrastructure automation scripts for cloud deployments.',
        'Docker compose configurations for local development environments.',
      ],
    }
  },
  {
    title: 'Neural Network CUDA',
    category: 'Machine Learning',
    description: 'High-performance neural network implementations using NVIDIA CUDA for GPU-accelerated deep learning training and inference.',
    technologies: ['CUDA', 'C++', 'Python', 'PyTorch', 'GPU Computing'],
    imageUrl: 'images/cuda.jpg',
    githubUrl: 'https://github.com/mouadja02/neural-network-cuda',
    details: {
      features: [
        'Custom CUDA kernels for forward and backward propagation.',
        'GPU-optimized matrix operations for deep learning workloads.',
        'Benchmarks comparing CPU vs GPU performance for various architectures.',
      ],
    }
  },
  {
    title: 'Bitcoin Technical Indicators Dataset',
    category: 'Open Source / Data',
    description: 'Bitcoin Hourly OHLCV with 70+ Technical Indicators. Daily updated dataset for ML & Trading Analysis. 23+ stars on GitHub.',
    technologies: ['Python', 'Pandas', 'TA-Lib', 'CCXT', 'Dataset'],
    imageUrl: 'images/bitcoin-dataset.jpg',
    githubUrl: 'https://github.com/mouadja02/bitcoin-technical-indicators-dataset',
    stars: 23,
    forks: 4,
    featured: true,
    details: {
      features: [
        '70+ technical indicators computed hourly (RSI, MACD, Bollinger Bands, etc.).',
        'Daily automated updates via GitHub Actions.',
        'Clean CSV format ready for ML model training.',
        'Covers multiple timeframes and exchange data.',
      ],
    }
  },
  {
    title: 'AWS Certifications Coach',
    category: 'AI/Education',
    description: 'AI-powered learning platform to help students prepare for AWS certification exams with instant answers, progress tracking, and practice tests.',
    technologies: ['n8n', 'Snowflake', 'Streamlit', 'Python', 'AWS'],
    imageUrl: 'images/aws-coach.png',
    githubUrl: 'https://github.com/mouadja02/aws-certifications-coach',
    liveUrl: 'https://aws-certifications-coach.streamlit.app/',
    details: {
      features: [
        'AI-Powered Chat via n8n workflows for instant answers to AWS certification questions.',
        'Progress Tracking with Snowflake analytics to monitor your learning journey.',
        'Curated study resources including videos and materials for all AWS certification paths.',
        'Practice tests with realistic exam questions to test your knowledge.',
      ],
    }
  },
  {
    title: 'Bitcoin News & Sentiment Dataset',
    category: 'Open Source / Data',
    description: 'Comprehensive dataset of Bitcoin news articles and Fear & Greed Index data collected hourly from major cryptocurrency publications.',
    technologies: ['Python', 'Web Scraping', 'NLP', 'Sentiment Analysis', 'Dataset'],
    imageUrl: 'images/bitcoin-trading.png',
    githubUrl: 'https://github.com/mouadja02/bitcoin-news-data',
    stars: 8,
    details: {
      features: [
        'Hourly collection of Bitcoin news from major crypto publications.',
        'Fear & Greed Index tracking alongside news sentiment.',
        'Structured CSV format for ML training and backtesting.',
        'Covers May-June 2025 period with full coverage.',
      ],
    }
  },
  {
    title: 'AWS Cost Optimization & Monitoring Tool',
    category: 'Data Engineering',
    description: 'Enterprise monitoring solution for Sanofi projects to optimize costs and provide visibility into AWS resource usage and service performance.',
    technologies: ['AWS', 'Terraform', 'Python', 'CloudWatch', 'Lambda', 'Step Functions'],
    imageUrl: 'images/aws-monitoring.png',
    details: {
      features: [
        'Automated cost tracking and optimization recommendations for AWS resources.',
        'Real-time performance monitoring using CloudWatch and custom metrics.',
        'Infrastructure as Code with Terraform for consistent deployments.',
      ],
    }
  },
  {
    title: 'AI Fitness Coaching Agent',
    category: 'AI/Automation',
    description: 'AI agent that transforms Hevy App workout data into personalized coaching advice delivered via Telegram.',
    technologies: ['n8n', 'Python', 'Telegram API', 'AI/ML'],
    imageUrl: 'images/hevy-coach.png',
    githubUrl: 'https://github.com/mouadja02/hevy-coaching-agent',
    details: {
      features: [
        'Automated analysis of workout CSV exports from Hevy App.',
        'AI-powered personalized coaching recommendations based on your training data.',
        'Seamless delivery of insights via Telegram bot integration.',
      ],
    }
  },
  {
    title: 'Modern Data Engineering Platform',
    category: 'Data Engineering',
    description: 'End-to-end data engineering project demonstrating modern practices with cloud-native technologies and open-source tools.',
    technologies: ['Apache Spark', 'Apache Kafka', 'AWS Glue', 'S3', 'Athena', 'Snowflake', 'Apache Iceberg', 'Docker'],
    imageUrl: 'images/data-platform.png',
    githubUrl: 'https://github.com/mouadja02/end2end-datawarehouse-project',
    details: {
      features: [
        'Medallion architecture implementation for structured data processing.',
        'Apache Iceberg for ACID transactions, schema evolution, and time travel capabilities.',
        'Hybrid cloud architecture combining AWS services with Snowflake.',
        'Real-time data streaming with Apache Kafka and distributed processing with Spark.',
      ],
    }
  },
  {
    title: 'Bitcoin Trading Platform',
    category: 'Machine Learning',
    description: 'A comprehensive market analysis platform combining blockchain data with reinforcement learning for trading strategy optimization.',
    technologies: ['Snowflake', 'Python', 'TensorFlow', 'Airflow', 'Streamlit'],
    imageUrl: 'images/bitcoin-trading.png',
    details: {
      features: [
        'Real-time blockchain data pipeline for up-to-the-minute analysis.',
        'DQN-based algorithmic trading model to identify optimal strategies.',
        'Interactive dashboard for visualizing market data and model performance.',
      ],
    }
  },
  {
    title: 'Cloud Data Migration',
    category: 'Data Engineering',
    description: 'Enterprise-scale data migration from legacy Hadoop to a modern AWS and Snowflake architecture, designed for scalability and efficiency.',
    technologies: ['AWS', 'Snowflake', 'dbt', 'Airflow', 'Python'],
    imageUrl: 'images/data-migration.png',
  },
  {
    title: 'Satellite IoT Routing',
    category: 'Research',
    description: 'Optimizing satellite communication routing algorithms for IoT devices, resulting in a published IEEE research paper.',
    technologies: ['MATLAB', 'C++', 'Algorithm Design', 'Network Simulation'],
    imageUrl: 'images/satellite-iot.png',
    liveUrl: 'https://ieeexplore.ieee.org/document/10667193/',
  },
]

type Project = typeof projects[0]

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const regularProjects = filteredProjects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative py-32 sm:py-40">
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
            <span className="font-mono text-sm text-accent tracking-wider uppercase">04 / Projects</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Featured <span className="gradient-text-accent">Work</span>
          </h2>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'filter-btn-active' : 'filter-btn-inactive'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects - Large Cards */}
        {featuredProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <AnimatePresence mode="popLayout">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card-surface rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={getImagePath(project.imageUrl || '')}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 project-overlay" />
                    <div className="absolute top-4 left-4">
                      <span className="tag text-xs">{project.category}</span>
                    </div>
                    {(project.stars || project.forks) && (
                      <div className="absolute top-4 right-4 flex gap-2">
                        {project.stars && (
                          <span className="tag text-xs flex items-center gap-1">
                            <Star className="h-3 w-3" /> {project.stars}
                          </span>
                        )}
                        {project.forks && (
                          <span className="tag text-xs flex items-center gap-1">
                            <GitFork className="h-3 w-3" /> {project.forks}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                        <ArrowUpRight className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="text-xs font-mono text-text-muted">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs font-mono text-text-muted">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Regular Projects - Smaller Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-surface rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={getImagePath(project.imageUrl || '')}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 project-overlay" />
                  <div className="absolute top-3 left-3">
                    <span className="tag text-xs">{project.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-bold text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-bg/90 backdrop-blur-xl flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-bg-secondary border border-border rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-72">
                  <Image
                    src={getImagePath(selectedProject.imageUrl || '')}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 project-overlay" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg/50 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-bg transition-colors duration-300"
                  >
                    <X className="h-5 w-5 text-text-primary" />
                  </button>
                  <div className="absolute bottom-6 left-6">
                    <span className="tag mb-3">{selectedProject.category}</span>
                    <h2 className="font-display text-3xl font-bold text-text-primary">{selectedProject.title}</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-text-secondary mb-8 leading-relaxed">{selectedProject.description}</p>

                  {selectedProject.details?.features && (
                    <div className="mb-8">
                      <h4 className="font-display text-lg font-bold text-text-primary mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedProject.details.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-secondary">
                            <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="font-display text-lg font-bold text-text-primary mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-border">
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-secondary rounded-sm text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <Github size={16} /> View on GitHub
                        </span>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary rounded-sm text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink size={16} /> View Live
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
