import React from 'react';
import { Toolbar, useAppContext, useGlobalState } from '@commonninja/nindo';

export const Dashboard = () => {
	const { appType, platform } = useAppContext();
	const [appState, updateAppState] = useGlobalState<{ test: string }>();

	return (
		<>
			<Toolbar />
			<p>App Type: {appType}</p>
			<p>Platform: {platform || 'none'}</p>
			<p>App State: {appState.test || 'empty'}</p>
			<button onClick={() => updateAppState({ test: 'clicked!' })}>
				Click me
			</button>
		</>
	);
};
