import React, { useState } from 'react';
import dedent from 'ts-dedent';
import { ComponentStory } from '@storybook/react';
import { Toggler } from '../../nindo/src/external/components/toggler';
import { FormRow } from '../../nindo/src/external/components/formRow';

export default {
  title: 'Editor/Toggler',
  component: Toggler,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<Toggler />\` component for checkbox settings.
          `
        ),
      },
    },
    backgrounds: {
      default: 'blue',
    },
  },
};

const Template: ComponentStory<typeof Toggler> = (args) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <FormRow>
      <label>Toggle that</label>
      <Toggler {...args} isChecked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    </FormRow>
  );
};

export const toggler = Template.bind({});
toggler.args = {
  name: 'unique-toggler',
  isChecked: true,
  onChange: (e, isChecked) => { }
}