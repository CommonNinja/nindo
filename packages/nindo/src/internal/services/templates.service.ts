import { HttpService } from '../../external/services/http.service';

const apiBaseUrl: string = process.env.REACT_APP_PLUGIN_API_URL || '';

class TemplatesService extends HttpService {
	async getComponentTemplates(componentType: string) {
		return await this.makeRequest(
			`${apiBaseUrl}/api/v1/plugin/templates?componentType=${componentType}`
		);
	}
}

export const templatesService = new TemplatesService();
