import { pluginService } from '../../internal/services/plugin.service';
import { IPlugin, TPluginState } from '../types';

export const getDefaultPlugin = <T>(
	data: T,
	name?: string,
	status?: TPluginState
): IPlugin<T> => ({
	type: pluginService.pluginType,
	guid: null,
	galleryId: null,
	data,
	modelVersion: 1,
	name: name || 'My App',
	description: null,
	previewImage: null,
	privacy: 'public',
	status: status || 'published',
	creationSource: 'website',
	planFeatures: {},
});
