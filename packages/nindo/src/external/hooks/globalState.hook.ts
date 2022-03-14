import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../types/state.types';
import { globalStateUpdated } from '../../internal/actions/globalState.actions';

export function useGlobalState<P>(): [P, (updatedState: Partial<P>) => void] {
	const { globalState } = useSelector((state: IAppState<any, P>) => ({
		globalState: state.globalState,
	}));

	const dispatch = useDispatch();

	function updateData<P>(updatedState: P) {
		dispatch(globalStateUpdated(updatedState));
	}

	return [globalState, updateData];
}
