import type { TechStackType } from '@/types/content';

export const techStack: TechStackType[] = [
  {
    title: 'Frontend',
    technologies: [
      {
        slug: 'typescript',
      },
      { slug: 'react' },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      {
        slug: 'nodedotjs',
      },
      { slug: 'express', invertColor: true },
    ],
  },
  {
    title: 'Tools',
    technologies: [
      {
        slug: 'git',
      },
      { slug: 'docker' },
    ],
  },
];
