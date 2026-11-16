import Section from '@/components/Section'
import { specs } from '@/lib/content'

export default function Specs() {
  return (
    <Section
      id="specs"
      num="2"
      title="Specifications"
      plain="At a glance"
      note="Measured over the full operating range, 2020 to today, unless otherwise noted."
    >
      <div role="table" aria-label="Specifications">
        <div role="row" className="thead hidden grid-cols-[1fr_5rem_7rem_5rem_6rem] gap-x-4 sm:grid">
          <span role="columnheader">Parameter</span>
          <span role="columnheader" className="text-right">Min</span>
          <span role="columnheader" className="text-right">Typ</span>
          <span role="columnheader" className="text-right">Max</span>
          <span role="columnheader">Unit</span>
        </div>
        {specs.map((s) => (
          <div
            key={s.parameter}
            role="row"
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-ink/25 py-3.5 first:border-t first:border-t-ink sm:grid-cols-[1fr_5rem_7rem_5rem_6rem] sm:first:border-t-0"
          >
            <div role="cell">
              <p className="text-lg font-semibold leading-6">{s.parameter}</p>
              <p className="mt-0.5 font-mono text-xs text-muted">{s.conditions}</p>
            </div>
            <span role="cell" className="hidden text-right font-mono text-base text-muted sm:block">
              {s.min || '—'}
            </span>
            <span role="cell" className="wd-narrow text-right text-3xl font-extrabold leading-none text-mark sm:text-[2rem]">
              {s.typ || <span className="sm:hidden">{s.min}+</span>}
              {!s.typ && <span className="hidden font-mono text-base font-normal text-muted sm:inline">—</span>}
              <span className="ml-1.5 font-mono text-xs font-normal text-muted sm:hidden">{s.unit}</span>
            </span>
            <span role="cell" className="hidden text-right font-mono text-base text-muted sm:block">
              {s.max || '—'}
            </span>
            <span role="cell" className="label hidden self-center sm:block">
              {s.unit}
            </span>
          </div>
        ))}
      </div>

      <blockquote className="mt-10 flex gap-5 border-l-4 border-accent pl-5">
        <div>
          <p className="label mb-2 text-ink">Design note</p>
          <p className="wd-narrow max-w-2xl text-2xl font-semibold leading-8 sm:text-3xl sm:leading-9">
            Continuous learning is not just my strategy. It is my competitive advantage.
          </p>
        </div>
      </blockquote>
    </Section>
  )
}
