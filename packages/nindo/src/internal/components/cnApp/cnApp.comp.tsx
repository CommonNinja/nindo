import React, { ReactElement } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	RouteProps,
} from 'react-router-dom';
import { PreviewPage } from '../previewPage/previewPage.comp';
import { IExtraRouteProps } from '../../../external/types/app.types';
import { AppNotifications } from '../appNotifications/appNotifications.comp';

import './cnApp.scss';

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

export const CNApp = (props: {
	editorComp: ReactElement;
	previewComp: ReactElement;
	viewerComp: ReactElement;
	galleryPageComp: ReactElement;
	extraRoutes?: IExtraRouteProps[];
	defaultRoutePath?: string;
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

	const {
		extraRoutes = [],
		defaultRoutePath,
		editorComp,
		galleryPageComp,
		previewComp,
		viewerComp,
	} = props;
	const routes: RouteProps[] = [
		// Editor
		{
			exact: true,
			path: `/${pluginPath}/editor/preview`,
			render: (routeProps) => (
				<PreviewPage {...routeProps}>{previewComp}</PreviewPage>
			),
		},
		{
			exact: true,
			path: `/${pluginPath}/editor/:page`,
			render: (routeProps) => React.cloneElement(editorComp, routeProps),
		},
		{
			exact: true,
			path: `/${pluginPath}/editor/:page/:pluginId`,
			render: (routeProps) => React.cloneElement(editorComp, routeProps),
		},
		// Viewer
		{
			exact: true,
			path: `/${pluginPath}/viewer`,
			render: (routeProps) => React.cloneElement(viewerComp, routeProps),
		},
		{
			exact: true,
			path: `/${pluginPath}/viewer/:pluginId`,
			render: (routeProps) => React.cloneElement(viewerComp, routeProps),
		},
		// Gallery Page
		{
			exact: true,
			path: `/${pluginPath}/lp/:galleryId`,
			render: (routeProps) => React.cloneElement(galleryPageComp, routeProps),
		},
		// Vendors
		{
			exact: true,
			path: `/${pluginPath}/v/:vendor/viewer`,
			render: (routeProps) => React.cloneElement(viewerComp, routeProps),
		},
		{
			exact: true,
			path: `/${pluginPath}/v/:vendor/viewer/:pluginId`,
			render: (routeProps) => React.cloneElement(viewerComp, routeProps),
		},
		{
			exact: true,
			path: `/${pluginPath}/v/:vendor/:page`,
			render: (routeProps) => React.cloneElement(editorComp, routeProps),
		},
		{
			exact: true,
			path: `/${pluginPath}/v/:vendor/:page/:pluginId`,
			render: (routeProps) => React.cloneElement(editorComp, routeProps),
		},
		// Extra routes
		...extraRoutes.map((extraRoute) => {
			if (extraRoute.pageType === 'viewer') {
				extraRoute.render = (routeProps) =>
					React.cloneElement(viewerComp, routeProps);
			} else if (extraRoute.pageType === 'editor') {
				extraRoute.render = (routeProps) =>
					React.cloneElement(editorComp, routeProps);
			} else if (extraRoute.pageType === 'gallery') {
				extraRoute.render = (routeProps) =>
					React.cloneElement(galleryPageComp, routeProps);
			}
			return extraRoute;
		}),
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
							/>
						);
					})}

					<Redirect
						from={`/${pluginPath}/v/:vendor`}
						to={`/${pluginPath}/v/:vendor/content`}
					/>
					<Redirect
						from={`/${pluginPath}/editor`}
						to={`/${pluginPath}/editor/content`}
					/>
					<Redirect
						from="/"
						to={
							defaultRoutePath
								? !defaultRoutePath.startsWith(`/${pluginPath}`)
									? `/${pluginPath}/${defaultRoutePath.replace(/^\//g, '')}`
									: defaultRoutePath
								: `/${pluginPath}/editor/view`
						}
					/>
				</Switch>
			</Router>
			<AppNotifications />
		</div>
	);
};
