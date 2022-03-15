import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmationPopup } from '../../nindo/src/external/components/confirmationPopup';
import dedent from 'ts-dedent';
import { Button } from '../../nindo/src/external/components/button';

export default {
    title: 'Editor/Confirmation Popup',
    component: ConfirmationPopup,
    parameters: {
        docs: {
            description: {
                component: dedent(
                    `
            Use the \`<ConfirmationPopup />\` component in order to open a popup and ask the user to confirm an action.
            `
                ),
            },
        },
    },
} as ComponentMeta<typeof ConfirmationPopup>

const Template: ComponentStory<typeof ConfirmationPopup> = (args) => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button color="green" onClick={() => setOpened(true)}>Click to Open</Button>
            <ConfirmationPopup
                {...args}
                show={opened}
                closeCallback={() => setOpened(false)}
                approveCallback={() => setOpened(false)}
            />
        </>
    );
};

export const Confirmation_Popup = Template.bind({});
Confirmation_Popup.args = {
    approveCallback: () => { },
    closeCallback: () => { },
    message: 'Are you sure?',
    title: 'Confirmation Popup'
}