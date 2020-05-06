const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.love.com',
    //   pathRewrite: { '^/api': '' }, // remove leading /api to match real API urls
      changeOrigin: true,
    })
  );
};