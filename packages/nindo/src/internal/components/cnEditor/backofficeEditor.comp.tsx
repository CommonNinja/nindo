import React, { useState, useEffect, ComponentType, ReactElement } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { IHttpResult } from '../../../external/types/http.types';
import { localStorageService, pluginService } from '../../services';
import {
	NinjaSkeletonTheme,
	NinjaSkeleton,
} from '../../../external/components/skeleton/skeleton.comp';
import { AppHeader } from '../appHeader/appHeader.comp';
import * as userActions from '../../actions/user.actions';
import { AppMenu } from '../appMenu/appMenu.comp';
import { ContextMenu } from '../contextMenu/contextMenu.comp';
import {
	// gotPluginData,
	getPlanFeatures, gotPluginData,
} from '../../actions/plugin.actions';
import { IUser } from '../../../external/types/user.types';
import { IAppState, IPlugin, TPlatform } from '../../../external/types';
import { useQuery } from '../../../external/hooks/query.hook';
import { VendorUpgradePopup } from '../vendorUpgradePopup/vendorUpgradePopup.comp';
import { premiumHelper } from '../../../external/helpers';
import { contextUpdated } from '../../actions/context.actions';
import { IAppMainPage } from '../../../external/types/backofficeApp.types';
import { ICNBackofficeEditor } from './backofficeEditor.types';
import { historyChange } from '../../actions/history.actions';

import './cnEditor.scss';

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const pluginPath =
	process.env.REACT_APP_NINJA_PLUGIN_PATH || 'YOUR_PLUGIN_PATH';
const pluginTitle = process.env.REACT_APP_NINJA_PLUGIN_TITLE || 'App Name';

