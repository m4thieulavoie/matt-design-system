import type { Story, Meta } from "@storybook/web-components";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Example/Anchor",
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
  `<matt-theme-provider><matt-anchor href="#">Click here!</matt-anchor></matt-theme-provider>`;
