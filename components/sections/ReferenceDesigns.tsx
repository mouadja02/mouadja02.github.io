'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import { projects, type Project } from '@/lib/content'

const numberOf = (i: number) => `4.${String(i + 1).padStart(2, '0')}`

/** Figure, features, bill of materials and links for one project. */
function Detail({ project, num, showSummary }: { project: Project; num: string; showSummary?: boolean }) {
  return (
    <div className="space-y-6">
      {showSummary && (
        <div>
          <p className="font-mono text-sm text-mark">{num}</p>
          <h3 className="wd-narrow mt-1 text-4xl font-extrabold uppercase leading-none">{project.title}</h3>
          <p className="mt-3 text-[1.0625rem] leading-7">{project.description}</p>
        </div>
      )}

      <figure className="group">
        <div className="fig p-2">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="printed block max-h-64 w-full object-contain" />
          ) : (
            <div className="bg-ink px-4 py-6 font-mono text-sm leading-6 text-paper sm:px-5">
              <p className="mb-2 text-[0.6875rem] uppercase tracking-[0.12em] text-paper/55">Quick start</p>
              <p className="break-words">
                <span className="select-none text-accent">$ </span>
                {project.command}
              </p>
            </div>
          )}
        </div>
        <figcaption className="figcap">
          Figure {num}. {project.title}
          {project.image ? '.' : ', quick start.'}
        </figcaption>
      </figure>

      {project.features && (
        <div>
          <p className="label mb-2 text-ink">Features</p>
          <ul className="space-y-1.5 text-[0.9375rem] leading-6">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <p className="label mb-2 text-ink">Bill of materials</p>
        <p className="font-mono text-sm leading-7">
          {project.technologies.map((t, k) => (
            <span key={t}>
              {k > 0 && <span className="px-2 text-accent"> / </span>}
              <span className="whitespace-nowrap">{t}</span>
            </span>
          ))}
        </p>
      </div>

      {(project.github || project.live) && (
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Source on GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-line">
              {project.liveLabel ?? 'Open'} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function ReferenceDesigns() {
  // Wide screens: an index on the left drives a sticky sheet on the right, on hover.
  // Narrow screens: the same index works as an accordion, on tap.
  const [selected, setSelected] = useState(0)
  const [openMobile, setOpenMobile] = useState<number | null>(0)

  const choose = (i: number) => {
    setSelected(i)
    setOpenMobile((open) => (open === i ? null : i))
  }

  return (
    <Section
      id="projects"
      num="4"
      title="Reference designs"
      plain="Projects"
      note="Thirteen builds, from agent tooling and a Rust data-diff engine to enterprise data platforms. Pick a design to read its sheet."
    >
      <div className="grid gap-x-10 lg:grid-cols-[minmax(0,19rem)_1fr]">
        <ol className="border-t border-ink">
          {projects.map((p, i) => {
            const isSelected = selected === i
            const isOpen = openMobile === i
            const num = numberOf(i)
            return (
              <li key={p.title} className="border-b border-ink/30">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-current={isSelected ? 'true' : undefined}
                  onPointerEnter={(e) => e.pointerType === 'mouse' && setSelected(i)}
                  onFocus={() => setSelected(i)}
                  onClick={() => choose(i)}
                  className={`-mx-2 grid w-[calc(100%+1rem)] grid-cols-[2.75rem_1fr_auto] items-baseline gap-x-3 px-2 py-3.5 text-left transition-colors duration-100 ${
                    isOpen ? 'max-lg:bg-ink max-lg:text-paper' : ''
                  } ${isSelected ? 'lg:bg-ink lg:text-paper' : ''}`}
                >
                  <span className={`font-mono text-sm ${isSelected ? 'lg:text-accent' : ''} ${isOpen ? 'max-lg:text-accent' : ''} text-mark`}>{num}</span>
                  <span>
                    <span className="wd-narrow block text-[1.375rem] font-extrabold uppercase leading-[1.05]">{p.title}</span>
                    <span className="mt-1 block font-mono text-[0.6875rem] uppercase tracking-[0.1em] opacity-65">
                      {p.category}
                      {p.stars ? ` · ★ ${p.stars}` : ''}
                    </span>
                  </span>
                  <span aria-hidden="true" className="self-center font-mono text-lg lg:hidden">
                    {isOpen ? '−' : '+'}
                  </span>
                  <span aria-hidden="true" className={`hidden self-center font-mono text-sm lg:block ${isSelected ? 'text-accent' : 'opacity-0'}`}>
                    →
                  </span>
                  <span className="col-span-2 col-start-2 mt-2 text-sm leading-6 opacity-80 lg:hidden">{p.description}</span>
                </button>

                {isOpen && (
                  <div className="pb-10 pt-6 lg:hidden">
                    <Detail project={p} num={num} />
                  </div>
                )}
              </li>
            )
          })}
        </ol>

        <div className="hidden lg:block">
          <div className="sticky top-16 border-t border-ink pt-5" aria-live="polite">
            <Detail key={selected} project={projects[selected]} num={numberOf(selected)} showSummary />
          </div>
        </div>
      </div>
    </Section>
  )
}
