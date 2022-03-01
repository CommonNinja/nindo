import React from 'react';
import { usePlugin, usePluginData } from '../../exports';

import { IPluginData } from './plugin.types';

import './plugin.scss';

export const Plugin = () => {
	const plugin = usePlugin<IPluginData>();
	const [pluginData] = usePluginData<IPluginData>();
	const { styles, settings, content } = pluginData;

	return (
		<>
			{/* Title & Plugin content */}
			{settings.showTitle && <h2 style={styles.title}>{plugin.name}</h2>}
			Content: {content.test}
		</>
	);
};
