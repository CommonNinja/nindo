import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemsManager } from '../../nindo/src/external/components/itemsManager';

export default {
    title: 'Editor/Items Manager',
    component: ItemsManager,
    parameters: {
        backgrounds: {
            default: 'dark-gray'
        }
    }
} as ComponentMeta<typeof ItemsManager>;

const Template: ComponentStory<typeof ItemsManager> = (args) => {
    return (
        <ItemsManager {...args} />
    )
};

export const itemsManager = Template.bind({});
itemsManager.args = {
    items: [{ id: '21' }, { id: "321" }],
    itemRenderer: () => <div>item content</div>,
    titleRenderer: () => <div>Title</div>,
}

// TODO