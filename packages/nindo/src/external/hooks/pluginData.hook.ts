import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../types/state.types';
import { dataUpdated } from '../../internal/actions/plugin.actions';

export function usePluginData<T>(): [
	T,
	(updatedData: Partial<T>) => void
] {
	const { pluginData, appType } = useSelector((state: IAppState<T>) => ({
		pluginData: state.plugin,
		appType: state.context.appType,
	}));

	if (appType !== 'widget') {
		throw new Error('Plugin hook can only be used in `widget` apps.');
	}

	const dispatch = useDispatch();

	function updateData<T>(updatedData: T) {
		dispatch(dataUpdated(updatedData));
	}

	return [pluginData.data, updateData];
}
