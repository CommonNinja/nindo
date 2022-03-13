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
	appReducer,
	pluginStateReducer,
	userReducer,
} from '../../reducers';
import { IPlugin } from '../../../external/types/plugin.types';
import { IAppConfig } from '../../../external/types/app.types';
import { IAppState, IBackofficeAppState } from '../../../external/types/state.types';
import { IAppData, IBackofficeAppConfig } from '../../../external/types/backofficeApp.types';

let store: AppStateStore<any, any>;

function provideReducers<T, P = {}>(
	defaultPluginData: IPlugin<T>,
	pluginState?: P
): Reducer<any> {
	return combineReducers({
		user: userReducer,
		plugin: pluginReducer(defaultPluginData),
		pluginState: pluginStateReducer(pluginState),
		pluginContext: contextReducer({
			mode: undefined,
			instanceId: undefined,
			platform: undefined,
			appId: undefined,
		}),
		editor: editorReducer,
	});
}

function providerBackofficeReducers<T, P = {}>(
	defaultAppData: IAppData<T>,
	appState?: P
): Reducer<any> {
	return combineReducers({
		user: userReducer,
		appData: appReducer(defaultAppData),
		appState: pluginStateReducer(appState),
		appContext: contextReducer({
			platform: undefined,
		}),
		editor: editorReducer,
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
			(appConfig as IAppConfig<T>).pluginState || {}
		);
	} else {
		// Backoffice apps
		reducers = providerBackofficeReducers(
			(appConfig as IBackofficeAppConfig<T>).defaultData || {
				data: {},
				planFeatures: {},
			},
			(appConfig as IBackofficeAppConfig<T>).state || {}
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

export type BackofficeAppStateStore<T, P> = Store<IBackofficeAppState<T, P>>;
