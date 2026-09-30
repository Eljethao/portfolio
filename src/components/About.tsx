import { profile } from '../data/profile'
import { useCountUp } from '../hooks/useCountUp'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: n } = useCountUp(value)
  return (
    <div className="stat">
      <span className="stat__value">
        <span ref={ref}>{n}</span>
        <span className="accent">{suffix}</span>
      </span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading index="01" eyebrow="About" title="Strategy meets hands-on engineering." />
      <div className="about">
        <Reveal className="about__text">
          {profile.about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.15} className="about__side">
          <div className="stats">
            {profile.stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
          <div className="terminal">
            <div className="terminal__bar">
              <span /><span /><span />
              <span className="mono terminal__title">whoami.ts</span>
            </div>
            <pre className="mono">
              <code>
                <span className="tk-k">const</span> <span className="tk-v">engineer</span> = {'{'}
                {'\n'}  name: <span className="tk-s">'{profile.name}'</span>,
                {'\n'}  role: <span className="tk-s">'{profile.headline}'</span>,
                {'\n'}  org: <span className="tk-s">'{profile.currentOrg}'</span>,
                {'\n'}  base: <span className="tk-s">'Vientiane, Laos'</span>,
                {'\n'}  domains: [<span className="tk-s">'health'</span>, <span className="tk-s">'fintech'</span>, <span className="tk-s">'logistics'</span>, <span className="tk-s">'ev'</span>],
                {'\n'}  openToTalk: <span className="tk-k">true</span>,
                {'\n'}{'}'}
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
