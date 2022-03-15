import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FontFamilySelector } from '../../nindo/src/external/components/fontFamilySelector';

export default {
    title: 'Editor/Font Family Selector',
    component: FontFamilySelector,

} as ComponentMeta<typeof FontFamilySelector>;

const Template: ComponentStory<typeof FontFamilySelector> = (args) => {
    return (
        <FontFamilySelector
            {...args}
        />
    );
};

export const fontFamilySelector = Template.bind({});
// TODO