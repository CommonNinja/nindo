import { useDispatch, useSelector } from 'react-redux';

import { IBackofficeAppState } from '../types/state.types';
import { appDataUpdated } from '../../internal/actions/app.actions';

export function useAppData<T>(): [
	T,
	(updatedData: Partial<T>) => void
] {
	const { appData, appType } = useSelector((state: IBackofficeAppState<T>) => ({
		appData: state.appData,
		appType: state.context.appType,
	}));

	if (appType !== 'backoffice') {
		throw new Error('App data hook can only be used in `backoffice` apps.');
	}

	const dispatch = useDispatch();

	function updateData<T>(updatedData: T) {
		dispatch(appDataUpdated(updatedData));
	}

	return [appData.data, updateData];
}
