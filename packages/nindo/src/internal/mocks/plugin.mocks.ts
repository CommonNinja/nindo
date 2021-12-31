import { v4 as uuidv4 } from 'uuid';

import { IPlugin } from '../../external/types/plugin.types';
import { IUserStateMocks } from '../../external/types/mocks.types';
import { basicMockConfig } from './basic.config';

const { origin, responseBody } = basicMockConfig;

export const pluginMocks = ({ planFeaturesData }: IUserStateMocks, defaultPlugin: IPlugin<any>) => {
	const existingPlugin = {
		...defaultPlugin,
		guid: 'test',
		galleryId: 'test',
		name: 'Existing Plugin',
	};
	
	const getDefaultForEditor = {
		id: uuidv4(),
		active: true,
		method: 'GET',
		url: `${origin}/api/v1/plugin/?*`,
		headers: {},
		params: '',
		response: {
			status: 200,
			delay: 298,
			headers: {
				'content-type': 'application/json',
			},
			body: {
				...responseBody,
				data: {
					creationSource: 'website',
					tier: 'free',
					planFeatures: {
						...planFeaturesData
					}
				},
			},
		},
		name: 'Get default plugin data',
		origin: origin,
	};
	
	const getExistingForEditor = {
		id: uuidv4(),
		active: true,
		method: 'GET',
		url: `${origin}/api/v1/plugin/*?*`,
		headers: {},
		params: '',
		response: {
			status: 200,
			delay: 491,
			headers: {
				'content-type': 'application/json',
			},
			body: {
				...responseBody,
				data: {
					...existingPlugin,
					planFeatures: {
						...planFeaturesData
					}
				},
			},
		},
		name: 'Get existing plugin data',
		origin: origin,
	};
	
	const getForViewer = {
		id: uuidv4(),
		active: true,
		method: 'GET',
		url: `${origin}/api/v1/plugin/viewer/*?*`,
		headers: {},
		params: '',
		response: {
			status: 200,
			delay: 491,
			headers: {
				'content-type': 'application/json',
			},
			body: {
				...responseBody,
				data: {
					...existingPlugin,
					planFeatures: {
						...planFeaturesData
					}
				},
			},
		},
		name: 'Get plugin for viewer',
		origin: origin,
	};
	
	const getForGallery = {
		id: uuidv4(),
		active: true,
		method: 'GET',
		url: `${origin}/api/v1/plugin/gallery/*?*`,
		headers: {},
		params: '',
		response: {
			status: 200,
			delay: 491,
			headers: {
				'content-type': 'application/json',
			},
			body: {
				...responseBody,
				data: {
					...existingPlugin,
					planFeatures: {
						...planFeaturesData
					}
				},
			},
		},
		name: 'Get plugin for gallery',
		origin: origin,
	};
	
	const createPlugin = {
		id: uuidv4(),
		active: true,
		method: 'POST',
		url: `${origin}/api/v1/plugin/?*`,
		headers: {},
		params: '*',
		response: {
			status: 200,
			delay: 70,
			headers: {
				'content-type': 'application/json',
			},
			body: {
				...responseBody,
				data: {
					...existingPlugin,
					planFeatures: {
						...planFeaturesData
					}
				},
			},
		},
		name: 'Create plugin',
		origin: origin,
	};
	
	const updatePlugin = {
		id: uuidv4(),
		active: true,
		method: 'PUT',
		url: `${origin}/api/v1/plugin/*?*`,
		headers: {},
		params: '*',
		response: {
			status: 200,
			delay: 80,
			headers: {
				'content-type': 'application/json',
			},
			body: {
				...responseBody,
				data: {
					...existingPlugin,
					planFeatures: {
						...planFeaturesData
					}
				},
			},
		},
		name: 'Update plugin',
		origin: origin,
	};

	return [
		getDefaultForEditor,
		getExistingForEditor,
		getForViewer,
		getForGallery,
		createPlugin,
		updatePlugin,
	];
}
