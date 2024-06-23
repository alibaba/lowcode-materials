module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library: "AppthenReactFlow",
        engineScope: "@alilc"
      },
    ],
  ],
};
