import { IPublicTypeComponentMetadata, IPublicTypeConfigure } from '@alilc/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { plotConfigure } from '../common/chart-plot';

const pieChartMeta: IPublicTypeComponentMetadata = {
  componentName: 'PieChart',
  title: '饼图',
  category: '图表',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'PieChart',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      // 图例
      {
        name: 'legend',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图例',
        },
        items: [
          {
            name: 'legend.position',
            title: '位置',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  { title: '左', value: 'left' },
                  { title: '左上', value: 'left-top' },
                  { title: '左下', value: 'left-bottom' },
                  { title: '右', value: 'right' },
                  { title: '右上', value: 'right-top' },
                  { title: '右下', value: 'right-bottom' },
                  { title: '上', value: 'top' },
                  { title: '上左', value: 'top-left' },
                  { title: '上右', value: 'top-right' },
                  { title: '下', value: 'bottom' },
                  { title: '下左', value: 'bottom-left' },
                  { title: '下右', value: 'bottom-right' },
                ],
              },
            },
          },
        ],
      },
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
            name: 'angleField',
            title: {
              label: '值字段名',
              tip: '扇形切片大小（弧度）所对应的数据字段名',
            },
            setter: 'StringSetter',
          },
          {
            name: 'colorField',
            title: {
              label: '分类字段名',
              tip: '扇形颜色映射对应的数据字段名',
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
                name: 'label.type',
                title: '位置',
                setter: {
                  componentName: 'SelectSetter',
                  props: {
                    options: [
                      { title: '内部', value: 'inner' },
                      { title: '外部', value: 'outer' },
                      { title: '外部圆形排布', value: 'outer-center' },
                      { title: '蜘蛛布局', value: 'spider' },
                    ],
                  },
                },
              },
            ],
          },
          ...plotConfigure,
          ...actionConfigure,
        ],
      },
    ],
  },
};

const snippets = [
  {
    title: '饼图',
    name: 'PieChart',
    screenshot:
      'https://img.alicdn.com/imgextra/i4/O1CN018rBRGK24fx7hzkITN_!!6000000007419-55-tps-56-56.svg',
    schema: {
      componentName: 'PieChart',
      title: '饼图',
      props: {
        legend: {
          position: 'top-left',
        },
        data: [
          { year: '1991', value: 72345678 },
          { year: '1992', value: 4321132 },
          { year: '1993', value: 33121112.5 },
          { year: '1994', value: 45227221 },
          { year: '1995', value: 4321221.9 },
          { year: '1996', value: 6322121 },
          { year: '1997', value: 78312213 },
          { year: '1998', value: 2192312 },
          { year: '1999', value: 6212332 },
          { year: '2000', value: 1192312 },
        ],
        angleField: 'value',
        colorField: 'year',
        label: {
          visible: true,
          type: 'spider',
        },
        color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E', '#ED6899', '#7F62C3', '#6E7BC9'],
      },
    },
  },
];
export default {
  ...pieChartMeta,
  snippets
};
