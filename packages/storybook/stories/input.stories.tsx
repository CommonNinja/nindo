import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../nindo/src/external/components/input';
import { FormRow } from '../../nindo/src/external/components/formRow';
import { FormLabel } from '../../nindo/src/external/components/formLabel';

export default {
    title: 'Editor/Input',
    component: Input,
    parameters: {
        backgrounds: {
            default: 'dark-gray'
        }
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    return (
        <FormRow>
            <FormLabel>Input</FormLabel>
            <Input {...args} />
        </FormRow>
    )
};

export const input = Template.bind({});
input.args = {
    type: 'email'
}
