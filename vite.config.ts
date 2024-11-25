import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'i18next', 'react-i18next', 'i18next-browser-languagedetector']
  }
});