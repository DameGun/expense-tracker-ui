import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

const meta = {
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'USD',
    leftContent: '$',
    onRemove: console.log,
  },
};

export const Custom: Story = {
  args: {
    children: 'USD',
    color: 'primary',
    leftContent: '$',
    onRemove: console.log,
  },
};
