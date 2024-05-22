import { defineConfig } from 'vite';
import { resolve } from 'path'
import dts from "vite-plugin-dts";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'

export default defineConfig({
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  plugins: [
    // wasm(),
    // topLevelAwait({
    //   // The export name of top-level await promise for each chunk module
    //   promiseExportName: "__tla",
    //   // The function to generate import names of top-level await promise in each chunk module
    //   promiseImportName: i => `__tla_${i}`
    // }),
    libAssetsPlugin({
      include: /\.?wasm(\?.*)?$/,
      outputPath: "."
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        'wasm-avif': './src/index.js',
        worker_bg: './src/worker_bg.js'
      },
      formats: ['es']
    },
  }
});
