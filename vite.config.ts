import dns from 'dns';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteSvgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tsconfigPaths(), viteSvgr(), mkcert()],
    server: {
      https: true,
      port: 3000,
      open: true,
      proxy: {
        '/api': env.VITE_SERVER_URL,
      },
    },
  };
});
