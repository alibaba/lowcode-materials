import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { plotConfigure } from '../common/chart-plot';

const AreaChartMeta: IPublicTypeComponentMetadata = {
  componentName: 'AreaChart',
  title: '面积图',
  category: '图表',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'AreaChart',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
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
            setter: 'ColorSetter',
          },
          {
            name: 'line.size',
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
      ...plotConfigure,
      ...actionConfigure,
    ],
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '面积图',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN012P76ko1dqUbwwmuF8_!!6000000003787-55-tps-56-56.svg',
    schema: {
      componentName: 'AreaChart',
      props: {
        data: [
          { year: '1991', value: 72345678 },
          { year: '1992', value: 4321132 },
          { year: '1993', value: 33121112.5 },
          { year: '1994', value: 45227221 },
          { year: '1995', value: 4321221.9 },
          { year: '1996', value: 6322121 },
          { year: '1997', value: 78312213 },
          { year: '1998', value: 4192312 },
          { year: '1999', value: 6212332 },
          { year: '2000', value: 3192312 },
        ],
        xField: 'year',
        yField: 'value',
        color: '#0079f2',
        label: {
          visible: true,
        },
      },
    },
  },
];

export default {
  ...AreaChartMeta,
  snippets,
};
