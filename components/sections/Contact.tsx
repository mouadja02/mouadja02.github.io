'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Linkedin, Github, Bot, ArrowUpRight, MessageSquare } from 'lucide-react'
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
      .then(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 5000)
      }, () => {
        setSubmitStatus('error')
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 5000)
      })
  }

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/j-mouad/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/mouadja02', icon: Github },
    { name: 'Kaggle', url: 'https://www.kaggle.com/mouadjaouhari', icon: Bot },
  ]

  return (
    <section id="contact" className="relative py-32 sm:py-40">
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
            <span className="font-mono text-sm text-accent tracking-wider uppercase">06 / Contact</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Let&apos;s Build <span className="gradient-text-accent">Together</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Have a project in mind or just want to chat? I am always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Info - Left Side */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Quick contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a 
                href="mailto:mouad.jaouhari@bordeaux-inp.fr" 
                className="card-surface rounded-lg p-5 flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300 group"
              >
                <div className="social-btn">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-muted">Personal Email</p>
                  <p className="text-text-primary text-sm truncate">mouad.jaouhari@bordeaux-inp.fr</p>
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
              
              <a 
                href="mailto:mouad.jaouhari@atos.net" 
                className="card-surface rounded-lg p-5 flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300 group"
              >
                <div className="social-btn">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-muted">Work Email</p>
                  <p className="text-text-primary text-sm truncate">mouad.jaouhari@atos.net</p>
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
              
              <div className="card-surface rounded-lg p-5 flex items-center gap-4 text-text-secondary">
                <div className="social-btn">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Location</p>
                  <p className="text-text-primary text-sm">Talence, France</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="card-surface rounded-lg p-6">
              <h3 className="font-display font-bold text-text-primary mb-4 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-accent" />
                Find me on
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(link => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn"
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="card-surface rounded-lg p-8">
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">Send a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full p-4 input-theme rounded-sm" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full p-4 input-theme rounded-sm" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={6} 
                    className="w-full p-4 input-theme rounded-sm resize-none" 
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full btn-primary rounded-sm disabled:opacity-50"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send size={16} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
                
                {submitStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center text-sm text-emerald-500 font-mono"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center text-sm text-red-500 font-mono"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
