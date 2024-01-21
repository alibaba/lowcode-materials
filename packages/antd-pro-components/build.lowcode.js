const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: "@alilc",
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
              
              // {
              //   package: 'antd',
              //   version: '5.9.0',
              //   urls: [
              //     // `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.js`,
              //     // `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.css`
              //     `https://cdn.bootcdn.net/ajax/libs/antd/5.9.0/antd.min.js`,
              //     `https://cdn.bootcdn.net/ajax/libs/antd/5.9.0/reset.min.css`,
              //                   ],
              //   library: 'antd'
              // },
              // {
              //   package: '@discode/antd',
              //   version: '0.05',
              //   library: 'DiscodeAntd',
              //   urls: [
              //     'https://cdn.disscode.com/material/118158/@discode/antd/0.0.5/view.js',
              //     'https://cdn.disscode.com/material/118158/@discode/antd/0.0.5/view.css'
              //   ],
              //   editUrls: [
              //     'https://cdn.disscode.com/material/118158/@discode/antd/0.0.5/view.js',
              //     'https://cdn.disscode.com/material/118158/@discode/antd/0.0.5/view.css'
              //   ]
              // }
            ],
            components: [
              // {
              //   exportName: 'DiscodeAntdMeta',
              //   npm: {
              //     package: '@discode/antd',
              //     version: '0.0.5'
              //   },
              //   url: 'https://cdn.disscode.com/material/118158/@discode/antd/0.0.5/meta.js',
              //   urls: {
              //     default:
              //       'https://cdn.disscode.com/material/118158/@discode/antd/0.0.5/meta.js'
              //   }
              // }
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
      },
    ],
  ],

};
