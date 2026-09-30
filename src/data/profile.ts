// All portfolio content lives here, sourced from 2026_Chouayeethao_CV.pdf.
// Edit this file to update the site — components only render what is defined below.

export type ProjectCategory = 'Mobility' | 'Fintech' | 'Logistics' | 'Platform' | 'Personal'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  period: string
  role: string
  summary: string
  highlights: string[]
  stack: string[]
  accent: string
  /** Live demo URL, if the project is publicly viewable. */
  link?: string
}

export interface Role {
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  points: { label?: string; text: string }[]
}

export interface SkillGroup {
  name: string
  icon: string
  skills: { name: string; level: number }[]
}

export const profile = {
  name: 'Chouayeethao Cherching',
  shortName: 'Chouayeethao',
  initials: 'CT',
  headline: 'Senior Software Engineer',
  currentOrg: 'WHO Lao PDR',
  roles: [
    'Senior Software Engineer @ WHO',
    'Health Systems Engineer',
    'Former Head of Software Development',
    'Senior Full-Stack Developer',
    'System Architect',
    'Engineering Leader',
  ],
  location: 'Vientiane Capital, Lao P.D.R.',
  email: 'chouayee77@gmail.com',
  phones: ['+856 20 98759831', '+856 20 51780246'],
  cvUrl: '/Chouayeethao_CV.pdf',
  intro:
    'Senior Software Engineer at WHO Lao PDR, building the infrastructure and digital health systems behind public health — after years shipping fintech, logistics and EV platforms at scale.',
  about: [
    'I am a Senior Software Engineer at WHO Lao PDR, responsible for infrastructure and health system development. Before that I was Head of Software Development at Lailaolab, with extensive experience in architecting and deploying large-scale digital ecosystems.',
    'I specialize in bridging technical strategy with business objectives, leading diverse teams of over 20 engineers to deliver high-impact solutions. My expertise spans from high-level system design and microservices to hands-on development in financial technology, logistics, and electric vehicle infrastructure.',
    'I am committed to maintaining high technical standards and driving innovation through modern DevOps and secure coding practices.',
  ],
  stats: [
    { value: 20, suffix: '+', label: 'Engineers led' },
    { value: 4, suffix: '+', label: 'Years shipping' },
    { value: 3, suffix: '', label: 'Bank integrations' },
    { value: 10, suffix: '', label: 'Projects shipped' },
  ],
  focus: ['Health Systems', 'Infrastructure', 'Fintech', 'Logistics', 'EV Infrastructure', 'DevSecOps'],
}

