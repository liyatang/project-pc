import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import enhanceLog from 'vite-plugin-enhance-log';
import pages from 'vite-plugin-react-router-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), enhanceLog(), pages()],
});
