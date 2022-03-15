import { ReactElement } from 'react';
import { IUserStateMocks } from './mocks.types';

export interface IAppPage {
	id: string;
	name?: string;
	component?: ReactElement;
	icon?: any;
}

export interface IAppMainPage extends IAppPage {
	nestedRoutes?: IAppPage[];
}

export interface IAppData<T> {
	data: T;
	planFeatures: { [key: string]: boolean | string | number };
}

export interface IBackofficeAppConfig<T = {}, P = {}> {
	pages: IAppMainPage[];
	globalState?: P;
	defaultData?: IAppData<T>;
	loaderComponent?: ReactElement;
	onInit?: () => void;
	mocks?: {
		disable?: boolean;
		userState?: Partial<IUserStateMocks>;
		customMocks?: any[];
	};
}

export enum AppActionTypes {
	APP_GOT_DATA = 'APP_GOT_DATA',
	APP_PLAN_FEATURES_UPDATED = 'APP_PLAN_FEATURES_UPDATED',
	APP_DATA_UPDATED = 'APP_DATA_UPDATED',
}
