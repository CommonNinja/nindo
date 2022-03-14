import { IAppData } from './backofficeApp.types';
import { IAppContext } from './context.types';
import { IEditorState } from './editor.types';
import { IPlugin } from './plugin.types';
import { IUser } from './user.types';

interface ICommonState<T, P = {}> {
	user: IUser;
	globalState: P;
	context: IAppContext;
	editor: IEditorState<T>;
}

export interface IAppState<T, P = {}> extends ICommonState<T, P> {
	plugin: IPlugin<T>;
}

export interface IBackofficeAppState<T, P = {}> extends ICommonState<T, P> {
	appData: IAppData<T>;
}
