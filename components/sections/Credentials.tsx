import Section from '@/components/Section'
import { certifications, education } from '@/lib/content'

export default function Credentials() {
  return (
    <Section
      id="credentials"
      num="6"
      title="Qualification and revision history"
      plain="Credentials"
      note="Certifications as compliance records, newest first, and education as the revision log."
    >
      <h3 className="label mb-3 text-ink">6.1 Certifications</h3>
      <div className="thead hidden grid-cols-[1fr_8rem_17.5rem_6.5rem] gap-x-5 lg:grid">
        <span>Certification</span>
        <span>Issuer</span>
        <span>Credential ID</span>
        <span className="text-right">Status</span>
      </div>
      <ul className="border-t border-ink lg:border-t-0">
        {certifications.map((c) => (
          <li
            key={c.name}
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-5 gap-y-1 border-b border-ink/25 py-3 lg:grid-cols-[1fr_8rem_17.5rem_6.5rem]"
          >
            <span className="font-semibold leading-6">{c.name}</span>
            <span className="order-3 col-span-2 font-mono text-xs uppercase tracking-[0.08em] text-muted lg:order-none lg:col-span-1">{c.issuer}</span>
            <span className="order-4 col-span-2 break-all font-mono text-xs leading-5 text-muted lg:order-none lg:break-normal lg:col-span-1">
              {c.credentialId ?? '—'}
              {c.validUntil && <span className="block text-ink">valid to {c.validUntil}</span>}
            </span>
            <span className="flex items-center justify-end gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em]">
              {c.issued ? (
                <>
                  <span aria-hidden="true" className="h-2.5 w-2.5 bg-ink" /> Issued
                </>
              ) : (
                <>
                  <span aria-hidden="true" className="hatch h-2.5 w-2.5 border border-accent" />
                  <span className="text-mark">In progress</span>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>

      <h3 className="label mb-3 mt-14 text-ink">6.2 Revision history: education</h3>
      <ul className="border-t border-ink">
        {education.map((e) => (
          <li key={e.rev} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-5 gap-y-1 border-b border-ink/25 py-5 md:grid-cols-[3.5rem_11rem_1fr]">
            <span className="wd-narrow text-4xl font-extrabold leading-none text-mark">
              <span className="mr-1 align-middle font-mono text-[0.6875rem] font-normal uppercase tracking-[0.1em] text-muted">Rev</span>
              {e.rev}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{e.period}</span>
            <span className="col-start-2 md:col-start-auto">
              <span className="block text-xl font-semibold leading-7">{e.degree}</span>
              <span className="block text-sm text-muted">{e.school}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
