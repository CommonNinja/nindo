import { IAppData } from './backofficeApp.types';
import { IAppContext, IPluginContext } from './context.types';
import { IEditorState } from './editor.types';
import { IPlugin } from './plugin.types';
import { IUser } from './user.types';

export interface IAppState<T, P = {}> {
	user: IUser;
	plugin: IPlugin<T>;
	pluginState: P;
	pluginContext: IPluginContext;
	editor: IEditorState<T>;
}

export interface IBackofficeAppState<T, P = {}> {
	user: IUser;
	appData: IAppData<T>;
	appState: P;
	appContext: IAppContext;
	editor: IEditorState<T>;
}
