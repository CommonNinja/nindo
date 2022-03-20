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
    skins: [{ color: '#63458A', name: 'dark-purple', skinStyles:'' },{ color: '#95A3B3', name: 'blue', skinStyles:'' },{ color: '#000300', name: 'black', skinStyles:'' },{ color: '#CC7178', name: 'pink', skinStyles:'' }, { color: '#7DD181', name: 'green', skinStyles:'' }]
}

// TODO