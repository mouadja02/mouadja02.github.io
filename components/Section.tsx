type Props = {
  id: string
  num: string
  title: string
  plain: string
  note?: string
  children: React.ReactNode
}

/** One numbered datasheet section: title rail on the left, content on the right. */
export default function Section({ id, num, title, plain, note, children }: Props) {
  return (
    <section id={id} data-section className="border-t-2 border-ink">
      <div className="mx-auto grid max-w-doc gap-x-10 gap-y-8 px-4 py-14 sm:px-8 lg:grid-cols-12 lg:py-20">
        <header className="lg:col-span-3">
          <div className="lg:sticky lg:top-20">
            <p className="label">
              <span className="text-mark">{num}</span> / {plain}
            </p>
            <h2 className="wd-narrow mt-2 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl lg:text-[2.125rem] xl:text-[2.5rem]">
              {title}
            </h2>
            {note && <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{note}</p>}
          </div>
        </header>
        <div className="min-w-0 lg:col-span-9">{children}</div>
      </div>
    </section>
  )
}
