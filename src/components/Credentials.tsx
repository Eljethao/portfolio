import { motion } from 'framer-motion'
import { certificates, education, languages } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { TiltCard } from './TiltCard'

export function Credentials() {
  return (
    <section id="credentials" className="section container">
      <SectionHeading index="05" eyebrow="Credentials" title="Education, certificates & languages." />
      <div className="creds">
        <Reveal>
          <TiltCard className="cred-card cred-card--edu">
            <span className="cred-card__icon" aria-hidden="true">🎓</span>
            <span className="mono muted">{education.period}</span>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p className="muted">{education.faculty}</p>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1}>
          <TiltCard className="cred-card">
            <span className="cred-card__icon" aria-hidden="true">📜</span>
            <h3>Certificates</h3>
            <ul className="cert-list">
              {certificates.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}</strong>
                  <span className="muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.2}>
          <TiltCard className="cred-card">
            <span className="cred-card__icon" aria-hidden="true">🌐</span>
            <h3>Languages</h3>
            <ul className="lang-list">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="bar__label">
                    <span>{l.name}</span>
                    <span className="mono muted">{l.level}</span>
                  </div>
                  <div className="bar__track">
                    <motion.div className="bar__fill" initial={{ width: 0 }} whileInView={{ width: `${l.value}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
                  </div>
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}
