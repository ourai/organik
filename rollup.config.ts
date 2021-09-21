import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';

const pkg = require('./package.json'); // eslint-disable-line @typescript-eslint/no-var-requires

export default {
  input: `src/index.ts`,
  output: [{ file: pkg.module, format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: ['@ntks/toolbox', '@ntks/event-emitter'],
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
};
