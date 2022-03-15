import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import dedent from 'ts-dedent';

import { CustomCSSEditor } from '../../nindo/src/external/components/customCSSEditor';
import { Popup } from '../../nindo/src/external/components/popup';

export default {
  title: 'Editor/Custom CSS Editor',
  component: CustomCSSEditor,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          The \`<CustomCSSEditor />\` will allow users to set their own custom CSS.
          `
        ),
      },
    },
  },
};

const Template: ComponentStory<typeof CustomCSSEditor> = (args) => {
  const [cssPopupOpened, setCSSPopupOpened] = useState(false);
  const [css, setCSS] = useState('');

  return (
    <>
      <button
        className="button major"
        onClick={() => setCSSPopupOpened(true)}
      >
        Click to Edit
      </button>
      {cssPopupOpened && (
        <Popup
          show={cssPopupOpened}
          closeCallback={() => setCSSPopupOpened(false)}
          className="custom-css-popup"
        >
          <CustomCSSEditor
            {...args}
          // css={css}
          // onUpdate={(newStyles) => {
          // setCSS(newStyles);
          // setCSSPopupOpened(false);
          // }}
          >
            <div>Try me</div>
          </CustomCSSEditor>
        </Popup>
      )}
    </>
  );
};

export const Custom_CSS_Editor = Template.bind({});
Custom_CSS_Editor.args = {
}

// TODO