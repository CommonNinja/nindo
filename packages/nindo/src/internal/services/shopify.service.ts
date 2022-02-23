import { HttpService } from '../../external/services/http.service';

const apiBaseUrl: string = process.env.REACT_APP_PLUGIN_API_URL || '';

class ShopifyService extends HttpService {
	public async getUserSubscription() {
		const url = `${apiBaseUrl}/api/v1/shopify/userSubscriptions?serviceName=${this.serviceName}&${this.queryParams}`;
		return await this.makeRequest(url);
	}

	public async createUserSubscription(subscriptionTypeId: string) {
		const url = `${apiBaseUrl}/shopify/api/${
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

export const shopifyService = new ShopifyService();
