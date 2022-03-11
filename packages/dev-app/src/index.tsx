import { nindoApp, getDefaultPlugin, nindoBackofficeApp } from './exports';

import userStateMock from './mocks/userState.mocks';
import { getEditorConfig } from './components/editor/editor.config';
import { Plugin } from './components/plugin/plugin.comp';
import { defaultPluginData } from './components/plugin/plugin.default';
import { IPluginData } from './components/plugin/plugin.types';

// Initialize Nindo app
// nindoApp<IPluginData, {}>({
// 	editor: {
// 		config: getEditorConfig(),
// 	},
// 	plugin: {
// 		defaultData: getDefaultPlugin(defaultPluginData(), 'My App'),
// 		pluginComponent: Plugin,
// 	},
// 	mocks: {
// 		userState: userStateMock,
// 	},
// });

nindoBackofficeApp<IPluginData, {}>({
	pages: [
		{
			id: 'home',
			name: 'Home',
			component: <div>Home</div>,
			nestedRoutes: [
				{
					id: 'home-sub',
					name: 'Sub',
					component: <div>Sub</div>,
				},
			],
		},
		{
			id: 'test',
			name: 'Test',
			component: <div>Test</div>,
		},
	],
	mocks: {
		userState: userStateMock,
	},
});