export const CNBackofficeEditor = ({
	pages,
	loaderComp,
	defaultPluginData,
	postGetDataProcess = (data: IPlugin<any>) => data,
}: ICNBackofficeEditor<any>) => {
	const query = useQuery();
	const dispatch = useDispatch();
	const { params } = useRouteMatch();
	const instanceId = query.get('instanceId') || '';
	const { page, nestedPage, vendor } = params as any;
	const { isSaved, appData, user } = useSelector(
		(state: IAppState<any>) => ({
			isSaved: state.editor.isSaved,
			appData: state.plugin.data,
			user: state.user,
		})
	);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [activeVendorUpgradePopup, setActiveVendorUpgradePopup] =
		useState<null | TPlatform>(null);
	const [activePage, setActivePage] = useState<IAppMainPage | undefined>(
		pages.find((p) => p.id === page)
	);
	const vendorPath = vendor ? `v/${vendor}/` : '';
	const pathPrefix = `${pluginPath}${vendorPath}`;

	async function getData() {
		setLoading(true);
		setError('');

		try {
			const result = await pluginService.getForEditor(
				instanceId,
				defaultPluginData,
				vendor
			);

			if (!result || !result.success) {
				throw new Error(result.message || 'Could not load plugin.');
			}

			const pluginData: IPlugin<any> = await postGetDataProcess(result.data);

			// Set plugin ID for local storage
			localStorageService.pluginId = pluginData.guid as string;

			// Set plugin for plugin global state
			dispatch(gotPluginData(pluginData));
			dispatch(historyChange(pluginData, true));
		} catch (e) {
			setError((e as Error).message);
		}

		setLoading(false);
	}

	function getPageComponent() {
		const pageData = pages.find((p) => p.id === page);

		if (!pageData) {
			return <>Page is empty.</>;
		}

		if (!nestedPage && pageData.component) {
			return pageData.component;
		} 
		
		if (!nestedPage && pageData.nestedRoutes?.[0]?.component) {
			return pageData.nestedRoutes[0].component;
		}
		
		const nestedPageData = pageData.nestedRoutes?.find(
			(p) => p.id === nestedPage
		);
		
		if (nestedPageData?.component) {
			return nestedPageData.component;
		}

		return <>Page is empty.</>;
	}

	function getMenuLinks() {
		const links = pages.map((page) => ({
			name: page.name || page.id,
			url: `/${pathPrefix}/${page.id}`,
			icon: page.icon,
			exact: false,
		}));

		return links;
	}

	function loadJSSdk(scriptId: string, url: string | null) {
		if (!url) {
			return;
		}

		const existingScript = document.getElementById(scriptId);

		if (!existingScript) {
			const script = document.createElement('script');
			script.src = url;
			script.id = scriptId;
			document.body.appendChild(script);
		}
	}

	function getVendorCallbackOnUpgradeClick() {
		if (vendor === 'duda') {
			const appId = process.env.REACT_APP_DUDA_APP_ID;

			return (window as any)._dAPI?.upgrade({
				type: 'upgradeApp',
				appId,
			});
		} else if (vendor === 'wix') {
			return (window as any).Wix?.Settings.openBillingPage();
		} else if (vendor === 'shopify') {
			return setActiveVendorUpgradePopup('shopify');
		}

		return;
	}

	function getPremiumPopupOpenerClickCallback() {
		// For BigCommerce, Shift4Shop we're using our payment system
		if (vendor === 'bigcommerce' || vendor === 'shift4shop' || !vendor) {
			return;
		}

		if (vendor) {
			return getVendorCallbackOnUpgradeClick;
		}

		return;
	}

	useEffect(() => {
		const nextActivePage = pages.find((p) => p.id === page);
		setActivePage(nextActivePage);
	}, [page]);

	useEffect(() => {
		function onUnload(e: BeforeUnloadEvent) {
			if (!isSaved) {
				const message =
					'You have unsaved changes. Are you sure you want leave?';
				e.returnValue = message;
				return message;
			}
			return;
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('beforeunload', onUnload);

			return () => {
				window.removeEventListener('beforeunload', onUnload);
			};
		}

		return () => {};
		// eslint-disable-next-line
	}, [isSaved]);

	useEffect(() => {
		if (vendor) {
			dispatch(
				userActions.loggedIn({
					fullName: '',
					isAuthenticated: true,
					thumbnail: '',
					isPremium: false, // TODO: Change in the future?
				})
			);
		}
		// eslint-disable-next-line
	}, [appData.planFeatures]);

	useEffect(() => {
		// Get apps's data
		getData();

		if (vendor) {
			// If exists, load JS sdk
			loadJSSdk(`${vendor}-sdk`, query.get('jsSdkUrl'));
		}

		// Updating plugin context
		dispatch(
			contextUpdated({
				platform: vendor,
				instanceId,
			})
		);
		// eslint-disable-next-line
	}, []);

	function renderAppLoader() {
		return (
			<main className="editor-wrapper">
				<aside className="main-menu">
					<div className="inner">
						<NinjaSkeletonTheme leadColor="#1c242a">
							{Array.from(new Array(5)).map((y, i) => (
								<div key={`menu_${i}`} style={{ marginBottom: '5px' }}>
									<NinjaSkeleton height={40} />
								</div>
							))}
						</NinjaSkeletonTheme>
					</div>
				</aside>
				<section className="plugin-area">
					<section className="main-area">
						<div className="editor-plugin-preview">{loaderComp}</div>
					</section>
				</section>
			</main>
		);
	}

	function renderRoutesMenu() {
		return (
			<nav className="sub-navigation">
				{activePage?.nestedRoutes?.map((route) => (
					<NavLink
						key={`submenu-${activePage.id}-${route.id}`}
						to={`/${pathPrefix}/${activePage.id}/${route.id}`}
						activeClassName="active"
						exact
					>{route.name || route.id}</NavLink>
				))}
			</nav>
		);
	}

	function renderEditor() {
		if (error) {
			return <div className="loading-error">{error}</div>;
		}

		return (
			<main className="editor-wrapper">
				<AppMenu
					links={getMenuLinks()}
					serviceName={pluginService.serviceName}
					showPremiumButton={!user.isPremium}
					userIsAuthenticated={user.isAuthenticated}
					onPremiumPopupOpenerClick={getPremiumPopupOpenerClickCallback()}
					vendor={vendor}
				></AppMenu>
				<section className="plugin-area">
					<ContextMenu
						component={
							activePage?.nestedRoutes ? renderRoutesMenu() : undefined
						}
						closeLink={`/${pathPrefix}/${pages[0].id}?${query.toString()}`}
					/>
					<section
						className={`main-area ${
							activePage?.nestedRoutes ? 'with-context-menu' : ''
						}`}
					>
						{getPageComponent()}
					</section>
				</section>
			</main>
		);
	}

	return (
		<div className="cn-editor backoffice">
			<AppHeader
				componentName={pluginTitle}
				anonymousUser={!!vendor}
				logoUrl={!vendor ? '' : window?.location?.href}
				userProps={
					vendor
						? {
								user: {
									fullName: '',
									isAuthenticated: true,
									thumbnail: '',
									isPremium:
										premiumHelper.getFeatureValue('adsRemoval') === true,
								},
								componentType: pluginService.pluginType,
								serviceName: pluginService.serviceName,
						  }
						: {
								user,
								defaultAuthType: 'signup',
								componentType: pluginService.pluginType,
								serviceName: pluginService.serviceName,
								postLoginCallback: (user: IUser, triggered: boolean) => {
									dispatch(userActions.loggedIn(user));
									dispatch(getPlanFeatures());
								},
								postLogoutCallback: () => {
									dispatch(userActions.logout());
									dispatch(getPlanFeatures());
								},
						  }
				}
				vendor={vendor}
			/>
			{loading ? renderAppLoader() : renderEditor()}
			{activeVendorUpgradePopup && (
				<VendorUpgradePopup
					user={user}
					serviceName={pluginService.serviceName}
					closeCallback={() => setActiveVendorUpgradePopup(null)}
					vendor={activeVendorUpgradePopup}
				/>
			)}
		</div>
	);
};
