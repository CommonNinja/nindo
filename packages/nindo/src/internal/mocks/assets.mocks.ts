import { v4 as uuidv4 } from 'uuid';
import { basicMockConfig } from './basic.config';

const { origin, responseBody } = basicMockConfig;

export const assetMocks = () => {
	const assetsGet = {
		id: uuidv4(),
		active: true,
		method: 'GET',
		url: `${origin}/api/v1/asset*?*`,
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
					docs: [
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: null,
							name: 'IMG_3389.jpg',
							url: 'https://uploads.commoninja.com/others/1621417866352_IMG_3389.jpg',
							guid: 'fb107248-3275-4c01-905c-b7876c5b14a9',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: null,
							name: 'IMG_3389.jpg',
							url: 'https://uploads.commoninja.com/others/1621417840408_IMG_3389.jpg',
							guid: '57b3ea07-6707-43ed-ac60-c94b0b5fedf1',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: null,
							name: 'IMG_2236 (1).jpg',
							url: 'https://uploads.commoninja.com/others/1621417814505_IMG_2236_1.jpg',
							guid: 'ffaaba7a-b745-4f31-a9f6-7f2015982771',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: null,
							name: 'IMG_2236.jpg',
							url: 'https://uploads.commoninja.com/others/1621417802723_IMG_2236.jpg',
							guid: '5ff57986-2f1c-4c48-b3d3-eb9de6bf39a1',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: 'd55a56bc-362f-4ab3-8204-681e7c63f057',
							name: 'pexels-shiny-diamond-3762453 (1).jpg',
							url: 'https://uploads.commoninja.com/others/1621412410193_pexels-shiny-diamond-3762453_1.jpg',
							guid: '94f9d2b3-98da-4313-8a3e-a993fc4488f0',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: 'd55a56bc-362f-4ab3-8204-681e7c63f057',
							name: 'pexels-shiny-diamond-3762453.jpg',
							url: 'https://uploads.commoninja.com/others/1621412272429_pexels-shiny-diamond-3762453.jpg',
							guid: 'b751877e-fe65-4f50-856d-32fb428e99e1',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: 'd55a56bc-362f-4ab3-8204-681e7c63f057',
							name: 'pexels-castorly-stock-3682293.jpg',
							url: 'https://uploads.commoninja.com/others/1621412224873_pexels-castorly-stock-3682293.jpg',
							guid: '7f5bc0dd-e956-4473-af80-ea8042a6745c',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: null,
							name: 'updates.png',
							url: 'https://uploads.commoninja.com/others/1615115545924_updates.png',
							guid: 'be04a775-cba9-4a55-bbf1-d7c315b47110',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: null,
							name: 'store.png',
							url: 'https://uploads.commoninja.com/others/1615115540814_store.png',
							guid: '3198b2ea-58ec-4293-b9b6-ecdb9b9f491d',
						},
						{
							serviceName: 'commonninja',
							assetType: 'image',
							componentId: null,
							name: 'megaphone.jpg',
							url: 'https://uploads.commoninja.com/others/1615115534993_megaphone.jpg',
							guid: 'e6e46a9b-916f-4032-8774-5548e82890d8',
						},
					],
				},
			},
		},
		name: 'Get Assets',
		origin: origin,
	};

	return [assetsGet];
};
