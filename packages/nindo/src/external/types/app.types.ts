import { RouteProps } from 'react-router-dom';

import { IPluginComp, IPluginLoaderComp } from './plugin.types';
import { IEditorConfig, IEditorExtraProps } from './editor.types';
import { IUserStateMocks } from './mocks.types';
import { IPlugin } from './plugin.types';
import { IViewerProps } from './viewer.types';

export interface IExtraRouteProps extends RouteProps {
	pageType?: 'viewer' | 'gallery' | 'editor';
}

type TEditorPropsGenerator<T> = (
	pluginData: IPlugin<T>
) => IEditorExtraProps<T>;
export type TPluginEditorProps<T> =
	| IEditorExtraProps<T>
	| TEditorPropsGenerator<T>;

type TViewerPropsGenerator<T> = (pluginData: IPlugin<T>) => IViewerProps<T>;
export type TPluginViewerProps<T> = IViewerProps<T> | TViewerPropsGenerator<T>;

export interface IAppConfigMocks {
	disable?: boolean;
	userState?: Partial<IUserStateMocks>;
	customMocks?: any[];
}

export interface IAppMeta {
	name?: string;
	icon?: string;
	url?: string;
}

export interface IAppConfig<T, P = {}> {
	plugin: {
		defaultData: IPlugin<T>;
		pluginComponent: IPluginComp;
		loaderComponent?: IPluginLoaderComp;
	};
	editor: {
		config: IEditorConfig<T>;
		props?: TPluginEditorProps<T>;
	};
	viewer?: {
		props?: TPluginViewerProps<T>;
	};
	app?: {
		extraRoutes?: IExtraRouteProps[];
		defaultRoutePath?: string;
		onInit?: () => void;
	};
	globalState?: P;
	meta?: IAppMeta;
	mocks?: IAppConfigMocks;
}
