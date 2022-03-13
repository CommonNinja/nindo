import { TPlatform } from './editor.types';
import { TPluginMode } from './plugin.types';

export interface IPluginContext extends IAppContext {
	mode?: TPluginMode;
	instanceId?: string;
	appId?: string;
}

export interface IAppContext {
	platform?: TPlatform;
}
