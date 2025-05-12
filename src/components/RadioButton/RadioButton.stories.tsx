import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { RadioButton } from './RadioButton';

const meta = {
  component: RadioButton,
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderFn = () => {
  const [checkedId, setCheckedId] = useState<string | number>(1);

  const handleCheck = (id: string | number) => setCheckedId(id);

  return (
    <>
      <RadioButton
        id={1}
        selected={checkedId === 1}
        text="Radio button 1"
        onPress={handleCheck}
      />
      <RadioButton
        id={2}
        selected={checkedId === 2}
        text="Radio button 2"
        onPress={handleCheck}
      />
    </>
  );
};

export const Default: Story = {
  render: RenderFn,
  args: { selected: false, id: 1, onPress: () => {} },
};
