import React, { useState, useEffect, ComponentType, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faCode, faChartBar, faEye } from '@fortawesome/free-solid-svg-icons';
import { CommonNinjaPlugin } from 'commonninja-react';

import {
	pluginService,
	templatesService,
	localStorageService,
} from '../../services';
import { IHttpResult } from '../../../external/types/http.types';
import {
	NinjaSkeletonTheme,
	NinjaSkeleton,
} from '../../../external/components/skeleton/skeleton.comp';
import { AppHeader } from '../appHeader/appHeader.comp';
import { AnalyticsEmbed } from '../analyticsEmbed/analyticsEmbed.comp';
import * as userActions from '../../actions/user.actions';
import { AppMenu } from '../appMenu/appMenu.comp';
import { ContextMenu } from '../contextMenu/contextMenu.comp';
import {
	gotPluginData,
	getPlanFeatures,
	dataUpdated,
} from '../../actions/plugin.actions';
import { IAppMenuLink } from '../../../external/types/appMenu.types';
import { IPlugin, TChildren } from '../../../external/types/plugin.types';
import { IUser } from '../../../external/types/user.types';
import { historyChange } from '../../actions/history.actions';
import { MainArea } from '../mainArea/mainArea.comp';
import { PluginSkeleton } from '../../../external/components/pluginSkeleton/pluginSkeleton.comp';
import {
	TPlatform,
	IAppState,
	TActivePage,
	IPluginLoaderComp,
	IPreSaveValidation,
} from '../../../external/types';
import { useQuery } from '../../../external/hooks/query.hook';
import { IExtraMenuItem } from '../exportMenu/exportMenu.comp';
import { VendorUpgradePopup } from '../vendorUpgradePopup/vendorUpgradePopup.comp';
import PublishSettingsComp from '../publishSettings/publishSettings.comp';
import { TemplatesPopup } from '../templatesPopup/templatesPopup.comp';
import { premiumHelper } from '../../../external/helpers';
import { pluginContextUpdated } from '../../actions/pluginContext.actions';

import './cnEditor.scss';

type TBoolFunc = () => boolean;

export interface ICNEditor<T> {
	menuLinks: IAppMenuLink[];
	defaultPluginData: IPlugin<T>;
	resolveContextComp: (page: TActivePage) => {
		comp: ComponentType<T> | ReactElement;
		context: 'menu' | 'main';
	};
	pluginComp: TChildren;
	showExportMenu?: boolean;
	showHistoryButtons?: boolean;
	exportIsAvailable?: boolean | TBoolFunc;
	pluginLoaderComp?: IPluginLoaderComp;
	postGetDataProcess?: (data: IPlugin<T>) => IPlugin<T> | Promise<IPlugin<T>>;
	showAnnouncements?: boolean;
	announcementsCategoryId?: string;
	vendor?: TPlatform;
	extraMenuItems?: IExtraMenuItem[];
	extraToolbarButtons?: TChildren;
	preSaveValidation?: () => IPreSaveValidation;
}

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const pluginPath =
	process.env.REACT_APP_NINJA_PLUGIN_PATH || 'YOUR_PLUGIN_PATH';
const pluginTitle = process.env.REACT_APP_NINJA_PLUGIN_TITLE || 'App Name';

