import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => void
  accent?: string
}

/** A card that tilts in 3D toward the pointer and shows a local glow where the pointer is. */
export function TiltCard({ children, className = '', onClick, accent }: Props) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 200, damping: 18 })
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 200, damping: 18 })

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    px.set(x)
    py.set(y)
    e.currentTarget.style.setProperty('--gx', `${x * 100}%`)
    e.currentTarget.style.setProperty('--gy', `${y * 100}%`)
  }
  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900, ['--accent' as string]: accent }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onClick()) : undefined}
    >
      {children}
    </motion.div>
  )
}
