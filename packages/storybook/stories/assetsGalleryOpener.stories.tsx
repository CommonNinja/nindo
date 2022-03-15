import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AssetsGalleryOpener } from '../../nindo/src/external/components/assetsGalleryOpener'

export default {
  title: 'Editor/Assets Gallery Opener',
  component: AssetsGalleryOpener,

} as ComponentMeta<typeof AssetsGalleryOpener>;

const Template: ComponentStory<typeof AssetsGalleryOpener> = (args) => (
  <AssetsGalleryOpener {...args} />
);

export const assetsGalleryOpener = Template.bind({});

assetsGalleryOpener.args = {
  enabled: true,
  submitCallback: () => alert('s')
};

//TODO