import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { experience } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const [active, setActive] = useState(0)
  const role = experience[active]

  return (
    <section id="experience" className="section container">
      <SectionHeading index="02" eyebrow="Experience" title="From frontend lead to head of engineering." subtitle="Four-plus years at Lailaolab ICT Solutions, growing with every system shipped." />

      <Reveal className="xp">
        <div className="xp__tabs" role="tablist" aria-label="Roles">
          {experience.map((r, i) => (
            <button key={r.title} role="tab" aria-selected={i === active} className={i === active ? 'is-active' : ''} onClick={() => setActive(i)}>
              {i === active && <motion.span layoutId="xp-indicator" className="xp__indicator" />}
              <span className="xp__tab-title">{r.title}</span>
              <span className="xp__tab-period mono">{r.period}</span>
            </button>
          ))}
        </div>

        <div className="xp__panel" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div key={role.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <div className="xp__head">
                <h3>
                  {role.title} <span className="accent">@ {role.company.replace(' Co., Ltd', '')}</span>
                </h3>
                {role.current && <span className="badge-live">Current</span>}
              </div>
              <p className="xp__meta mono">
                {role.period} · {role.location}
              </p>
              <ul className="xp__points">
                {role.points.map((p, i) => (
                  <motion.li key={p.text} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                    {p.label && <strong>{p.label}. </strong>}
                    {p.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  )
}