export const CNEditor = ({
	menuLinks,
	defaultPluginData,
	resolveContextComp,
	pluginComp,
	pluginLoaderComp,
	showExportMenu,
	exportIsAvailable,
	showHistoryButtons,
	postGetDataProcess = (data: IPlugin<any>) => data,
	showAnnouncements,
	announcementsCategoryId,
	vendor,
	extraMenuItems,
	extraToolbarButtons,
	preSaveValidation,
}: ICNEditor<any>) => {
	const query = useQuery();
	const dispatch = useDispatch();
	const { pluginId, page } = useParams() as any;
	const { isSaved, plugin, user } = useSelector((state: IAppState<any>) => ({
		isSaved: state.editor.isSaved,
		plugin: state.plugin,
		user: state.user,
	}));
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [activeVndorUpgradePopup, setActiveVendorUpgradePopup] =
		useState<null | TPlatform>(null);
	const [activePage, setActivePage] = useState<TActivePage>(page || null);
	const [pluginTemplates, setPluginTemplates] = useState<[]>([]);
	const vendorPath = vendor ? `v/${vendor}` : 'editor';
	const pathPrefix = `${pluginPath}/${vendorPath}`;
	const PluginLoaderComp = pluginLoaderComp || PluginSkeleton;

	async function getData() {
		setLoading(true);
		setError('');

		try {
			const result = await pluginService.getForEditor(
				pluginId,
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

	async function loadTemplates() {
		try {
			const result: IHttpResult = await templatesService.getComponentTemplates(
				pluginService.pluginType
			);

			if (!result || !result.success) {
				throw new Error(result.message || 'Could not load templates.');
			}

			setPluginTemplates(result.data);
		} catch (e) {}
	}

	function getMenuLinks() {
		const links = [
			{
				name: 'View',
				url: `/${pathPrefix}/view/${pluginId || ''}`,
				icon: faEye,
			},
			...menuLinks.map((link) => {
				link.url = `/${pathPrefix}/${link.id || link.url.replace(/\//g, '')}/${
					pluginId || ''
				}`;
				return link;
			}),
		];

		if (!vendor) {
			links.push({
				url: `/${pathPrefix}/analytics/${pluginId || ''}`,
				name: 'Analytics',
				icon: faChartBar,
			});
		}

		if (!vendor || vendor !== 'wix') {
			links.push({
				url: `/${pathPrefix}/code/${pluginId || ''}`,
				name: 'Add to Website',
				icon: faCode,
			});
		}

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
		setActivePage(page);
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
					isPremium: premiumHelper.getFeatureValue('adsRemoval') === true,
				})
			);
		}
		// eslint-disable-next-line
	}, [plugin.planFeatures]);

	useEffect(() => {
		// Get plugin's data
		getData();

		if (!pluginId) {
			// Get plugin templates if exists
			loadTemplates();
		}

		if (vendor) {
			// If exists, load JS sdk
			loadJSSdk(`${vendor}-sdk`, query.get('jsSdkUrl'));
		}

		// Updating plugin context
		dispatch(
			pluginContextUpdated({
				instanceId: pluginId,
				mode: 'editor',
				platform: vendor,
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
						<div className="editor-toolbar"></div>
						<div className="editor-plugin-preview">
							<PluginLoaderComp leadColor="#F1F2F6" mode="editor" />
						</div>
					</section>
				</section>
			</main>
		);
	}

	function renderEditor() {
		if (error || !plugin) {
			return <div className="loading-error">{error}</div>;
		}

		let activePageProps = resolveContextComp(page);
		let mainComp = pluginComp;

		if (activePageProps?.context === 'main') {
			const MainComp = activePageProps?.comp;
			mainComp =
				typeof MainComp === 'function' ? (
					<MainComp {...{}} />
				) : (
					React.cloneElement(MainComp, {})
				);
		} else if (page === 'code') {
			activePageProps = {
				comp: (
					<PublishSettingsComp
						pluginId={pluginId}
						showCode={vendor !== 'duda' && vendor !== 'wix'}
						htmlCodeOnly={!!vendor}
						hideTutorials={!!vendor}
					/>
				),
				context: 'menu',
			};
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
				>
					{env === 'prod' && !vendor && showAnnouncements && (
						<CommonNinjaPlugin
							pluginId="6a1b6d06-c608-440a-b90f-35b4fd2dcf3e"
							type="announcements"
							pluginProps={
								announcementsCategoryId
									? `category:${announcementsCategoryId}`
									: ''
							}
						/>
					)}
				</AppMenu>
				<section className="plugin-area">
					{activePage !== 'analytics' ? (
						<>
							<ContextMenu
								component={
									activePageProps?.context === 'menu'
										? activePageProps?.comp
										: undefined
								}
								closeLink={`/${pathPrefix}/view/${
									pluginId || ''
								}?${query.toString()}`}
							/>
							<MainArea
								withContextMenu={
									activePageProps?.context === 'menu' && !!activePageProps?.comp
								}
								mainComp={mainComp}
								showExportMenu={!!showExportMenu}
								exportIsAvailable={
									typeof exportIsAvailable === 'function'
										? exportIsAvailable()
										: !!exportIsAvailable
								}
								showHistoryButtons={!!showHistoryButtons}
								defaultPluginName={defaultPluginData.name}
								vendor={vendor}
								extraMenuItems={extraMenuItems}
								extraToolbarButtons={extraToolbarButtons}
								preSaveValidation={preSaveValidation}
							/>
						</>
					) : (
						<AnalyticsEmbed componentId={plugin.guid || ''} />
					)}
				</section>
			</main>
		);
	}

	return (
		<div className="cn-editor">
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
									dispatch(getPlanFeatures(pluginId || ''));

									if (triggered && !pluginId) {
										(
											document?.querySelector(
												'.editor-toolbar .save-button'
											) as HTMLElement
										)?.click();
										(
											document?.getElementById(
												'premium-popup-opener'
											) as HTMLElement
										)?.click();
									}
								},
								postLogoutCallback: () => {
									dispatch(userActions.logout());
									dispatch(getPlanFeatures(pluginId || ''));
								},
						  }
				}
				vendor={vendor}
			/>
			{loading ? renderAppLoader() : renderEditor()}
			{activeVndorUpgradePopup && (
				<VendorUpgradePopup
					user={user}
					serviceName={pluginService.serviceName}
					closeCallback={() => setActiveVendorUpgradePopup(null)}
					vendor={activeVndorUpgradePopup}
				/>
			)}
			{pluginTemplates.length > 0 && (
				<TemplatesPopup
					pluginTemplates={pluginTemplates}
					closeCallback={() => setPluginTemplates([])}
					onSelect={(data: any | null) => {
						if (data) {
							dispatch(dataUpdated(data));
						}

						// Close popup
						setPluginTemplates([]);
					}}
				/>
			)}
		</div>
	);
};
