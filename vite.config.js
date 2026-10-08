import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        // Don't transform public/ image URLs into module imports
        transformAssetUrls: false,
      },
    }),
  ],
  // Relative paths work for both GitHub Pages and Cloudflare Pages
  base: './',
})
