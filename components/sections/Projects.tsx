'use client'

import { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, X } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

const projects = [
    {
      title: 'Bitcoin Trading Platform',
      category: 'Machine Learning',
      description: 'A comprehensive market analysis platform combining blockchain data with reinforcement learning for trading strategy optimization.',
      technologies: ['Snowflake', 'Python', 'TensorFlow', 'Airflow', 'Streamlit'],
      imageUrl: 'images/bitcoin-trading.png',
      githubUrl: '#',
      liveUrl: '#',
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
      githubUrl: '#',
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
    
    return (
        <section id="projects" className="py-24 sm:py-32">
            <SectionTitle>Featured Projects</SectionTitle>

            {/* Category Filters */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
                            selectedCategory === category
                                ? 'bg-primary-500 text-white shadow-lg'
                                : 'bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 text-secondary-700 dark:text-secondary-300 hover:bg-white/20 dark:hover:bg-secondary-700/20'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden group cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                        layoutId={`project-card-${project.title}`}
                        whileHover={{ y: -5 }}
                    >
                        <div className="relative h-56">
                            <Image
                                src={getImagePath(project.imageUrl || '')}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 4).map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-medium rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-white/10 dark:bg-secondary-800/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                            layoutId={`project-card-${selectedProject.title}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-80">
                                <Image
                                    src={getImagePath(selectedProject.imageUrl || '')}
                                    alt={selectedProject.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 rounded-full p-2 transition-colors duration-300"
                                >
                                    <X className="h-6 w-6 text-secondary-800" />
                                </button>
                            </div>
                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">{selectedProject.title}</h2>
                                <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-6">{selectedProject.description}</p>
                                
                                {selectedProject.details?.features && (
                                    <div className="mb-6">
                                        <h4 className="text-xl font-semibold mb-3 text-secondary-800 dark:text-secondary-200">Key Features</h4>
                                        <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-secondary-300">
                                            {selectedProject.details.features.map((feature, i) => <li key={i}>{feature}</li>)}
                                        </ul>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3 text-secondary-800 dark:text-secondary-200">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.technologies.map(tech => (
                                            <span key={tech} className="px-4 py-2 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-md font-medium rounded-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/*
                                <div className="flex gap-4 mt-8">
                                    {selectedProject.githubUrl && (
                                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-secondary-700 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors duration-300">
                                            <Github size={20} /> View on GitHub
                                        </a>
                                    )}
                                    {selectedProject.liveUrl && (
                                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-300">
                                            <ExternalLink size={20} /> View Live
                                        </a>
                                    )}
                                </div>
                                */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Projects 