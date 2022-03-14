import { useSelector } from 'react-redux';

import { IAppState } from '../types/state.types';
import { IPlugin } from '../types/plugin.types';

export function usePlugin<T>(): IPlugin<T> {
	const { pluginData, appType } = useSelector((state: IAppState<T>) => ({
		pluginData: state.plugin,
		appType: state.context.appType,
	}));

	if (appType !== 'widget') {
		throw new Error('Plugin hook can only be used in `widget` apps.');
	}

	return pluginData;
}
