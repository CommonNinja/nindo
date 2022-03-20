import React from 'react';
import { ComponentStory } from '@storybook/react';
import dedent from 'ts-dedent';

import { PluginSkeleton } from '../../nindo/src/external/components/pluginSkeleton';

export default {
  title: 'Editor/Plugin Skeleton',
  component: PluginSkeleton,
  argTypes: {
    leadColor: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<PluginSkeleton />\` component when your app loads the app data.

          This is the default loader we use, but you may replace it with yours.          
          `
        ),
      },
    },
  },
};

const Template: ComponentStory<typeof PluginSkeleton> = (args) => {
  return (
    <PluginSkeleton {...args} />
  );
};

export const Plugin_Skeleton = Template.bind({});
Plugin_Skeleton.args = {
}