import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteSvgr()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'https://begin0dev-blog.herokuapp.com',
    },
  },
});
