import type { PortableTextBlock } from 'next-sanity';

export type Project = {
  _id: string;
  title: string;
  description?: string;
  highlights: string[];
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  slug: string;
};

export type Education = {
  _id: string;
  degree: string;
  department: string;
  institution: string;
  startDate: string;
  isCurrent: boolean;
  endDate?: string | null;
  location: string;
  highlights: string[];
  gpa: string;
  institutionLogo: string;
};

export type Experience = {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  isCurrent: boolean;
  endDate?: string | null;
  location: string;
  highlights: string[];
  techStack: string[];
  companyLogo?: string;
};

export type Category = {
  title: string;
  slug?: string;
  description?: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  categories: Category[];
  body: PortableTextBlock[];
};

export type TechStack = {
  title: string;
  technologies: string[];
};

export type HeroSection = {
  title: string;
  description: string;
};

export type AboutSection = {
  title: string;
  content: string[];
};

type ContactType = 'github' | 'linkedin' | 'email';

export type FooterLink = {
  text: ContactType;
  href: string;
};

export type Footer = {
  name: string;
  title: string;
  message: string;
  links: FooterLink[];
};
