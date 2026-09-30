import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { profile, projects, sections } from '../data/profile'

interface Command {
  id: string
  label: string
  group: string
  hint?: string
  run: () => void
}

interface Props {
  open: boolean
  onClose: () => void
  onToggleTheme: () => void
  onOpenProject: (id: string) => void
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export function CommandPalette({ open, ...rest }: Props) {
  return <AnimatePresence>{open && <PaletteBody {...rest} />}</AnimatePresence>
}

function PaletteBody({ onClose, onToggleTheme, onOpenProject }: Omit<Props, 'open'>) {
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = useMemo<Command[]>(
    () => [
      ...sections.map((s) => ({ id: `go-${s.id}`, label: `Go to ${s.label}`, group: 'Navigate', run: () => scrollTo(s.id) })),
      ...projects.map((p) => ({ id: `p-${p.id}`, label: p.title, group: 'Projects', hint: p.category, run: () => onOpenProject(p.id) })),
      { id: 'theme', label: 'Toggle light / dark theme', group: 'Actions', run: onToggleTheme },
      { id: 'email', label: 'Copy email address', group: 'Actions', hint: profile.email, run: () => navigator.clipboard?.writeText(profile.email) },
      { id: 'mail', label: 'Send an email', group: 'Actions', run: () => (window.location.href = `mailto:${profile.email}`) },
      { id: 'cv', label: 'Download CV (PDF)', group: 'Actions', run: () => window.open(profile.cvUrl, '_blank') },
    ],
    [onToggleTheme, onOpenProject],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => `${c.label} ${c.group} ${c.hint ?? ''}`.toLowerCase().includes(q))
  }, [commands, query])

  useEffect(() => {
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [])

  const execute = (c: Command | undefined) => {
    if (!c) return
    onClose()
    setTimeout(c.run, 60)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setCursor((i) => Math.min(filtered.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor((i) => Math.max(0, i - 1))
    } else if (e.key === 'Enter') {
      execute(filtered[cursor])
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  let lastGroup = ''

  return (
    <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        initial={{ opacity: 0, y: -20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="palette__search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input ref={inputRef} value={query} onChange={(e) => {
              setQuery(e.target.value)
              setCursor(0)
            }} placeholder="Jump to a section, project or action…" />
          <kbd>esc</kbd>
        </div>
        <ul className="palette__list">
          {filtered.length === 0 && <li className="palette__empty">No results for “{query}”</li>}
          {filtered.map((c, i) => {
            const header = c.group !== lastGroup ? c.group : null
            lastGroup = c.group
            return (
              <li key={c.id}>
                {header && <div className="palette__group">{header}</div>}
                <button className={i === cursor ? 'is-active' : ''} onMouseEnter={() => setCursor(i)} onClick={() => execute(c)}>
                  <span>{c.label}</span>
                  {c.hint && <span className="palette__hint">{c.hint}</span>}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="palette__footer mono">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
