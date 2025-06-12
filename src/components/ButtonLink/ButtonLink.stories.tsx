import type { Meta, StoryObj } from '@storybook/react';

import { ButtonLink } from './ButtonLink';

const meta = {
  component: ButtonLink,
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ButtonLink',
    onPress: () => console.log('click'),
  },
};
