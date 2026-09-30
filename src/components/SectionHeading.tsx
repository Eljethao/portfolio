import { motion } from 'framer-motion'

interface Props {
  index: string
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, eyebrow, title, subtitle }: Props) {
  return (
    <motion.header
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="eyebrow">
        <span className="mono">{index}</span> {eyebrow}
      </span>
      <h2>{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </motion.header>
  )
}
