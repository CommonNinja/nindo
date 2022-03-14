import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	IAppState,
	IPluginComp,
	IPluginLoaderComp,
	IUser,
} from '../../../external/types';
import { AppHeader } from '../appHeader/appHeader.comp';
import { PluginLoader } from '../pluginLoader/pluginLoader.comp';
import { PluginWrapper } from '../pluginWrapper/pluginWrapper.comp';
import * as userActions from '../../actions/user.actions';
import { contextUpdated } from '../../actions/context.actions';

import './galleryPage.scss';

export const GalleryPage = (props: {
	pluginComp: IPluginComp;
	pluginLoaderComp?: IPluginLoaderComp;
}) => {
	const { user } = useSelector((state: IAppState<any>) => ({
		user: state.user,
	}));
	const dispatch = useDispatch();
	const { pluginComp, pluginLoaderComp, ...otherProps } = props;

	useEffect(() => {
		// Updating plugin context
		dispatch(
			contextUpdated({
				instanceId: '',
				mode: 'viewer',
			})
		);
	}, []);

	return (
		<>
			<AppHeader
				componentName="Common Ninja"
				anonymousUser={false}
				userProps={{
					user,
					postLoginCallback: (user: IUser) => {
						dispatch(userActions.loggedIn(user));
					},
					postLogoutCallback: () => {
						dispatch(userActions.logout());
					},
				}}
			/>
			<div className="gallery-page">
				<PluginLoader
					pluginComp={<PluginWrapper pluginComp={pluginComp} />}
					pluginLoaderComp={pluginLoaderComp}
					{...otherProps}
				/>
			</div>
		</>
	);
};
