import { useEffect, useState } from 'react';
import { IHttpResult } from '../../external/types/http.types';
import {
	APIService,
	IAPIProps,
} from '../services';
import { useAppContext } from './context.hook';

interface IApiResourceState<T> {
	loading: boolean;
	error?: string;
	data?: T;
}

interface IApiResource<T> extends IApiResourceState<T> {
	fetchResource: () => Promise<void>;
}

export function useApi<T = {}>({
	resourcePath,
	method = 'get',
	platform = 'nindo',
	data,
	pagination,
}: IAPIProps): IApiResource<T> {
	const { instanceId = '' } = useAppContext();
	const [status, setStatus] = useState<IApiResourceState<T>>({
		loading: false,
	});

	async function fetchResource(): Promise<void> {
		setStatus({ loading: true });

		try {
			if (!resourcePath) {
				throw new Error('Path is required');
			}

			const client = new APIService();
			const response: IHttpResult = await client.request<T>({
				method,
				resourcePath,
				platform,
				data,
				pagination: {
					...pagination,
					componentId: instanceId,
				},
			});

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
