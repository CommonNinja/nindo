const path = require('path');

module.exports = {
	stories: ['../stories/**/*.stories.@(tsx|mdx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-scss',
		'@storybook/addon-backgrounds',
		'@storybook/addon-measure',
	],
	framework: '@storybook/react',
};

