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

export type CTA = {
  label: string;
  href: string;
  type?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  target?: '_self' | '_blank';
  icon?: string;
  disabled?: boolean;
  ariaLabel?: string;
  analyticsId?: string;
};

export type Contact = {
  label: string;
  href: string;
  icon: 'Linkedin' | 'Github' | 'Mail';
};

export type Hero = {
  title: string;
  description: string;
  cta: CTA[];
};

export type About = {
  title: string;
  content: PortableTextBlock[];
};

export type Footer = {
  fullName: string;
  title: string;
  message: string;
  cta: CTA[];
  contact: Contact[];
};

export type SiteSettings = {
  hero: Hero;
  about: About;
  footer: Footer;
};
