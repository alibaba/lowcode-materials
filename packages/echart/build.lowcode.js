const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: "@alilc",
        builtinAssets: [
          {
            packages: [
              {
                package: 'antd',
                version: '5.9.0',
                urls: [
                  '//cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js',
                  `//cdn.bootcdn.net/ajax/libs/antd/5.9.0/antd.js`,
                  `//cdn.bootcdn.net/ajax/libs/antd/5.9.0/reset.css`,
                ],
                library: 'antd',
              },
            ],
          }
        ]
      },
    ],
  ],
};
