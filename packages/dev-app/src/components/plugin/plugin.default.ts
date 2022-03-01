import { IPluginData } from './plugin.types';

export const defaultPluginData = (): IPluginData => ({
	settings: {
		showTitle: true,
	},
	styles: {
		background: {},
		title: {},
		description: {},
		fontId: 'default',
		layoutId: 'default',
		customCSS: '',
	},
	content: {
		test: 'hey',
	},
});
