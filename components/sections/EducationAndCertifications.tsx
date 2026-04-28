'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, Calendar, CheckCircle2, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

const educationData = [
  {
    degree: "Master's in Signal & Image Processing",
    school: "ENSEIRB-MATMECA",
    period: "2023 - Sep 2025",
  },
  {
    degree: "Bachelor's in Electrical & Communications",
    school: "ENSEIRB-MATMECA",
    period: "2022 - 2023",
  },
  {
    degree: "Preparatory Classes MPSI/MP",
    school: "Lycée OBA, Oujda, Morocco",
    period: "2020 - 2022",
  },
]

const certificationsData = [
  {
    name: 'AWS Certified Data Engineer - Associate',
    issuer: 'AWS',
    icon: 'images/aws.png',
    status: 'In progress',
    credentialId: null,
  },
  {
    name: 'SnowPro Advanced: Data Engineer',
    issuer: 'Snowflake',
    icon: 'images/snowflake.png',
    status: 'In progress',
    credentialId: null,
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'AWS',
    icon: 'images/aws.png',
    status: 'Issued',
    credentialId: '7a080c61-81d7-4f33-9607-4835b1fd534f',
    expirationDate: 'Feb 13, 2029'
  },
  {
    name: 'SnowPro Core Certification',
    issuer: 'Snowflake',
    icon: 'images/snowflake.png',
    status: 'Issued',
    credentialId: 'S102284-260201-COF',
    expirationDate: 'Feb 01, 2028'
  },
  {
    name: 'Terraform Associate (003)',
    issuer: 'HashiCorp',
    icon: 'images/hashicorp.png',
    status: 'Issued',
    credentialId: '9c4a4945-0844-4927-80d7-6fd871ee305a',
    expirationDate: 'Nov 01, 2027',
  },
  {
    name: 'Machine Learning for Trading',
    issuer: 'Google Cloud Skills Boost',
    icon: 'images/gcp.png',
    status: 'Issued',
    credentialId: 'NC1D4D6YB39E',
  },
  {
    name: 'Modern Data Engineering with Snowflake',
    issuer: 'Snowflake',
    icon: 'images/snowflake.png',
    status: 'Issued',
    credentialId: 'Z1LFG4VV1KY1',
  },
  {
    name: 'Google IT Support Specialization',
    issuer: 'Google',
    icon: 'images/google.png',
    status: 'Issued',
    credentialId: '4NKNVNGX01MA',
  },
  {
    name: 'AI on Microsoft Azure',
    issuer: 'Microsoft',
    icon: 'images/microsoft.png',
    status: 'Issued',
    credentialId: 'Z1LFG4VV1KY1',
  },
  {
    name: 'Machine Learning with Python',
    issuer: 'IBM',
    icon: 'images/ibm.png',
    status: 'Issued',
    credentialId: 'R7ED6GHYCRJH',
  },
  {
    name: 'Computer Vision Fundamentals with Google Cloud',
    issuer: 'Google Cloud Skills Boost',
    icon: 'images/gcp.png',
    status: 'Issued',
    credentialId: 'EP4BBWKU4XH1',
  },
  {
    name: 'Python Reinforcement Learning, Deep Q-Learning and TRFL',
    issuer: 'UDEMY',
    icon: 'images/udemy.png',
    status: 'Issued',
    credentialId: 'UC-5392b2f8-caf1-4eb5-9f34-e066b06028b4',
  },
]

type Tab = 'education' | 'certifications'

const EducationAndCertifications = () => {
  const [activeTab, setActiveTab] = useState<Tab>('education')

  return (
    <section id="education" className="relative py-32 sm:py-40">
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
            <span className="font-mono text-sm text-accent tracking-wider uppercase">05 / Education</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Learning & <span className="gradient-text-accent">Credentials</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-accent-dim border border-accent-glow text-accent'
                : 'bg-bg-input border border-border text-text-muted hover:text-text-primary'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Education
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-accent-dim border border-accent-glow text-accent'
                : 'bg-bg-input border border-border text-text-muted hover:text-text-primary'
            }`}
          >
            <Award className="h-4 w-4" />
            Certifications
            <span className="text-xs font-mono bg-accent/20 px-2 py-0.5 rounded-full">{certificationsData.length}</span>
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'education' ? (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              <div className="relative space-y-8 pl-8 border-l border-border">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent border-4 border-bg shadow-lg shadow-accent/20" />
                    <div className="card-surface rounded-lg p-6">
                      <h4 className="font-display text-lg font-bold text-text-primary">{edu.degree}</h4>
                      <p className="text-sm font-mono text-accent mt-1">{edu.school}</p>
                      <div className="flex items-center gap-2 mt-3 text-sm text-text-muted">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={index}
                  className="card-surface rounded-lg p-5 flex items-center gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-lg bg-bg-input border border-border flex items-center justify-center p-2 flex-shrink-0">
                    <Image 
                      src={getImagePath(cert.icon)} 
                      alt={`${cert.issuer} logo`} 
                      width={32} 
                      height={32} 
                      className="object-contain" 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-text-primary text-sm truncate">{cert.name}</h4>
                    <p className="text-xs text-text-muted">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="text-xs font-mono text-text-muted mt-0.5">
                        ID: {cert.credentialId}
                      </p>
                    )}
                    {(cert as any).expirationDate && (
                      <p className="text-xs text-text-muted mt-0.5">
                        Exp: {(cert as any).expirationDate}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    {cert.status === 'Issued' ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <Loader2 className="h-5 w-5 text-amber-500 animate-spin" />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default EducationAndCertifications
