import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddItemButton } from '../../../nindo/src/external/components/addItemButton';

export default {
  title: 'Add Item Buttom',
  component: AddItemButton,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000' },
      ],
    },
  },

} as ComponentMeta<typeof AddItemButton>;

const Template: ComponentStory<typeof AddItemButton> = (args) => (
  <AddItemButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  onClick: () => alert('Clicked!'),
};
