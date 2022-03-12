import React, { ReactElement } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	RouteProps,
	RouteComponentProps,
} from 'react-router-dom';
import { AppNotifications } from '../appNotifications/appNotifications.comp';
import { IAppMainPage } from '../../../external/types/backofficeApp.types';

import './cnApp.scss';
import { CNBackofficeEditor } from '..';

const {
	REACT_APP_NINJA_SERVICE_NAME = 'appninja',
	REACT_APP_NINJA_PLUGIN_TYPE = 'app_name',
	REACT_APP_NINJA_PLUGIN_PATH = 'app-name',
	REACT_APP_NINJA_PLUGIN_NAME = 'My app',
	NODE_ENV,
} = process.env;
const basename = '';
const pluginPath = REACT_APP_NINJA_PLUGIN_PATH || 'YOUR_PLUGIN_PATH';
const env = NODE_ENV === 'production' ? 'prod' : 'dev';

export const CNBackofficeApp = (config: {
	pages: IAppMainPage[];
	loaderComp?: ReactElement;
}) => {
	if (
		!REACT_APP_NINJA_SERVICE_NAME ||
		!REACT_APP_NINJA_PLUGIN_TYPE ||
		!REACT_APP_NINJA_PLUGIN_PATH
	) {
		throw new Error(`
			One of the following ENV variable is missing:
			REACT_APP_NINJA_SERVICE_NAME
			REACT_APP_NINJA_PLUGIN_TYPE
			REACT_APP_NINJA_PLUGIN_PATH
		`);
	}
	const { pages = [], loaderComp } = config;
	const routes: RouteProps[] = [
		{
			exact: false,
			path: '/:page/:nestedPage?',
		},
		{
			exact: false,
			path: '/v/:vendor/:page/:nestedPage?',
		},
	];

	return (
		<div className="cn-app">
			<Router basename={basename}>
				<Switch>
					{routes.map((route, idx) => {
						const routePath: string = (route.path as string) || '';
						return (
							<Route
								{...route}
								path={
									!routePath.startsWith(`/${pluginPath}`)
										? `/${pluginPath}/${routePath.replace(/^\//g, '')}`
										: routePath
								}
								key={`route_${idx}`}
							>
								<CNBackofficeEditor pages={pages} loaderComp={loaderComp} />
							</Route>
						);
					})}
					<Redirect from="/" to={`/${pluginPath}/${pages[0]?.id}`} />
				</Switch>
			</Router>
			<AppNotifications />
		</div>
	);
};
