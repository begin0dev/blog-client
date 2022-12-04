import dns from 'dns';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteSvgr from 'vite-plugin-svgr';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tsconfigPaths(), viteSvgr()],
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            markdown: [
              'rehype-raw',
              'rehype-stringify',
              'remark-breaks',
              'remark-parse',
              'remark-rehype',
              'unified',
              'unist-util-visit',
            ],
          },
        },
      },
    },
    server: {
      open: true,
      port: 3000,
      proxy: {
        '/api': env.VITE_SERVER_URL,
      },
    },
  };
});
