const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/admin',
        createProxyMiddleware({
            target: 'https://za8hqdiis4.execute-api.ap-northeast-2.amazonaws.com/dev/dev-ice-bulter-main',
            changeOrigin: true,
        }))
    app.use(
        '/users',
        createProxyMiddleware({
            target: 'https://za8hqdiis4.execute-api.ap-northeast-2.amazonaws.com/dev/dev-ice-bulter-recipe/admin',
            changeOrigin: true,
        })
        );
};