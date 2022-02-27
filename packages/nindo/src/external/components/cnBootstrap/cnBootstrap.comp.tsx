import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import defaultUserState from '../../../internal/mocks/userState.mocks';
import {
	apiMocks,
	assetMocks,
	eventMocks,
	pluginMocks,
	userMocks,
} from '../../../internal/mocks';
import { IAppConfig } from '../../types/app.types';
import { genStore } from '../../../internal/components/init/reducers.init';
import { App } from '../../../internal/components/app/app.comp';

// Polyfill Promise for IE10+
require('es6-promise').polyfill();

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

export function cnBootstrap<T, P = {}>(appConfig: IAppConfig<T, P>) {
	const store: any = genStore(env, appConfig);
	if (process.env.NODE_ENV === 'development' && !appConfig?.mocks?.disable) {
		const userState = {
			...defaultUserState,
			...(appConfig?.mocks?.userState || {}),
		};
		// eslint-disable-next-line
		const Mimic = require('mimic');
		const mocksConfig = {
			version: '2.0.0',
			mocks: [
				...(appConfig?.mocks?.customMocks || []),
				...pluginMocks(userState, appConfig.plugin.defaultData),
				...userMocks(userState),
				...eventMocks(),
				...assetMocks(),
				...apiMocks(),
			],
		};

		// Clear old storage
		Mimic.default.clearStorage();

		// Load mocks from file
		Mimic.default.import(JSON.stringify(mocksConfig));
	}

	ReactDOM.render(
		<Provider store={store}>
			<App appConfig={appConfig} />
		</Provider>,
		document.getElementById('root')
	);

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
}

export const nindoApp = cnBootstrap;
