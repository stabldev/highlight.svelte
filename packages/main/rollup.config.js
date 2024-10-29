import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';

import { readFileSync } from 'fs';
const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
);

/** @type {import('rollup').RollupOptions[]} */
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
  {
    input: './src/index.d.ts',
    output: { file: pkg.types, format: 'es' },
    plugins: [dts()],
  },
];

export default config;
