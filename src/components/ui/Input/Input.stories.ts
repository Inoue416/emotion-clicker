import Input from "./Input.svelte";
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<Input>;

export const Default: Story = {
  args: {
    
  }
}
