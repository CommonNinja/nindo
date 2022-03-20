import { ComponentType, ReactChild, ReactElement, ReactNode } from 'react';

export type TChildren =
	| ReactNode
	| ReactChild
	| ReactElement
	| JSX.Element[]
	| JSX.Element
	| string
	| Element[]
	| ComponentType;

export type IPluginComp = () => ReactElement;

export type IPluginLoaderComp = (props: {
	mode: TPluginMode;
	[x: string]: any;
}) => ReactElement;

export type TPluginMode = 'preview' | 'editor' | 'viewer';

export interface IPlugin<T> {
	type: string;
	data: T;
	galleryId: string | null;
	guid: string | null;
	modelVersion: number;
	name: string;
	description: string | null;
	previewImage: string | null;
	privacy: TPluginPrivacy;
	status: TPluginState;
	planFeatures: any;
}

export type TPluginPrivacy = 'private' | 'public' | 'link';

export type TPluginState = 'published' | 'draft';

export interface IPluginData {
	settings: IPluginSettings;
	styles: IPluginStyles;
	content?: IPluginContent;
}

export interface IPluginContent {}

export interface IPluginSettings {
	showTitle: boolean;
}

export interface IPluginStyles {
	colors: IPluginColors;
	background: IPluginBackground;
	fontId: string;
	customCSS?: string;
}

export interface IPluginColors {
	background: string;
	title: string;
	description: string;
}

export interface IPluginBackground {
	image: string | null;
	size: 'cover' | 'contain' | 'auto';
	transparent: boolean;
}

export enum PluginActionTypes {
	GOT_DATA = 'GOT_DATA',
	PLAN_FEATURES_UPDATED = 'PLAN_FEATURES_UPDATED',
	SETTINGS_UPDATED = 'SETTINGS_UPDATED',
	NAME_UPDATED = 'NAME_UPDATED',
	STATUS_UPDATED = 'STATUS_UPDATED',
	DESCRIPTION_UPDATED = 'DESCRIPTION_UPDATED',
	PRIVACY_UPDATED = 'PRIVACY_UPDATED',
	DATA_UPDATED = 'DATA_UPDATED',
	STYLES_UPDATED = 'STYLES_UPDATED',
	CONTENT_UPDATED = 'CONTENT_UPDATED',
	COLORS_UPDATED = 'COLORS_UPDATED',
	SIZES_UPDATED = 'SIZES_UPDATED',
	BACKGROUND_UPDATED = 'BACKGROUND_UPDATED',
}
