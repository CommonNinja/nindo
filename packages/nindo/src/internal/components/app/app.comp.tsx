import React from 'react';

import { CNApp } from '../cnApp/cnApp.comp';
import {
	IAppConfig,
	TPluginEditorProps,
	TPluginViewerProps,
} from '../../../external/types/app.types';
import { PluginWrapper } from '../pluginWrapper/pluginWrapper.comp';
import { Viewer } from '../viewer/viewer.comp';
import { GalleryPage } from '../galleryPage/galleryPage.comp';
import { Editor } from '../editor/editor.comp';
import { IEditorExtraProps } from '../../../external/types/editor.types';
import { IViewerProps } from '../../../external/types/viewer.types';
import { IPlugin } from '../../../external/types/plugin.types';
import { usePlugin } from '../../../external/hooks/plugin.hook';

import './app.scss';

interface IAppProps<T> {
	appConfig: IAppConfig<T>;
}

function extractViewerEditorProps<T>(
	props: TPluginEditorProps<T> | TPluginViewerProps<T> | undefined,
	pluginData: IPlugin<T>
): IEditorExtraProps<T> | IViewerProps<T> {
	if (!props) {
		return {};
	}

	if (typeof props === 'function') {
		return props(pluginData);
	}

	return props;
}

export const App = ({ appConfig }: IAppProps<any>) => {
	const pluginData = usePlugin<any>();
	const pluginComp = appConfig.plugin.pluginComponent;
	const pluginLoaderComp = appConfig.plugin.loaderComponent;
	const editorProps = extractViewerEditorProps<TPluginEditorProps<any>>(
		appConfig?.editor?.props,
		pluginData
	);
	const viewerProps = extractViewerEditorProps<TPluginViewerProps<any>>(
		appConfig?.viewer?.props,
		pluginData
	);

	// If there's an init function, call it
	appConfig.app?.onInit?.();

	return (
		<CNApp
			editorComp={
				<Editor
					{...editorProps}
					pluginComp={pluginComp}
					pluginLoaderComp={pluginLoaderComp}
					config={appConfig.editor.config}
					defaultPluginData={appConfig.plugin.defaultData}
				/>
			}
			galleryPageComp={
				<GalleryPage
					{...viewerProps}
					pluginComp={pluginComp}
					pluginLoaderComp={pluginLoaderComp}
				/>
			}
			viewerComp={
				<Viewer
					{...viewerProps}
					pluginComp={pluginComp}
					pluginLoaderComp={pluginLoaderComp}
				/>
			}
			previewComp={<PluginWrapper pluginComp={pluginComp} />}
			defaultRoutePath={appConfig.app?.defaultRoutePath || '/editor/content'}
			extraRoutes={appConfig.app?.extraRoutes}
		/>
	);
};
