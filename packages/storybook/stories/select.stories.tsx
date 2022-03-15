import { ComponentStory } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
import dedent from 'ts-dedent';

import { NinjaSelect } from '../../nindo/src/external/components/select';

export default {
  title: 'Editor/Selectbox',
  component: NinjaSelect,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<NinjaSelect />\` component to add a dropdown setting.   
          
          This component is based on \`react-select\` library, so you may pass any of its properties to this copmponent.
          `
        ),
      },
    },
    backgrounds: {
      default: 'dark-gray',
    },
  },
};

const Template: ComponentStory<typeof NinjaSelect> = (args) => {
  const [value, setValue] = useState('first');

  return (
    <NinjaSelect
      {...args}
      value={{
        value: value,
        label: value,
      }}
      onChange={({ value }: any) => setValue(value)}
    />
  );
};

export const Selectbox = Template.bind({});
Selectbox.args = {
  mode: 'dark',
  options: [
    {
      value: 'first',
      label: 'First',
    },
    {
      value: 'second',
      label: 'Second',
    },
  ]
}