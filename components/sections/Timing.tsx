'use client'

import { useEffect, useRef, useState } from 'react'
import Section from '@/components/Section'
import { eduSignal, signals } from '@/lib/content'

const ORIGIN_YEAR = 2024
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Position of the first day of a month, in months since the origin.
const at = (year: number, month: number) => (year - ORIGIN_YEAR) * 12 + (month - 1)

type Row = { id: string; label: string; from: number; to: number | null; edu?: boolean }

const rows: Row[] = [
  { id: eduSignal.id, label: eduSignal.label, from: at(...eduSignal.start), to: at(...eduSignal.end) + 1, edu: true },
  ...[...signals].reverse().map((s) => ({
    id: s.id,
    label: s.label,
    from: at(...s.start),
    to: s.end ? at(...s.end) + 1 : null,
  })),
]

export default function Timing() {
  const [hot, setHot] = useState<string | null>(null)
  const [cursor, setCursor] = useState<number | null>(null)
  // Fixed until mount so the static export and the first client render agree.
  const [now, setNow] = useState(at(2026, 11) + 0.5)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const d = new Date()
    setNow(at(d.getFullYear(), d.getMonth() + 1) + d.getDate() / 31)
  }, [])

  const total = Math.max(36, Math.ceil(now / 12) * 12)
  const pct = (m: number) => `${(Math.min(Math.max(m, 0), total) / total) * 100}%`
  const years = Array.from({ length: total / 12 }, (_, i) => ORIGIN_YEAR + i)

  const onMove = (e: React.PointerEvent) => {
    const box = track.current?.getBoundingClientRect()
    if (!box) return
    const f = (e.clientX - box.left) / box.width
    setCursor(f >= 0 && f <= 1 ? f * total : null)
  }

  const readout = (() => {
    const m = cursor ?? now
    const whole = Math.min(Math.floor(m), total - 1)
    const high = rows.filter((r) => m >= r.from && m < (r.to ?? now + 0.01)).map((r) => r.label)
    return {
      t: `${MONTHS[whole % 12]} ${ORIGIN_YEAR + Math.floor(whole / 12)}`,
      high: high.length ? high.join(' + ') : 'none',
    }
  })()

  const cols = 'grid grid-cols-[4.25rem_1fr] sm:grid-cols-[6rem_1fr]'

  return (
    <Section
      id="experience"
      num="5"
      title="Timing diagram"
      plain="Experience"
      note="Each line goes high while a role is active. Overlaps are real: two internships ran in parallel with the final year of the master's."
    >
      <figure>
        <div className="fig select-none px-3 pb-4 pt-3 sm:px-5" onPointerMove={onMove} onPointerLeave={() => setCursor(null)}>
          <p className="mb-3 flex flex-wrap justify-between gap-x-6 font-mono text-xs" aria-live="off">
            <span>
              t = <span className="font-semibold text-mark">{readout.t}</span>
              {cursor === null && <span className="text-muted"> (now)</span>}
            </span>
            <span>
              high: <span className="font-semibold text-mark">{readout.high}</span>
            </span>
          </p>

          <div className="relative">
            {/* year grid, cursor and NOW marker share the track column */}
            <div className={`${cols} pointer-events-none absolute inset-0`}>
              <span />
              <div ref={track} className="relative">
                {years.map((y, i) => (
                  <span key={y} className="absolute inset-y-0 border-l border-dashed border-ink/35" style={{ left: pct(i * 12) }} />
                ))}
                <span className="absolute inset-y-0 border-l-2 border-dotted border-accent" style={{ left: pct(now) }} />
                {cursor !== null && <span className="absolute inset-y-0 w-px bg-ink" style={{ left: pct(cursor) }} />}
              </div>
            </div>

            <div className={`${cols} label h-6`}>
              <span />
              <div className="relative">
                {years.map((y, i) => (
                  <span key={y} className="absolute pl-1.5 text-ink" style={{ left: pct(i * 12) }}>
                    {y}
                  </span>
                ))}
              </div>
            </div>

            {rows.map((r) => {
              const end = r.to ?? now
              const active = hot === r.id
              return (
                <a
                  key={r.id}
                  href={r.edu ? '#credentials' : `#exp-${r.id}`}
                  onPointerEnter={() => setHot(r.id)}
                  onPointerLeave={() => setHot(null)}
                  onFocus={() => setHot(r.id)}
                  onBlur={() => setHot(null)}
                  className={`${cols} relative h-12 items-end pb-2 outline-none`}
                >
                  <span className={`self-end font-mono text-xs font-semibold leading-none sm:text-sm ${active ? 'text-mark' : ''}`}>{r.label}</span>
                  <span className="relative block h-6 border-b-2 border-ink/60">
                    <span
                      className={`hatch absolute -bottom-0.5 top-0 border-t-2 ${r.edu ? 'border-ink' : 'border-accent'} ${
                        r.from >= 0 ? 'border-l-2' : ''
                      } ${r.to !== null ? 'border-r-2' : ''} ${active ? 'bg-accent/30' : 'bg-sheet'}`}
                      style={{ left: pct(r.from), width: `calc(${pct(end)} - ${pct(r.from)})` }}
                    />
                  </span>
                </a>
              )
            })}

            <div className={`${cols} label h-4`}>
              <span />
              <div className="relative">
                <span className="absolute -translate-x-full pr-1.5 text-mark" style={{ left: pct(now) }}>
                  Now
                </span>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="figcap">Figure 3. Role activity, 2024 to present. Select a line to jump to its entry.</figcaption>
      </figure>

      <div className="mt-12 border-t border-ink">
        {signals.map((s, i) => (
          <article
            key={s.id}
            id={`exp-${s.id}`}
            onPointerEnter={() => setHot(s.id)}
            onPointerLeave={() => setHot(null)}
            className="grid scroll-mt-16 gap-x-8 gap-y-3 border-b border-ink/30 py-8 md:grid-cols-[13rem_1fr]"
          >
            <div>
              <p className="font-mono text-sm text-mark">5.{i + 1}</p>
              <p className="mt-1 font-mono text-xs uppercase leading-5 tracking-[0.08em] text-muted">
                {s.period}
                <br />
                {s.location}
              </p>
            </div>
            <div className="min-w-0">
              <h3 className="wd-narrow text-3xl font-extrabold uppercase leading-none">
                {s.company}
                <span className={`ml-3 inline-block h-2.5 w-2.5 align-middle ${hot === s.id ? 'bg-accent' : 'border border-ink'}`} aria-hidden="true" />
              </h3>
              <p className="mt-1.5 text-lg font-semibold">{s.role}</p>
              <ul className="mt-4 max-w-2xl space-y-2 text-[0.9375rem] leading-6">
                {s.description.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-xs leading-6 text-muted">
                {s.technologies.map((t, k) => (
                  <span key={t}>
                    {k > 0 && <span className="px-2 text-accent"> / </span>}
                    <span className="whitespace-nowrap">{t}</span>
                  </span>
                ))}
              </p>
              {s.link && (
                <a href={s.link.url} target="_blank" rel="noopener noreferrer" className="btn-line mt-5">
                  {s.link.label} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
