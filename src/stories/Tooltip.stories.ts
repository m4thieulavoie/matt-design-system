import type { Story, Meta } from "@storybook/web-components";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Example/Tooltip",
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

export const DefaultTooltip: Story = () =>
  `<matt-theme-provider style="padding: 100px; display: block">
    <matt-button id="anchor">Hover me</matt-button>
    <matt-tooltip anchor="anchor" visible>Default tooltip</matt-tooltip>
    <matt-tooltip position="top" anchor="anchor" visible>Top tooltip</matt-tooltip>
    <matt-tooltip position="left" anchor="anchor" visible>Left tooltip</matt-tooltip>
    <matt-tooltip position="right" anchor="anchor" visible>Right tooltip</matt-tooltip>
  </matt-theme-provider>`;
