import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from "vite"
import topLevelAwait from "vite-plugin-top-level-await"
import federation from "@originjs/vite-plugin-federation"
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    plugins: [
      vue(),
      vueDevTools(),
      federation({
        name: "host",
        remotes: {
          vue_documents: `http://localhost:4178/assets/remoteEntry.js`,
          vue_main: `http://localhost:4174/assets/remoteEntry.js`,
          vue_news: `http://localhost:4175/assets/remoteEntry.js`,
          vue_profile: `http://localhost:4177/assets/remoteEntry.js`,
          vue_staff: `http://localhost:4176/assets/remoteEntry.js`,
        },
        shared: [
          "vue",
          "pinia",
          "vue-router"
        ],
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
  }
})
