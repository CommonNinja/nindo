import React from 'react';
import { ComponentStory } from '@storybook/react';
import { AddItemButton } from '../../nindo/src/external/components/addItemButton';

export default {
  title: 'Editor/Add Item Button',
  component: AddItemButton,
  parameters: {
    backgrounds: {
      default: 'black',
    },
  },

};

const Template: ComponentStory<typeof AddItemButton> = (args) => (
  <AddItemButton {...args} />
);

export const addItemButton = Template.bind({});

addItemButton.args = {
  onClick: () => alert('Clicked!'),
};
