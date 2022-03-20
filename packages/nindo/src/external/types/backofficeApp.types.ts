import { ReactElement } from 'react';
import { IUserStateMocks } from './mocks.types';
import { IPlugin } from './plugin.types';

export interface IAppPage {
	id: string;
	name?: string;
	component?: ReactElement;
	icon?: any;
}

export interface IAppMainPage extends IAppPage {
	nestedRoutes?: IAppPage[];
}

export interface IBackofficeAppConfig<T = {}, P = {}> {
	pages: IAppMainPage[];
	defaultData: IPlugin<T>;
	globalState?: P;
	loaderComponent?: ReactElement;
	onInit?: () => void;
	mocks?: {
		disable?: boolean;
		userState?: Partial<IUserStateMocks>;
		customMocks?: any[];
	};
}
