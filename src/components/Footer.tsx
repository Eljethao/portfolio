import { profile } from '../data/profile'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer container">
      <span>
        © {year} {profile.name}
      </span>
      <span className="mono muted">Built with React · TypeScript · Framer Motion</span>
      <a href="#home" className="mono">back to top ↑</a>
    </footer>
  )
}
