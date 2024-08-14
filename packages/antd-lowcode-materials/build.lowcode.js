const { name, version } = require("./package.json");

const library = 'AppthenAntd';

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    lowcode: './lowcode'
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        engineScope: '@alilc',
        library,
        staticResources: {
          engineCoreCssUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.2.1/dist/css/engine-core.css',
          engineExtCssUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.6/dist/css/engine-ext.css',
          engineCoreJsUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.2.1/dist/js/engine-core.js',
          engineExtJsUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.6/dist/js/engine-ext.js',
        },
        npmInfo: {
          package: name,
          version,
        },
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        categories: ['通用', '导航', '信息输入', '信息展示', '信息反馈'],
        baseUrl: {
          prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
          daily: `https://alifd.alicdn.com/npm/${name}@${version}`,
        },
        builtinAssets: [
          {
            packages: [
              {
                package: 'dayjs',
                version: '2.24.0',
                urls: [
                  'https://cdn.appthen.com/editor/npm/antd/5.9.0/dayjs.min.js'
                ],
                library: 'dayjs'
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
              // {
              //   package: '@ant-design/icons',
              //   version: '4.7.0',
              //   urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
              //   library: 'icons',
              // },
              {
                package: 'antd',
                version: '5.14.0',
                urls: [
                  'https://cdn.appthen.com/editor/antd/5.14.0/dayjs.min.js',
                  `https://cdn.appthen.com/editor/antd/5.14.0/antd5.20/antd.min.js`,
                  `https://cdn.appthen.com/editor/antd/5.14.0/antd5.20/reset.min.css`,
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
