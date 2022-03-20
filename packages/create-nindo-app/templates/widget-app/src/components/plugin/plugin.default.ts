import { IPluginData } from './plugin.types';

export const defaultPluginData = (): IPluginData => ({
	settings: {
		showTitle: true,
	},
	styles: {
		mainWrapper: {},
		title: {},
		fontId: 'default',
		layoutId: 'default',
		customCSS: '',
	},
	content: {
		test: 'hey',
	},
});
