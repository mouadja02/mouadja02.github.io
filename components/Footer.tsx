'use client'

import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-text-primary">
              MJ<span className="text-accent">.</span>
            </span>
            <span className="text-text-muted text-sm">|</span>
            <span className="text-text-muted text-sm">Data & ML Engineer</span>
          </div>

          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Mouad Jaouhari. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group w-10 h-10 rounded-lg bg-bg-input border border-border flex items-center justify-center hover:border-accent-glow transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 text-text-muted group-hover:text-accent transition-colors duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
