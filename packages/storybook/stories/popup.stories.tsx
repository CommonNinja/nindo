import React, { useState } from 'react';
import dedent from 'ts-dedent';

import { Popup } from '../../nindo/src/external/components/popup';
import { Button } from '../../nindo/src/external/components/button';
import { ComponentStory } from '@storybook/react';

import './styles/rewrite.scss';

export default {
  title: 'Editor/Popup',
  component: Popup,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<Popup />\` component in order to open a popup.
          `
        ),
      },
    },
  },
};

const Template: ComponentStory<typeof Popup> = (args) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button color="green" onClick={() => setOpened(true)}>Click to Open</Button>
      <Popup
        {...args}
        show={opened}
        closeCallback={() => setOpened(false)}
      >
        {args.children || 'Hey popup'}
      </Popup>
    </>
  );
};

export const popup = Template.bind({});
popup.args = {
  children: (
    <>
      <h2>Popup Title</h2>
      <section className="story-section">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nobis nam! Ad repudiandae magnam molestias odit asperiores enim iste veritatis blanditiis ea excepturi maiores, perferendis distinctio deserunt quasi, ex explicabo?
      </section>
    </>
  )
}