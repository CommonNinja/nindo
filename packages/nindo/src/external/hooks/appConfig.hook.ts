import { getAppConfig } from '../../internal/services/config.service';

export function useAppConfig<T>(): T {
	return getAppConfig<T>();
}
