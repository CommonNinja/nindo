import React, { ReactElement } from 'react';
import {
	SortableContainer,
	SortableElement,
	SortableHandle,
} from 'react-sortable-hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

import './sortableList.scss';

export const DragHandler = SortableHandle(() => (
	<span className="drag-handler" title="Move">
		<FontAwesomeIcon icon={faGripVertical} />
	</span>
));

export const SortableItem = SortableElement(
	({
		data,
		renderItem,
		sortIndex,
		index,
	}: {
		data: any;
		renderItem: (data: any, index: number) => ReactElement;
		sortIndex: number;
		index: number;
	}) => renderItem(data, sortIndex || index)
);

export const SortableList = SortableContainer(
	({
		items,
		renderItem,
	}: {
		items: any[];
		renderItem: (data: any, index: number) => ReactElement;
	}) => {
		return (
			<ul>
				{items?.map((data, index) => (
					<SortableItem
						key={`item-${data.id}`}
						index={index}
						sortIndex={index}
						data={data}
						renderItem={renderItem}
					/>
				))}
			</ul>
		);
	}
);
