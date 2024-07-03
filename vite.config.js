import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as mdPlugin } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react(),
    mdPlugin()
  ],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  define: {
    'process.env': process.env
  },
  assetsInclude: ['**/*.md']
});
