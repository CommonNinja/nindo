module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'.(css|less|scss)$': 'identity-obj-proxy',
	},
	testMatch: ['<rootDir>/src/**/*.test.*'],
};
