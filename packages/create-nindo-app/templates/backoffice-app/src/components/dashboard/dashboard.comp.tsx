import React from 'react';
import { Toolbar, useAppData } from '@commonninja/nindo';
import { IPluginData } from '../plugin/plugin.types';

export const Dashboard = () => {
	const [appData, updateData] = useAppData<IPluginData>();

	return (
		<>
			<Toolbar />
			<p>{appData.test || 'empty'}</p>
			<button onClick={() => updateData({ test: 'App data changed!' })}>
				Click me
			</button>
		</>
	);
};
