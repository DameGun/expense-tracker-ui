import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Switch } from './Switch';

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderFn = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleEnable = (value: boolean) => setIsEnabled(value);

  return (
    <Switch enabled={isEnabled} onChange={handleEnable} text="Priorbank" />
  );
};

export const Default: Story = {
  args: {
    text: 'Priorbank',
    enabled: false,
    onChange: console.log,
  },
  render: RenderFn,
};
