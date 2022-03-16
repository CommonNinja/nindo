import { useSelector } from 'react-redux';

import { IAppState } from '../types/state.types';
import { IAppContext } from '../types/context.types';

export function useAppContext(): IAppContext {
	const { context } = useSelector((state: IAppState<any>) => ({
		context: state.context,
	}));

	return context;
}
