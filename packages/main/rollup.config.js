import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: './src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', exports: 'default' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [terser()],
  },
  {
    input: './src/browser.js',
    output: {
      file: pkg.browser,
      name: 'svelte',
      format: 'iife',
    },
    external: false,
    plugins: [resolve(), commonjs(), terser()],
  },
];

export default config;
