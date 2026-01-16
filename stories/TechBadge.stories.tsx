import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TechBadge } from '@/components/common/TechBadge';
import type { TechType } from '@/types/content';

const meta: Meta<typeof TechBadge> = {
  title: 'Components/TechBadge',
  component: TechBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    tech: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TechBadge>;

const mockTech: TechType = {
  slug: 'storybook',
  title: 'Storybook',
};

export const Default: Story = {
  args: {
    size: 'sm',
    tech: mockTech,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    tech: mockTech,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    tech: mockTech,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    tech: mockTech,
  },
};

export const InfereTitleFromSlug: Story = {
  args: {
    size: 'md',
    tech: {
      slug: 'nextdotjs',
      invertColor: true,
    },
  },
};

export const CustomTitle: Story = {
  args: {
    size: 'md',
    tech: {
      slug: 'nextdotjs',
      title: 'Custom Title',
      invertColor: true,
    },
  },
};

export const CustomColor: Story = {
  args: {
    size: 'md',
    tech: {
      slug: 'nextdotjs',
      color: 'ff4785',
    },
  },
};

export const InvertColorDark: Story = {
  args: {
    size: 'md',
    tech: {
      slug: 'nextdotjs',
      invertColor: true,
    },
  },
};

export const InvertColorLight: Story = {
  args: {
    size: 'md',
    tech: {
      slug: 'betterauth',
      invertColor: true,
    },
  },
};
