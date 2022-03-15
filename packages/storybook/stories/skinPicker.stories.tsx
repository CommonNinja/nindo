import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SkinPicker } from '../../nindo/src/external/components/skinPicker';

export default {
    title: 'Editor/Skin Picker',
    component: SkinPicker,
    parameters: {
      
    },
} as ComponentMeta<typeof SkinPicker>;

const Template: ComponentStory<typeof SkinPicker> = (args) => {
    return (
        <SkinPicker {...args} />
    )
};

export const skinPicker = Template.bind({});
skinPicker.args = {
}

// TODO