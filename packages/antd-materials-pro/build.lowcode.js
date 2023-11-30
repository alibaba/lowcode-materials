module.exports = {
  alias: {
    '@': './src'
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        engineScope: '@alilc',
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: [
                  'https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'
                ],
                library: 'moment'
              },
              {
                package: 'lodash',
                library: '_',
                urls: [
                  'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'
                ]
              },
              {
                package: 'iconfont-icons',
                urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js'
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [
                  `//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`
                ],
                library: 'icons'
              },
              {
                package: 'antd',
                version: '4.23.0',
                urls: [
                  `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.js`,
                  `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.css`
                ],
                library: 'antd'
              },
              {
                package: '@alilc/antd-lowcode-materials',
                version: '1.0.7',
                library: 'AntdLowcode',
                urls: [
                  'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/view.js',
                  'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/view.css'
                ],
                editUrls: [
                  'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/view.js',
                  'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/view.css'
                ]
              }
            ],
            components: [
              {
                exportName: 'AlilcAntdLowcodeMaterialsMeta',
                npm: {
                  package: '@alilc/antd-lowcode-materials',
                  version: '1.0.7'
                },
                url: 'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/meta.js',
                urls: {
                  default:
                    'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/meta.js'
                }
              }
            ],
            sort: {
              groupList: ['精选组件', '原子组件'],
              categoryList: [
                '通用',
                '导航',
                '反馈',
                '其他',
                '表单',
                '数据展示',
                '基础',
                '布局'
              ]
            },
            groupList: ['精选组件', '原子组件'],
            ignoreComponents: {}
          }
        ]
      }
    ],
    './build.plugin.js'
  ]
}
