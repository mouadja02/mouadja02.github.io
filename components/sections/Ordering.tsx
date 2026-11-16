'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import Section from '@/components/Section'
import { identity } from '@/lib/content'

const field =
  'mt-1 block w-full border-0 border-b-2 border-ink bg-transparent px-0 py-2 text-lg placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-0'

export default function Ordering() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setState('sending')
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(() => {
        setState('sent')
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => setState('error'))
  }

  return (
    <Section
      id="contact"
      num="7"
      title="Ordering information"
      plain="Contact"
      note="Have a project in mind, or just want to talk data? Lead time is usually short."
    >
      <div className="grid gap-x-12 gap-y-12 lg:grid-cols-2">
        <div>
          <h3 className="label mb-3 text-ink">7.1 Channels</h3>
          <ul className="border-t border-ink">
            {identity.emails.map((e) => (
              <li key={e.address} className="border-b border-ink/25">
                <a href={`mailto:${e.address}`} className="group -mx-2 flex items-baseline justify-between gap-4 px-2 py-3.5 hover:bg-ink hover:text-paper">
                  <span className="font-mono text-xs uppercase tracking-[0.1em] opacity-70">Email, {e.label}</span>
                  <span className="break-all text-right font-semibold">{e.address}</span>
                </a>
              </li>
            ))}
            {identity.links.map((l) => (
              <li key={l.label} className="border-b border-ink/25">
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-2 flex items-baseline justify-between gap-4 px-2 py-3.5 hover:bg-ink hover:text-paper"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.1em] opacity-70">{l.label}</span>
                  <span className="font-semibold">
                    {l.handle} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs leading-6 text-muted">
            Orderable part: {identity.part}-FR. Package: one engineer. Ships from {identity.location}.
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <h3 className="label mb-3 text-ink">7.2 Sample request form</h3>
          <div className="space-y-6 border-t border-ink pt-5">
            <label className="block">
              <span className="label">01 Name</span>
              <input type="text" name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="Your name" className={field} />
            </label>
            <label className="block">
              <span className="label">02 Email</span>
              <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="you@company.com" className={field} />
            </label>
            <label className="block">
              <span className="label">03 Message</span>
              <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project" className={`${field} resize-y`} />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={state === 'sending'} className="btn-solid disabled:opacity-50">
                {state === 'sending' ? 'Transmitting…' : 'Transmit'} <span aria-hidden="true">→</span>
              </button>
              <p role="status" className="font-mono text-xs">
                {state === 'sent' && <span>Received. I will reply soon.</span>}
                {state === 'error' && <span className="text-mark">Transmission failed. Please email me directly.</span>}
              </p>
            </div>
          </div>
        </form>
      </div>
    </Section>
  )
}
