module.exports = {
  alias: {
    '@': './src',
    '@tarojs': './src/libs/tarojs',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library: 'AppthenReact',
        noParse: true,
        engineScope: '@alilc',
      },
    ],
  ],
};
