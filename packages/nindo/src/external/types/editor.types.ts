import { ComponentType } from 'react';
import { IPlugin, TChildren } from './plugin.types';

type TBoolFunc = () => boolean;

export interface IEditorExtraProps<T> {
	showAnnouncements?: boolean;
	showHistoryButtons?: boolean;
	showExportMenu?: boolean;
	exportIsAvailable?: boolean | TBoolFunc;
	postGetDataProcess?: (data: IPlugin<T>) => IPlugin<T> | Promise<IPlugin<T>>;
	announcementsCategoryId?: string;
	extraMenuItems?: IExtraMenuItem[];
	extraToolbarButtons?: TChildren;
	preSaveValidation?: () => IPreSaveValidation;
}

export interface IPreSaveValidation {
	valid: boolean;
	message?: string;
}

export interface IExtraMenuItem {
	name: string;
	links: {
		children: TChildren;
		isPremium?: boolean;
	}[];
}

export interface IEditorConfig<T> {
	sections: IEditorSection<T>[];
}

export interface IEditorSection<T> {
	id: TActivePage;
	component: ComponentType;
	name: string;
	icon: any;
	context?: 'menu' | 'main';
}

export type TActivePage =
	| 'content'
	| 'styles'
	| 'settings'
	| 'analytics'
	| 'code'
	| 'view'
	| string;

export interface IValidationError {
	message: string;
	context: string;
}

export interface EditorHistory<T> {
	items: IPlugin<T>[];
	activeIndex: number;
}

export interface IEditorState<T> {
	isSaved: boolean;
	saving: boolean;
	hasError: boolean;
	history: EditorHistory<T>;
}

export enum EditorActionTypes {
	EDITOR_SET_SAVED = 'EDITOR_SET_SAVED',
	EDITOR_SET_SAVING = 'EDITOR_SET_SAVING',
	EDITOR_SET_ERROR = 'EDITOR_SET_ERROR',
	EDITOR_REDO = 'EDITOR_REDO',
	EDITOR_UNDO = 'EDITOR_UNDO',
	EDITOR_HISTORY_CHANGE = 'EDITOR_HISTORY_CHANGE',
}

export type TPlatform =
	| 'website'
	| 'nindo'
	| 'duda'
	| 'wix'
	| 'weebly'
	| 'shopify'
	| 'bigcommerce'
	| 'woocommerce'
	| 'salesforce'
	| 'etsy'
	| 'square'
	| 'magento'
	| 'wordpress'
	| 'joomla'
	| 'drupal'
	| 'elementor'
	| 'webflow'
	| 'shift4shop'
	| 'squarespace';

export type TSiteBuilderVendor = TPlatform;
