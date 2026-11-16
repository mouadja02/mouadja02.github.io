'use client'

import { useRef, useState } from 'react'
import Section from '@/components/Section'
import { identity, pins } from '@/lib/content'

const PER_SIDE = pins.length / 2
const PITCH = 46
const TOP = 52
const BODY = { x: 150, y: 18, w: 140, h: (PER_SIDE - 1) * PITCH + 68 }
const VIEW_H = BODY.y * 2 + BODY.h

function pinGeometry(pin: number) {
  const left = pin <= PER_SIDE
  // DIP numbering: down the left side, then back up the right side.
  const row = left ? pin - 1 : pins.length - pin
  return { left, y: TOP + row * PITCH }
}

export default function Pinout() {
  // The active pin sticks until another one is chosen, so its row stays open
  // while the pointer travels to the link inside it.
  const [active, setActive] = useState(1)
  const rows = useRef<Record<number, HTMLLIElement | null>>({})
  const current = pins.find((p) => p.pin === active) ?? pins[0]

  // Selecting a pin on the package brings its row into view.
  const select = (pin: number) => {
    setActive(pin)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Wait a frame so the row has its expanded height before we centre it.
    requestAnimationFrame(() =>
      rows.current[pin]?.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' })
    )
  }

  return (
    <Section
      id="skills"
      num="3"
      title="Pin configuration and functions"
      plain="Skills"
      note="Twenty pins, grouped by domain. Hover a pin to preview it, click it to jump to its row. Each row opens with a repository where the technology is in use."
    >
      <div className="grid gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <figure className="mx-auto w-full max-w-sm lg:sticky lg:top-16 lg:self-start">
          <div className="fig p-3">
            <svg
              viewBox={`0 0 440 ${VIEW_H}`}
              className="mx-auto block max-h-[calc(100vh-15rem)] w-full"
              role="group"
              aria-label={`${identity.part} in a ${pins.length}-pin package, top view`}
            >
              {pins.map((p) => {
                const { left, y } = pinGeometry(p.pin)
                const on = active === p.pin
                return (
                  <g
                    key={p.pin}
                    tabIndex={0}
                    role="button"
                    aria-label={`Pin ${p.pin}: ${p.name}. Jump to its row.`}
                    aria-pressed={on}
                    className="cursor-pointer outline-none"
                    onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(p.pin)}
                    onFocus={() => setActive(p.pin)}
                    onClick={() => select(p.pin)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        select(p.pin)
                      }
                    }}
                  >
                    {/* generous invisible hit area */}
                    <rect x={left ? 0 : 290} y={y - PITCH / 2} width={150} height={PITCH} fill="transparent" />
                    <rect
                      x={left ? 120 : 290}
                      y={y - 8}
                      width={30}
                      height={16}
                      className={on ? 'fill-accent stroke-accent' : 'fill-paper stroke-ink'}
                      strokeWidth="1.5"
                    />
                    <text
                      x={left ? 110 : 330}
                      y={y + 5}
                      textAnchor={left ? 'end' : 'start'}
                      className={`font-mono text-[14px] ${on ? 'fill-mark font-semibold' : 'fill-ink'}`}
                    >
                      {p.short}
                    </text>
                  </g>
                )
              })}

              <rect x={BODY.x} y={BODY.y} width={BODY.w} height={BODY.h} className="fill-ink" />
              <path d={`M${BODY.x + BODY.w / 2 - 16} ${BODY.y} a16 16 0 0 0 32 0`} className="fill-sheet" />
              <circle cx={BODY.x + 16} cy={BODY.y + 18} r="4" className="fill-paper/70" />

              {pins.map((p) => {
                const { left, y } = pinGeometry(p.pin)
                return (
                  <text
                    key={p.pin}
                    x={left ? BODY.x + 10 : BODY.x + BODY.w - 10}
                    y={y + 4}
                    textAnchor={left ? 'start' : 'end'}
                    className={`pointer-events-none font-mono text-[12px] ${active === p.pin ? 'fill-accent' : 'fill-paper/60'}`}
                  >
                    {p.pin}
                  </text>
                )
              })}

              <g transform={`translate(${BODY.x + BODY.w / 2} ${BODY.y + BODY.h / 2}) rotate(-90)`} className="pointer-events-none">
                <text textAnchor="middle" y="4" className="wd-wide fill-paper text-[46px] font-black tracking-tight">
                  {identity.part}
                </text>
                <text textAnchor="middle" y="28" className="fill-paper/60 font-mono text-[11px] tracking-[0.3em]">
                  DATA · AI · 2026
                </text>
              </g>
            </svg>
          </div>
          <figcaption className="figcap">
            Figure 2. {identity.part}, {pins.length}-pin package, top view.
          </figcaption>

          {/* Live readout of the pin under the pointer */}
          <button
            type="button"
            onClick={() => select(current.pin)}
            className="group mt-3 flex w-full items-baseline gap-3 border border-ink bg-ink px-3 py-2.5 text-left text-paper"
          >
            <span className="font-mono text-sm text-accent">{String(current.pin).padStart(2, '0')}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-semibold leading-5">{current.name}</span>
              <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-paper/65">{current.type}</span>
            </span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-paper/80 group-hover:text-accent">
              Go to row <span aria-hidden="true">→</span>
            </span>
          </button>
        </figure>

        <div>
          <div className="thead grid grid-cols-[2.25rem_1fr_auto] gap-x-4">
            <span>Pin</span>
            <span>Name and function</span>
            <span>Type</span>
          </div>
          <ul>
            {pins.map((p) => {
              const on = active === p.pin
              return (
                <li
                  key={p.pin}
                  ref={(el) => {
                    rows.current[p.pin] = el
                  }}
                  tabIndex={0}
                  aria-current={on ? 'true' : undefined}
                  onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(p.pin)}
                  onFocus={() => setActive(p.pin)}
                  onClick={() => setActive(p.pin)}
                  className={`-mx-2 grid cursor-default grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-ink/25 px-2 py-2.5 outline-none ${
                    on ? 'bg-ink text-paper' : ''
                  }`}
                >
                  <span className={`font-mono text-sm ${on ? 'text-accent' : 'text-mark'}`}>{String(p.pin).padStart(2, '0')}</span>
                  <span className="font-semibold leading-6">{p.name}</span>
                  <span className={`font-mono text-[0.6875rem] uppercase tracking-[0.1em] ${on ? 'text-paper/70' : 'text-muted'}`}>{p.type}</span>
                  <span className={`col-span-2 col-start-2 text-sm leading-6 ${on ? 'text-paper/85' : 'text-muted'}`}>{p.description}</span>

                  {on && (
                    <div className="col-span-2 col-start-2 mt-2 border-t border-paper/25 pb-1.5 pt-3">
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-accent">In practice</p>
                      <p className="mt-1 text-[0.9375rem] leading-6">{p.detail}</p>
                      <a
                        href={p.repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 border border-paper/40 px-3 py-2 hover:border-accent hover:bg-accent hover:text-ink"
                      >
                        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] opacity-70">In use</span>
                        <span className="font-mono text-sm font-semibold">
                          {p.repo.name} <span aria-hidden="true">↗</span>
                        </span>
                        <span className="text-sm opacity-80">{p.repo.note}</span>
                      </a>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
