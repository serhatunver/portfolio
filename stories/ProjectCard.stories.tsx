import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProjectCard } from '@/components/common/ProjectCard';
import type { ProjectType } from '@/types/content';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    project: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

const mockProject: ProjectType = {
  _id: '1',
  title: 'Project 1',
  description: 'This is the first project description.',
  highlights: ['highlight 1', 'highlight 2'],
  techStack: [
    { slug: 'typescript' },
    { slug: 'react' },
    { slug: 'nextdotjs', invertColor: true },
    { slug: 'storybook' },
    { slug: 'sanity', invertColor: true },
    { slug: 'vercel', invertColor: true },
  ],
  githubLink: 'https://github.com/serhatunver/portfolio',
  demoLink: 'https://serhatunver.vercel.app/',
  slug: 'portfolio',
};

export const Default: Story = {
  args: {
    project: mockProject,
  },
};
