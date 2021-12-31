import { nindoApp, getDefaultPlugin } from '@commonninja/nindo';

import userStateMock from './mocks/userState.mocks';
import { getEditorConfig } from './components/editor/editor.config';
import { Plugin } from './components/plugin/plugin.comp';
import { defaultPluginData } from './components/plugin/plugin.default';
import { IPluginData } from './components/plugin/plugin.types';

// Initialize Nindo app
nindoApp<IPluginData, {}>({
	editor: {
		config: getEditorConfig(),
	},
	plugin: {
		defaultData: getDefaultPlugin(defaultPluginData(), 'My App'),
		pluginComponent: Plugin,
	},
	mocks: {
		userState: userStateMock,
	},
});
