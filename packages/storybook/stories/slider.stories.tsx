import React, { useState } from 'react';
import dedent from 'ts-dedent';

import { NinjaSlider } from '../../nindo/src/external/components/slider';
import { FormRow } from '../../nindo/src/external/components/formRow';
import { FormLabel } from '../../nindo/src/external/components/formLabel';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Editor/Slider',
  component: NinjaSlider,
  argTypes: {
    theme: {
      control: 'text'
    },
    value: {
      control: 'number'
    },
    step: {
      control: 'number'
    },
    max: {
      control: 'number'
    },
    min: {
      control: 'number'
    },
    onChange: {
      control: 'function'
    },
    dots: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    disableTooltip: {
      control: 'boolean'
    },
  },
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<NinjaSlider />\` component when you have a range of numbers setting.
          `
        ),
      },
    },
    backgrounds: {
      default: 'dark-gray',
    },
  },
};

const Template: ComponentStory<typeof NinjaSlider> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <FormRow>
      <FormLabel>Range</FormLabel>
      <NinjaSlider {...args} value={value} onChange={(num) => setValue(num)} />
    </FormRow>
  );
};

export const slider = Template.bind({});
slider.args = {
  theme: 'dark',
  value: 3,
  step: 1,
  max: 10,
  min: 1,
  onChange: () => { }
}