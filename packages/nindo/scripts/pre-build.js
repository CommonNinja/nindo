// console.log('>>> Getting component types');

// const fs = require('fs');
// const https = require('https');

// function tsCompile(source) {
// 	const ts = require('typescript');
// 	const options = {
// 		compilerOptions: {
// 			module: ts.ModuleKind.CommonJS,
// 		},
// 	};
// 	return ts.transpileModule(source, options).outputText;
// }

// function updateComponentTypes(components) {
// 	const content = `
// export type TComponentType = ${components
// 		.map((comp) => `'${comp.name}'`)
// 		.join(' | ')};

// export enum ServiceName {
//   COMMONNINJA = 'commoninja',
// ${components
// 	.map((comp) => {
// 		const serviceName = comp.serviceName;
// 		return `  ${serviceName.toUpperCase()} = '${serviceName}'`;
// 	})
// 	.join(`,\n`)}
// }

// export enum ServiceDisplayName {
//   COMMONNINJA = 'Common Ninja',
// ${components
// 	.map((comp) => {
// 		const { serviceName, displayName } = comp;
// 		return `  ${serviceName.toUpperCase()} = '${displayName}'`;
// 	})
// 	.join(`,\n`)}
// }

// export enum Component {
//   UNKNOWN = 'unknown',
// ${components
// 	.map((comp) => {
// 		const { name } = comp;
// 		return `  ${name.toUpperCase()} = '${name}'`;
// 	})
// 	.join(`,\n`)}
// }

// export const ComponentToServiceName = new Map<Component, ServiceName>([
// ${components
// 	.map((comp) => {
// 		const { name, serviceName } = comp;
// 		return `  [Component.${name.toUpperCase()}, ServiceName.${serviceName.toUpperCase()}]`;
// 	})
// 	.join(`,\n`)}
// ]);

// export const ServiceNameToComponent = new Map<ServiceName, Component>([
// ${components
// 	.map((comp) => {
// 		const { name, serviceName } = comp;
// 		return `  [ServiceName.${serviceName.toUpperCase()}, Component.${name.toUpperCase()}]`;
// 	})
// 	.join(`,\n`)}
// ]);

// export interface IPluginListing {
//   name: TComponentType;
//   displayName: string;
//   iconClass: string;
//   buttonText: string;
//   slug: string;
//   teaser: string;
//   serviceName: string;
//   priority: number;
//   developerId: string;
//   status: 'draft' | 'published' | 'deleted';
//   iconPaths?: number;
//   categories?: string[];
//   ribbon?: string;
//   helpCenterLink?: string;
//   meta?: {
//     hero: {
//       imageUrl: string;
//       pluginId?: string;
//     },
//     keyBenefits: {
//       title: string;
//       description: string;
//       icon: string;
//     }[];
//     keyFeatures: {
//       title: string;
//       description: string;
//       imageUrl: string;
//     }[];
//     faq: {
//       question: string;
//       answer: string;
//     }[];
//     seo: {
//       title: string;
//       description: string;
//       keywords: string[];
//       image?: string;
//     }
//   };
// }

// export const pluginsList: IPluginListing[] = ${JSON.stringify(
// 		components
// 	)} as IPluginListing[];
//   `.trim();

// 	try {
// 		fs.writeFileSync('./src/external/types/component.types.ts', content);
// 	} catch (e) {}

// 	try {
// 		const tsRes = tsCompile(content);
// 		fs.writeFileSync(
// 			'./dist/types/external/types/component.types.d.ts',
// 			content.replace(/export /g, 'export declare ')
// 		);
// 		fs.writeFileSync('./dist/types/external/types/component.types.js', tsRes);
// 	} catch (e) {}
// }

// function updateIconTypes(components) {
// 	const content = `
// export type TPluginIcon = 
// ${components
// 	.map((comp) => {
// 		const { iconClass } = comp;
// 		return `  '${iconClass}'`;
// 	})
// 	.join(` | \n`)};

// export const iconToNumberOfPaths: { [key: string]: number } = {
// ${components
// 	.map((comp) => {
// 		const { iconClass, iconPaths } = comp;
// 		return `  '${iconClass}': ${iconPaths || 1}`;
// 	})
// 	.join(`,\n`)}
// };
//   `.trim();

// 	try {
// 		fs.writeFileSync('./src/external/types/icon.types.ts', content);
// 	} catch (e) {}

// 	try {
// 		const tsRes = tsCompile(content);
// 		fs.writeFileSync(
// 			'./dist/types/external/types/icon.types.d.ts',
// 			content.replace(/export /g, 'export declare ')
// 		);
// 		fs.writeFileSync('./dist/types/external/types/icon.types.js', tsRes);
// 	} catch (e) {}
// }

// https
// 	.get('https://www.commoninja.com/api/v1/plugin/types', (res) => {
// 		let data = [];

// 		console.log('Component types status Code:', res.statusCode);

// 		res.on('data', (chunk) => {
// 			data.push(chunk);
// 		});

// 		res.on('end', () => {
// 			const result = JSON.parse(Buffer.concat(data).toString());
// 			const components = result.data || [];

// 			updateComponentTypes(components);
// 			updateIconTypes(components);
// 		});
// 	})
// 	.on('error', (err) => {
// 		console.log('Error: ', err.message);
// 	});
