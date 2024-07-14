import SelectEmotionButton from "./SelectEmotionButton.svelte";
import type { Meta, StoryObj } from '@storybook/svelte';
import type { SelectEmotionButtonInterface } from "$/types/select-emotion/SelectEmotion";

const meta: Meta<SelectEmotionButton> = {
  title: "Features/SelectEmotionButton",
  component: SelectEmotionButton,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<SelectEmotionButton>;

const happyButtonProps: SelectEmotionButtonInterface = {
  buttonClass: "btn btn-accent mr-5",
  buttonText: "Happy!!",
  path: "/",
  onClickEvent: () => {}
};

const angryButtonProps: SelectEmotionButtonInterface = {
  buttonClass: "btn btn-error",
  buttonText: "Angry!!",
  path: "/",
  onClickEvent: () => {}
};

export const Default: Story = {
  args: {
    happyButtonProps,
    angryButtonProps
  }
}
