import React, { ComponentType, ReactElement } from 'react';
import loadable from '@loadable/component';
import { useParams } from 'react-router-dom';
import {
	IEditorConfig,
	TActivePage,
	TPlatform,
} from '../../../external/types/editor.types';
import { PluginWrapper } from '../pluginWrapper/pluginWrapper.comp';
import { Loader } from '../../../external/components/loader/loader.comp';
import {
	IAppMenuLink,
	IEditorExtraProps,
	IPlugin,
	IPluginComp,
	IPluginLoaderComp,
} from '../../../external/types';

import './editor.scss';

const CNEditor = loadable(() => import('../cnEditor/cnEditor.comp'));

interface IConfigParts {
	menuItems: IAppMenuLink[];
	pageToComp: (activePage: TActivePage) => {
		comp: ComponentType<any> | ReactElement;
		context: 'menu' | 'main';
	};
}

export interface IEditorProps<T> extends IEditorExtraProps<T> {
	config: IEditorConfig<T>;
	pluginComp: IPluginComp;
	defaultPluginData: IPlugin<T>;
	pluginLoaderComp?: IPluginLoaderComp;
}

export const Editor = ({
	config,
	pluginComp,
	pluginLoaderComp,
	defaultPluginData,
	...restProps
}: IEditorProps<any>) => {
	const { vendor } = useParams() as {
		vendor: TPlatform;
	};

	const { menuItems, pageToComp } = mapConfigToPaths(config);

	return (
		<CNEditor
			fallback={<Loader />}
			menuLinks={menuItems}
			resolveContextComp={pageToComp}
			defaultPluginData={defaultPluginData}
			pluginComp={<PluginWrapper pluginComp={pluginComp} />}
			pluginLoaderComp={pluginLoaderComp}
			showAnnouncements={true}
			showHistoryButtons={true}
			vendor={vendor}
			{...(restProps || {})}
		/>
	);
};

function mapConfigToPaths(config: IEditorConfig<any>): IConfigParts {
	const pagesMap: Map<
		TActivePage,
		{
			comp: ComponentType<any> | ReactElement;
			context: 'menu' | 'main';
		}
	> = new Map();
	
	config.sections.forEach(({ id, component, context }) => {
		pagesMap.set(id, {
			comp: component,
			context: context || 'menu',
		});
	});

	return {
		menuItems: config.sections as any[],
		pageToComp: (activePage: TActivePage) => {
			return pagesMap.get(activePage)!;
		},
	};
}
