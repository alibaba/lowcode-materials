import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { plotConfigure } from '../common/chart-plot';

const ColumnChartMeta: IPublicTypeComponentMetadata = {
  componentName: 'ColumnChart',
  title: '柱状图',
  category: '图表',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'ColumnChart',
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
            name: 'columnSize',
            title: '粗细',
            setter: 'NumberSetter',
          },
          {
            name: 'label',
            type: 'group',
            display: 'accordion',
            title: {
              label: '标签',
            },
            items: [
              {
                name: 'label.visible',
                title: '显示',
                setter: 'BoolSetter',
              },
              {
                name: 'label.position',
                title: '位置',
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      { title: '上', value: 'top' },
                      { title: '中', value: 'middle' },
                      { title: '下', value: 'bottom' },
                    ],
                  },
                },
                condition: (target) => {
                  return !!target.getProps().getPropValue('label.visible');
                },
              },
            ],
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
    title: '柱状图',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01mz7siK1JIn9XZmCF6_!!6000000001006-55-tps-56-56.svg',
    schema: {
      componentName: 'ColumnChart',
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
          position: 'middle',
        },

        // data: [
        //   {
        //     name: 'London',
        //     月份: 'Jan.',
        //     月均降雨量: 18.9,
        //   },
        //   {
        //     name: 'London',
        //     月份: 'Feb.',
        //     月均降雨量: 28.8,
        //   },
        //   {
        //     name: 'London',
        //     月份: 'Mar.',
        //     月均降雨量: 39.3,
        //   },
        //   {
        //     name: 'London',
        //     月份: 'Apr.',
        //     月均降雨量: 81.4,
        //   },
        //   {
        //     name: 'London',
        //     月份: 'May',
        //     月均降雨量: 47,
        //   },
        //   {
        //     name: 'London',
        //     月份: 'Jun.',
        //     月均降雨量: 20.3,
        //   },
        //   {
        //     name: 'London',
        //     月份: 'Jul.',
        //     月均降雨量: 24,
        //   },
        //   {
        //     name: 'London',
        //     月份: 'Aug.',
        //     月均降雨量: 35.6,
        //   },
        //   {
        //     name: 'Berlin',
        //     月份: 'Jan.',
        //     月均降雨量: 12.4,
        //   },
        //   {
        //     name: 'Berlin',
        //     月份: 'Feb.',
        //     月均降雨量: 23.2,
        //   },
        //   {
        //     name: 'Berlin',
        //     月份: 'Mar.',
        //     月均降雨量: 34.5,
        //   },
        //   {
        //     name: 'Berlin',
        //     月份: 'Apr.',
        //     月均降雨量: 99.7,
        //   },
        //   {
        //     name: 'Berlin',
        //     月份: 'May',
        //     月均降雨量: 52.6,
        //   },
        //   {
        //     name: 'Berlin',
        //     月份: 'Jun.',
        //     月均降雨量: 35.5,
        //   },
        //   {
        //     name: 'Berlin',
        //     月份: 'Jul.',
        //     月均降雨量: 37.4,
        //   },
        //   {
        //     name: 'Berlin',
        //     月份: 'Aug.',
        //     月均降雨量: 42.4,
        //   },
        // ],
        // xField: '月份',
        // yField: '月均降雨量',
        // seriesField: 'name',
        // legend: {
        //   position: 'top-left',
        // }
      },
    },
  },
];

export default {
  ...ColumnChartMeta,
  snippets,
};
