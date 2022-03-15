import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NameFieldEditor } from '../../nindo/src/external/components/nameFieldEditor';

export default {
    title: 'Editor/Name Field Editor',
    component: NameFieldEditor,
} as ComponentMeta<typeof NameFieldEditor>;

const Template: ComponentStory<typeof NameFieldEditor> = (args) => {
    return (
        <NameFieldEditor {...args} />
    )
};

export const nameFieldEditor = Template.bind({});
nameFieldEditor.args = {
}

// TODO