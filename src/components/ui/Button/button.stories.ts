import Button from "./button.svelte";
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<Button>;

export const Default: Story = {
  args: {
    buttonClass: "btn btn-primary",
    buttonText: "サンプルボタン",
    path: "",
    onClick: () => {}
  }
}
