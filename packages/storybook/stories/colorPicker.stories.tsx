import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorPicker } from '../../nindo/src/external/components/colorPicker';
import { FormRow } from '../../nindo/src/external/components/formRow';

export default {
  title: 'Editor/Color Picker',
  component: ColorPicker,
  parameters: {
    backgrounds: {
      default: "dark-gray"
    }
  }

} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => {
  const [color, setColor] = useState<string>('#3ed1ff');

  return (
    <FormRow>
      <label>Background Color</label>
      <ColorPicker
        {...args}
        onChange={(color) => setColor(color as string)}
        colorFormat='hex'
        selectedColor={color}
      />
    </FormRow>
  );
};

export const colorPicker = Template.bind({});
