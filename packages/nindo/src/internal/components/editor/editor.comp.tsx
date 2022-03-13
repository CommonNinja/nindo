import React, { ComponentType, ReactElement } from 'react';
import loadable from '@loadable/component';
import { useRouteMatch } from 'react-router-dom';
import {
	IEditorConfig,
	TActivePage,
} from '../../../external/types/editor.types';
import { PluginWrapper } from '../pluginWrapper/pluginWrapper.comp';
import { Loader } from '../../../external/components/loader/loader.comp';
import { IAppMenuLink } from '../../../external/types';

import './editor.scss';
import { IEditorProps } from './editor.types';

interface IConfigParts {
	menuItems: IAppMenuLink[];
	pageToComp: (activePage: TActivePage) => {
		comp: ComponentType<any> | ReactElement;
		context: 'menu' | 'main';
	};
}

const CNEditor = loadable(() => import('../cnEditor/cnEditor.comp'), {
	resolveComponent: (module) => module['CNEditor'],
});

export const Editor = ({
	config,
	pluginComp,
	pluginLoaderComp,
	defaultPluginData,
	...restProps
}: IEditorProps<any>) => {
	const match = useRouteMatch();
	const { vendor } = match.params as any;
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
	const pagesMap = config.sections.reduce(
		(map, { id, component, context }) => {
			map.set(id, {
				comp: component,
				context: context || 'menu',
			});
			return map;
		},
		new Map<
			TActivePage,
			{
				comp: ComponentType<any> | ReactElement;
				context: 'menu' | 'main';
			}
		>()
	);

	return {
		menuItems: config.sections as any[],
		pageToComp: (activePage: TActivePage) => {
			return pagesMap.get(activePage)!;
		},
	};
}
