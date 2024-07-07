import Header from "$/features/Header/Header.svelte";
import type { NaviItem } from '$/types/NaviItem';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<Header>;

export const Default: Story = {
  args: {
    title: "Emotion Clicker",
    menu: [
      { title: "嬉しさを共有", path: "/" },
      { title: "怒りを発散", path: "/" },
      { title: "使い方", path: "/" },
    ],
  }
}