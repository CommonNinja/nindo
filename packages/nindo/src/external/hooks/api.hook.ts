import { useEffect, useState } from 'react';
import { HttpService, IHttpResult } from '../';
import { TPlatform } from '../types';

interface IApiResourceState {
	loading: boolean;
	error?: string;
	data?: any;
}

interface IApiResource extends IApiResourceState {
	fetchResource: () => Promise<void>;
}

const apiBaseUrl: string = process.env.REACT_APP_PLUGIN_API_URL || '';

export function useApi({
	path,
	method = 'get',
	platform = 'nindo',
	data,
	pagination,
}: {
	path: string;
	method?: 'get' | 'post' | 'put' | 'delete';
	platform?: TPlatform;
	data?: any;
	pagination?: {
		q?: string;
		limit?: string;
		page?: string;
	};
}): IApiResource {
	const apiPrefix = '/integrations/api/v1';
	const resourcePath: string = path.startsWith('/') ? path : `/${path}`;
	const finalUrl = resourcePath.startsWith(apiPrefix)
		? resourcePath
		: `${apiPrefix}${resourcePath}`;
	const [status, setStatus] = useState<IApiResourceState>({
		loading: false,
	});

	async function fetchResource(): Promise<void> {
		setStatus({ loading: true });

		try {
			if (!path) {
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

			let paginationQueryParams = '';
			if (method === 'get' && pagination) {
				paginationQueryParams += `page=${pagination.page || ''}&limit=${
					pagination.limit || ''
				}`;
			}

			const response: IHttpResult = await client.makeRequest(
				`${apiBaseUrl}${finalUrl}?platform=${platform}&${paginationQueryParams}${client.queryParams}`,
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
		if (path) {
			fetchResource();
		}
	}, []);

	return { ...status, fetchResource };
}
