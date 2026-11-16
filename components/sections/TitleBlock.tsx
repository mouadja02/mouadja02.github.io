import { applications, description, features, identity } from '@/lib/content'
import SignalChain from '@/components/figures/SignalChain'

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[0.9375rem] leading-6">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function ColumnHead({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <h2 className="wd-narrow mb-4 flex items-baseline gap-2 border-b border-ink pb-2 text-2xl font-extrabold uppercase leading-none">
      <span className="font-mono text-sm font-medium text-mark">{num}</span>
      {children}
    </h2>
  )
}

/** Page one of the datasheet: title, front-page columns and the block diagram. */
export default function TitleBlock() {
  return (
    <section id="overview" data-section className="mx-auto max-w-doc px-4 pb-14 pt-8 sm:px-8 lg:pb-20 lg:pt-12">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.1em]">
        <p className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Status: active, open to opportunities
        </p>
        <p className="text-muted">
          {identity.docId} · Rev. Nov 2026 · {identity.location}
        </p>
      </div>

      <div className="mt-6 grid items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <h1 className="wd-wide text-[clamp(2.5rem,11vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.035em] lg:text-[clamp(5rem,9.2vw,7.75rem)]">
            Mouad
            <br />
            Jaouhari
          </h1>
        </div>
        <figure className="group flex items-end gap-4 lg:col-span-3 lg:block">
          <div className="fig w-28 shrink-0 p-1.5 sm:w-36 lg:w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mypic.png" alt="Portrait of Mouad Jaouhari" width={364} height={364} className="printed block aspect-square w-full object-cover" />
          </div>
          <figcaption className="figcap lg:mt-2">Figure 0. Top view. Not to scale.</figcaption>
        </figure>
      </div>

      <div className="mt-8 flex flex-col gap-6 border-y-2 border-ink py-5 md:flex-row md:items-center md:justify-between">
        <p className="wd-narrow text-3xl font-bold uppercase leading-none sm:text-4xl">
          {identity.role}
          <span className="mt-2 block font-mono text-xs font-normal tracking-[0.12em] text-muted">
            {identity.part} · {identity.tagline}
          </span>
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={identity.resume} download="Mouad_Jaouhari_Resume.pdf" className="btn-solid">
            <span aria-hidden="true">↓</span> Résumé, PDF
          </a>
          <a href="#contact" className="btn-line">
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ColumnHead num="1.1">Features</ColumnHead>
          <Bullets items={features} />
        </div>
        <div className="lg:col-span-3">
          <ColumnHead num="1.2">Applications</ColumnHead>
          <Bullets items={applications} />
        </div>
        <div className="md:col-span-2 lg:col-span-5">
          <ColumnHead num="1.3">Description</ColumnHead>
          <div className="space-y-4 text-[1.0625rem] leading-7">
            {description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SignalChain />
      </div>
    </section>
  )
}
