import { IProduct } from '@commonninja/types';
import { v4 as uuidv4 } from 'uuid';

import { basicMockConfig } from './basic.config';

const { origin, responseBody } = basicMockConfig;

const baseUrl = `${origin}/nindo/api/v1`;

export const apiMocks = () => {
	const getProducts = {
		id: uuidv4(),
		active: true,
		method: 'GET',
		url: `${baseUrl}/products*?*`,
		headers: {},
		params: '',
		response: {
			status: 200,
			delay: 150,
			headers: {
				'content-type': 'application/json',
			},
			body: { 
        ...responseBody,
        data: {
          limit: 10,
          nextPage: 2,
          page: 1,
          pages: 2,
          prevPage: null,
          total: 20,
          items: [
            {
              createdAt: '2022-01-01T00:00:00.000Z',
              description: 'My first product',
              id: 'test-1',
              image: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg',
              images: [],
              price: {
                value: 4.99,
                currencyCode: 'USD',
              },
              title: 'My Product',
              updatedAt: '2022-02-01T00:00:00.000Z',
              url: 'https://www.example.com',
            },
            {
              createdAt: '2022-01-01T00:00:00.000Z',
              description: 'My second product',
              id: 'test-2',
              image: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg',
              images: [],
              price: {
                value: 4.99,
                currencyCode: 'USD',
              },
              title: 'My Product 2',
              updatedAt: '2022-02-01T00:00:00.000Z',
              url: 'https://www.example.com',
            },
          ] as IProduct[]
        }
      },
		},
		name: 'Report event',
		origin: origin,
	};

	return [getProducts];
};
