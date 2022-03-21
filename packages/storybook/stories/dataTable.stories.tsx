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
};
