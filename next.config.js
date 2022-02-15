const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  target: 'serverless',
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/category',
        destination: `${process.env.CATEGORY_API}`,
      },
      {
        source: '/api/ddang',
        destination: `${process.env.DDANG_API}`,
      },
      {
        source: '/api/brand',
        destination: `${process.env.BRAND_API}`,
      },
      {
        source: '/api/product',
        destination: `${process.env.PRODUCT_API}`,
      },
      {
        source: '/api/faq/type',
        destination: `${process.env.FAQTYPE_API}`,
      },
      {
        source: '/api/faq/info',
        destination: `${process.env.FAQINFO_API}`,
      },
    ];
  },
  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  // Enable figma's wrong mask-type attribute work
                  removeRasterImages: false,
                  removeStyleElement: false,
                  removeUnknownsAndDefaults: false,
                  // Enable svgr's svg to fill the size
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    });
    // 절대경로
    conf.resolve.modules.push(__dirname);
    return conf;
  },
});
