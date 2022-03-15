import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemsManager } from '../../nindo/src/external/components/itemsManager';

export default {
    title: 'Editor/Items Manager',
    component: ItemsManager,
} as ComponentMeta<typeof ItemsManager>;

const Template: ComponentStory<typeof ItemsManager> = (args) => {
    return (
        <ItemsManager {...args} />
    )
};

export const itemsManager = Template.bind({});
itemsManager.args = {
}

// TODO