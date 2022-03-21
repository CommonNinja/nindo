import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '../../nindo/src/external/components/tooltip';

export default {
  title: 'Editor/Tooltip',
  component: Tooltip,
  docs: {
    description: {
      component:
        `
        Use the \`<Tooltip />\` component to show extra data on a setting field.
        `
      ,
    },
  },

} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip  {...args} />
);

export const tooltip = Template.bind({});

tooltip.args = {
  content: 'hello'
};
