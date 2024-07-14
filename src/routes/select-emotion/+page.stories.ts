import SelectEmotionPage from "./+page.svelte";
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<SelectEmotionPage> = {
  title: "Pages/SelectEmotionPage",
  component: SelectEmotionPage,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<SelectEmotionPage>;

export const Default: Story = {
  args: {}
}
