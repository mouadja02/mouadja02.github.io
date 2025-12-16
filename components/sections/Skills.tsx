'use client'

import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

const skills = [
  {
    name: 'Google Cloud Platform',
    icon: 'images/gcp.png',
    description: 'Building scalable ML pipelines and data workflows for enterprise projects.'
  },
  {
    name: 'Amazon Web Services',
    icon: 'images/aws.png',
    description: 'Implementing data migration pipelines and cloud infrastructure for large-scale applications.'
  },
  {
    name: 'Python',
    icon: 'images/python.png',
    description: 'My primary language for ML development, data analysis, and backend services.'
  },
  {
    name: 'TensorFlow',
    icon: 'images/tf.png',
    description: 'Using this deep learning framework for computer vision and NLP projects.'
  },
  {
    name: 'Apache Spark',
    icon: 'images/spark.png',
    description: 'For big data processing, analytics and ETL pipelines in enterprise environments.'
  },
  {
    name: 'Snowflake',
    icon: 'images/snowflake.png',
    description: 'My go-to data warehousing solution for modern analytics and BI projects.'
  },
  {
    name: 'PostgreSQL',
    icon: 'images/postgresql.png',
    description: 'Utilized as the primary transactional database in various applications.'
  },
  {
    name: 'Docker',
    icon: 'images/docker.png',
    description: 'Containerizing ML models and creating reproducible development environments.'
  },
  {
    name: 'Airflow',
    icon: 'images/airflow.png',
    description: 'Orchestrating complex data workflows and ETL pipelines.'
  },
  {
    name: 'Terraform',
    icon: 'images/hashicorp.png',
    description: 'Infrastructure as Code for managing cloud resources and ensuring consistent deployments.'
  },
  {
    name: 'n8n',
    icon: 'images/n8n.png',
    description: 'Building workflow automation and AI-powered integrations for intelligent applications.'
  },
  {
    name: 'Pinecone',
    icon: 'images/pinecone.png',
    description: 'Vector database for building semantic search and AI-powered recommendation systems.'
  }
]


const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <SectionTitle>Technical Skills</SectionTitle>
      <p className="text-center text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto mb-16">
        Here are some of the key technologies I work with. I have experience using them in various projects, from academic research to enterprise-level applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 mb-6 relative">
              <Image src={getImagePath(skill.icon)} alt={`${skill.name} logo`} layout="fill" objectFit="contain" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">{skill.name}</h3>
            <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills 