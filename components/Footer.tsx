'use client'

import { Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/j-mouad/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/mouadja02', icon: Github },
  ]

  return (
    <footer className="bg-white dark:bg-secondary-800/50 border-t border-secondary-200 dark:border-secondary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-secondary-600 dark:text-secondary-400">
            &copy; {currentYear} Mouad Jaouhari. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-sm text-secondary-600 dark:text-secondary-400">
              Built with
            </span>
            <span className="font-semibold text-primary-500">Next.js</span>
            <span className="text-secondary-400">&</span>
            <span className="font-semibold text-primary-500">Tailwind CSS</span>
          </div>

          <div className="flex gap-4">
            {socialLinks.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-secondary-500 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 