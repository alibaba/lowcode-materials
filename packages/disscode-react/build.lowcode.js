module.exports = {
  alias: {
    '@': './src',
    '@tarojs': './src/libs/tarojs',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library: 'Disscode',
        noParse: true,
        engineScope: '@alilc',
      },
    ],
  ],
};
