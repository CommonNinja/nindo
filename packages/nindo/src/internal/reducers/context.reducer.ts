import { IAppContext, IPluginContext } from '../../external/types/context.types';

export const contextReducer = (defaultState: IPluginContext | IAppContext) =>
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
