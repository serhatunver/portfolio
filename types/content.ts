import type { SanityImageSource } from '@sanity/image-url';
import type { PortableTextBlock } from 'next-sanity';

export type TechType = {
  slug: string;
  title?: string;
  color?: string;
  invertColor?: boolean;
};

export type ProjectType = {
  _id: string;
  title: string;
  description?: string;
  highlights?: string[];
  techStack: TechType[];
  githubLink?: string;
  demoLink?: string;
  slug: string;
};

export type EducationType = {
  _id: string;
  degree: string;
  department: string;
  institution: string;
  startDate?: string;
  isCurrent: boolean;
  endDate?: string | null;
  location?: string;
  highlights: string[];
  gpa?: string;
  institutionLogo: SanityImageSource;
};

export type ExperienceType = {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  isCurrent: boolean;
  endDate?: string | null;
  location: string;
  highlights: string[];
  techStack: TechType[];
  companyLogo: SanityImageSource;
};

export type CategoryType = {
  title: string;
  slug?: string;
  description?: string;
};

export type BlogPostType = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  categories: CategoryType[];
  body: PortableTextBlock[];
};

export type TechStackType = {
  title: string;
  technologies: TechType[];
};

export type CTAType = {
  label: string;
  href: string;
  type?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  target?: '_self' | '_blank';
  icon?: string;
  disabled?: boolean;
  ariaLabel?: string;
  analyticsId?: string;
};

export type ContactType = {
  label: string;
  href: string;
  icon?: SanityImageSource;
};

export type HeroType = {
  title: string;
  description: string;
  cta: CTAType[];
};

export type AboutType = {
  title: string;
  content: PortableTextBlock[];
};

export type FooterType = {
  fullName: string;
  title: string;
  message: string;
  cta: CTAType[];
  contact: ContactType[];
};

export type SiteSettingsType = {
  hero: HeroType;
  about: AboutType;
  footer: FooterType;
};
