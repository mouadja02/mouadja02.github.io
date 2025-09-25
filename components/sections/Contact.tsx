'use client'

import { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Linkedin, Github, Bot } from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

        emailjs.send(serviceId, templateId, formData, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setIsSubmitting(false)
                setTimeout(() => setSubmitStatus(null), 5000);
            }, (err) => {
                console.log('FAILED...', err);
                setSubmitStatus('error')
                setIsSubmitting(false)
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    }

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/j-mouad/', icon: Linkedin },
        { name: 'GitHub', url: 'https://github.com/mouadja02', icon: Github },
        { name: 'Kaggle', url: 'https://www.kaggle.com/mouadjaouhari', icon: Bot },
    ]

    return (
        <section id="contact" className="py-24 sm:py-32">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <motion.div 
                    className="bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">Send me a message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-4 bg-white/5 dark:bg-secondary-900/20 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-secondary-400" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-4 bg-white/5 dark:bg-secondary-900/20 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-secondary-400" />
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows={5} className="w-full p-4 bg-white/5 dark:bg-secondary-900/20 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-secondary-400"></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="mt-6 w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-300 disabled:bg-primary-300">
                            <Send size={20} />
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {submitStatus === 'success' && <p className="mt-4 text-center text-green-500">Message sent successfully!</p>}
                        {submitStatus === 'error' && <p className="mt-4 text-center text-red-500">Something went wrong. Please try again.</p>}
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary-500" />
                                <a href="mailto:mouad.jaouhari@bordeaux-inp.fr" className="text-lg text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400">
                                    mouad.jaouhari@bordeaux-inp.fr
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-primary-500" />
                                <p className="text-lg text-secondary-700 dark:text-secondary-300">Pessac, France</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 dark:bg-secondary-800/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">Find me on</h3>
                        <div className="flex gap-6">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary-100 dark:bg-secondary-700/50 rounded-full text-secondary-600 dark:text-secondary-300 hover:bg-primary-500 hover:text-white transition-all duration-300">
                                    <link.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact 