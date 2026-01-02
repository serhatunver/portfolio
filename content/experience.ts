import type { Experience } from '@/types/content';

export const experience: Experience[] = [
  {
    _id: '1',
    company: 'Crafton',
    role: 'Frontend Developer Intern',
    startDate: 'Sep 2025',
    isCurrent: false,
    endDate: 'Jan 2026',
    location: 'Poznan, Poland',
    highlights: [
      'Developed reusable UI components (React, Next.js, TypeScript, Tailwind)',
      'Enhanced responsiveness, styling, accessibility',
      'Fixed UI/UX bugs and ensured cross-platform consistency',
      'Maintained code quality via Storybook, linting, formatting',
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Storybook',
      'Git',
    ],
    companyLogo:
      'https://media.licdn.com/dms/image/v2/C560BAQGjO48DKiiTxg/company-logo_200_200/company-logo_200_200/0/1630592564368/crafton_logo?e=2147483647&v=beta&t=KFco4Dwps0jlNpKdKd8T94Cwp-VCczEDam0eeZkyFwU',
  },
  {
    _id: '2',
    company: 'eQuota',
    role: 'Frontend Developer Intern',
    startDate: 'Jan 2023',
    isCurrent: false,
    endDate: 'Feb 2023',
    location: 'Denizli, Türkiye',
    highlights: [
      'Developed user-friendly web interfaces using Vue.js and Nuxt.',
    ],
    techStack: ['JavaScript', 'Nuxt', 'Vue.js', 'Tailwind CSS', 'Git'],
    companyLogo:
      'https://media.licdn.com/dms/image/v2/C4E0BAQEJoAsaLO3LhA/company-logo_200_200/company-logo_200_200/0/1655234886153/equota_logo?e=2147483647&v=beta&t=ygyZjSMULM1aY6Nk9nhoaEjy3K48NZxNPjrL4PjZudM',
  },
];
