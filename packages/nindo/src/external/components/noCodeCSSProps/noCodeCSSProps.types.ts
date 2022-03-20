import { CSSProperties } from 'react';
import { TAvailablePropertiesGroups } from '../cssPropertiesEditor/cssPropertiesEditor.types';

export interface INoCodeCSSItem {
	propName: string;
	value: CSSProperties;
	label?: string;
	allowedProps?: TAvailablePropertiesGroups;
}