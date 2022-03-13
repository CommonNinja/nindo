import { ReactElement } from 'react';
import { IAppMainPage } from '../../../external/types/backofficeApp.types';

export interface ICNBackofficeEditor {
	pages: IAppMainPage[];
	loaderComp?: ReactElement;
}
