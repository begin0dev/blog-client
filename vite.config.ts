import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgrPlugin()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'https://begin0dev-blog.herokuapp.com',
    },
  },
});
