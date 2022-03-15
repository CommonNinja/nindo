import { ComponentStory } from '@storybook/react';
import React from 'react';
import dedent from 'ts-dedent';

import { Tabs } from '../../nindo/src/external/components/tabs';

export default {
  title: 'Editor/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<Tabs />\` component to create tabs navigation in the context menu.
          `
        ),
      },
    },
    backgrounds: {
      default: 'dark-gray',
    },
  },
};

const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <Tabs {...args} />
  );
};

export const tabs = Template.bind({});
tabs.args = {
  resolveTabComp: (id) => `Tab ${id}`,
  items: [
    {
      name: 'Tab 1',
      id: 1
    },
    {
      name: 'Tab 2',
      id: 2
    },
    {
      name: 'Tab 3',
      id: 3
    },
  ]
}