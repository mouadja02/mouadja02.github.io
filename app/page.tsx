'use client'

import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import EducationAndCertifications from '@/components/sections/EducationAndCertifications'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      
      {/* Noise texture */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-[1]" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        
        <div className="relative">
          <About />
          <div className="container mx-auto px-6 lg:px-8">
            <hr className="hr-accent" />
          </div>
          
          <Skills />
          <div className="container mx-auto px-6 lg:px-8">
            <hr className="hr-accent" />
          </div>
          
          <Projects />
          <div className="container mx-auto px-6 lg:px-8">
            <hr className="hr-accent" />
          </div>
          
          <Experience />
          <div className="container mx-auto px-6 lg:px-8">
            <hr className="hr-accent" />
          </div>
          
          <EducationAndCertifications />
          <div className="container mx-auto px-6 lg:px-8">
            <hr className="hr-accent" />
          </div>
          
          <Contact />
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 
