import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { MailIcon } from '@/assets';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Input',
    placeholder: 'Input component'
  }
}

export const WithIcon: Story = {
  args: {
    name: 'InputWithIcon',
    placeholder: 'Input component with icon',
    IconComponent: MailIcon
  }
}