export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  category: 'frontend' | 'backend' | 'infrastructure';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  github?: string;
  linkedin?: string;
  email?: string;
  avatarSeed: string; // Used to generate distinct consistent modern avatars
}

export interface Project {
  id: string;
  title: string;
  client: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  successMetric: string;
  category: 'web' | 'fintech' | 'enterprise' | 'cloud';
}

export interface TechIcon {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tool';
}
