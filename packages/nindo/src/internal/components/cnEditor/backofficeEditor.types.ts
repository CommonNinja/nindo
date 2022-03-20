import { ReactElement } from 'react';
import { IAppMainPage } from '../../../external/types/backofficeApp.types';
import { IPlugin } from '../../../external/types/plugin.types';

export interface ICNBackofficeEditor<T> {
	pages: IAppMainPage[];
	defaultPluginData: IPlugin<T>;
	loaderComp?: ReactElement;
	postGetDataProcess?: (data: IPlugin<T>) => IPlugin<T> | Promise<IPlugin<T>>;
}
