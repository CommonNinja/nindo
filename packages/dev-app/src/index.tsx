import {
	nindoApp,
	getDefaultPlugin,
	nindoBackofficeApp,
	useAppContext,
	useAppData,
	Toolbar,
} from './exports';

import userStateMock from './mocks/userState.mocks';
import { getEditorConfig } from './components/editor/editor.config';
import { Plugin } from './components/plugin/plugin.comp';
import { defaultPluginData } from './components/plugin/plugin.default';
import { IPluginData } from './components/plugin/plugin.types';
// import { ContentSettingsComp } from './components/editor/contentSettings/contentSettings.comp';

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

const Dashboard = () => {
	const context = useAppContext();
	const [appData, updateData] = useAppData<{ test: string }>();

	return (
		<>
			<Toolbar />
			<p>App Type: {context.appType}</p>
			<p>{appData.test || 'empty'}</p>
			<button onClick={() => updateData({ test: 'clicked!' })}>Click me</button>
		</>
	);
};

nindoBackofficeApp<IPluginData, {}>({
	defaultData: getDefaultPlugin<IPluginData>(defaultPluginData()),
	pages: [
		{
			id: 'dashboard',
			name: 'Dashboard',
			component: <Dashboard />,
		},
		{
			id: 'other',
			name: 'Other',
			component: <div>Other</div>,
			nestedRoutes: [
				{
					id: '1',
					name: 'Sub 1',
					component: <div>Sub 1</div>,
				},
				{
					id: '2',
					name: 'Sub 2',
					component: <div>Sub 2</div>,
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
