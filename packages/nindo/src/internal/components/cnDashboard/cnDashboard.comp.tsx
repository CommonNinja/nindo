import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SystemIcon } from '../../../external/components/icon/icon.comp';
import { Popup } from '../../../external/components/popup/popup.comp';
import { H2 } from '../heading/heading.comp';
import { IPlugin } from '../../../external/types/plugin.types';
import {
	IPluginListing,
	pluginsList,
} from '../../../external/types/component.types';
import { TComponentType } from '../../../external/types/component.types';
import { HttpService } from '../../../external/services/http.service';
import { TPlatform } from '../../../external/types/editor.types';
import { useQuery } from '../../../external/hooks/query.hook';
import { notificationHelper } from '../../../external/helpers/notification.helper';

import './cnDashboard.scss';

export const getDashboardActionUrl = (
	component: IPlugin<any>,
	actionType: 'edit' | 'delete' | 'duplicate',
	query: string,
	vendor: TPlatform
) => {
	const { type, guid = '' } = component;
	const meta: IPluginListing = pluginsList.filter((c) => c.name === type)[0];

	if (!meta) {
		return '';
	}

	switch (actionType) {
		case 'edit':
			return `/${meta.slug}/v/${vendor}/view/${guid}?${query}`;
		case 'duplicate':
			return `/api/v1/${vendor}/${meta.name}/${guid}/duplicate?serviceName=${meta.serviceName}&${query}`;
		case 'delete':
			return `/api/v1/${vendor}/${meta.name}/${guid}?serviceName=${meta.serviceName}&${query}`;
		default:
			return '';
	}
};

interface ICNDashboard {
	vendor: TPlatform;
	itemRenderer: any;
	loaderRenderer: any;
	componentType: TComponentType;
	title?: string;
	postDeleteCallback?: (pluginId: string) => Promise<void>;
}

