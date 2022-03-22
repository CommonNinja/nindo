import { IPlugin, PluginActionTypes } from '../../external/types/plugin.types';

export const pluginReducer =
	(defaultState: IPlugin<any>) =>
	(state = defaultState, action: any) => {
		switch (action.type) {
			case PluginActionTypes.GOT_DATA:
				return Object.assign({}, state, action.data);
			case PluginActionTypes.PLAN_FEATURES_UPDATED:
				return Object.assign({}, state, {
					planFeatures: action.data,
				});
			case PluginActionTypes.DATA_UPDATED:
				return Object.assign({}, state, {
					data: {
						...state.data,
						...action.data,
					},
				});
			case PluginActionTypes.PRIVACY_UPDATED:
				return Object.assign({}, state, {
					privacy: action.privacy,
				});
			case PluginActionTypes.STATUS_UPDATED:
				return Object.assign({}, state, {
					status: action.status,
				});
			case PluginActionTypes.NAME_UPDATED:
				return Object.assign({}, state, {
					name: action.name,
				});
			case PluginActionTypes.DESCRIPTION_UPDATED:
				return Object.assign({}, state, {
					description: action.description,
				});
			default:
				return state;
		}
	};
