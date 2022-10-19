import dns from 'dns';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteSvgr from 'vite-plugin-svgr';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const serverUrl = env.VITE_SERVER_URL;

  return {
    plugins: [react(), tsconfigPaths(), viteSvgr()],
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': serverUrl,
      },
    },
  };
});