export const CNDashboard = ({
	vendor,
	componentType,
	itemRenderer,
	loaderRenderer,
	title,
	postDeleteCallback,
}: ICNDashboard) => {
	const httpService = new HttpService();
	const query = useQuery();
	const pluginDetails = pluginsList.filter((c) => c.name === componentType)[0];
	const [loading, setLoading] = useState<boolean>(false);
	const [localError, setLocalError] = useState<null | string>(null);
	const [activeState, setActiveState] = useState<{
		activeComponent: null | IPlugin<any>;
		activeModal: null | string;
	}>({
		activeComponent: null,
		activeModal: null,
	});
	const [searchState, setSearchState] = useState<any>({
		components: [],
		page: 1,
		totalPages: 0,
		totalComponents: 0,
		limit: 12,
		searchTerm: '',
	});

	function openModal(data: any, type: any) {
		setActiveState({
			activeComponent: data,
			activeModal: type,
		});
	}

	function onSubmit(e: any) {
		e.preventDefault();

		setSearchState({
			...searchState,
			page: 1,
			totalPages: 0,
			totalComponents: 0,
		});

		loadItems();
	}

	async function deleteComponent() {
		const { activeComponent } = activeState;

		if (!activeComponent) {
			return;
		}

		const actionUrl = getDashboardActionUrl(
			activeComponent,
			'delete',
			query.toString(),
			vendor
		);
		if (!actionUrl) {
			return;
		}

		setSearchState({
			...searchState,
			loading: true,
		});
		setActiveState({
			activeComponent: null,
			activeModal: null,
		});

		let localError = null;

		try {
			const req = await fetch(actionUrl, {
				method: 'delete',
				credentials: 'include',
			});
			const componentsRes = await req.json();

			if (componentsRes.success) {
				loadItems();
				await postDeleteCallback?.(activeComponent.guid || '');
				return;
			}

			localError = componentsRes.message || 'Could not delete app';
		} catch (e) {
			localError = 'Could not delete app';
		}

		if (localError) {
			notificationHelper.error({
				message: localError,
				autoDismiss: 5,
				position: 'tc',
			});
		}

		setSearchState({
			...searchState,
			loading: false,
		});
	}

	async function duplicateComponent() {
		const { activeComponent } = activeState;

		if (!activeComponent) {
			return;
		}

		const actionUrl = getDashboardActionUrl(
			activeComponent,
			'duplicate',
			query.toString(),
			vendor
		);
		if (!actionUrl) {
			return;
		}

		setSearchState({
			...searchState,
			loading: true,
		});
		setActiveState({
			activeComponent: null,
			activeModal: null,
		});

		let localError = null;

		try {
			const req = await fetch(actionUrl, {
				method: 'post',
				credentials: 'include',
			});
			const componentsRes = await req.json();

			if (componentsRes.success) {
				loadItems();
				return;
			}

			localError = componentsRes.message || 'Could not duplicate app';
		} catch (e) {
			localError = 'Could not duplicate app';
		}

		if (localError) {
			notificationHelper.error({
				message: localError,
				autoDismiss: 5,
				position: 'tc',
			});
		}

		setSearchState({
			...searchState,
			loading: false,
		});
		setActiveState({
			activeComponent: null,
			activeModal: null,
		});
	}

	async function loadItems() {
		setLoading(true);
		setLocalError(null);
		setSearchState({
			...searchState,
			components: [],
		});

		try {
			const qs = `page=${searchState.page}&limit=${searchState.limit}&search=${
				searchState.searchTerm
			}&${query.toString()}`;
			let url = `/${vendor}/api/instances/${componentType}?${qs}`;
			if (query.get('nindo')) {
				url = `/nindo/api/instances/${componentType}?${qs}`;
			}
			const result = await httpService.makeRequest(url);

			if (!result.success || !result.data?.docs) {
				throw new Error(result.message || 'Could not load items.');
			}

			setSearchState({
				...searchState,
				components: result.data.docs,
				page: result.data.page,
				totalPages: result.data.pages,
				totalComponents: result.data.total,
			});
		} catch (e) {
			setLocalError((e as Error).message);
		}

		setLoading(false);
	}

	useEffect(() => {
		loadItems();
		// eslint-disable-next-line
	}, []);

	function renderLoader() {
		return (
			<div className="components-wrapper">
				{Array.from(new Array(9)).map((c, idx) =>
					React.cloneElement(loaderRenderer(), { key: `comp_skel_${idx}` })
				)}
			</div>
		);
	}

	function renderBody() {
		if (localError) {
			return <div className="no-results center">{localError}</div>;
		}

		if (searchState.totalComponents <= 0) {
			return (
				<div className="no-results center">
					<p>
						It looks like you haven't created any {pluginDetails.displayName}{' '}
						yet.
					</p>
					<div className="buttons-wrapper">
						<a
							className="btn major"
							href={getDashboardActionUrl(
								{ type: componentType } as IPlugin<any>,
								'edit',
								query.toString(),
								vendor
							)}
							rel="noopener noreferrer"
						>
							+ {pluginDetails.buttonText}
						</a>
					</div>
				</div>
			);
		}

		return (
			<>
				<h4>
					Showing <strong>{searchState.totalComponents}</strong> result
					{searchState.totalComponents > 1 ? 's' : ''} (Page {searchState.page}/
					{searchState.totalPages})
				</h4>
				<div className="components-wrapper">
					{searchState.components.map((component: any) =>
						React.cloneElement(itemRenderer(), {
							key: `component_${component.guid}`,
							data: component,
							userRole: component.permissions[0].role,
							deleteClick: (data: any) => openModal(data, 'delete'),
							duplicateClick: (data: any) => openModal(data, 'duplicate'),
						})
					)}
				</div>
				<div className="pagination">
					{searchState.page > 1 && (
						<Link
							to={`/${vendor}/dashboard/${componentType}?search=${
								searchState.searchTerm
							}&type=${searchState.searchType}&page=${searchState.page - 1}`}
							onClick={() =>
								setSearchState({
									...searchState,
									page: searchState.page - 1,
								})
							}
						>
							<SystemIcon type="arrow-left" />
							<span>Previous</span>
						</Link>
					)}
					Page {searchState.page} out of {searchState.totalPages}
					{searchState.page < searchState.totalPages && (
						<Link
							to={`/${vendor}/dashboard/${componentType}?search=${
								searchState.searchTerm
							}&type=${searchState.searchType}&page=${searchState.page + 1}`}
							onClick={() =>
								setSearchState({
									...searchState,
									page: searchState.page + 1,
								})
							}
						>
							<span>Next</span>
							<SystemIcon type="arrow-right" />
						</Link>
					)}
				</div>
				<div className="no-results center">
					<div className="buttons-wrapper">
						<a
							className="btn major"
							href={getDashboardActionUrl(
								{ type: componentType } as IPlugin<any>,
								'edit',
								query.toString(),
								vendor
							)}
							rel="noopener noreferrer"
						>
							+ {pluginDetails.buttonText}
						</a>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="cn-dashboard">
				<header>
					<hgroup className="page-titles">{title && <H2>{title}</H2>}</hgroup>
					<form className="search-components" onSubmit={onSubmit}>
						<input
							placeholder="Search by name..."
							type="text"
							onChange={(e) =>
								setSearchState({
									...searchState,
									searchTerm: e.target.value,
								})
							}
						/>
						<button className="btn major">Search</button>
					</form>
				</header>
				{loading ? renderLoader() : renderBody()}
			</div>
			{activeState.activeComponent && activeState.activeModal && (
				<>
					<Popup
						closeCallback={() =>
							setActiveState({ activeComponent: null, activeModal: null })
						}
						show={activeState.activeModal === 'duplicate'}
						className="duplicate-popup"
					>
						<h2>Duplicate App</h2>
						<div className="content">
							<p>
								Are you sure you want to duplicate the app "
								<strong>{activeState.activeComponent.name}</strong>"?
							</p>
							<div className="buttons-wrapper center">
								<button
									className="btn"
									onClick={() =>
										setActiveState({
											activeComponent: null,
											activeModal: null,
										})
									}
								>
									Close
								</button>
								<button className="btn green" onClick={duplicateComponent}>
									Duplicate
								</button>
							</div>
						</div>
					</Popup>
					<Popup
						closeCallback={() =>
							setActiveState({ activeComponent: null, activeModal: null })
						}
						show={activeState.activeModal === 'delete'}
						className="delete-popup"
					>
						<h2>Delete App</h2>
						<div className="content">
							<p>
								Are you completely sure you want to delete "
								<strong>{activeState.activeComponent.name}</strong>"?
							</p>
							<p>
								Note that <strong>this action is irreversible</strong>.
							</p>
							<div className="buttons-wrapper center">
								<button
									className="btn"
									onClick={() =>
										setActiveState({
											activeComponent: null,
											activeModal: null,
										})
									}
								>
									Close
								</button>
								<button className="btn red" onClick={deleteComponent}>
									Delete
								</button>
							</div>
						</div>
					</Popup>
				</>
			)}
		</>
	);
};
