import { ComponentStory } from '@storybook/react';
import React from 'react';
import dedent from 'ts-dedent';

import { PremiumOpener } from '../../nindo/src/external/components/premiumOpener';

export default {
  title: 'Editor/Premium Opener',
  component: PremiumOpener,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<PremiumOpener />\` component to wrap an element you want it to open the upgrade to premium popup.

          This will trigger a click event on the \`#premium-popup-opener\` div element which exist by default on the editor (no need to add it).
          `
        ),
      },
    },
    backgrounds: {
      default: 'dark-gray',
    },
  },
};

const Template: ComponentStory<typeof PremiumOpener> = (args) => {
  return (
    <>
      <PremiumOpener>Upgrade to Premium</PremiumOpener>
      <div id="premium-popup-opener" onClick={() => alert('Clicked!')}></div>
    </>
  );
};

export const Premium_Opener = Template.bind({});
Premium_Opener.args = {
}