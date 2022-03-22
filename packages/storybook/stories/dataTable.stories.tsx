import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataTable } from '../../nindo/src/external/components/dataTable';

export default {
  title: 'Editor/Data Table',
  component: DataTable,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable  {...args} />
);

export const dataTable = Template.bind({});

dataTable.args = {
  headers: ['Hey', 'Beautiful', 'Data Table'],
  rows: [['I', 'Hello', 400], ['AM', 'There', 200], ['BATMAN', ':)', 1000], ['cell', 'cell', 100], ['cell', 'cell', 50], ['cell', 'cell', 1400], ['cell', 'cell', 900], ['cell', 'cell', 500], ['cell', 'cell', 50], ['cell', 'cell', 10], ['cell', 'cell', 2000], ['cell', 'cell', 1800]],
  pageSize: 3
};
