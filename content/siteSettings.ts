import { convertStringToPortableText } from '@/lib/utils/portableText';
import type { SiteSettingsType } from '@/types/content';

export const siteSettings: SiteSettingsType = {
  hero: {
    title: 'Software Engineer',
    description:
      'I build modern web applications across frontend and backend, focusing on clean, maintainable systems and real-world use cases.',
    cta: [
      {
        label: 'View Projects',
        href: '/projects',
        type: 'default',
      },
      {
        label: 'About Me',
        href: '/about',
        type: 'secondary',
      },
    ],
  },
  about: {
    title: 'About Me',
    content: convertStringToPortableText(
      'Full-Stack JavaScript Software Engineer interested in building practical, real-world web applications across both frontend and backend. I work with modern JavaScript technologies on both frontend and backend, gaining experience in building user interfaces, implementing backend APIs, and connecting different parts of a web application. I’m currently seeking opportunities as a frontend, backend, or full-stack developer where I can contribute to real projects, continue learning, and grow as an engineer in a collaborative team environment.',
    ),
  },
  footer: {
    fullName: 'name surname',
    title: 'Software Engineer',
    message: 'Thanks for visiting my portfolio!',
    cta: [
      {
        label: 'Home',
        href: '/home',
      },
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Projects',
        href: '/projects',
      },
    ],
    contact: [
      {
        label: 'linkedin',
        href: 'www.linkedin.com',
      },
      {
        label: 'github',
        href: 'www.github.com',
      },
      {
        label: 'mail',
        href: 'www.gmail.com',
      },
    ],
  },
};
