import Footer from "./Footer.svelte";
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Footer> = {
  title: "Features/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<Footer>;

export const Default: Story = {
  args: {
    copyrightText: "yuay inoue",    
  }
}
