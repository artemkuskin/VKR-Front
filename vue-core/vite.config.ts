import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from "vite"

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
          vue_documents: `${process.env.VUE_DOCUMENTS ?? "$VUE_DOCUMENTS"}/assets/remoteEntry.js`,
          vue_main: `${process.env.VUE_MAIN ?? "$VUE_MAIN"}/assets/remoteEntry.js`,
          vue_news: `${process.env.VUE_NEWS ?? "$VUE_NEWS"}/assets/remoteEntry.js`,
          vue_profile: `${process.env.VUE_PROFILE ?? "$VUE_PROFILE"}/assets/remoteEntry.js`,
          vue_staff: `${process.env.VUE_STAFF ?? "$VUE_STAFF"}/assets/remoteEntry.js`,
        },
        shared: [
          "vue",
          "pinia",
          "vue-router",
          "axios"
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
