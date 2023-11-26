import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { wrapWithCard } from '../pro-card/meta';

const LineChartMeta: ComponentMetadata = {
  componentName: 'LineChart',
  title: '折线图',
  category: '图表',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'LineChart',
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
          {
            name: 'data',
            title: '图表数据',
            setter: 'JsonSetter',
          },
          {
            name: 'xField',
            title: {
              label: 'x轴字段名',
              tip: 'x 方向映射对应的数据字段名',
            },
            setter: 'StringSetter',
          },
          {
            name: 'yField',
            title: {
              label: 'y轴字段名',
              tip: 'y 方向映射所对应的数据字段名',
            },
            setter: 'StringSetter',
          },
          {
            name: 'seriesField',
            title: {
              label: '多折线',
              tip: '多个数据折线',
            },
            setter: 'StringSetter',
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
            name: 'lineSize',
            title: '粗细',
            setter: 'NumberSetter',
          },
          {
            name: 'smooth',
            title: '平滑',
            setter: 'BoolSetter',
          },
          {
            name: 'point.visible',
            title: '显示点',
            setter: 'BoolSetter',
          },
          {
            name: 'label.visible',
            title: '显示标签',
            setter: 'BoolSetter',
          },
        ],
      },
    ],
  },
};
const snippets: Snippet[] = [
  {
    title: '折线图',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN01ChN5mm1txOQnh6kTh_!!6000000005968-55-tps-56-56.svg',
    schema: {
      componentName: 'LineChart',
      props: {
        data: [
          {
            country: 'Asia',
            year: '1750',
            value: 502,
          },
          {
            country: 'Asia',
            year: '1800',
            value: 635,
          },
          {
            country: 'Asia',
            year: '1900',
            value: 635,
          },
          {
            country: 'Europe',
            year: '1750',
            value: 163,
          },
          {
            country: 'Europe',
            year: '1800',
            value: 203,
          },
        ],
        xField: 'year',
        yField: 'value',
        seriesField: 'country',
        label: {
          visible: true,
        },
      },
    },
  },
];

export default {
  ...LineChartMeta,
  snippets: wrapWithCard(snippets),
};
