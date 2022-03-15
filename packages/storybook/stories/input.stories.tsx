import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../nindo/src/external/components/input';

export default {
    title: 'Editor/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    return (
        <Input {...args} />
    )
};

export const input = Template.bind({});
input.args = {
    type: 'email'
}