export const experience: Role[] = [
  {
    title: 'Senior Software Engineer',
    company: 'WHO Lao PDR',
    location: 'Vientiane, Laos',
    period: 'Aug 2026 — Present',
    current: true,
    points: [
      {
        label: 'Infrastructure',
        text: 'Responsible for the infrastructure that runs WHO Lao PDR digital services.',
      },
      {
        label: 'Health System Development',
        text: 'Responsible for developing health information systems supporting public health work in Lao PDR.',
      },
    ],
  },
  {
    title: 'Head of Software Development',
    company: 'Lailaolab ICT Solutions Co., Ltd',
    location: 'Vientiane, Laos',
    period: 'May 2024 — Jul 2026',
    points: [
      {
        label: 'Strategic Leadership',
        text: 'Spearheaded a department of 20+ engineers across backend, frontend, mobile, QA, and UX/UI, aligning technical strategy with annual company goals.',
      },
      {
        label: 'System Architecture',
        text: 'Oversaw end-to-end development cycles and critical architecture decisions, including microservices implementation and cloud migration.',
      },
      {
        label: 'EV Charging System',
        text: 'Developed a backend integrated with OCPP 1.6J, enabling real-time communication and remote control of charge points.',
      },
      {
        label: 'Call Taxi System',
        text: 'Built a comprehensive platform including driver-rider matching, GPS tracking, and live fare estimation.',
      },
      {
        label: 'Logistics System',
        text: 'Integrated customer, driver, and admin platforms for transportation, parcel delivery, payments, and operations monitoring.',
      },
      {
        label: 'Parcel Delivery Express',
        text: 'Engineered a scalable delivery system with real-time tracking, multi-payment support, and dynamic pricing based on weight and distance.',
      },
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Lailaolab ICT Solutions Co., Ltd',
    location: 'Vientiane, Laos',
    period: 'Jun 2022 — May 2024',
    points: [
      { text: 'Designed and implemented scalable web and mobile applications using TypeScript, NodeJS, and ReactJS.' },
      {
        label: 'Online Payment Facilitator',
        text: 'Engineered a system that successfully integrated with 3 major banks in Laos, streamlining B2B and consumer transactions.',
      },
      {
        label: 'Leasing Management',
        text: 'Developed a custom application for a leasing company to automate contract generation, installment tracking, and customer notifications.',
      },
      {
        label: 'Online Payment System',
        text: 'Delivered credit card support and Lao QR code integration, expanding digital payment options for local businesses.',
      },
      { label: 'Performance', text: 'Optimized database performance using MongoDB and Redis for high-traffic service ecosystems.' },
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Lailaolab ICT Solutions Co., Ltd',
    location: 'Vientiane, Laos',
    period: 'Nov 2021 — Jun 2022',
    points: [
      { label: 'CarSharing Platform', text: 'Led frontend development supporting flexible hourly car rentals and booking management.' },
      { label: 'Leasing Management App', text: 'Led mobile development for the leasing management application.' },
      { label: 'Live Ordering CF System', text: 'Led frontend development for a live ordering system.' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'laos-travel',
    title: 'Visit Laos — Travel Guide',
    category: 'Personal',
    period: '2026',
    role: 'Designer & Developer',
    summary: 'A modern, bilingual (Lao / English) travel guide for anyone visiting Laos, built around an interactive, zoomable map of all 18 provinces.',
    highlights: [
      'Full Lao ↔ English language toggle, remembered per visitor',
      'Interactive SVG map that zooms smoothly to provinces, places and itinerary routes',
      '18 destinations with freely licensed Wikimedia Commons photos and full attribution',
      'Slide-in place details, photo gallery, month-by-month season & festival planner',
      'Map data automatically checked so every pin sits in the right province',
    ],
    stack: ['ReactJS', 'TypeScript', 'd3-geo', 'Framer Motion', 'Vite'],
    accent: '#4f7dd9',
    link: '/laos-travel/index.html',
  },
  {
    id: 'ev-charging',
    title: 'EV Charging Platform',
    category: 'Mobility',
    period: '2024 — 2026',
    role: 'Head of Software Development',
    summary: 'Backend for electric-vehicle charge points speaking OCPP 1.6J, with real-time telemetry and remote control.',
    highlights: [
      'OCPP 1.6J WebSocket integration with charge points',
      'Real-time status, sessions and remote start/stop',
      'Designed for fleet-scale concurrent connections',
    ],
    stack: ['NodeJS', 'OCPP 1.6J', 'Socket', 'MongoDB', 'Redis', 'AWS'],
    accent: '#22d3ee',
  },
  {
    id: 'call-taxi',
    title: 'Call Taxi System',
    category: 'Mobility',
    period: '2024 — 2026',
    role: 'Head of Software Development',
    summary: 'Ride-hailing platform with driver–rider matching, live GPS tracking and fare estimation.',
    highlights: ['Driver–rider matching engine', 'Live GPS tracking', 'Real-time fare estimation'],
    stack: ['NodeJS', 'Socket', 'Flutter', 'ReactJS', 'MongoDB'],
    accent: '#facc15',
  },
  {
    id: 'logistics',
    title: 'Logistics System',
    category: 'Logistics',
    period: '2024 — 2026',
    role: 'Head of Software Development',
    summary: 'Unified customer, driver and admin platforms covering transport, parcels, payments and operations monitoring.',
    highlights: ['Three connected client platforms', 'Integrated payments', 'Operations monitoring dashboards'],
    stack: ['Microservices', 'GraphQL', 'ReactJS', 'Flutter', 'Docker'],
    accent: '#34d399',
  },
  {
    id: 'parcel-express',
    title: 'Parcel Delivery Express',
    category: 'Logistics',
    period: '2024 — 2026',
    role: 'Head of Software Development',
    summary: 'Scalable delivery service with real-time tracking, multi-payment support and dynamic pricing.',
    highlights: ['Real-time parcel tracking', 'Multi-payment support', 'Dynamic pricing by weight & distance'],
    stack: ['Golang', 'Fiber', 'Redis', 'MySQL', 'AWS'],
    accent: '#fb923c',
  },
  {
    id: 'payment-facilitator',
    title: 'Online Payment Facilitator',
    category: 'Fintech',
    period: '2022 — 2024',
    role: 'Full Stack Developer',
    summary: 'Payment facilitator integrated with 3 major banks in Laos for B2B and consumer transactions.',
    highlights: ['3 major Lao bank API integrations', 'B2B and consumer flows', 'Secure transaction processing'],
    stack: ['TypeScript', 'NodeJS', 'Bank API', 'MongoDB', 'Redis'],
    accent: '#a78bfa',
  },
  {
    id: 'online-payment',
    title: 'Online Payment System',
    category: 'Fintech',
    period: '2022 — 2024',
    role: 'Full Stack Developer',
    summary: 'Checkout supporting credit cards and Lao QR, expanding digital payments for local businesses.',
    highlights: ['Credit card support', 'Lao QR code integration', 'Merchant-facing dashboard'],
    stack: ['ReactJS', 'NodeJS', 'Stripe', 'Paypal', 'Bank API'],
    accent: '#f472b6',
  },
  {
    id: 'leasing',
    title: 'Leasing Management',
    category: 'Fintech',
    period: '2021 — 2024',
    role: 'Mobile Lead → Full Stack Developer',
    summary: 'Automates contract generation, installment tracking and customer notifications for a leasing company.',
    highlights: ['Automated contract generation', 'Installment tracking', 'Customer notifications via Firebase'],
    stack: ['Flutter', 'Dart', 'NodeJS', 'Firebase', 'MongoDB'],
    accent: '#60a5fa',
  },
  {
    id: 'carsharing',
    title: 'CarSharing Platform',
    category: 'Mobility',
    period: '2021 — 2022',
    role: 'Frontend Lead',
    summary: 'Flexible hourly car rentals with full booking management.',
    highlights: ['Hourly rental flows', 'Booking management', 'Responsive web frontend'],
    stack: ['ReactJS', 'TypeScript', 'GraphQL'],
    accent: '#2dd4bf',
  },
  {
    id: 'live-ordering',
    title: 'Live Ordering CF System',
    category: 'Platform',
    period: '2021 — 2022',
    role: 'Frontend Lead',
    summary: 'Live ordering system handling orders placed in real time during live sessions.',
    highlights: ['Real-time order capture', 'Live order management UI'],
    stack: ['ReactJS', 'Socket', 'NodeJS'],
    accent: '#f87171',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    name: 'Back End',
    icon: '⚙',
    skills: [
      { name: 'NodeJS', level: 95 },
      { name: 'Express', level: 92 },
      { name: 'GraphQL', level: 85 },
      { name: 'Socket', level: 88 },
      { name: 'Golang', level: 75 },
      { name: 'Fiber', level: 72 },
    ],
  },
  {
    name: 'Front End',
    icon: '◧',
    skills: [
      { name: 'ReactJS', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'NextJS', level: 85 },
      { name: 'Flutter / Dart', level: 80 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'JavaScript', level: 95 },
    ],
  },
  {
    name: 'Data',
    icon: '◈',
    skills: [
      { name: 'MongoDB', level: 92 },
      { name: 'Redis', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'SQLite', level: 75 },
    ],
  },
  {
    name: 'DevOps & Cloud',
    icon: '☁',
    skills: [
      { name: 'System Design', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'GitHub Actions', level: 82 },
    ],
  },
  {
    name: 'Integrations',
    icon: '⇄',
    skills: [
      { name: 'Bank APIs', level: 92 },
      { name: 'OCPP 1.6J', level: 85 },
      { name: 'Firebase', level: 85 },
      { name: 'Stripe', level: 80 },
      { name: 'Paypal', level: 78 },
    ],
  },
]

export const softSkills = ['High accountability', 'Clear communication', 'Sharp problem-solving', 'Team leadership']

export const education = {
  degree: 'BSc in Computer Science',
  school: 'National University of Laos',
  faculty: 'Faculty of Natural Sciences',
  period: '2018 — 2022',
}

export const certificates = [
  { title: 'KFCC Laos Training Workshop', issuer: 'South Korea' },
  { title: 'DevSecOps Transformation & Technologies', issuer: 'Skooldio' },
  { title: 'Cybersecurity 101', issuer: 'CYBERUS Technology' },
]

export const languages = [
  { name: 'Lao', level: 'Native', value: 100 },
  { name: 'English', level: 'Conversational', value: 65 },
  { name: 'Thai', level: 'Conversational', value: 65 },
]

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof sections)[number]['id']
