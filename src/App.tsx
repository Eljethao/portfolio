import { useCallback, useEffect, useState } from 'react'
import { About } from './components/About'
import { CommandPalette } from './components/CommandPalette'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { CursorGlow } from './components/CursorGlow'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { NetworkBackground } from './components/NetworkBackground'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'
import { sections } from './data/profile'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'

const sectionIds = sections.map((s) => s.id)

export default function App() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sectionIds)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [projectId, setProjectId] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openProject = useCallback((id: string) => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    setProjectId(id)
  }, [])
  const closePalette = useCallback(() => setPaletteOpen(false), [])

  return (
    <>
      <NetworkBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar active={active} theme={theme} onToggleTheme={toggle} onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects openId={projectId} onOpen={setProjectId} />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={closePalette} onToggleTheme={toggle} onOpenProject={openProject} />
    </>
  )
}
