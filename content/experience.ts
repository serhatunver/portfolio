import type { Experience } from '@/types/content';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Web Solutions',
    role: 'Full Stack Developer',
    duration: 'Feb 2022 - Present',
    location: 'City, Country',
    responsibilities: [
      'Built and maintained web applications using Node.js and Express.',
      'Integrated RESTful APIs and third-party services.',
      'Implemented database solutions with MongoDB and PostgreSQL.',
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Storybook',
      'Git',
    ],
    companyLogo: '',
  },
  {
    id: '2',
    company: 'Tech Corp',
    role: 'Frontend Developer',
    duration: 'Jan 2020 - Dec 2021',
    location: 'City, Country',
    responsibilities: [
      'Developed user-friendly web interfaces using Vue.js and Nuxt.',
      // 'Collaborated with designers to implement responsive designs.',
      // 'Optimized application performance and ensured cross-browser compatibility.',
    ],
    techStack: ['JavaScript', 'Nuxt', 'Vue.js', 'Tailwind CSS', 'Git'],
    companyLogo: '',
  },
];
