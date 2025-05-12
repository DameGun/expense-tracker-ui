import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Income',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'BYN',
  },
};

export const Custom: Story = {
  args: {
    variant: 'outlined',
    children: 'CUSTOM',
    color: 'primary',
    borderColor: 'accent',
    textColor: 'textWhite',
  },
};
