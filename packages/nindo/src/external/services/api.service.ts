import { IHttpResult, TPlatform } from '../types';
import { HttpService } from './http.service';

const apiBaseUrl: string = process.env.REACT_APP_CN_API_URL || '';

export type THttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface IPaginationParams {
  limit?: number;
	page?: string | number;
  [key: string]: any;
}

export interface IAPIProps {
  resourcePath: string;
	method?: THttpMethod;
	platform?: TPlatform;
	data?: any;
  pagination?: IPaginationParams
}

export class APIService extends HttpService {
	public async request<T = {}>({
    resourcePath,
		method = 'get',
		platform = 'nindo',
		data,
    pagination, 
	}: IAPIProps): Promise<IHttpResult> {
		const finalBaseUrl = apiBaseUrl.endsWith('/')
			? apiBaseUrl.slice(0, -1)
			: apiBaseUrl;
		const finalResourcePath: string = resourcePath.startsWith('/')
			? resourcePath
			: `/${resourcePath}`;

		const options: any = {};

		if (data) {
			options.body = JSON.stringify(data);
			options.headers = {
				'Content-Type': 'application/json',
			};
		}

		let localQueryParams = `pluginType=${this.pluginType}&platform=${platform}`;
		if (method === 'get' && pagination) {
      Object.keys(pagination).forEach(key => {
        localQueryParams += `&${key}=${pagination[key]}`;
      });
		}

		if (this.queryParams) {
			localQueryParams += `&${this.queryParams}`;
		}

		const response: IHttpResult<T> = await this.makeRequest(
			`${finalBaseUrl}${finalResourcePath}?${localQueryParams || ''}`,
			{
				method,
				...options,
			}
		);

		return response;
	}
}
