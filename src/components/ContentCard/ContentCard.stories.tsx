import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { ContentCard } from './ContentCard';

const meta = {
  component: ContentCard,
} satisfies Meta<typeof ContentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContentCard>
      <Text>Just some plain text</Text>
      <Text>Just some plain text</Text>
      <Text>Just some plain text</Text>
      <Text>Just some plain text</Text>
      <Text>Just some plain text</Text>
    </ContentCard>
  ),
};
