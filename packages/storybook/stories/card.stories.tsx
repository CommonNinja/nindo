import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../nindo/src/external/components/card/card.comp';

export default {
  title: 'Editor/Card',
  component: Card,

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
);

const TemplateWithImage: ComponentStory<typeof Card> = (args) => (
  <Card {...args}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
);

export const card = Template.bind({});
export const cardWithImage = TemplateWithImage.bind({});

card.args = {
  title: 'Your Title',
  onClick: () => alert('clicked')
};

cardWithImage.args = {
  title: 'Your Title',
  onClick: () => alert('clicked'),
  imgUrl: "https://blog.commoninja.com/wp-content/uploads/2022/02/Group-4361.png"
};