export interface IHttpResult<T = any> {
	success: boolean;
	message?: string;
	data?: T;
}

export interface ILocalState {
	state: 'init' | 'loading' | 'error' | 'success';
	message: string | null;
}

export interface IPaginationQueryParams {
	q: string;
	page: number;
	limit: number;
	sortBy: string;
	desc: boolean;
}

export interface IPaginationResponse<T = any> {
	docs: T[];
	total: number;
	limit: number;
	offset?: number;
	page: number;
	pages: number;
}
