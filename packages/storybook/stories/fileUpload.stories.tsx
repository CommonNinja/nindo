import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUpload } from '../../nindo/src/external/components/fileUpload';

export default {
    title: 'Editor/File Upload',
    component: FileUpload,

} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => {
    return (
        <FileUpload
            {...args}
        />
    );
};

export const fileUpload = Template.bind({});
// TODO