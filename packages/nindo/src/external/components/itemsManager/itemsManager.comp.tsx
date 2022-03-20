import {
	faGripVertical,
	faPlus,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { arrayMove } from 'react-sortable-hoc';

import { TChildren } from '../../types/plugin.types';
import { notificationHelper } from '../../helpers/notification.helper';
import { AddItemButton } from '../addItemButton/addItemButton.comp';
import { Button } from '../button/button.comp';
import { ContextMenuSection } from '../contextMenuSection/contextMenuSection.comp';
import { FormRow } from '../formRow/formRow.comp';
import { PremiumOpener } from '../premiumOpener/premiumOpener.comp';
import { DragHandler, SortableList } from '../sortableList/sortableList.comp';
import { Panel } from '../panel/panel.comp';

import './itemsManager.scss';

interface IItemsManagerProps<T> {
	items: T[];
	newItemGenerator: () => Partial<T>;
	itemRenderer: (item: T, idx: number) => TChildren;
	titleRenderer: (item: T, idx: number) => TChildren;
	onUpdate: (updatedItems: T[]) => void;
	onItemToggle?: (item: T, isOpened: boolean, itemIdx: number) => void;
	onItemMouseEnter?: (item: T, itemIdx: number) => void;
	onItemMouseLeave?: (item: T, itemIdx: number) => void;
	maxItems?: number;
	minItems?: number;
	newItemPlacement?: 'first' | 'last';
	searchFilter?: (item: T, query: string) => boolean;
	searchable?: boolean;
	sortable?: boolean;
	extraActionsComp?: TChildren;
	addItemText?: string;
	itemsText?: string;
}

export const ItemsManager = <T extends { id: string }>({
	items,
	newItemGenerator,
	itemRenderer,
	titleRenderer,
	searchFilter,
	onUpdate,
	onItemToggle,
	onItemMouseEnter,
	onItemMouseLeave,
	maxItems,
	minItems,
	extraActionsComp,
	searchable = true,
	sortable = true,
	addItemText = 'Add Item',
	itemsText = 'items',
	newItemPlacement = 'last',
}: IItemsManagerProps<T>) => {
	const [search, setSearch] = useState<string>('');
	const trimmedSearch = search.toLowerCase().trim();
	const filteredItems = items?.filter(filterBySearch);

	function filterBySearch(item: T): boolean {
		if (!searchable || !searchFilter) {
			return true;
		}

		if (!trimmedSearch) {
			return true;
		}

		if (searchFilter(item, trimmedSearch)) {
			return true;
		}

		return false;
	}

	function removeItem(e: any, itemId: string) {
		e.preventDefault();
		e.stopPropagation();

		const nextItems = items?.filter((a) => a.id !== itemId);
		if (minItems && nextItems?.length < minItems) {
			notificationHelper.removeAll();
			notificationHelper.warning({
				title: `Sorry, but the minimum number of ${itemsText} is ${minItems}.`,
				position: 'tc',
				autoDismiss: 4,
			});
			return;
		}

		setSearch('');
		onUpdate(nextItems);
	}

	function reorderItems({
		oldIndex,
		newIndex,
	}: {
		oldIndex: number;
		newIndex: number;
	}) {
		const nextItems = arrayMove(items, oldIndex, newIndex);
		onUpdate(nextItems);
	}

	function addItem() {
		if (maxItems && items?.length + 1 > maxItems) {
			notificationHelper.removeAll();
			notificationHelper.warning({
				title: '✭ You reached the maximum',
				message: `Your current premium plan doesn't allow you to add more than ${maxItems} ${itemsText}.`,
				children: <PremiumOpener>Upgrade your account now!</PremiumOpener>,
				position: 'tc',
				autoDismiss: 4,
			});
			return;
		}

		setSearch('');

		const newItem = {
			id: uuidv4(),
			...newItemGenerator(),
		};

		const nextItems =
			newItemPlacement === 'last' ? [...items, newItem] : [newItem, ...items];

		onUpdate(nextItems as T[]);

		window.setTimeout(() => {
			const contentPanel: any = document.querySelector(
				`.content-settings .panel:${newItemPlacement}-child header`
			);
			contentPanel?.click();
		}, 50);
	}

	function renderDragHandler() {
		if (!sortable) {
			return <></>;
		}

		if (!trimmedSearch) {
			return <DragHandler />;
		}

		return (
			<span
				className="drag-handler disabled"
				title="Not available in search mode"
			>
				<FontAwesomeIcon icon={faGripVertical} />
			</span>
		);
	}

	function renderItem(item: T, idx: number) {
		return (
			<Panel
				key={`item_setting_${item.id}`}
				panelProps={{
					onMouseEnter: () => {
						onItemMouseEnter?.(item, idx);
					},
					onMouseLeave: () => {
						onItemMouseLeave?.(item, idx);
					},
				}}
				titleComponent={
					<div>
						{renderDragHandler()}
						<span className="item-title">{titleRenderer(item, idx)}</span>
						<div className="actions">
							{extraActionsComp && extraActionsComp}
							<FontAwesomeIcon
								icon={faTrash}
								title="Delete"
								onClick={(e) => removeItem(e, item.id)}
							/>
						</div>
					</div>
				}
				onToggle={(isActive: boolean) => {
					onItemToggle?.(item, isActive, idx);
				}}
			>
				{itemRenderer(item, idx)}
			</Panel>
		);
	}

	return (
		<div className="items-manager">
			{searchable && (
				<FormRow className="context-nav">
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value || '')}
					/>
					<Button color="green" title={addItemText} onClick={() => addItem()}>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
				</FormRow>
			)}
			<ContextMenuSection>
				{filteredItems?.length === 0 ? (
					<p className="center message">No {itemsText} found.</p>
				) : (
					<SortableList
						items={filteredItems}
						renderItem={renderItem}
						onSortEnd={reorderItems}
						axis="y"
						lockAxis="y"
						helperClass="floating-item"
						useDragHandle={true}
					/>
				)}
				<AddItemButton onClick={() => addItem()} title={addItemText} />
			</ContextMenuSection>
		</div>
	);
};
