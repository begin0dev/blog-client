const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://begin0dev.ml',
      // target: 'http://localhost:3001',
      changeOrigin: true,
    }),
  );
};
