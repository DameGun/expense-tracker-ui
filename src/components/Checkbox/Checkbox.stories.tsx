import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from './Checkbox';

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderFn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => setIsChecked((prev) => !prev);

  return (
    <Checkbox text="Checkbox" checked={isChecked} onChange={handleCheck} />
  );
};

export const Default: Story = {
  render: RenderFn,
  args: { checked: false, onChange: () => {} },
};
