import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CSSProperties } from 'react';
import dedent from 'ts-dedent';

import { ShadowHint } from '../../nindo/src/external/components/shadowHint';

export default {
  title: 'Editor/Shadow Hint',
  component: ShadowHint,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<ShadowHint />\` component to add shadow hint to scrollable components.
          `
        ),
      },
    },
    backgrounds: {
      default: 'dark-gray',
    },
  },
};

const Template: ComponentStory<typeof ShadowHint> = (args) => {
  const style: CSSProperties = {
    width: '300px',
    height: '300px',
    overflow: 'scroll',
    position: 'relative',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '5px',
    margin: '20px',
    background: 'rgba(255,255,255,0.1)',
  };

  return (
    <div style={style}>
      <ShadowHint {...args} direction="top" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium diam sit amet placerat molestie. Etiam elementum tincidunt tincidunt.
      </p>
      <p>
        Praesent metus turpis, posuere vitae nibh id, scelerisque sollicitudin sem. Integer sem tellus, bibendum vitae vulputate non, condimentum id libero.
      </p>
      <p>
        Nunc porta tellus a metus pretium porta eu vitae eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <p>
        Nullam eleifend justo eu ipsum ornare, nec elementum tellus aliquam. Donec eget nisi ut libero ullamcorper fringilla.
      </p>
      <ShadowHint {...args} direction="bottom" />
    </div>
  );
};

export const Shadow_Hint = Template.bind({});
Shadow_Hint.args = {
}