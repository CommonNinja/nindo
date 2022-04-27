import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import defaultUserState from '../../../internal/mocks/userState.mocks';
import {
	assetMocks,
	eventMocks,
	pluginMocks,
	userMocks,
} from '../../../internal/mocks';
import { IAppConfig, IAppConfigMocks } from '../../types/app.types';
import { genStore } from '../../../internal/components/init/reducers.init';
import { App } from '../../../internal/components/app/app.comp';
import { IBackofficeAppConfig } from '../../types/backofficeApp.types';
import { BackofficeApp } from '../../../internal';
import { IPlugin } from '../../types/plugin.types';
import { setAppConfig } from '../../../internal/services/config.service';

// Polyfill Promise for IE10+
require('es6-promise').polyfill();

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

function loadMocks(defaultData: IPlugin<any>, mocks?: IAppConfigMocks) {
	if (process.env.NODE_ENV === 'development' && !mocks?.disable) {
		const userState = {
			...defaultUserState,
			...(mocks?.userState || {}),
		};
		// eslint-disable-next-line
		const Mimic = require('mimic');
		const mocksConfig = {
			version: '2.0.0',
			mocks: [
				...(mocks?.customMocks || []),
				...userMocks(userState),
				...pluginMocks(userState, defaultData),
				...eventMocks(),
				...assetMocks(),
			],
		};

		// Clear old storage
		Mimic.default.clearStorage();

		// Load mocks from file
		Mimic.default.import(JSON.stringify(mocksConfig));
	}
}

export function nindoApp<T, P = {}>(appConfig: IAppConfig<T, P>) {
	setAppConfig(appConfig);
	
	const store: any = genStore('widget', appConfig.plugin.defaultData, appConfig.globalState);
	
	loadMocks(appConfig.plugin.defaultData, appConfig.mocks);

	ReactDOM.render(
		<Provider store={store}>
			<App />
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
	setAppConfig(appConfig);
	
	const store: any = genStore('backoffice', appConfig.defaultData, appConfig.globalState);
	
	loadMocks(appConfig.defaultData, appConfig.mocks);

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
