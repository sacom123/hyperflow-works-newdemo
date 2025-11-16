import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // AVIF 이미지는 그대로 유지
          if (assetInfo.name && assetInfo.name.endsWith('.avif')) {
            return 'assets/images/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
})

