import { nindoBackofficeApp, getDefaultPlugin } from '@commonninja/nindo';

import userStateMock from './mocks/userState.mocks';
import { defaultPluginData } from './components/plugin/plugin.default';
import { IPluginData } from './components/plugin/plugin.types';
import { Dashboard } from './components/dashboard/dashboard.comp';

// Initialize Nindo backoffice app
nindoBackofficeApp<IPluginData, {}>({
	defaultData: getDefaultPlugin<IPluginData>(defaultPluginData()),
	meta: {
		name: 'My App',
	},
	pages: [
		{
			id: 'dashboard',
			name: 'Dashboard',
			component: <Dashboard />,
		},
		{
			id: 'customers',
			name: 'Customers',
			nestedRoutes: [
				{
					id: 'group-1',
					name: 'Group 1',
					component: <div>Group 1</div>,
				},
				{
					id: 'group-2',
					name: 'Group 2',
					component: <div>Sub 2</div>,
				},
			],
		},
	],
	mocks: {
		userState: userStateMock,
	},
});
