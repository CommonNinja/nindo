import React, { ReactElement } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	RouteProps,
} from 'react-router-dom';
import { AppNotifications } from '../appNotifications/appNotifications.comp';
import { IBackofficeAppConfig } from '../../../external/types/backofficeApp.types';
import { CNBackofficeEditor } from '../../components/cnEditor/backofficeEditor.comp';
import { useAppConfig } from '../../../external/hooks/appConfig.hook';

import './cnApp.scss';

const {
	REACT_APP_NINJA_SERVICE_NAME = 'appninja',
	REACT_APP_NINJA_PLUGIN_TYPE = 'app_name',
	REACT_APP_NINJA_PLUGIN_PATH = 'app-name',
	NODE_ENV,
} = process.env;
const basename = '';
const pluginPath = REACT_APP_NINJA_PLUGIN_PATH || 'YOUR_PLUGIN_PATH';
const env = NODE_ENV === 'production' ? 'prod' : 'dev';

export const CNBackofficeApp = () => {
	const config = useAppConfig<IBackofficeAppConfig>();

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
	const { pages = [], loaderComponent: loaderComp } = config;
	const routes: RouteProps[] = [
		{
			exact: true,
			path: '/v/:vendor/:page/:nestedPage?',
		},
		{
			exact: true,
			path: '/:page/:nestedPage?',
		},
	];

	return (
		<div className="cn-app">
			<Router basename={basename}>
				<Switch>
					{routes.map((route, idx) => {
						const routePath: string = (route.path as string) || '';
						const finalPath: string = !routePath.startsWith(`/${pluginPath}`)
							? `/${pluginPath}/${routePath.replace(/^\//g, '')}`
							: routePath;
						return (
							<Route {...route} path={finalPath} key={`route_${idx}`}>
								<CNBackofficeEditor
									pages={pages}
									loaderComp={loaderComp}
								/>
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
