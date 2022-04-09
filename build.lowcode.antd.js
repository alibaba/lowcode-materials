const { name, version } = require('./package.json');

const library = 'AntdLowcode';

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    lowcode: './lowcode',
    '@alife/fusion-ui': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        lowcodeDir: 'antd-lowcode',
        engineScope: '@alilc',
        library,
        npmInfo: {
          package: name,
          version,
        },
        entryPath: 'antd-lowcode/comps.index.ts',
        categories: ['通用', '导航', '信息输入', '信息展示', '信息反馈'],
        baseUrl: {
          prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
          daily: `https://alifd.alicdn.com/npm/${name}@${version}`,
        },
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
                package: 'iconfont-icons',
                urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
              {
                package: 'antd',
                version: '4.19.5',
                urls: [
                  `//g.alicdn.com/code/lib/antd/4.19.4/antd.min.js`,
                  `//g.alicdn.com/code/lib/antd/4.19.4/antd.min.css`,
                ],
                library: 'antd',
              },
            ],
            components: [],
          },
        ],
      },
    ],
  ],
};
