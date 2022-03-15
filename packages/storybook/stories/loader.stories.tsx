import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from '../../nindo/src/external/components/loader';

export default {
    title: 'Editor/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => {
    return (
        <Loader {...args} />
    )
};

export const loader = Template.bind({});
loader.args = {
}
