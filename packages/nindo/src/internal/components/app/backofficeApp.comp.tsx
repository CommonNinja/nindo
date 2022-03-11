import React from 'react';

import { IBackofficeAppConfig } from '../../../external/types/backofficeApp.types';
import { CNBackofficeApp } from '../cnApp/cnBackofficeApp.comp';

import './app.scss';

interface IBackofficeAppProps<T> {
	appConfig: IBackofficeAppConfig<T>;
}


export const BackofficeApp = ({ appConfig }: IBackofficeAppProps<any>) => {
	const loaderComp = appConfig.loaderComponent;
	
	// If there's an init function, call it
	appConfig.onInit?.();
	
	return (
		<CNBackofficeApp
			pages={appConfig.pages}
			loaderComp={loaderComp}
		/>
	);
};
