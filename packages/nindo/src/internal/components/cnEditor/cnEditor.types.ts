import { ComponentType, ReactElement } from 'react';
import {
	IAppMenuLink,
	IPlugin,
	TActivePage,
	TChildren,
	IPluginLoaderComp,
	TPlatform,
	IExtraMenuItem,
	IPreSaveValidation,
} from '../../../';

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
