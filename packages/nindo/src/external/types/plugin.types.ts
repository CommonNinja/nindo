import { ComponentType, ReactChild, ReactElement, ReactNode } from 'react';
import { TPlatform } from './editor.types';

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
	creationSource: TPlatform;
	privacy: TPluginPrivacy;
	status: TPluginState;
	planFeatures: any;
}

export type TPluginPrivacy = 'private' | 'public' | 'link';

export type TPluginState = 'published' | 'draft';

export enum PluginActionTypes {
	GOT_DATA = 'GOT_DATA',
	PLAN_FEATURES_UPDATED = 'PLAN_FEATURES_UPDATED',
	NAME_UPDATED = 'NAME_UPDATED',
	STATUS_UPDATED = 'STATUS_UPDATED',
	DESCRIPTION_UPDATED = 'DESCRIPTION_UPDATED',
	PRIVACY_UPDATED = 'PRIVACY_UPDATED',
	DATA_UPDATED = 'DATA_UPDATED',
}
