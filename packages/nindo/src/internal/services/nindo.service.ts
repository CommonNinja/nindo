import { HttpService } from '../../external/services/http.service';

const apiBaseUrl: string = process.env.REACT_APP_PLUGIN_API_URL || '';

class NindoService extends HttpService {
	async updateSubscription(subscriptionTypeId: string) {
		const url = `/nindo/api/${
			subscriptionTypeId ? 'createSubscription' : 'cancelSubscription'
		}/${this.pluginType}?${this.queryParams}`;
		return await this.makeRequest(url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				subscriptionTypeId,
			}),
		});
	}
}

export const nindoService = new NindoService();
