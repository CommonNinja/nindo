import { HttpService } from '../../external/services/http.service';
import { IHttpResult } from '../../external/types/http.types';
import { IPlugin } from '../../external/types/plugin.types';
import { TPlatform } from '../../external/types/editor.types';

const apiBaseUrl: string = process.env.REACT_APP_PLUGIN_API_URL || '';
const cdnBaseUrl: string = process.env.REACT_APP_CDN_URL || '';

function addMetaTag(property: string, content: string) {
	const currentTag = document.querySelector(`meta[property="${property}"]`);
	if (currentTag) {
		currentTag.setAttribute('content', content);
		return;
	}

	const link = document.createElement('meta');
	link.setAttribute('property', property);
	link.setAttribute('content', content);
	document.getElementsByTagName('head')[0].appendChild(link);
}

class PluginService extends HttpService {
	public serviceName: string | '' =
		process.env.REACT_APP_NINJA_SERVICE_NAME || '';
	public pluginType: string = process.env.REACT_APP_NINJA_PLUGIN_TYPE || '';

	public setMetaTags(res: IHttpResult): IHttpResult {
		try {
			if (res.success && res.data) {
				const plugin: IPlugin<any> = res.data;

				// Set title
				document.title = `${plugin.name} | Common Ninja`;

				// Site Title
				addMetaTag('og:site_name', 'Common Ninja');

				// Title
				addMetaTag('og:title', `${plugin.name} | Common Ninja`);

				// Description
				addMetaTag('og:image', plugin.previewImage || '');

				// Image
				addMetaTag(
					'og:description',
					`${plugin.name} - Powered by Common Ninja`
				);

				// Url
				addMetaTag(
					'og:url',
					typeof window !== 'undefined' ? window?.top?.location.href || '' : ''
				);

				// Twitter Card
				addMetaTag('twitter:card', 'summary_large_image');

				// Twitter User
				addMetaTag('twitter:site', '@CommonNinja');

				// Twitter image alt
				addMetaTag('twitter:image:alt', plugin.name);
			}
		} catch (e) {}

		return res;
	}

	public async get(pluginId: string = '') {
		const url = `${
			cdnBaseUrl || apiBaseUrl
		}/api/v1/plugin/viewer/${pluginId}?serviceName=${this.serviceName}`;
		return await this.makeRequest(url).then(this.setMetaTags);
	}

	public async getByGalleryId(
		galleryId: string = '',
		includeData: boolean = false
	) {
		const url = `${
			cdnBaseUrl || apiBaseUrl
		}/api/v1/plugin/gallery/${galleryId}?serviceName=${
			this.serviceName
		}&includeData=${includeData}&${this.queryParams}`;
		return await this.makeRequest(url).then(this.setMetaTags);
	}

	public async getForEditor(
		pluginId: string = '',
		defaultPluginData?: IPlugin<any>,
		vendor?: TPlatform
	) {
		const url = `${apiBaseUrl}/api/v1/${
			vendor ? vendor + '/' : ''
		}plugin/${pluginId}?pluginType=${this.pluginType}&serviceName=${
			this.serviceName
		}&${this.queryParams}`;
		return await this.makeRequest(url).then((res) => {
			if (res.success && res.data) {
				res.data = {
					...(defaultPluginData || {}),
					...res.data,
				};

				this.setMetaTags(res);
			}
			return res;
		});
	}

	public async create(body: any, vendor?: TPlatform) {
		return await this.makeRequest(
			`${apiBaseUrl}/api/v1/${vendor ? vendor + '/' : ''}plugin/?pluginType=${
				this.pluginType
			}&serviceName=${this.serviceName}&${this.queryParams}`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					data: body.data,
					name: body.name,
					description: body.description,
					privacy: body.privacy,
					modelVersion: body.modelVersion,
					status: body.status,
				}),
			}
		);
	}

	public async update(pluginId: string = '', body: any, vendor?: TPlatform) {
		return await this.makeRequest(
			`${apiBaseUrl}/api/v1/${
				vendor ? vendor + '/' : ''
			}plugin/${pluginId}?pluginType=${this.pluginType}&serviceName=${
				this.serviceName
			}&${this.queryParams}`,
			{
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					data: body.data,
					name: body.name,
					description: body.description,
					privacy: body.privacy,
					modelVersion: body.modelVersion,
					status: body.status,
				}),
			}
		);
	}
}

export const pluginService = new PluginService();
