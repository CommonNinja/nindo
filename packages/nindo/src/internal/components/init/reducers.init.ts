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
import { IAppConfig } from '../../../external/types/app.types';
import { IAppState } from '../../../external/types/state.types';
import { IBackofficeAppConfig } from '../../../external/types/backofficeApp.types';

let store: AppStateStore<any, any>;

function provideReducers<T, P = {}>(
	defaultPluginData: IPlugin<T>,
	appType: 'widget' | 'backoffice',
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
	appConfig: IAppConfig<T> | IBackofficeAppConfig<T>,
	env: string
): AppStateStore<T, P> {
	let reducers;

	if (type === 'widget') {
		reducers = provideReducers(
			(appConfig as IAppConfig<T>).plugin.defaultData,
			'widget',
			(appConfig as IAppConfig<T>).globalState || {}
		);
	} else {
		// Backoffice apps
		reducers = provideReducers(
			(appConfig as IBackofficeAppConfig<T>).defaultData,
			'backoffice',
			(appConfig as IBackofficeAppConfig<T>).globalState || {}
		);
	}
	const store = createStore(reducers, {}, applyMiddleware(thunk as any));

	return store;
}

export function getStore<T, P>(): AppStateStore<T, P> {
	if (!store) {
		throw Error('Store was not generated');
	}

	return store;
}

export type AppStateStore<T, P> = Store<IAppState<T, P>>;
