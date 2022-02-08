import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	RouteProps,
	Switch,
	useRouteMatch,
} from 'react-router-dom';
import {
	faDollarSign,
	faHandshake,
	faLifeRing,
	faTh,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppNotifications } from '../appNotifications/appNotifications.comp';
import { TPlatform } from '../../../external/types/editor.types';
import { AppHeader } from '../appHeader/appHeader.comp';
import { AppMenu } from '../appMenu/appMenu.comp';
import { IAppMenuLink } from '../../../external/types/appMenu.types';
import { pluginsList } from '../../../external/types/component.types';

import './cnVendorDashboardApp.scss';

const { NODE_ENV } = process.env;
const basename = '';
const env = NODE_ENV === 'production' ? 'prod' : 'dev';

const LocalAppMenu = ({
	menuLinks,
	vendor,
	includePricing,
}: {
	menuLinks: IAppMenuLink[];
	includePricing: boolean;
	vendor?: TPlatform;
}) => {
	const match = useRouteMatch();
	const { params } = match as any;
	let componentType =
		params.componentType ||
		(window?.location?.href || '').split('?')[0].match(/([^\/]*)\/*$/)?.[1] ||
		'';
	const pluginDetails = pluginsList.filter((c) => c.name === componentType)[0];

	function getMenuLinks() {
		const routePrefix = vendor ? `${vendor}/` : '';
		const links: IAppMenuLink[] = [
			{
				name: 'Dashboard',
				url: `/${routePrefix}dashboard/${componentType}`,
				exact: true,
				icon: faTh,
			},
		];

		if (includePricing) {
			links.push({
				name: 'Pricing',
				url: `/${routePrefix}pricing/${componentType}`,
				exact: true,
				icon: faDollarSign,
			});
		}

		return [
			...links,
			...menuLinks.map((link) => {
				if (!link.url.startsWith(`/${vendor}`)) {
					link.url = `/${vendor}/${link.url.replace(/^\//g, '')}`;
				}
				return link;
			}),
		];
	}

	return (
		<AppMenu links={getMenuLinks()}>
			<>
				<hr />
				<a
					href={pluginDetails?.helpCenterLink || 'https://help.commoninja.com/'}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLifeRing} />
					<span>Support</span>
				</a>
				<a
					href="https://help.commoninja.com/hc/en-us/community/topics"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faHandshake} />
					<span>Community</span>
				</a>
			</>
		</AppMenu>
	);
};

export const CNVendorDashboardApp = (props: {
	dashboardComp: any;
	pricingComp?: any;
	menuLinks?: IAppMenuLink[];
	vendor?: TPlatform;
	extraRoutes?: RouteProps[];
	defaultRoutePath?: string;
}) => {
	const { vendor, extraRoutes, dashboardComp, pricingComp } = props;
	const routePrefix = vendor ? `${vendor}/` : '';
	const routes: RouteProps[] = [
		{
			exact: true,
			path: `/${routePrefix}dashboard/:componentType`,
			render: (routeProps) => React.cloneElement(dashboardComp, routeProps),
		},
	];

	if (pricingComp) {
		routes.push({
			exact: true,
			path: `/${routePrefix}pricing/:componentType`,
			render: (routeProps) => React.cloneElement(pricingComp, routeProps),
		});
	}

	const allRoutes = [...routes, ...(extraRoutes || [])];

	return (
		<div className="app">
			<Router basename={basename}>
				<div id="cn-vendor-dashboard">
					<AppHeader
						componentName="Dashboard"
						userProps={{
							user: {
								fullName: '',
								isAuthenticated: true,
								thumbnail: '',
							},
						}}
						anonymousUser={true}
						hidePoweredBy={true}
						logoUrl={window?.location?.href}
					/>
					<main className="main-content">
						<LocalAppMenu
							menuLinks={props.menuLinks || []}
							vendor={vendor}
							includePricing={!!pricingComp}
						/>
						<section className="main-section">
							<Switch>
								{allRoutes.map((route, idx) => {
									const routePath: string = (route.path as string) || '';
									return (
										<Route
											{...route}
											path={
												!routePath.startsWith(`/${vendor}`)
													? `/${vendor}/${routePath.replace(/^\//g, '')}`
													: routePath
											}
											key={`route_${idx}`}
										/>
									);
								})}
							</Switch>
						</section>
					</main>
				</div>
			</Router>
			<AppNotifications />
		</div>
	);
};
