import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', subject: '', message: '' })

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  // No backend: compose the message in the visitor's mail client.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section container">
      <SectionHeading index="06" eyebrow="Contact" title="Let's build something that scales." subtitle="Open to leadership roles, architecture consulting and ambitious product collaborations." />

      <div className="contact">
        <Reveal className="contact__info">
          <button className="contact__email" onClick={copy}>
            <span className="mono muted">email — click to copy</span>
            <span className="contact__email-value">{profile.email}</span>
            <AnimatePresence>
              {copied && (
                <motion.span className="toast" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  Copied ✓
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <div className="contact__row">
            <span className="mono muted">phone</span>
            {profile.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
            ))}
          </div>
          <div className="contact__row">
            <span className="mono muted">based in</span>
            <span>{profile.location}</span>
          </div>
          <a href={profile.cvUrl} className="btn btn--ghost" download>
            Download full CV
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="contact__form" onSubmit={submit}>
            <label>
              <span>Your name</span>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" />
            </label>
            <label>
              <span>Subject</span>
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Project enquiry" />
            </label>
            <label>
              <span>Message</span>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about what you're building…" />
            </label>
            <button type="submit" className="btn btn--primary">
              Send message
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4 20-7z" /></svg>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
