import { useEffect, useState } from 'react';
import { IHttpResult } from '../../external/types/http.types';
import { HttpService } from '../../external/services/http.service';
import { TPlatform } from '../../external/types/editor.types';

interface IApiResourceState {
	loading: boolean;
	error?: string;
	data?: any;
}

interface IApiResource extends IApiResourceState {
	fetchResource: () => Promise<void>;
}

const apiBaseUrl: string = process.env.REACT_APP_CN_API_URL || '';

export function useApi({
	resourcePath,
	method = 'get',
	platform = 'nindo',
	data,
	pagination,
}: {
	resourcePath: string;
	method?: 'get' | 'post' | 'put' | 'delete';
	platform?: TPlatform;
	data?: any;
	pagination?: {
		q?: string;
		limit?: string;
		page?: string;
	};
}): IApiResource {
	const finalBaseUrl = apiBaseUrl.endsWith('/') ? apiBaseUrl.slice(0, -1) : apiBaseUrl;
	const finalResourcePath: string = resourcePath.startsWith('/') ? resourcePath : `/${resourcePath}`;
	const [status, setStatus] = useState<IApiResourceState>({
		loading: false,
	});

	async function fetchResource(): Promise<void> {
		setStatus({ loading: true });

		try {
			if (!resourcePath) {
				throw new Error('Path is required');
			}

			const client = new HttpService();
			const options: any = {};

			if (data) {
				options.body = JSON.stringify(data);
				options.headers = {
					'Content-Type': 'application/json',
				};
			}

			let localQueryParams = `platform=${platform}`;
			if (method === 'get' && pagination) {
				localQueryParams += `&page=${pagination.page || ''}&limit=${
					pagination.limit || ''
				}`;
			}

			if (client.queryParams) {
				localQueryParams += `&${client.queryParams}`;
			}

			const response: IHttpResult = await client.makeRequest(
				`${finalBaseUrl}${finalResourcePath}?${localQueryParams}`,
				{
					method,
					...options,
				}
			);

			if (!response.success) {
				throw new Error(response.message);
			}

			setStatus({
				loading: false,
				data: response.data,
			});
		} catch (e) {
			setStatus({
				loading: false,
				error: (e as Error).message,
			});
		}
	}

	useEffect(() => {
		if (resourcePath) {
			fetchResource();
		}
	}, []);

	return { ...status, fetchResource };
}
