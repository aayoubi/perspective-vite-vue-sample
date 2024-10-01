import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import PerspectiveEsBuildPlugin from "@finos/perspective-esbuild-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["perspective-viewer"].includes(tag)  ,
        }
      }
    }),
  ],
  optimizeDeps: { esbuildOptions: { target: 'esnext' } },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
