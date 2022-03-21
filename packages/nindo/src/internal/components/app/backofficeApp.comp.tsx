import React from 'react';

import { IBackofficeAppConfig } from '../../../external/types/backofficeApp.types';
import { CNBackofficeApp } from '../cnApp/cnBackofficeApp.comp';

import './app.scss';

interface IBackofficeAppProps<T> {
	appConfig: IBackofficeAppConfig<T>;
}

export const BackofficeApp = ({ appConfig }: IBackofficeAppProps<any>) => {
	// If there's an init function, call it
	appConfig.onInit?.();

	return <CNBackofficeApp />;
};
