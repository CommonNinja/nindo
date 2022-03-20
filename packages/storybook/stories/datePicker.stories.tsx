import React, { forwardRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import dedent from 'ts-dedent';
import { DatePicker } from '../../nindo/src/external/components/datePicker';
import { FormRow } from '../../nindo/src/external/components/formRow';
import { FormLabel } from '../../nindo/src/external/components/formLabel';

export default {
    title: 'Editor/Date Picker',
    component: DatePicker,
    parameters: {
        docs: {
            description: {
                component: dedent(
                    `
              Use \`<DatePicker />\` for dates.
              We're using the \`react-datepicker\` library. You may use any property from their docs on our date picker.
              `
                ),
            },
        },
        backgrounds: {
            default: 'dark-gray'
        }
    },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
    return (
        <FormRow>
            <FormLabel> Date Picker</FormLabel>
            <DatePicker {...args} />
        </FormRow>
    )
};

export const datePicker = Template.bind({});
datePicker.args = {
}

// TODO