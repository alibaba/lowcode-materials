const props = require('./common/props');

module.exports = {
  componentName: 'PageHeader',
  title: '设计态 PageHeader',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '1.0.0',
    exportName: 'PageHeader',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'backIcon',
      propType: 'node',
    },
    {
      name: 'prefixCls',
      propType: 'string',
    },
    {
      name: 'title',
      propType: 'node',
    },
    {
      name: 'subTitle',
      propType: 'node',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'breadcrumb',
      propType: {
        type: 'oneOfType',
        value: ['object'],
      },
    },
    {
      name: 'breadcrumbRender',
      propType: {
        type: 'func',
        params: [
          {
            name: 'props',
            propType: {
              type: 'shape',
              value: [
                {
                  name: 'backIcon',
                  propType: 'node',
                },
                {
                  name: 'prefixCls',
                  propType: 'string',
                },
                {
                  name: 'title',
                  propType: 'node',
                },
                {
                  name: 'subTitle',
                  propType: 'node',
                },
                {
                  name: 'style',
                  propType: 'object',
                },
                {
                  name: 'breadcrumb',
                  propType: {
                    type: 'oneOfType',
                    value: ['object'],
                  },
                },
                {
                  name: 'breadcrumbRender',
                  propType: 'object',
                },
                {
                  name: 'tags',
                  propType: {
                    type: 'oneOfType',
                    value: [
                      'object',
                      {
                        type: 'arrayOf',
                        value: 'object',
                      },
                    ],
                  },
                },
                {
                  name: 'footer',
                  propType: 'node',
                },
                {
                  name: 'extra',
                  propType: 'node',
                },
                {
                  name: 'avatar',
                  propType: 'object',
                },
                {
                  name: 'onBack',
                  propType: {
                    type: 'func',
                    params: [
                      {
                        name: 'e',
                        propType: 'object',
                      },
                    ],
                    raw: '(e?: MouseEvent<HTMLDivElement, MouseEvent>) => void',
                  },
                },
                {
                  name: 'className',
                  propType: 'string',
                },
                {
                  name: 'ghost',
                  propType: 'bool',
                },
              ],
            },
          },
          {
            name: 'defaultDom',
            propType: 'node',
          },
        ],
        raw: '(props: PageHeaderProps, defaultDom: ReactNode) => ReactNode',
      },
    },
    {
      name: 'tags',
      propType: {
        type: 'oneOfType',
        value: [
          'object',
          {
            type: 'arrayOf',
            value: 'object',
          },
        ],
      },
    },
    {
      name: 'footer',
      propType: 'node',
    },
    {
      name: 'extra',
      propType: 'node',
    },
    {
      name: 'avatar',
      propType: 'object',
    },
    {
      name: 'onBack',
      propType: {
        type: 'func',
        params: [
          {
            name: 'e',
            propType: 'object',
          },
        ],
        raw: '(e?: MouseEvent<HTMLDivElement, MouseEvent>) => void',
      },
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'ghost',
      propType: 'bool',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props,
  },
  snippets: [
    {
      title: 'PageHeader',
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_message.png',
      schema: {
        title: 'PageHeader',
        componentName: 'PageHeader',
        props: {
          placeholderStyle: {
            height: '38px',
            color: '#0088FF',
            background: '#d8d8d836',
            border: 0,
          },
          placeholder: '',
          title: 'This is a designer title',
          subTitle: '',
          breadcrumb: ['首页', '列表'],
        },
      },
    },
  ],
};
