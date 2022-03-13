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
import { IBackofficeAppConfig } from '../../types/backofficeApp.types';
import { BackofficeApp } from '../../../internal';

// Polyfill Promise for IE10+
require('es6-promise').polyfill();

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

export function nindoApp<T, P = {}>(appConfig: IAppConfig<T, P>) {
	const store: any = genStore('widget', appConfig, env);
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
				...userMocks(userState),
				...pluginMocks(userState, appConfig.plugin.defaultData),
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
			<App appConfig={appConfig as IAppConfig<T, P>} />
		</Provider>,
		document.getElementById('root')
	);

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
}

export function nindoBackofficeApp<T, P = {}>(
	appConfig: IBackofficeAppConfig<T, P>
) {
	const store: any = genStore('backoffice', appConfig, env);
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
			<BackofficeApp appConfig={appConfig as IBackofficeAppConfig<T, P>} />
		</Provider>,
		document.getElementById('root')
	);

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
}
