import { Service, TeamMember, Project, TechIcon } from '@/src/types';

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
    id: 'pyae',
    name: 'Pyae Sone Aung',
    role: 'Software Engineer',
    bio: 'Specialist in robust Spring Boot backends and dynamic Angular frontends. With 3 years of experience, Pyae engineers secure, high-transaction systems tailored for the fintech industry. He bridges the gap between complex data and user experience to deliver seamless e-commerce platforms.',
    github: 'https://github.com/PyaeSone99',
    linkedin: 'https://linkedin.com',
    email: 'yewai.cs@gmail.com',
    avatarSeed: 'pyae'
  },
  {
    id: 'Hayman',
    name: 'Hayman Lawon Htet',
    role: 'Software Engineer',
    bio: 'Expert in crafting engaging web interfaces and high-performance mobile applications. Hayman leverages 3 years of specialized expertise in fintech to build scalable, secure e-commerce solutions. She ensures complex financial systems are delivered through intuitive, accessible, and fast-loading screens.',
    github: 'https://github.com/hmlwh07',
    linkedin: 'https://www.linkedin.com/',
    email: 'yewai.cs@gmail.com',
    avatarSeed: 'hayman'
  },
  {
    id: 'Arkar',
    name: 'Arkar Nyein',
    role: 'Software Engineer',
    bio: 'Master of user-centric design, seamlessly blending UI/UX principles with advanced frontend and mobile development. Over the past 3 years, Arkar has transformed complex fintech requirements into sleek, interactive digital products. He brings a sharp, creative eye to e-commerce projects, ensuring every customer touchpoint is visually stunning and functional.',
    github: 'https://github.com/Arkar48',
    linkedin: 'https://www.linkedin.com/',
    email: 'yewai.cs@gmail.com',
    avatarSeed: 'arkar'
  },
    {
    id: 'Ye',
    name: 'Ye Wai',
    role: 'Software Engineer',
    bio: 'Veteran full-stack developer with over 4 years of experience specializing in Java Spring Boot APIs and frontend integrations. Ye oversees end-to-end architecture, expertly managing server configurations and complex deployment pipelines. His deep background in fintech and e-commerce guarantees highly secure, scalable, and resilient applications.',
    github: 'https://github.com/yewai00',
    linkedin: 'https://www.linkedin.com/in/ye-wai/',
    email: 'yewai.cs@gmail.com',
    avatarSeed: 'ye'
  },
  {
    id: 'Shwe Yee',
    name: 'Shwe Yee Myint',
    role: 'Software Engineer',
    bio: 'Dedicated backend engineer architecting resilient, highly secure Spring Boot APIs. Leveraging 3 years of rigorous fintech experience, Shweyee designs the critical data foundations that power enterprise-level applications. Her logical approach to systems architecture ensures flawless, high-volume transactions for modern e-commerce storefronts.',
    github: 'https://github.com/ShweYeeK16',
    linkedin: 'https://www.linkedin.com/',
    email: 'yewai.cs@gmail.com',
    avatarSeed: 'shweyee'
  }
];

export const PROJECTS: Project[] = [
  // {
  //   id: 'nexpay',
  //   title: 'NexPay High-Throughput Broker',
  //   client: 'NexPay Global',
  //   summary: 'A secure, thread-safe financial API gateway scaling dynamically to broker microsecond transaction signals.',
  //   problem: 'The client faced transactional packet loss and severe latency spikes (averaging 480ms) during high-frequency market openings.',
  //   solution: 'Designed and deployed a highly concurrent Java 21 & Spring Boot cluster utilizing dynamic pooled Redis caching, reactive WebClient channels, and database connection tuning.',
  //   techStack: ['Spring Boot 3', 'Java 21', 'Redis', 'PostgreSQL', 'Docker', 'AWS ECS'],
  //   successMetric: 'API latency optimized by 42% (under 25ms consistent response) with zero packet drop rates.',
  //   category: 'fintech'
  // },
  {
    id: 'SanYonnNana',
    title: 'Book Store',
    client: 'San Yonn Nana (အိမ်မက်စာဖတ်ခရီး)',
    summary: 'An integrated e-commerce platform featuring a modern customer storefront and a secure administrative dashboard for seamless inventory management.',
    problem: 'The absence of a unified digital platform complicated manual inventory tracking and prevented customers from securely browsing and purchasing books online.',
    solution: 'Architected a robust dual-portal application using Spring Boot (Java 21) for scalable backend APIs and PostgreSQL for secure, relational data storage. The frontend leverages Angular, TypeScript, and Tailwind CSS to deliver responsive, authenticated interfaces with strict role-based access control for both shoppers and administrators.',
    techStack: ['Angular', 'Spring boot', 'Tailwind CSS', 'PostgreSQL', 'TypeScript', 'Java 21'],
    successMetric: 'Successfully launched a centralized digital storefront with seamless role-based authentication, streamlining both customer purchases and administrative inventory workflows.',
    category: 'web'
  },
  // {
  //   id: 'helix',
  //   title: 'Helix Real-Time Analytics Portal',
  //   client: 'Helix BioSystems',
  //   summary: 'A multi-tenant streaming dashboard feeding live telemetry metrics from clinical sensory equipment with millisecond precision.',
  //   problem: 'Telemetry pipelines lagged by minutes because of unindexed heavy SQL querying on time-series records.',
  //   solution: 'Set up an isolated time-series TimescaleDB engine bridged with event-driven WebSockets and active React render throttling, ensuring steady rates of updates.',
  //   techStack: ['React', 'Node.js', 'TimescaleDB', 'TypeScript', 'WebSockets', 'Kubernetes'],
  //   successMetric: 'Ingests 5,000,000+ data coordinates daily with active browser renderings rendering under 1.5% CPU overload.',
  //   category: 'enterprise'
  // },
  // {
  //   id: 'cybershield',
  //   title: 'CyberShield HIPAA Exchange',
  //   client: 'CyberShield Health',
  //   summary: 'An encrypted electronic medical records (EMR) system bridging diagnostic facilities with high security compliance protocols.',
  //   problem: 'Strict European and US healthcare transfer mandates prohibited cloud storage of plain-text patient profiles.',
  //   solution: 'Built a zero-trust Java 21 microservice architecture featuring column-level AES-256 GCM encryption, audited ledger flows, and multi-factor OAuth 2.0 tokens.',
  //   techStack: ['Spring Security 6', 'Java 21', 'Spring Boot 3', 'OAuth 2.0', 'GCP Secret Manager'],
  //   successMetric: 'Passed dynamic and static external penetration testing 100% on the first audit run, securing HIPAA compliance.',
  //   category: 'cloud'
  // }
];

export const TECH_STACK: TechIcon[] = [
  { name: 'Angular', category: 'frontend'},
  { name: 'Flutter', category: 'mobile'},
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
  { name: 'Git & Actions', category: 'tool' }
];
