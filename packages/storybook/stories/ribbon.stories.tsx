import React from 'react';
import { ComponentStory } from '@storybook/react';
import dedent from 'ts-dedent';

import { Ribbon } from '../../nindo/src/external/components/ribbon';

export default {
  title: 'Editor/Ribbon',
  component: Ribbon,
  argTypes: {
    text: {
      control: 'text'
    },
    link: {
      control: 'text'
    },
    isLinkable: {
      control: 'boolean'
    },
    iconUrl: {
      control: 'text'
    },
  },
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<Ribbon />\` component to add the "Created with Common Ninja" watermark to non-premium users.
          `
        ),
      },
    },
    backgrounds: {
      default: 'dark-gray'
    }
  },
};

const Template: ComponentStory<typeof Ribbon> = (args) => {
  return (
    <Ribbon {...args} />
  );
};

export const ribbon = Template.bind({});
ribbon.args = {
}