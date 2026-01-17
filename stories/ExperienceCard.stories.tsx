import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ExperienceCard } from '@/components/common/ExperienceCard';
import type { ExperienceType } from '@/types/content';

const meta: Meta<typeof ExperienceCard> = {
  title: 'Components/ExperienceCard',
  component: ExperienceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    experience: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ExperienceCard>;

const mockExperience: ExperienceType = {
  _id: '1',
  company: 'X Company',
  role: 'Software Engineer',
  startDate: 'Feb 2025',
  isCurrent: false,
  endDate: 'Jan 2026',
  location: 'Warsaw, Poland',
  highlights: [
    'Developed reusable UI components (React, Next.js, TypeScript, Tailwind)',
    'Enhanced responsiveness, styling, accessibility',
    'Fixed UI/UX bugs and ensured cross-platform consistency',
    'Maintained code quality via Storybook, linting, formatting',
  ],
  techStack: [
    { slug: 'typescript' },
    { slug: 'react' },
    { slug: 'nextdotjs', invertColor: true },
    { slug: 'storybook' },
    { slug: 'nodedotjs' },
  ],
  companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/X_icon.svg',
};

export const Default: Story = {
  args: {
    experience: mockExperience,
  },
};

export const CurrentlyWorkingHere: Story = {
  args: {
    experience: { ...mockExperience, isCurrent: true, endDate: null },
  },
};
