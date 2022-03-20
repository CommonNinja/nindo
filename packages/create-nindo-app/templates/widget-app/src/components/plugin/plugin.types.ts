import { CSSProperties } from 'react';

export interface IPluginData {
	content: IPluginContent;
	settings: IPluginSettings;
	styles: IPluginStyles;
}

export interface IPluginContent {
	test: string; // TODO: Remove and replace with your model
}

export interface IPluginSettings {
	showTitle: boolean;
}

export interface IPluginStyles {
	mainWrapper: CSSProperties;
	title: CSSProperties;
	layoutId: 'default';
	fontId: string;
	customCSS: string;
}
