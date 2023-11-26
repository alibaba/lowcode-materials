const { library } = require('./build.json');
const { version, name } = require('./package.json');

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    '@alifd/fusion-ui': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        renderUrls: [
          `https://alifd.alicdn.com/npm/${name}@${version}/dist/${library}.js`,
          `https://alifd.alicdn.com/npm/${name}@${version}/dist/${library}.css`,
        ],
        baseUrl: {
          prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
          daily: `https://alifd.alicdn.com/npm/${name}@${version}`,
        },
        engineScope: '@alilc',
      },
    ],
    [
      'build-plugin-fusion',
      {
        uniteBaseComponent: '@alifd/next',
        cssVariable: true,
        importOptions: {
          libraryDirectory: 'lib',
        },
      },
    ],

  ],

};
