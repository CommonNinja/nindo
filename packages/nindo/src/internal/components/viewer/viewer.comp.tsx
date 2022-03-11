import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { IViewerProps } from '../../../external/types/viewer.types';
import {
	IPluginComp,
	IPluginLoaderComp,
} from '../../../external/types/plugin.types';
import { PluginLoader } from '../pluginLoader/pluginLoader.comp';
import { PluginWrapper } from '../pluginWrapper/pluginWrapper.comp';
import { contextUpdated } from '../../actions/pluginContext.actions';

import './viewer.scss';

export const Viewer = (props: {
	pluginComp: IPluginComp;
	pluginLoaderComp?: IPluginLoaderComp;
}) => {
	const dispatch = useDispatch();
	const match = useRouteMatch();
	const { pluginId, vendor } = match.params as any;
	const { pluginComp, pluginLoaderComp, ...otherProps } = props;

	useEffect(() => {
		// Updating plugin context
		dispatch(
			contextUpdated({
				instanceId: pluginId,
				mode: 'viewer',
				platform: vendor,
			})
		);
	}, []);

	return (
		<div
			id="viewer"
			className={
				(otherProps as IViewerProps<any>)?.viewerSettings?.inlineElm
					? 'inline'
					: ''
			}
		>
			<PluginLoader
				pluginComp={<PluginWrapper pluginComp={pluginComp} />}
				pluginLoaderComp={pluginLoaderComp}
				vendor={vendor}
				{...otherProps}
			/>
		</div>
	);
};
