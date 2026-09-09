import path from 'path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { mochiPlugin } from '@mochi/web/vite'
import { lingui } from '@lingui/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    mochiPlugin() as unknown as Plugin,
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react({
      plugins: [['@lingui/swc-plugin', {}]],
    }),
    lingui(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      // jiti (Node-only, via @lingui/conf) leaks into the browser bundle on
      // Node 20 and fails on its node:module import; stub it out.
      { find: /^jiti(\/.*)?$/, replacement: path.resolve(__dirname, './empty.mjs') },
    ],
  },
})
