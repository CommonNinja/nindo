import React, { CSSProperties, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import dedent from 'ts-dedent';
import { CSSPropertiesEditor } from '../../nindo/src/external/components/cssPropertiesEditor';
import { SystemIcon } from '../../nindo/src/external/components/icon';
import { Button } from '../../nindo/src/external/components/button';
import { FormRow } from '../../nindo/src/external/components/formRow';

export default {
  title: 'Editor/CSS Properties Editor',
  component: CSSPropertiesEditor,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          The \`<CSSPropertiesEditor />\` allows you to open a UI editor for CSS properties.
          `
        ),
      },
    },
  },
};

const Template: ComponentStory<typeof CSSPropertiesEditor> = (args) => {
  const [opened, setOpened] = useState(false);
  const [styles, setStyles] = useState({});

  return (
    <div className="cn-editor" style={{ backgroundColor: 'transparent', maxWidth: '320px' }}>
      <FormRow>
        <label>Title Element</label>
        <Button
          className="customize-btn"
          color="transparent"
          onClick={() => setOpened(true)}
        >
          Customize
        </Button>
      </FormRow>
      {
        opened &&
        <div className="css-props-editor-wrapper">
          <Button
            className="close-css-props-editor"
            onClick={() => setOpened(false)}
          >
            <SystemIcon size={20} type="arrow-left" />
            <span>Back</span>
          </Button>
          <CSSPropertiesEditor
            currentProperties={styles}
            onChange={(nextProperties: CSSProperties) =>
              setStyles(nextProperties)
            }
            availablePropertiesGroups={[]}
          />
        </div>
      }
    </div>
  );
};

export const CSS_Properties_Editor = Template.bind({});
CSS_Properties_Editor.args = {

}
// TODO