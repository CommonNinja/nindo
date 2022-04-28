import { ReactElement } from 'react';
import { IAppMainPage } from '../../../external/types/backofficeApp.types';

export interface ICNBackofficeEditor<T> {
	pages: IAppMainPage[];
	loaderComp?: ReactElement;
}
