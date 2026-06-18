import { Service, TeamMember, Project, TechIcon } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering & Premium UI/UX',
    description: 'We craft immersive, lightning-fast client interfaces prioritizing fluid interactions, optimized conversions, and device responsiveness.',
    iconName: 'Layout',
    category: 'frontend',
    features: [
      'Professional & high-converting modern design',
      'Strategic Call-To-Action (CTA) integration',
      'Responsive, multi-device accessibility',
      'Lightning-fast page loads for maximum retention',
      'Refined UI/UX for scalable web applications'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Systems & Content Architecture',
    description: 'We build scalable architectures to power custom business requirements, including easy-to-manage content systems and enterprise data flows.',
    iconName: 'Cpu',
    category: 'backend',
    features: [
      'Dedicated business & service area showcases',
      'Easy-to-manage custom blog engines & CMS',
      'Secure, thread-safe full-stack implementations',
      'High-performance content architectures',
      'Structured categorization and data management'
    ]
  },
  {
    id: 'infrastructure',
    title: 'Cloud Infrastructure & Long-Term Support',
    description: 'Beyond the initial build, our full-stack team acts as your dedicated technology partner, providing continuous proactive maintenance and scalable cloud infrastructure.',
    iconName: 'Cloud',
    category: 'infrastructure',
    features: [
      'Continuous feature updates and enhancements',
      'Long-term post-launch technical support',
      'High-availability infrastructure monitoring',
      'Zero-downtime rollouts and resilient backups',
      'Proven engineering collaboration & communication'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'Ye',
    name: 'Ye Wai',
    role: 'Software Engineer',
    bio: 'Specialist in Next.js, React, and front-end design systems. Ye translates creative user interfaces into highly performant, accessible web experiences.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'ye@devteam.io',
    avatarSeed: 'ye'
  },
  {
    id: 'alex',
    name: 'Alex Rivera',
    role: 'Senior Full-Stack Engineer',
    bio: 'Specialist in Next.js, React, and front-end design systems. Alex translates artistic UI mockups into performant, elegant codebases with robust client states.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'alex@devteam.io',
    avatarSeed: 'alex'
  },
  {
    id: 'marcus',
    name: 'Marcus Chen',
    role: 'Core Systems Architect',
    bio: 'Deep systems engineer specializing in Java, Spring Boot, Postgres performance tuning, and scalable API gateways. Former tech lead for multi-million transaction enterprise applications.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'marcus@devteam.io',
    avatarSeed: 'marcus'
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Cloud & DevOps Lead',
    bio: 'Kubernetes wizard, cloud solutions architect, and automation expert. Elena builds self-healing infrastructure, immutable pipelines, and resilient multi-region server arrays.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'elena@devteam.io',
    avatarSeed: 'elena'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nexpay',
    title: 'NexPay High-Throughput Broker',
    client: 'NexPay Global',
    summary: 'A secure, thread-safe financial API gateway scaling dynamically to broker microsecond transaction signals.',
    problem: 'The client faced transactional packet loss and severe latency spikes (averaging 480ms) during high-frequency market openings.',
    solution: 'Designed and deployed a highly concurrent Java 21 & Spring Boot cluster utilizing dynamic pooled Redis caching, reactive WebClient channels, and database connection tuning.',
    techStack: ['Spring Boot 3', 'Java 21', 'Redis', 'PostgreSQL', 'Docker', 'AWS ECS'],
    successMetric: 'API latency optimized by 42% (under 25ms consistent response) with zero packet drop rates.',
    category: 'fintech'
  },
  {
    id: 'aura',
    title: 'Aura Headless Commerce Engine',
    client: 'Aura Apparel LLC',
    summary: 'A rapid headless storefront featuring instant search indexing, real-time inventory synchronizations, and server page compiles.',
    problem: 'Existing legacy systems took up to 5.2 seconds for paint loading on mobile, resulting in massive cart abandonment.',
    solution: 'Engineered a clean Next.js App Router setup with incremental static regeneration, custom micro-services, and full Tailwind CSS styling.',
    techStack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'GraphQL', 'Vercel', 'PostgreSQL'],
    successMetric: 'LCP page loading speed brought down to 0.72 seconds, boosting checkout conversions by +34%.',
    category: 'web'
  },
  {
    id: 'helix',
    title: 'Helix Real-Time Analytics Portal',
    client: 'Helix BioSystems',
    summary: 'A multi-tenant streaming dashboard feeding live telemetry metrics from clinical sensory equipment with millisecond precision.',
    problem: 'Telemetry pipelines lagged by minutes because of unindexed heavy SQL querying on time-series records.',
    solution: 'Set up an isolated time-series TimescaleDB engine bridged with event-driven WebSockets and active React render throttling, ensuring steady rates of updates.',
    techStack: ['React', 'Node.js', 'TimescaleDB', 'TypeScript', 'WebSockets', 'Kubernetes'],
    successMetric: 'Ingests 5,000,000+ data coordinates daily with active browser renderings rendering under 1.5% CPU overload.',
    category: 'enterprise'
  },
  {
    id: 'cybershield',
    title: 'CyberShield HIPAA Exchange',
    client: 'CyberShield Health',
    summary: 'An encrypted electronic medical records (EMR) system bridging diagnostic facilities with high security compliance protocols.',
    problem: 'Strict European and US healthcare transfer mandates prohibited cloud storage of plain-text patient profiles.',
    solution: 'Built a zero-trust Java 21 microservice architecture featuring column-level AES-256 GCM encryption, audited ledger flows, and multi-factor OAuth 2.0 tokens.',
    techStack: ['Spring Security 6', 'Java 21', 'Spring Boot 3', 'OAuth 2.0', 'GCP Secret Manager'],
    successMetric: 'Passed dynamic and static external penetration testing 100% on the first audit run, securing HIPAA compliance.',
    category: 'cloud'
  }
];

export const TECH_STACK: TechIcon[] = [
  { name: 'Next.js', category: 'frontend' },
  { name: 'React 19', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Java 21', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Redis', category: 'backend' },
  { name: 'Docker', category: 'cloud' },
  { name: 'Kubernetes', category: 'cloud' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Google Cloud', category: 'cloud' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Git & Actions', category: 'tool' }
];
