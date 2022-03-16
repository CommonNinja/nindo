import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../types/state.types';
import { dataUpdated } from '../../internal/actions/plugin.actions';

export function usePluginData<T>(): [
	T,
	(updatedData: Partial<T>) => void
] {
	const { pluginData } = useSelector((state: IAppState<T>) => ({
		pluginData: state.plugin,
	}));

	const dispatch = useDispatch();

	function updateData<T>(updatedData: T) {
		dispatch(dataUpdated(updatedData));
	}

	return [pluginData.data, updateData];
}

export const useAppData = usePluginData;
