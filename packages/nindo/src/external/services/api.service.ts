import { IHttpResult, IPaginationResponse, TPlatform } from '../types';
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
	data?: any;
	pagination?: IPaginationParams;
	headers?: any;
}

export class APIService extends HttpService {
	public platform: TPlatform;

	constructor(platform?: TPlatform) {
		super();
		this.platform = platform || 'nindo';
	}

	public async request<T = any>({
		resourcePath,
		method = 'get',
		data,
		pagination,
		headers = {},
	}: IAPIProps): Promise<IHttpResult<T>> {
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
				...headers,
			};
		}

		let localQueryParams = `pluginType=${this.pluginType}&platform=${this.platform}`;
		if (method === 'get' && pagination) {
			Object.keys(pagination).forEach((key) => {
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

	public async get<T = any>({ resourcePath, pagination, headers }: IAPIProps) {
		return await this.request<IPaginationResponse<T>>({
			method: 'get',
			resourcePath,
			pagination,
			headers,
		});
	}

	public async getOne<T = any>({ resourcePath, headers }: IAPIProps) {
		return await this.request<T>({
			method: 'get',
			resourcePath,
			headers,
		});
	}

	public async create<T = any>({ resourcePath, data, headers }: IAPIProps) {
		return await this.request<T>({
			method: 'post',
			resourcePath,
			data,
			headers,
		});
	}

	public async update<T = any>({ resourcePath, data, headers }: IAPIProps) {
		return await this.request<T>({
			method: 'put',
			resourcePath,
			data,
			headers,
		});
	}

	public async delete<T = any>({ resourcePath, headers }: IAPIProps) {
		return await this.request<T>({
			method: 'delete',
			resourcePath,
			headers,
		});
	}
}
