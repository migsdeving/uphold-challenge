const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v0", // Specify the base URL where your API requests should be directed
    createProxyMiddleware({
      target: "https://api-sandbox.uphold.com", // Specify the target API server
      changeOrigin: true,
      // pathRewrite: false,
    })
  );
};
