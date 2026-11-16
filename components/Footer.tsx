import { identity } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-doc px-4 py-12 sm:px-8">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-paper/60">Important notice</p>
        <p className="wd-narrow mt-3 max-w-3xl text-2xl font-semibold leading-8 sm:text-3xl sm:leading-9">
          Specifications are subject to continuous improvement without notice. {identity.part} is not a replacement for
          a team, but integrates well with one.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-paper/25 pt-5 font-mono text-xs uppercase tracking-[0.1em] text-paper/70">
          <p>
            © {new Date().getFullYear()} {identity.name} · {identity.role}
          </p>
          <p>{identity.docId} · Rev. Nov 2026</p>
          <a href="#overview" className="border border-paper/40 px-3 py-1.5 text-paper hover:bg-paper hover:text-ink">
            <span aria-hidden="true">↑</span> Page 1
          </a>
        </div>
      </div>
    </footer>
  )
}
