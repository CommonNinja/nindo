import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CopyInput } from '../../nindo/src/external/components/copyInput';
import { FormRow } from '../../nindo/src/external/components/formRow';

export default {
  title: 'Editor/Copy Input',
  component: CopyInput,
  parameters: {
    backgrounds: {
      default: "dark-gray"
    }
  }

} as ComponentMeta<typeof CopyInput>;

const Template: ComponentStory<typeof CopyInput> = (args) => {
  return (
    <FormRow>
      <CopyInput
        {...args}
      />
    </FormRow>
  )
};

export const copyInput = Template.bind({});
copyInput.args = {
  value: 'Copy input content',
  buttonClassName: 'button green'
}