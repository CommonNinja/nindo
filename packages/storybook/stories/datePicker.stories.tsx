import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from '../../nindo/src/external/components/datePicker';

export default {
    title: 'Editor/Date Picker',
    component: DatePicker,

} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
    <DatePicker {...args} />
);

export const datePicker = Template.bind({});
datePicker.args = {
    
};
