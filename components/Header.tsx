'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { identity, nav } from '@/lib/content'

export default function Header() {
  const [active, setActive] = useState('overview')
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // Track which section crosses the upper third of the viewport.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -65% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const page = Math.max(1, nav.findIndex((n) => n.id === active) + 1)
  const dark = mounted && resolvedTheme === 'dark'

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="mx-auto flex h-12 max-w-doc items-stretch px-4 font-mono text-xs uppercase tracking-[0.1em] sm:px-8">
        <a href="#overview" className="flex items-center gap-3 pr-5 font-semibold" onClick={() => setOpen(false)}>
          <span className="bg-ink px-1.5 py-0.5 text-paper">{identity.part}</span>
          <span className="hidden sm:inline lg:hidden xl:inline">{identity.name}</span>
        </a>

        <nav aria-label="Sections" className="ml-auto hidden items-stretch lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={`flex items-center gap-1.5 whitespace-nowrap border-l border-ink/25 px-3 transition-colors hover:bg-ink hover:text-paper ${
                active === item.id ? 'bg-ink text-paper' : ''
              }`}
            >
              <span className="opacity-60">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-stretch lg:ml-0">
          <span className="hidden items-center whitespace-nowrap border-l border-ink/25 px-3.5 text-muted sm:flex lg:hidden xl:flex" aria-hidden="true">
            Page {page} of {nav.length}
          </span>
          <button
            type="button"
            onClick={() => setTheme(dark ? 'light' : 'dark')}
            className="flex items-center gap-2 border-l border-ink/25 px-3.5 hover:bg-ink hover:text-paper"
            aria-label={dark ? 'Switch to paper theme' : 'Switch to scope theme'}
          >
            <span aria-hidden="true" className="inline-block h-3 w-3 rounded-full border border-current" style={{ background: 'linear-gradient(90deg, currentColor 50%, transparent 50%)' }} />
            {dark ? 'Paper' : 'Scope'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="index-panel"
            className="flex items-center border-l border-ink/25 pl-3.5 lg:hidden"
          >
            {open ? 'Close' : 'Index'}
          </button>
        </div>
      </div>

      {open && (
        <nav id="index-panel" aria-label="Sections" className="border-t border-ink bg-paper lg:hidden">
          <ol className="mx-auto max-w-doc px-4 py-2 sm:px-8">
            {nav.map((item) => (
              <li key={item.id} className="border-b border-ink/15 last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-3 font-mono text-sm uppercase tracking-[0.1em]"
                >
                  <span className="w-4 text-mark">{item.num}</span>
                  <span className="flex-1">{item.label}</span>
                  <span className="flex-[2] translate-y-[-3px] border-b border-dotted border-ink/40" aria-hidden="true" />
                  <span className="text-muted">{String(nav.indexOf(item) + 1).padStart(2, '0')}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  )
}
