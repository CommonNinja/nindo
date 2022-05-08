import { IApiPaginationResponse, IProduct } from '@commonninja/types';
import {
	useAppContext,
	useGlobalState,
	Toolbar,
	useApi,
	Card,
	Button,
	APIService,
} from '../../exports';

import './dashboard.scss';

export const Dashboard = () => {
	const { appType, platform } = useAppContext();
	const { loading, error, data } = useApi<IApiPaginationResponse<IProduct>>({
		resourcePath: 'ecommerce/products',
		pagination: {
			limit: 10,
		},
	});
	const [appState, updateAppState] = useGlobalState<{ test: string }>();

	async function uploadImage() {
		const elm: HTMLInputElement | null = document.querySelector('#file');
		if (!elm) {
			return;
		}
		const files = elm.files;
		if (!files?.length) {
			return;
		}

		const data = new FormData();
    data.append('file', files[0]);

		try {
			await new APIService().request({
				method: 'post',
				resourcePath: 'storage/files',
				data,
				dataType: 'form-data',
			});
		} catch (e) {
			console.error(e);
			alert((e as Error).message);
		}
	}

	function renderProducts() {
		if (loading) {
			return <>Loading...</>;
		}

		if (error) {
			return error;
		}

		return (
			<section className="cards">
				{(data?.items || []).map((product) => (
					<Card
						key={product.id}
						title={product.title}
						imgUrl={product.images?.[0]}
					/>
				))}
			</section>
		);
	}

	return (
		<>
			<Toolbar />
			<div className="dashboard editor-plugin-preview">
				<h1>App Config</h1>
        <section>
          <p>App Type: {appType}</p>
          <p>Platform: {platform || 'none'}</p>
          <p>App State: {appState.test || 'empty'}</p>
          <button onClick={() => updateAppState({ test: 'clicked!' })}>
            Click me
          </button>
        </section>

				<h1>Storage API</h1>
				<section>
					<p>Click to upload image</p>
					<input type="file" id="file" />
					<Button onClick={uploadImage}>Upload</Button>
				</section>

				<h1>Shop Products</h1>
				{renderProducts()}
			</div>
		</>
	);
};
