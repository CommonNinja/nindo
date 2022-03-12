import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-dts';
import typescript from '@rollup/plugin-typescript'

const isExternal = (id) => !id.startsWith('.') && !path.isAbsolute(id);
const resolvePath = (str) => path.resolve(__dirname, str);

export default defineConfig(() => ({
	// esbuild: {
	// 	jsxInject: "import React from 'react'",
	// },
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: isExternal,
		},
	},
	plugins: [
    dts(),
    typescript({
      'target': 'es2020',
      'rootDir': resolvePath('./src'),
      'declaration': true,
      'declarationDir': resolvePath('./dist'),
      exclude: resolvePath('./node_modules/**'),
      allowSyntheticDefaultImports: true
    })
  ],
}));
