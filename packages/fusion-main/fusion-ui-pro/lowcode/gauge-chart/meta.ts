import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { wrapWithCard } from '../pro-card/meta';

const ColumnChartMeta: ComponentMetadata = {
  componentName: 'GaugesChart',
  title: '仪表盘',
  category: '图表',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'GaugesChart',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'ref',
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'func',
            params: [
              {
                name: 'instance',
                propType: 'object',
              },
            ],
            returns: {
              propType: 'number',
            },
            raw: '(instance: unknown) => void',
          },
          'object',
        ],
      },
    },
    {
      name: 'key',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      // 数据
      {
        name: 'data',
        type: 'group',
        display: 'accordion',
        title: {
          label: '数据',
        },
        items: [
          // {
          //   name: 'data',
          //   title: '图表数据',
          //   setter: 'JsonSetter',
          // },
          {
            name: 'min',
            title: {
              label: '最小值',
            },
            setter: 'NumberSetter',
          },
          {
            name: 'max',
            title: {
              label: '最大值',
            },
            setter: 'NumberSetter',
          },
          {
            name: 'value',
            title: {
              label: '默认值',
            },
            setter: 'NumberSetter',
          },
          {
            name: 'range',
            title: {
              label: '数据值',
            },
            setter: 'JsonSetter',
          },
          {
            type: 'field',
            name: 'width',
            title: '宽度',
            extraProps: {
              display: 'inline',
              // defaultValue: 120,
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                units: 'px',
              },
            },
          },
          {
            type: 'field',
            name: 'height',
            title: '高度',
            extraProps: {
              display: 'inline',
              // defaultValue: 120,
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                units: 'px',
              },
            },
          },
        ],
      },
      // 图形属性
      {
        name: '',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图形属性',
        },
        items: [
          {
            name: 'color',
            title: '颜色',
            setter: {
              componentName: 'ArraySetter',
              props: {
                itemSetter: {
                  componentName: 'ColorSetter',
                  initialValue: '#0079f2',
                },
              },
            },
          },
          {
            name: 'statistic.title.content',
            title: '内部标题',
            setter: 'StringSetter',
          },
          {
            name: 'statistic.content.content',
            title: '内容',
            setter: 'StringSetter',
          },

          {
            name: 'title.text',
            title: '头部标题',
            setter: 'StringSetter',
          },
        ],
      },
    ],
  },
};

const snippets: Snippet[] = [
  {
    title: '仪表盘',
    screenshot:
      'https://cdn.flyowl.com.cn/img/20221016104307.png',
    schema: {
      componentName: 'GaugesChart',
      props: {
        color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E'],
        range:[0, 25, 50, 75, 100],
        min:0,
        max:100,
        value:30
      },
    },
  },
];

export default {
  ...ColumnChartMeta,
  snippets: wrapWithCard(snippets),
};
