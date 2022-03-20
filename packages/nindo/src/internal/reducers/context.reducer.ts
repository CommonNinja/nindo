import { IAppContext } from '../../external/types/context.types';

export const contextReducer = (defaultState: IAppContext) =>
	(state = defaultState, action: any) => {
		switch (action.type) {
			case 'CONTEXT_UPDATED':
				return Object.assign({}, state, {
					...state,
					...action.data,
				});
			default:
				return state;
		}
	};
