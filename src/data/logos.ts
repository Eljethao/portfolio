// Tech logos shown in the Skills section, keyed by the skill / stack name used in profile.ts.
// Sources: Devicon (MIT), Simple Icons (CC0) and Tabler Icons (MIT) for the generic
// concepts that have no brand logo. Files live in src/assets/logos.

const files = import.meta.glob<string>('../assets/logos/*.svg', { eager: true, import: 'default', query: '?url' })

export interface TechLogo {
  src: string
  /** Single-colour mark that should follow the text colour (light on dark theme, dark on light). */
  mono?: boolean
}

const logo = (file: string, mono = false): TechLogo => ({ src: files[`../assets/logos/${file}.svg`], mono })

export const logos: Record<string, TechLogo> = {
  NodeJS: logo('nodejs'),
  Express: logo('express', true),
  GraphQL: logo('graphql'),
  Socket: logo('socketio', true),
  Golang: logo('go'),
  Fiber: logo('fiber'),
  ReactJS: logo('react'),
  TypeScript: logo('typescript'),
  NextJS: logo('nextjs', true),
  'Flutter / Dart': logo('flutter'),
  'HTML / CSS': logo('html5'),
  JavaScript: logo('javascript'),
  MongoDB: logo('mongodb'),
  Redis: logo('redis'),
  MySQL: logo('mysql'),
  SQLite: logo('sqlite'),
  'System Design': logo('system-design', true),
  Docker: logo('docker'),
  AWS: logo('aws'),
  'GitHub Actions': logo('githubactions'),
  'Bank APIs': logo('bank', true),
  'OCPP 1.6J': logo('ev-charger', true),
  Firebase: logo('firebase'),
  Stripe: logo('stripe'),
  Paypal: logo('paypal'),
}
