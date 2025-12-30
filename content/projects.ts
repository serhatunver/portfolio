import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'This is the first project description.',
    detailedDescription: 'Detailed information about Project One.',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    githubLink: '#',
    demoLink: '#',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'This is the second project description.',
    detailedDescription: 'Detailed information about Project Two.',
    techStack: [
      'JavaScript',
      'Vue.js',
      'Nuxt.js',
      'Firebase',
      'CSS',
      'HTML',
      'Git',
      'Storybook',
    ],
    githubLink: '#',
    demoLink: '#',
  },
];
