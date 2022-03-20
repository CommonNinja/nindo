import {
	applyMiddleware,
	combineReducers,
	createStore,
	Reducer,
	Store,
} from 'redux';
import thunk from 'redux-thunk';
import {
	editorReducer,
	contextReducer,
	pluginReducer,
	globalStateReducer,
	userReducer,
} from '../../reducers';
import { IPlugin } from '../../../external/types/plugin.types';
import { IAppState } from '../../../external/types/state.types';

let store: AppStateStore<any, any>;

function provideReducers<T, P = {}>(
	appType: 'widget' | 'backoffice',
	defaultPluginData: IPlugin<T>,
	globalState?: P
): Reducer<any> {
	return combineReducers({
		user: userReducer,
		globalState: globalStateReducer(globalState),
		context: contextReducer({
			mode: undefined,
			instanceId: undefined,
			platform: undefined,
			appId: undefined,
			appType,
		}),
		editor: editorReducer,
		plugin: pluginReducer(defaultPluginData),
	});
}

export function genStore<T, P>(
	type: 'widget' | 'backoffice',
	defaultData: IPlugin<T>,
	globalState?: P
): AppStateStore<T, P> {
	const reducers = provideReducers(type, defaultData, globalState || {});
	const store = createStore(reducers, {}, applyMiddleware(thunk as any));
	return store;
}

export type AppStateStore<T, P> = Store<IAppState<T, P>>;
