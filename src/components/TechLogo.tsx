import { logos } from '../data/logos'

export function TechLogo({ name }: { name: string }) {
  const logo = logos[name]
  if (!logo) return null

  // Single-colour marks are painted with currentColor via a mask so they stay visible in both themes.
  if (logo.mono) {
    return <span className="logo logo--mono" style={{ ['--logo' as string]: `url("${logo.src}")` }} aria-hidden="true" />
  }
  return <img className="logo" src={logo.src} alt="" aria-hidden="true" decoding="async" />
}
