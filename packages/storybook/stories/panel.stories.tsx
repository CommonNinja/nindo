import React, { useState } from 'react';
import dedent from 'ts-dedent';

import { Panel } from '../../nindo/src/external/components/panel';
import { FormRow } from '../../nindo/src/external/components/formRow';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Editor/Panel',
  component: Panel,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          The \`<Panel />\` component is an accordion like UI that helps you arrange multiple items.
          `
        ),
      },
    },
  },
};

const Template: ComponentStory<typeof Panel> = (args) => {
  const [items, setItems] = useState([
    {
      id: 1,
      field: 'value'
    },
    {
      id: 2,
      field: 'value'
    },
    {
      id: 3,
      field: 'value'
    },
  ]);

  function updateField(id: number, value: string) {
    const nextItems = items.map((item) => {
      if (item.id === id) {
        item.field = value;
      }
      return item;
    });

    setItems(nextItems);
  }

  return (
    <>
      {
        items.map((item) => (
          <Panel
            {...args}
            titleComponent={`Panel ${item.id}`}
          >
            <FormRow>
              <label>Text Field</label>
              <input
                type="text"
                placeholder="Enter text"
                value={item.field}
                onChange={(e: any) => updateField(item.id, e.target.value)}
              />
            </FormRow>
          </Panel>
        ))
      }
    </>
  );
};

export const panel = Template.bind({});
panel.args = {
}