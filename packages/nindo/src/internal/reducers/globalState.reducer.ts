export const globalStateReducer =
	(defaultState: any = {}) =>
	(state = defaultState, action: any) => {
		switch (action.type) {
			case 'GLOBAL_STATE_UPDATED':
				return Object.assign({}, state, {
					...state,
					...action.data,
				});
			default:
				return state;
		}
	};
