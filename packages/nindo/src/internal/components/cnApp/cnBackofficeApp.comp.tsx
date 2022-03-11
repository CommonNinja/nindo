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

	const pageRenderer = (props: RouteComponentProps) => {
		const { page, nestedPage } = props.match.params as any;
		const pageData = pages.find((p) => p.id === page);
		let comp = <>Page is empty.</>;

		if (!pageData) {
			return <Redirect to="/" />;
		}

		if (!nestedPage && pageData.component) {
			comp = React.cloneElement(pageData.component, props);
		}

		if (!nestedPage && pageData.nestedRoutes?.[0]?.component) {
			comp = React.cloneElement(pageData.nestedRoutes[0].component, props);
		}

		const nestedPageData = pageData.nestedRoutes?.find(
			(p) => p.id === nestedPage
		);
		if (nestedPageData?.component) {
			comp = React.cloneElement(nestedPageData.component, props);
		}

		return (
			<CNBackofficeEditor pages={pages} loaderComp={loaderComp}>
				{comp}
			</CNBackofficeEditor>
		);
	};

	const routes: RouteProps[] = [
		{
			exact: true,
			path: '/:page',
			render: pageRenderer,
		},
		{
			exact: true,
			path: '/:page/:nestedPage',
			render: pageRenderer,
		},
		{
			exact: true,
			path: '/v/:vendor/:page',
			render: pageRenderer,
		},
		{
			exact: true,
			path: '/v/:vendor/:page/:nestedPage',
			render: pageRenderer,
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
							/>
						);
					})}
					<Redirect from="/" to={`/${pluginPath}/${pages[0]?.id}`} />
				</Switch>
			</Router>
			<AppNotifications />
		</div>
	);
};
