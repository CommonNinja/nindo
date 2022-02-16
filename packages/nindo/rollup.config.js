// Setup is based on the following article:
// https://www.codefeetime.com/post/tree-shaking-a-react-component-library-in-rollup/

import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import visualizer from 'rollup-plugin-visualizer';

export default [
	{
		input: ['src/index.ts'],
		output: {
			dir: 'dist',
			format: 'esm',
			preserveModules: true,
			preserveModulesRoot: 'src',
			sourcemap: true,
		},
		globals: {
			quill: 'Quill'
		},
		plugins: [
			postcss(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				declaration: true,
				declarationDir: 'dist/types',
			}),
			nodeResolve(),
			// Create stats.html file
			visualizer(),
		],
		external: [
			// Use external version of React
			// To prevent loading react twice
			'react',
			'react-dom',
			'react-router-dom',
			'react-is',
		],
	},
	{
		input: 'dist/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.(css|less|scss)$/],
	},
];
