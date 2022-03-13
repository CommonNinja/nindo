import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-dts';
import typescript from '@rollup/plugin-typescript'
import react from '@vitejs/plugin-react'

const isExternal = (id) => !id.startsWith('.') && !path.isAbsolute(id);
const resolvePath = (str) => path.resolve(__dirname, str);

export default defineConfig(() => ({
	build: {
		cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Nindo',
			formats: ['es'],
      fileName: (format) => `index.js`
    },
    rollupOptions: {
      external: isExternal,
      // output: {
      //   globals: {
      //     react: 'React'
      //   }
      // }
    }
  },
	// esbuild: {
	// 	jsxInject: "import React from 'react'",
	// },
	// build: {
	// 	target: 'es2015',
	// 	cssCodeSplit: true,
	// 	lib: {
	// 		entry: path.resolve(__dirname, 'src/index.ts'),
	// 		formats: ['es'],
	// 		fileName: 'index',
	// 		name: 'index',
	// 	},
	// 	rollupOptions: {
	// 		external: isExternal,
	// 	},
	// },
	plugins: [
    react(),
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
