import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmationPopup } from '../../nindo/src/external/components/confirmationPopup';

export default {
    title: 'Editor/Confirmation Popup',
    component: ConfirmationPopup,

} as ComponentMeta<typeof ConfirmationPopup>;

const Template: ComponentStory<typeof ConfirmationPopup> = (args) => (
    <ConfirmationPopup {...args} />
);

export const confirmationPopup = Template.bind({});
confirmationPopup.args = {
    title: 'Title',
    message: 'Your message goes here :)',
    show: true,
    closeCallback: () => alert('Cancelled'),
    approveCallback: () => alert('Approved'),
};
