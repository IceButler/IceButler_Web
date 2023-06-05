const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/admin',
        createProxyMiddleware({
            target: `${process.env.REACT_APP_GATEWAY}/dev/dev-ice-bulter-main`,
            changeOrigin: true,
        }));
    app.use(
        '/users',
        createProxyMiddleware({
            target: `${process.env.REACT_APP_GATEWAY}/dev/dev-ice-bulter-recipe/admin`,
            changeOrigin: true,
        })
    );
    app.use(
        '/reports',
        createProxyMiddleware({
            target: `${process.env.REACT_APP_GATEWAY}/dev/dev-ice-bulter-recipe/admin`,
            changeOrigin: true,
        })
    );
    app.use(
        '/recipes',
        createProxyMiddleware({
            target: `${process.env.REACT_APP_GATEWAY}/dev/dev-ice-bulter-recipe/admin`,
            changeOrigin: true,
        })
    );
    app.use(
        '/presigned-url',
        createProxyMiddleware({
            target: `${process.env.REACT_APP_GATEWAY}/dev`,
            changeOrigin: true,
        })
    );
    app.use(
        '/food',
        createProxyMiddleware({
            target: `${process.env.REACT_APP_S3}/dev`,
            changeOrigin: true,
        })
    );
};