import { IAppData, AppActionTypes } from '../../external/types/backofficeApp.types';

export const appReducer =
	(defaultState: IAppData<any>) =>
	(state = defaultState, action: any) => {
		switch (action.type) {
			case AppActionTypes.GOT_DATA:
				return Object.assign({}, state, action.data);
			case AppActionTypes.PLAN_FEATURES_UPDATED:
				return Object.assign({}, state, {
					planFeatures: action.data,
				});
			case AppActionTypes.DATA_UPDATED:
				return Object.assign({}, state, {
					data: {
						...state.data,
						...action.data,
					},
				});
			default:
				return state;
		}
	};
