import { ReactElement } from 'react';
import { IAppConfigMocks, IAppMeta } from './app.types';
// import { IPlugin } from './plugin.types';

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
	// defaultData: IPlugin<T>;
	globalState?: P;
	loaderComponent?: ReactElement;
	onInit?: () => void;
	meta?: IAppMeta;
	mocks?: IAppConfigMocks;
}
