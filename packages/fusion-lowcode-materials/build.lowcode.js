const { name, version } = require('./package.json');

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    lowcode: './lowcode',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                title: 'fusion组件库',
                package: '@alifd/next',
                version: '1.25.23',
                urls: [
                  'https://g.alicdn.com/code/lib/alifd__next/1.25.23/next.min.css',
                  'https://g.alicdn.com/code/lib/alifd__next/1.25.23/next-with-locales.min.js',
                ],
                library: 'Next',
              },
            ],
            components: [],
          },
        ],
        baseUrl: {
          prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
          daily: `https://alifd.alicdn.com/npm/${name}@${version}`,
        },
        categories: ['通用', '导航', '信息输入', '信息展示', '信息反馈', '常用'],
        engineScope: '@alilc',
      },
    ],
    [
      'build-plugin-fusion',
      {
        uniteBaseComponent: '@alifd/next',
        importOptions: {
          libraryDirectory: 'lib',
        },
      },
    ],
    './plugins/compatible.build.js',
  ],
};
