import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { skillGroups, softSkills } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const marquee = skillGroups.flatMap((g) => g.skills.map((s) => s.name))

export function Skills() {
  const [active, setActive] = useState(0)
  const group = skillGroups[active]

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index="04" eyebrow="Toolbox" title="The stack behind the systems." />

        <Reveal className="skills">
          <div className="skills__groups">
            {skillGroups.map((g, i) => (
              <button key={g.name} className={i === active ? 'is-active' : ''} onClick={() => setActive(i)}>
                <span className="skills__icon" aria-hidden="true">{g.icon}</span>
                {g.name}
                <span className="mono skills__n">{g.skills.length}</span>
              </button>
            ))}
          </div>

          <div className="skills__panel">
            <AnimatePresence mode="wait">
              <motion.ul key={group.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {group.skills.map((s, i) => (
                  <li key={s.name} className="bar">
                    <div className="bar__label">
                      <span>{s.name}</span>
                      <span className="mono">{s.level}%</span>
                    </div>
                    <div className="bar__track">
                      <motion.div className="bar__fill" initial={{ width: 0 }} animate={{ width: `${s.level}%` }} transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }} />
                    </div>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
            <div className="soft">
              <span className="mono soft__label">Soft skills</span>
              {softSkills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i}>{s}<i>✦</i></span>
          ))}
        </div>
      </div>
    </section>
  )
}
