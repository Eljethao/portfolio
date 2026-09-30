import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile, sections } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

interface Props {
  active: string
  theme: Theme
  onToggleTheme: () => void
  onOpenPalette: () => void
}

export function Navbar({ active, theme, onToggleTheme, onOpenPalette }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__logo" aria-label="Back to top">
          <span className="logo-mark">{profile.initials}</span>
          <span className="nav__name">{profile.shortName}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {sections.slice(1).map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''}>
              {active === s.id && <motion.span layoutId="nav-pill" className="nav__pill" />}
              <span>{s.label}</span>
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label="Open command palette">
            <svg className="kbd-btn__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span>Search</span>
            <kbd>{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>
          <button className="icon-btn" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            )}
          </button>
          <button className={`icon-btn burger ${open ? 'is-open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            <span /><span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            aria-label="Mobile"
          >
            {sections.slice(1).map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className={active === s.id ? 'is-active' : ''}
              >
                <span className="mono">0{i + 1}</span> {s.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
