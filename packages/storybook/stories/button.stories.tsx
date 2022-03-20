import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../nindo/src/external/components/button/button.comp';

export default {
  title: 'Editor/Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} >Click Me!</Button>
);

export const button = Template.bind({});

button.args = {
  onClick: () => alert('Clicked!')
};