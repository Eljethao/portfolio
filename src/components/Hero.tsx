import { motion, useScroll, useTransform } from 'framer-motion'
import photo from '../assets/profile.jpg'
import { profile } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const typed = useTypewriter(profile.roles)
  const { scrollY } = useScroll()
  const photoY = useTransform(scrollY, [0, 600], [0, 80])
  const fade = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section id="home" className="hero container">
      <motion.div className="hero__copy" style={{ opacity: fade }}>
        <motion.span className="status-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          <span className="status-dot" /> {profile.headline} at {profile.currentOrg} · {profile.location.split(',')[0]}
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}>
          Hi, I'm <span className="gradient-text">{profile.shortName}</span>
          <br />I build systems that <span className="underline-draw">move money, parcels &amp; cars.</span>
        </motion.h1>

        <motion.p className="hero__role mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <span className="prompt">&gt;</span> {typed}
          <span className="caret" />
        </motion.p>

        <motion.p className="hero__intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45, ease }}>
          {profile.intro}
        </motion.p>

        <motion.div className="hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease }}>
          <a href="#projects" className="btn btn--primary">
            View my work
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
          <a href={profile.cvUrl} className="btn btn--ghost" download>
            Download CV
          </a>
        </motion.div>

        <motion.ul className="hero__focus" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.7 } } }}>
          {profile.focus.map((f) => (
            <motion.li key={f} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
              {f}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div className="hero__visual" style={{ y: photoY }} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease }}>
        <div className="orbit orbit--1" />
        <div className="orbit orbit--2" />
        <div className="photo-frame">
          <img src={photo} alt={`Portrait of ${profile.name}`} />
        </div>
        <motion.div className="float-card float-card--a" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <span className="mono accent">20+</span> engineers led
        </motion.div>
        <motion.div className="float-card float-card--b" animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <span className="mono accent">OCPP</span> 1.6J · real-time
        </motion.div>
        <motion.div className="float-card float-card--c" animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
          <span className="mono accent">3</span> Lao banks integrated
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}
