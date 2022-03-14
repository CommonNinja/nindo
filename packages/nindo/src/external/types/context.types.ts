import { TPlatform } from './editor.types';
import { TPluginMode } from './plugin.types';

export interface IAppContext {
	appType: 'widget' | 'backoffice';
	platform?: TPlatform;
	mode?: TPluginMode;
	instanceId?: string;
	appId?: string;
}
