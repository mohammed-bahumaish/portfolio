export interface Position {
  title: string;
  description: string[];
}

export interface Experience {
  company: string;
  location?: string;
  period: string;
  positions: Position[];
}

export interface Skill {
  frontend: string[];
  backend: string[];
  ai: string[];
  devops: string[];
  testing: string[];
  leadership: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

export interface OpenSourceContribution {
  project: string;
  contribution: string;
  pr: string;
}

export interface Contact {
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface ArabicTranslation {
  title: string;
  summary: string;
  location: string;
  skills: {
    frontend: string;
    backend: string;
    ai: string;
    devops: string;
    leadership: string;
  };
  positions: {
    engineer: string;
    frontend: string;
    opensource: string;
    freelance: string;
  };
  education: string;
}

export interface ResumeData {
  experiences: Experience[];
  avatarUrl: string;
  skills?: Skill;
  education?: Education;
  openSourceContributions?: OpenSourceContribution[];
  contact?: Contact;
  funFacts?: string[];
  arabic?: ArabicTranslation;
}
