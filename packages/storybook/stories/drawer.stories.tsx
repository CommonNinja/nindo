import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import dedent from 'ts-dedent';

import { Drawer } from '../../nindo/src/external/components/drawer';
import { Button } from '../../nindo/src/external/components/button';

export default {
  title: 'Editor/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          The \`<Drawer />\` allows you to open a side menu with content you wish to present.
          `
        ),
      },
    },
  },
};

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = useState(false);
  
  return (
    <>
      <Button 
        onClick={() => setOpened(true)}
        color="green"
      >
        Click Me
      </Button>
      <Drawer
        {...args}
        show={opened}
        closeCallback={() => setOpened(false)}
      >
        Hey drawer!
      </Drawer>
    </>
  );
};

export const drawer = Template.bind({});
drawer.args = {
}