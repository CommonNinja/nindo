import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExportElementButton } from '../../nindo/src/external/components/exportElementButton';

export default {
    title: 'Editor/Export Element Button',
    component: ExportElementButton,

} as ComponentMeta<typeof ExportElementButton>;

const Template: ComponentStory<typeof ExportElementButton> = (args) => {
    return (
        <ExportElementButton
            {...args}
        />
    );
};

export const exportElementButton = Template.bind({});
// TODO