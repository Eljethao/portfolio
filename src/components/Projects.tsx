import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { projects } from '../data/profile'
import type { Project, ProjectCategory } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { TiltCard } from './TiltCard'

type Filter = 'All' | ProjectCategory
const filters: Filter[] = ['All', 'Fintech', 'Mobility', 'Logistics', 'Platform']

interface Props {
  openId: string | null
  onOpen: (id: string | null) => void
}

export function Projects({ openId, onOpen }: Props) {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter])
  const selected = projects.find((p) => p.id === openId) ?? null

  return (
    <section id="projects" className="section container">
      <SectionHeading index="03" eyebrow="Selected work" title="Systems I've architected & built." subtitle="Production systems, summarised. Click any card for details." />

      <LayoutGroup>
        <div className="filters" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'is-active' : ''} onClick={() => setFilter(f)}>
              {filter === f && <motion.span layoutId="filter-pill" className="filters__pill" />}
              <span>{f}</span>
              <span className="filters__count mono">{f === 'All' ? projects.length : projects.filter((p) => p.category === f).length}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.35, delay: i * 0.03 }}>
                <TiltCard className="project-card" accent={p.accent} onClick={() => onOpen(p.id)}>
                  <div className="project-card__top">
                    <span className="project-card__cat mono">{p.category}</span>
                    <span className="project-card__period mono">{p.period}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <ul className="tags">
                    {p.stack.slice(0, 4).map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <span className="project-card__more mono">details →</span>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <ProjectModal project={selected} onClose={() => onOpen(null)} />
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div className="overlay overlay--center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.article
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            style={{ ['--accent' as string]: project.accent }}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="icon-btn modal__close" onClick={onClose} aria-label="Close" autoFocus>
              ✕
            </button>
            <span className="project-card__cat mono">{project.category} · {project.period}</span>
            <h3 id="modal-title">{project.title}</h3>
            <p className="modal__role mono">{project.role}</p>
            <p>{project.summary}</p>
            <h4>Highlights</h4>
            <ul className="modal__list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <h4>Stack</h4>
            <ul className="tags">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
