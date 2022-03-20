import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../nindo/src/external/components/card/card.comp';

export default {
  title: 'Editor/Card',
  component: Card,

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} >Click Me!</Card>
);

export const card = Template.bind({});

card.args = {
  title: 'Your Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipis elit.',
  onClick: () => alert('clicked')
};