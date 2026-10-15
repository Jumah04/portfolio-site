export type LinkItem = {
  label: string;
  href: string;
};

export type CustomSection = {
  title: string;
  content?: string;
  items?: string[];
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  role: string;
  projectType: string;
  description: string;
  impact: string;
  context: string;
  challenge: string;
  keyQuestions: string[];
  approach: string[];
  outcomes: string[];
  takeaways: string[];
  tags: string[];
  tools: string[];
  githubUrl?: string;
  featured: boolean;
  customSections?: CustomSection[];
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export type Profile = {
  name: string;
  role: string;
  heroLabel: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  aboutHeadline: string;
  aboutSummary: string[];
  email: string;
  location: string;
  socials: LinkItem[];
};
