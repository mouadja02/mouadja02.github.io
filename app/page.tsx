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
import FloatingActionButton from '@/components/FloatingActionButton'
import AnimatedBackground from '@/components/AnimatedBackground'
import SectionAnimator from '@/components/SectionAnimator'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-secondary-50 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200">
      <AnimatedBackground />
      <Header />
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 space-y-24 sm:space-y-32">
        <SectionAnimator>
          <About />
        </SectionAnimator>
        <SectionAnimator>
          <Skills />
        </SectionAnimator>
        <SectionAnimator>
          <Experience />
        </SectionAnimator>
        <SectionAnimator>
          <Projects />
        </SectionAnimator>
        <SectionAnimator>
          <EducationAndCertifications />
        </SectionAnimator>
        <SectionAnimator>
          <Contact />
        </SectionAnimator>
      </div>
      <Footer />
      <FloatingActionButton />
    </main>
  )
} 