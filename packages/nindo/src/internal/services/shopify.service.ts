import { HttpService } from '../../external/services/http.service';

const apiBaseUrl: string = process.env.REACT_APP_PLUGIN_API_URL || '';

class ShopifyService extends HttpService {
	public async getUserSubscription() {
		const url = `${apiBaseUrl}/api/v1/shopify/userSubscriptions?serviceName=${this.serviceName}&${this.queryParams}`;
		return await this.makeRequest(url);
	}
}

export const shopifyService = new ShopifyService();
