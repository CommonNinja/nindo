import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import dedent from 'ts-dedent';
import { FormLabel } from '../../nindo/src/external/components/formLabel';
import { FormRow } from '../../nindo/src/external/components/formRow';

export default {
    title: 'Editor/Form Label',
    component: FormLabel,
    argTypes: {
        isPremium: {
            control: 'boolean'
        },
        otherProps: {
            control: 'object'
        },
    },
    parameters: {
        docs: {
            description: {
                component: dedent(
                    `
            With the \`<FormLabel />\` component you may wrap a label that describes a setting under a \`<FormRow />\` component.
            `
                ),
            },
        },
    },
} as ComponentMeta<typeof FormLabel>

const Template: ComponentStory<typeof FormLabel> = (args) => {
    const [text, setText] = useState('');

    return (
        <FormRow>
            <FormLabel {...args}>Label</FormLabel>
            <input
                type="text"
                placeholder="Enter Text"
                value={text}
                onChange={(e: any) => setText(e.target.value)}
            />
        </FormRow>
    );
};

export const formLabel = Template.bind({});
formLabel.args = {
}