import { fileURLToPath, URL } from 'node:url'
import topLevelAwait from "vite-plugin-top-level-await"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: "vue_documents",
      filename: "remoteEntry.js",
      exposes: {
        "./DocumentsPage": "./src/pages/DocumentsPage/DocumentsPage.vue",
      },
      shared: ["vue", "pinia"],
    }),
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`,
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
