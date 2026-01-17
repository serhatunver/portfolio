import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { EducationCard } from '@/components/common/EducationCard';
import type { EducationType } from '@/types/content';

const meta: Meta<typeof EducationCard> = {
  title: 'Components/EducationCard',
  component: EducationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    education: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof EducationCard>;

const mockEducation: EducationType = {
  _id: '1',
  institution: 'X Technical University',
  degree: 'Bachelor of Science',
  department: 'Computer Science',
  gpa: '3.22 / 4.0',
  startDate: 'Feb 2025',
  isCurrent: false,
  endDate: 'Jan 2026',
  location: 'Warsaw, Poland',
  highlights: [
    'Focused on core computer science topics including software development, algorithms, and computer systems, with a strong emphasis on practical projects.',
  ],
  institutionLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/X_icon.svg',
};

export const Default: Story = {
  args: {
    education: mockEducation,
  },
};

export const CurrentlyStudyingHere: Story = {
  args: {
    education: { ...mockEducation, isCurrent: true, endDate: null },
  },
};
