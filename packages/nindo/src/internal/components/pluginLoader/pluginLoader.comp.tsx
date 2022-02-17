import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useResizeDetector } from 'react-resize-detector';

import {
	pluginService,
	eventService,
	wixService,
	localStorageService,
} from '../../services';
import { IHttpResult } from '../../../external/types/http.types';
import { gotPluginData } from '../../actions/plugin.actions';
import {
	IPlugin,
	IPluginLoaderComp,
	TChildren,
} from '../../../external/types/plugin.types';
import { PluginSkeleton } from '../../../external/components/pluginSkeleton/pluginSkeleton.comp';
import { eventHelper } from '../../../external/helpers/event.helper';
import { TPlatform } from '../../../external/types/editor.types';
import { IViewerProps } from '../../../external/types/viewer.types';
import { pluginContextUpdated } from '../../actions/pluginContext.actions';

export interface IPluginLoader<T> extends IViewerProps<T> {
	pluginComp: TChildren;
	pluginLoaderComp?: IPluginLoaderComp;
	vendor?: TPlatform;
}

let eventsReported = false;
let dataRefreshTimer: any = null;

export const PluginLoader = ({
	pluginComp,
	pluginLoaderComp,
	vendor,
	muteEvents,
	postGetDataProcess = (data) => data,
	onLoad,
	dataRefreshTTL,
	viewerSettings,
}: IPluginLoader<any>) => {
	const dispatch = useDispatch();
	const plugin = useSelector((state: any) => state.plugin);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');
	const match = useRouteMatch();
	const { pluginId, galleryId } = match.params as any;
	const {
		inlineElm = false,
		viewerSelector = '#viewer',
		minHeight = 0,
		minWidth = 0,
		maxHeight = 0,
		maxWidth = 0,
		ignoreFrameResize = false,
		onFrameResize = () => {},
	} = viewerSettings || {};

	function handleResize() {
		const elm = document.querySelector(viewerSelector);
		if (!elm) {
			return;
		}

		const { width, height } = elm.getBoundingClientRect();
		let finalHeight = height > minHeight ? height : minHeight;
		let finalWidth = width > minWidth ? width : minWidth;

		if (maxHeight > 0 && finalHeight > maxHeight) {
			finalHeight = maxHeight;
		}

		if (maxWidth > 0 && finalWidth > maxWidth) {
			finalWidth = maxWidth;
		}

		onFrameResize?.(finalWidth, finalHeight);

		if (ignoreFrameResize) {
			return;
		}

		// Set wix widget height only if app height is smaller than window height
		if (vendor === 'wix' && typeof window?.Wix !== 'undefined') {
			window?.Wix.setHeight(finalHeight);
		}

		eventService.postEventToParent('COMMONNINJA_DIMENSIONS_UPDATE', pluginId, {
			height: finalHeight,
			width: inlineElm ? finalWidth : null,
		});
	}

	const onResize = useCallback(handleResize, [
		viewerSelector,
		minHeight,
		minWidth,
		maxHeight,
		maxWidth,
		ignoreFrameResize,
		inlineElm,
		onFrameResize,
		vendor,
		pluginId,
	]);
	const { ref } = useResizeDetector({
		refreshMode: 'debounce',
		refreshRate: 50,
		onResize,
	});

	function autoRefresh() {
		if (!dataRefreshTTL || dataRefreshTTL < 1000) {
			return;
		}

		if (dataRefreshTimer) {
			clearTimeout(dataRefreshTimer);
		}

		dataRefreshTimer = setTimeout(() => {
			getData(true);
		}, dataRefreshTTL);
	}

	async function wixDataUpdated(data: any) {
		const pluginData: IPlugin<any> = data.message.pluginData;

		if (!pluginData || !pluginData.data) {
			return;
		}

		const finalPluginData = await postGetDataProcess(pluginData);

		dispatch(gotPluginData(finalPluginData));
	}

	async function getData(fromAutoRefresh: boolean) {
		setError('');
		setLoading(!fromAutoRefresh);

		try {
			let result: IHttpResult = { success: false };
			if (vendor === 'wix') {
				result = await wixService.get();
			} else {
				if (pluginId) {
					result = await pluginService.get(pluginId);
				} else if (galleryId) {
					result = await pluginService.getByGalleryId(galleryId, true);
				} else {
					throw new Error('Plugin ID is not defined');
				}
			}

			if (!result || !result.success) {
				// For previewing default data (like on Wix editor)
				if (!pluginId && !galleryId) {
					setLoading(false);
					return;
				}
				throw new Error(result.message || 'Could not load plugin.');
			}

			const pluginData: IPlugin<any> = result.data;

			// Attach a plugin id to event helper if needed
			eventHelper.pluginId = pluginData.guid as string;
			localStorageService.pluginId = pluginData.guid as string;

			const finalPluginData = await postGetDataProcess(pluginData);

			// Set plugin for plugin global state
			dispatch(gotPluginData(finalPluginData));

			// Set plugin context
			dispatch(
				pluginContextUpdated({
					instanceId: finalPluginData.guid || '',
					mode: 'viewer',
				})
			);

			// Callback if exists
			await onLoad?.(finalPluginData);

			if (dataRefreshTTL) {
				autoRefresh();
			}

			if (!muteEvents && !eventsReported) {
				eventsReported = true;

				eventService.postEventToParent(
					'COMMONNINJA_PLUGIN_REQUESTED_DATA',
					pluginData.guid
				);

				// Report load event to parent
				eventService.postEventToParent(
					'COMMONNINJA_PLUGIN_LOADED',
					pluginData.guid
				);
			}
		} catch (e) {
			setError((e as Error).message);
		}

		setLoading(false);
	}

	useEffect(() => {
		getData(false);
		handleResize();
		// eslint-disable-next-line
	}, [galleryId, pluginId]);

	useEffect(() => {
		if (dataRefreshTTL) {
			autoRefresh();
		}
		// eslint-disable-next-line
	}, [dataRefreshTTL]);

	useEffect(() => {
		if (vendor === 'wix') {
			if (typeof window.Wix !== 'undefined') {
				window.Wix.addEventListener(
					window.Wix.Events.SETTINGS_UPDATED,
					wixDataUpdated
				);
			} else {
				window.setTimeout(() => {
					if (typeof window.Wix !== 'undefined') {
						window.Wix.addEventListener(
							window.Wix.Events.SETTINGS_UPDATED,
							wixDataUpdated
						);
					}
				}, 10000);
			}
		}
		return () => {
			if (dataRefreshTimer) {
				clearTimeout(dataRefreshTimer);
			}

			if (vendor === 'wix' && typeof window.Wix !== 'undefined') {
				window.Wix.removeEventListener(
					window.Wix.Events.SETTINGS_UPDATED,
					wixDataUpdated
				);
			}
		};
	}, []);

	function renderAppLoader() {
		const PluginLoaderComp = pluginLoaderComp || PluginSkeleton;
		return <PluginLoaderComp mode="viewer" />;
	}

	function renderBody() {
		if (error) {
			return <div className="loading-error">{error}</div>;
		}

		if (!plugin) {
			return <></>;
		}

		return pluginComp;
	}

	return <div ref={ref}>{loading ? renderAppLoader() : renderBody()}</div>;
};
