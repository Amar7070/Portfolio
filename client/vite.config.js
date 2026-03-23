import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
             if (id.includes('framer-motion')) return 'vendor-framer';
             if (id.includes('react-icons')) return 'vendor-icons';
             if (id.includes('react-router-dom')) return 'vendor-router';
             return 'vendor'; // all other node_modules
          }
        }
      }
    }
  }
})
