import { ReactElement } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { IUserStateMocks } from './mocks.types';

export interface IAppPage {
	name: string;
	id: string;
	component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined;
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
	state?: P;
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
	GOT_DATA = 'GOT_DATA',
	PLAN_FEATURES_UPDATED = 'PLAN_FEATURES_UPDATED',
	DATA_UPDATED = 'DATA_UPDATED',
}
