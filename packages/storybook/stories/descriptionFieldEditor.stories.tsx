import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DescriptionFieldEditor } from '../../nindo/src/external/components/descriptionFieldEditor';

export default {
    title: 'Editor/Description Field Editor',
    component: DescriptionFieldEditor,

} as ComponentMeta<typeof DescriptionFieldEditor>;

const Template: ComponentStory<typeof DescriptionFieldEditor> = (args) => {
    return (
        <DescriptionFieldEditor
            {...args}
        />
    );
};

export const descriptionFieldEditor = Template.bind({});
descriptionFieldEditor.args = {
}
// TODO