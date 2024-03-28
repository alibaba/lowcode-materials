module.exports = {
  alias: {
    '@': './src'
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        engineScope: '@alilc',
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
                version: '5.14.0',
                urls: [
                  '//cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js',
                  `//cdn.bootcdn.net/ajax/libs/antd/5.14.0/antd.js`,
                  `//cdn.bootcdn.net/ajax/libs/antd/5.14.0/reset.css`,
                ],
                library: 'antd',
              },
              {
                package: '@discode/antd',
                version: '1.0.7',
                library: 'DiscodeAntd',
                urls: [
                  
                //   'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/view.js',
                //   'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/view.css'
                `https://cdn.appthen.com/material/118158/@discode/antd/0.0.5/view.js`,
`https://cdn.appthen.com/material/118158/@discode/antd/0.0.5/view.css`
                ],
                editUrls: [
                  `https://cdn.appthen.com/material/118158/@discode/antd/1.0.0/view.js`,
                  `https://cdn.appthen.com/material/118158/@discode/antd/1.0.0/view.css`
                ]
              }
            ],
            components: [
              {
                exportName: 'DiscodeAntdMeta',
                npm: {
                  package: '@discode/antd',
                  version: '1.0.7'
                },
                // url: 'https://cdn.scredit.sg/th/seada/live/antd-lowcode-materials@1.0.7/lowcode/meta.js',
                url:`https://cdn.appthen.com/material/118158/@discode/antd/1.0.0/meta.js`,
                urls: {
                  default:
                    'https://cdn.appthen.com/material/118158/@discode/antd/1.0.0/meta.js'
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
