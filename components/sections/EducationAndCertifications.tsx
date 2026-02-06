'use client'

import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'
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
        name: 'AWS Solutions Architect - Associate',
        issuer: 'AWS',
        icon: 'images/aws.png',
        status: 'In progress',
        credentialId: null,
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
        name: 'HashiCorp Certified: Terraform Associate',
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

const EducationAndCertifications = () => {
    return (
        <section id="education" className="py-24 sm:py-32">
            <SectionTitle>Education & Certifications</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Education Timeline */}
                <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white mb-8 flex items-center gap-4">
                        <GraduationCap className="h-8 w-8 text-primary-500" />
                        Education
                    </h3>
                    <div className="relative border-l-2 border-primary-200 dark:border-primary-800 space-y-12 pl-8">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute -left-10 top-1 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary-50 dark:border-secondary-900"></div>
                                <h4 className="text-xl font-bold text-secondary-800 dark:text-secondary-200">{edu.degree}</h4>
                                <p className="text-md font-medium text-primary-600 dark:text-primary-400 mb-1">{edu.school}</p>
                                <p className="text-sm text-secondary-500 dark:text-secondary-400 flex items-center gap-2">
                                    <Calendar size={14} /> {edu.period}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications List */}
                <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white mb-8 flex items-center gap-4">
                        <Award className="h-8 w-8 text-accent-500" />
                        Certifications
                    </h3>
                    <div className="space-y-6">
                        {certificationsData.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 p-4 rounded-xl transition-shadow duration-300"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 mr-4 bg-white rounded-lg flex items-center justify-center p-1 shadow-sm flex-shrink-0">
                                    <Image src={getImagePath(cert.icon)} alt={`${cert.issuer} logo`} width={40} height={40} className="object-contain" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-secondary-800 dark:text-secondary-200">{cert.name}</h4>
                                    <p className="text-sm text-secondary-500 dark:text-secondary-400">{cert.issuer}</p>
                                    {cert.credentialId && (
                                        <p className="text-xs text-secondary-500 dark:text-secondary-400 font-mono mt-1">
                                            Credential ID: {cert.credentialId}
                                        </p>
                                    )}
                                    {(cert as any).expirationDate && (
                                        <p className="text-xs text-secondary-500 dark:text-secondary-400 mt-1">
                                            Expires: {(cert as any).expirationDate}
                                        </p>
                                    )}
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    {cert.status === 'Issued' ? (
                                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    ) : (
                                        <Loader2 className="h-6 w-6 text-green-500 animate-spin" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-secondary-500 dark:text-secondary-400 mt-8">
                        All certifications are verified and can be validated through the Credly, Coursera and Udemy platforms.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default EducationAndCertifications 