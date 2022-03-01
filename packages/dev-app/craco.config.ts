// @ts-ignore
const path = require('path');

module.exports = {
	webpack: {
		configure: (webpackConfig: any) => {
			webpackConfig.resolve.plugins.map((plugin: any) => {
				if (plugin.constructor.name === `ModuleScopePlugin`) {
					plugin.appSrcs = [
						...plugin.appSrcs,
						path.resolve(__dirname, '..', 'nindo', 'dist'),
					];
					// console.log('plugin', plugin.appSrcs);
				}
				return plugin;
			});
			return webpackConfig;
		},
	},
};
