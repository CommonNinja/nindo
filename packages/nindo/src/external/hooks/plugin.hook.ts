import { useSelector } from 'react-redux';

import { IAppState } from '../types/state.types';
import { IPlugin } from '../types/plugin.types';

export function usePlugin<T>(): IPlugin<T> {
	const { pluginData } = useSelector((state: IAppState<T>) => ({
		pluginData: state.plugin,
	}));

	return pluginData;
}
