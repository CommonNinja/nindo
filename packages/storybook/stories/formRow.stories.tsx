import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import dedent from 'ts-dedent';
import { FormLabel } from '../../nindo/src/external/components/formLabel';
import { FormRow } from '../../nindo/src/external/components/formRow';

export default {
    title: 'Editor/Form Row',
    component: FormRow,
    parameters: {
        docs: {
            description: {
                component: dedent(
                    `
            The \`<FormRow />\` component is a wrapper you should use whenever you want to add a setting to the editor.
            `
                ),
            },
        },
    },
};

const Template: ComponentStory<typeof FormRow> = (args) => {
    const [text, setText] = useState('');

    return (
        <FormRow {...args}>
            <FormLabel>Form Label</FormLabel>
            <input
                type="text"
                placeholder="Enter Text"
                value={text}
                onChange={(e: any) => setText(e.target.value)}
            />
        </FormRow>
    );
};

export const formRow = Template.bind({});
formRow.args = {
}

const TextareaTemplate: ComponentStory<typeof FormRow> = (args) => {
    const [text, setText] = useState('');

    return (
        <FormRow {...args}>
            <FormLabel>Form Label</FormLabel>
            <textarea
                placeholder="Enter Text"
                value={text}
                onChange={(e: any) => setText(e.target.value)}
            />
        </FormRow>
    );
};

export const formRowWithTextarea = TextareaTemplate.bind({});
formRowWithTextarea.args = {
    flow: 'column'
}

// TODO