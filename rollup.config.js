import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import multiEntry from "rollup-plugin-multi-entry";
import includePaths from 'rollup-plugin-includepaths';
import stylus from 'rollup-plugin-stylus-compiler';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';

import pkg from './package.json';

/* For resolving from base paths */
const includePathOptions = {
  include: {},
  paths: ['src', 'src/assets', 'src/styles'],
  external: [],
  extensions: ['.js', '.svg', '.styl']
};

const outputDir = 'dist/';

export default [
  /* Rollup config for bundling React UI components */

  {
    input: "src/components/index.js",
    // input: "src/components/**/*.js",
    output: [
      {
        file: path.join(outputDir, pkg.main.replace(/\.js$/, `.min.js`)),
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      includePaths(includePathOptions),
      multiEntry(),
      svgr(),
      stylus({
        include: ['src/components/**/*.styl', 'src/styles/**/*.styl'],
        compiler: {
          globals: {
            $vars: path.resolve('src/styles/_vars.styl')
          }
        }
      }),
      postcss({
        include: ['src/components/**/*.css', 'src/styles/**/*.css'],
        modules: false,
        plugins: [
          autoprefixer,
        ],
        extract: path.join(outputDir, 'base.css'),
        sourceMap: true,
      }),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
        runtimeHelpers: true
      }),
      resolve(), // so Rollup can find imported library
      commonjs(), // so Rollup can convert `imported library to an ES module
    ],
    external: [
      ...Object.keys(pkg.peerDependencies || {})
    ], // libraries used which are not to be imported with the bundle
  },

  /* Rollup config for building add-on ui css as utility */

  {
    input: 'src/styles/ui.styl',
    output: {
      file: path.join(outputDir, 'ui.css'),
      format: 'es'
    },
    plugins: [
      stylus({
        include: ['src/styles/**/*.styl']
      }),
      postcss({
        include: ['src/styles/**/*.css'],
        modules: false,
        plugins: [
          autoprefixer,
        ],
        extract: true,
        sourceMap: true,
      }),
    ]
  },
];
