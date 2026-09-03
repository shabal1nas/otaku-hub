import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/app/styles/helpers" as *;',
      },
    },
  },
})