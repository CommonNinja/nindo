import { faPalette, faTable, faCog } from '@fortawesome/free-solid-svg-icons';
import { IEditorConfig } from '../../exports';

import { IPluginData } from '../plugin/plugin.types';
import { ContentSettingsComp } from './contentSettings/contentSettings.comp';
import { StylesSettingsComp } from './stylesSettings/stylesSettings.comp';
import { PluginSettingsComp } from './pluginSettings/pluginSettings.comp';

export function getEditorConfig(): IEditorConfig<IPluginData> {
	return {
		sections: [
			{
				id: 'content',
				component: ContentSettingsComp,
				name: 'Content',
				icon: faTable,
			},
			{
				id: 'styles',
				component: StylesSettingsComp,
				name: 'Look & Feel',
				icon: faPalette,
			},
			{
				id: 'settings',
				component: PluginSettingsComp,
				name: 'Settings',
				icon: faCog,
			},
		],
	};
}
