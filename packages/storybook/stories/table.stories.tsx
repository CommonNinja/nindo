import { ComponentStory } from '@storybook/react';
import React from 'react';

import { Table } from '../../nindo/src/external/components/table';

export default {
  title: 'Editor/Table',
  component: Table,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },


}

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>Click Me</Table>
);

export const table = Template.bind({});
table.args = {
  headers: ['Hey', 'Beautiful', 'Table'],
  rows: [
    {
      cells: [
        {
          content: 'Cell 1'
        },
        {
          content: 'Cell 2'
        },
        {
          content: 'Cell 3'
        },
      ]
    },
    {
      cells: [
        {
          content: 'Cell 1'
        },
        {
          content: 'Cell 2'
        },
        {
          content: 'Cell 3'
        },
      ]
    },
    {
      cells: [
        {
          content: 'Cell 1'
        },
        {
          content: 'Cell 2'
        },
        {
          content: 'Cell 3'
        },
      ]
    }
  ]
}