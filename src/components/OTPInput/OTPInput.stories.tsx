import type { Meta, StoryObj } from "@storybook/react";
import { OTPInput } from "./OTPInput";

const meta = {
  component: OTPInput,
} satisfies Meta<typeof OTPInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    originalCode: '1234',
    isPinReady: false,
    setIsPinReady: () => {}
  }
}