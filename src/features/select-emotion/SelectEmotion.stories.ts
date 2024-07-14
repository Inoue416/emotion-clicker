import SelectEmotion from "./SelectEmotion.svelte";
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<SelectEmotion> = {
  title: "Features/SelectEmotion",
  component: SelectEmotion,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<SelectEmotion>;

export const Default: Story = {
  args: {
    title: "Emotion Clicker",
    description: "嬉しいこと、怒りをボタン連打で発散しよう！\n下のボタンからモードを選択してね。",
  }
}
