import React, { useState } from 'react';
import dedent from 'ts-dedent';

import { RichEditorWithImages, RichEditor } from '../../nindo/src/external/components/richEditor';
import { FormRow } from '../../nindo/src/external/components/formRow';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Editor/Rich Editor',
  component: RichEditorWithImages,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<RichEditorWithImages />\` component to add a WYSIWYG editor for html content.
          `
        ),
      },
    },
    backgrounds: {
      default: 'dark-gray'
    }
  },
};

// const WithImagesTemplate: ComponentStory<typeof RichEditorWithImages> = (args) => {
//   const [html, setHtml] = useState('');

//   return (
//     <FormRow flow="column">
//       <label>Content</label>
//       <RichEditorWithImages
//         {...args}
//         html={html}
//         onChange={(nextHtml) => setHtml(nextHtml)}
//       />
//     </FormRow>
//   );
// };

// export const richEditorWithImages = WithImagesTemplate.bind({});
// richEditorWithImages.args = {
//   imageUploadEnabled: true,
// }

const Template: ComponentStory<typeof RichEditorWithImages> = (args) => {
  const [html, setHtml] = useState('');

  return (
    <FormRow flow="column">
      <label>Content</label>
      <RichEditor
        {...args}
        html={html}
        onChange={(nextHtml) => setHtml(nextHtml)}
      />
    </FormRow>
  );
};

export const richEditorTextOnly = Template.bind({});
richEditorTextOnly.args = {}

// TODO