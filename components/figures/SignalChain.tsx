'use client'

import { Fragment, useEffect, useRef } from 'react'
import { signalChain } from '@/lib/content'

const POINTS = 96
const PERIOD = 48
// Noise left on the line after each stage: raw in, then cleaner at every block.
const NOISE = [1, 0.55, 0.26, 0.09, 0]

// Deterministic noise table so the server render matches the first client frame.
const TABLE = (() => {
  let seed = 0x6d6a3032
  return Array.from({ length: 256 }, () => {
    seed = (seed * 1664525 + 1013904223) >>> 0
    return (seed / 0xffffffff) * 2 - 1
  })
})()

function tracePath(segment: number, step: number) {
  let d = ''
  for (let i = 0; i < POINTS; i++) {
    const g = segment * POINTS + i - step
    const clean = Math.sin((2 * Math.PI * g) / PERIOD) * 11
    const noise = TABLE[((g % 256) + 256) % 256] * 12 * NOISE[segment]
    const x = (i / (POINTS - 1)) * 100
    const y = 20 - clean - noise
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`
  }
  return d
}

function Trace({ segment, register }: { segment: number; register: (el: SVGPathElement | null) => void }) {
  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-9 w-full shrink-0 text-accent lg:h-16 lg:w-auto lg:min-w-0 lg:flex-1"
    >
      <path
        ref={register}
        d={tracePath(segment, 0)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/** Figure 1: a noisy input cleaned up stage by stage. Signals in, systems out. */
export default function SignalChain() {
  const paths = useRef<(SVGPathElement | null)[]>([])
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    let visible = true
    let last = -1
    const start = performance.now()

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick)
      if (!visible) return
      const step = Math.floor((now - start) / 34)
      if (step === last) return
      last = step
      paths.current.forEach((p, i) => p?.setAttribute('d', tracePath(i, step)))
    }
    frame = requestAnimationFrame(tick)

    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    if (root.current) io.observe(root.current)
    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
    }
  }, [])

  return (
    <figure>
      <div ref={root} className="fig px-4 py-5 sm:px-6 lg:py-8">
        <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-0">
          <span className="label shrink-0 text-ink lg:w-14">
            Raw
            <br className="hidden lg:block" /> in
          </span>
          {signalChain.map((stage, i) => (
            <Fragment key={stage.name}>
              <Trace segment={i} register={(el) => (paths.current[i] = el)} />
              <div className="shrink-0 border-2 border-ink bg-paper px-4 py-3 lg:w-36 lg:px-2 lg:py-4 lg:text-center xl:w-44">
                <p className="wd-narrow text-xl font-extrabold uppercase leading-none">{stage.name}</p>
                <p className="mt-1.5 font-mono text-[0.6875rem] leading-4 text-muted">{stage.parts}</p>
              </div>
            </Fragment>
          ))}
          <Trace segment={4} register={(el) => (paths.current[4] = el)} />
          <span className="label shrink-0 text-ink lg:w-14 lg:text-right">
            Clean
            <br className="hidden lg:block" /> out
          </span>
        </div>
      </div>
      <figcaption className="figcap">Figure 1. Simplified functional block diagram. Noise in, decisions out.</figcaption>
    </figure>
  )
}
