import {
	IViewerProps,
	TPlatform,
	IPluginLoaderComp,
	TChildren,
} from '../../..';

export interface IPluginLoader<T> extends IViewerProps<T> {
	pluginComp: TChildren;
	pluginLoaderComp?: IPluginLoaderComp;
	vendor?: TPlatform;
}
