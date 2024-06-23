const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
    '@tarojs': './src/libs/tarojs',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: '@alilc',
      },
    ],
  ],
};
