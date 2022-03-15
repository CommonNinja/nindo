import React, { useState } from 'react';
import dedent from 'ts-dedent';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage } from '@fortawesome/free-solid-svg-icons'

import { AssetsGalleryOpener } from '../../nindo/src/external/components/assetsGalleryOpener';
import { FormRow } from '../../nindo/src/external/components/formRow';
import { ComponentStory } from '@storybook/react';
// import { AssetType } from '../../nindo/src';

export default {
  title: 'Editor/Assets Gallery',
  component: AssetsGalleryOpener,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          The \`<AssetsGalleryOpener />\` allows you to open the Common Ninja assets gallery where users may upload, delete, and find images they added to their apps.
          `
        ),
      },
    },
  },
};

const Template: ComponentStory<typeof AssetsGalleryOpener> = (args) => {
  const [url, setUrl] = useState('');
  return (
    <FormRow>
      <label>Image URL</label>
      <AssetsGalleryOpener
        {...args}
        submitCallback={(url) => setUrl(url)}
        // assetType='image'
        enabled={true}
        disabledCallback={() => alert('hey')}
      >
        {/* <FontAwesomeIcon icon={faImage} /> */}
        <h1>HAHA</h1>
      </AssetsGalleryOpener>
      <input
        type="url"
        placeholder="Enter image URL"
        value={url}
        onChange={(e: any) => setUrl(e.target.value)}
      />
    </FormRow>
  );
};

export const assetsGallery = Template.bind({});
assetsGallery.args = {
  enabled: true,
  submitCallback: (url) => alert(url),
}