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
import { useAppConfig } from '../../../external/hooks/appConfig.hook';

import './app.scss';

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

export const App = () => {
	const config = useAppConfig<IAppConfig<any>>();
	const pluginData = usePlugin<any>();
	const pluginComp = config.plugin.pluginComponent;
	const pluginLoaderComp = config.plugin.loaderComponent;
	const editorProps = extractViewerEditorProps<TPluginEditorProps<any>>(
		config?.editor?.props,
		pluginData
	);
	const viewerProps = extractViewerEditorProps<TPluginViewerProps<any>>(
		config?.viewer?.props,
		pluginData
	);

	// If there's an init function, call it
	config.app?.onInit?.();

	return (
		<CNApp
			editorComp={
				<Editor
					{...editorProps}
					pluginComp={pluginComp}
					pluginLoaderComp={pluginLoaderComp}
					config={config.editor.config}
					defaultPluginData={config.plugin.defaultData}
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
			defaultRoutePath={config.app?.defaultRoutePath || '/editor/content'}
			extraRoutes={config.app?.extraRoutes}
		/>
	);
};
