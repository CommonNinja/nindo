import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../nindo/src/external/components/button/button.comp';

export default {
  title: 'Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} >Click Me!</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  onClick: () => alert('Clicked!')
};
