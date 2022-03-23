import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NoCodeCSSProps } from '../../nindo/src/external/components/noCodeCSSProps/noCodeCSSProps.comp';
import { ContextMenuSection } from '../../nindo/src/external/components/contextMenuSection/contextMenuSection.comp';

export default {
  title: 'Editor/No Code CSS Props',
  component: NoCodeCSSProps,
  parameters: {
    backgrounds: {
      default: 'black'
    }
  }

} as ComponentMeta<typeof NoCodeCSSProps>;

const Template: ComponentStory<typeof NoCodeCSSProps> = (args) => (
  <ContextMenuSection title='Custom Styles' >
    <NoCodeCSSProps {...args} />
  </ContextMenuSection>
);

export const noCodeCSSProps = Template.bind({});
noCodeCSSProps.args = {
  onChange: () => console.log('changed'),
  items: [{
    propName: 'mainWrapper',
    label: 'Main Box',
    value: {},
  },
  {
    propName: 'title',
    label: 'Main Title',
    value: {},
  },
  {
    propName: 'item',
    label: 'Item Box',
    value: {},
  },]
};
