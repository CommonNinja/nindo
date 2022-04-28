// import {
// 	nindoApp,
// 	getDefaultPlugin,
// } from './exports';
// import userStateMock from './mocks/userState.mocks';
// import { getEditorConfig } from './components/editor/editor.config';
// import { Plugin } from './components/plugin/plugin.comp';
// import { defaultPluginData } from './components/plugin/plugin.default';
// import { IPluginData } from './components/plugin/plugin.types';

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

import {
	nindoBackofficeApp,
	useAppContext,
	useGlobalState,
	Toolbar,
} from './exports';
import userStateMock from './mocks/userState.mocks';

const Dashboard = () => {
	const { appType, platform } = useAppContext();
	const [appState, updateAppState] = useGlobalState<{ test: string }>();

	return (
		<>
			<Toolbar />
			<p>App Type: {appType}</p>
			<p>Platform: {platform || 'none'}</p>
			<p>App State: {appState.test || 'empty'}</p>
			<button onClick={() => updateAppState({ test: 'clicked!' })}>Click me</button>
		</>
	);
};

nindoBackofficeApp<{}>({
	meta: {
		name: 'Backoffice App',
		// whiteLabelled: true,
		// icon,
	},
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

