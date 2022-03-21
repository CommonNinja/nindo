import { ComponentStory } from '@storybook/react';
import React from 'react';
import dedent from 'ts-dedent';

import { SortableList, DragHandler } from '../../nindo/src/external/components/sortableList';

export default {
  title: 'Editor/Sortable List',
  component: SortableList,
  parameters: {
    docs: {
      description: {
        component: dedent(
          `
          Use the \`<SortableList />\` component when you have a list of items you want to enable the user to sort (with drag & drop interface).

          The \`onSortEnd\` callback will return an object with two properties: \`oldIndex\` and \`newIndex\`. 
          Use both in order to reorder the relevant items array (using \`react-sortable-hoc\`).

          Here's an example:

          \`\`\`
          import { arrayMove } from 'react-sortable-hoc';

          function reorderItems({ oldIndex, newIndex }) {
            dispatch(itemsUpdated(arrayMove(items, oldIndex, newIndex)));
          }
          \`\`\`
          `
        ),
      },
    },
    backgrounds: {
      default: 'blue',
    },
  },
};

const Template: ComponentStory<typeof SortableList> = (args) => {
  return (
    <SortableList {...args} />
  );
};

export const Sortable_List = Template.bind({});
Sortable_List.args = {
  items: [1, 2, 3],
  renderItem: (n) => (
    <div style={{
      width: '100px',
      backgroundColor: 'rgba(255,255,255,0.05)',
      margin: '0 0 10px',
      padding: '10px'
    }}><DragHandler />{n}</div>
  ),
  onSortEnd: () => { },
  axis: 'y',
  lockAxis: 'y',
  helperClass: 'floating-item',
  useDragHandle: true,
  onSortStart: () => { }
}