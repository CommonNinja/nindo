import React from 'react';
import { ComponentStory } from '@storybook/react';
import dedent from 'ts-dedent';

import { NinjaSkeleton, NinjaSkeletonTheme } from '../../nindo/src/external/components/skeleton';

export default {
  title: 'Editor/Skeleton',
  component: NinjaSkeleton,
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
          Use the \`<NinjaSkeleton />\` component when your app loads the app data.
          `
        ),
      },
    },
  },
};

const Template: ComponentStory<typeof NinjaSkeleton> = (args) => {
  return (
    <NinjaSkeletonTheme {...args}>
      <div className="items" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          Array.from(new Array(9)).map((d, i) => (
            <div style={{ width: '25%', background: 'rgba(255,255,255,0.1)', margin: '10px', padding: '10px' }}>
              <NinjaSkeleton circle={true} count={1} height={40} width={40} />
              <br /><br />
              <NinjaSkeleton count={1} height={100} />
            </div>
          ))
        }
      </div>
    </NinjaSkeletonTheme>
  );
};

export const skeleton = Template.bind({});
skeleton.args = {
  // leadColor: 'rgba(255,255,255,0.05)'
}