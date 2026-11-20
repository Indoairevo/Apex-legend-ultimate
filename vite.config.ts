import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 2500,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
