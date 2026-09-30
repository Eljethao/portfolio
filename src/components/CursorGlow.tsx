import { useEffect } from 'react'

/** Feeds the pointer position into CSS variables used by the spotlight and card glows. */
export function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement
    const onMove = (e: PointerEvent) => {
      root.style.setProperty('--mx', `${e.clientX}px`)
      root.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}
