import type { Story, Meta } from "@storybook/web-components";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} as Meta;

export const DefaultButton: Story = () =>
  `<matt-theme-provider><matt-button>Default button</matt-button></matt-design-system>`;

export const SecondaryButton: Story = () =>
  `<matt-theme-provider><matt-button variant="secondary">Secondary button</matt-button></matt-design-system>`;

export const TertiaryButton: Story = () =>
  `<matt-theme-provider><matt-button variant="tertiary">Tertiary button</matt-button></matt-design-system>`;

export const SmallButton: Story = () =>
  `<matt-theme-provider><matt-button size="small">Small button</matt-button></matt-design-system>`;
