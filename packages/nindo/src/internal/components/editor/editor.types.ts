import {
	IEditorExtraProps,
	IEditorConfig,
	IPluginComp,
	IPlugin,
	IPluginLoaderComp,
} from '../../../';

export interface IEditorProps<T> extends IEditorExtraProps<T> {
	config: IEditorConfig<T>;
	pluginComp: IPluginComp;
	defaultPluginData: IPlugin<T>;
	pluginLoaderComp?: IPluginLoaderComp;
}
