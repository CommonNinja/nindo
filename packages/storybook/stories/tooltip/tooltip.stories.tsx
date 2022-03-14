import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '../../../nindo/src/external/components/tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,

} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip { ...args } />
);

export const Primary = Template.bind({});

Primary.args = {
  content: 'hello'
};
