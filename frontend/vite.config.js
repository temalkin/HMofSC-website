import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['hmofscsitenew-production.up.railway.app'],
    proxy: {
      '/api': {
        target: 'http://backend:8080',
        changeOrigin: true,
      },
    },
  },
  preview: {
    allowedHosts: ['hmofscsitenew-production.up.railway.app'],
  },
   build: {
    outDir: 'dist',
    sourcemap: true
  },
});