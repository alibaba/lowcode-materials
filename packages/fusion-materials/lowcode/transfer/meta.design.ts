import snippets from './snippets.design';
import parseData from '../utils/parse-data';

export default {
  group: '原子组件',
  componentName: 'Transfer',
  title: '穿梭框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Transfer',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'id',
      propType: 'string',
      description: '请设置 id 以保证transfer的可访问性',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'mode',
      propType: {
        type: 'oneOf',
        value: ['normal', 'simple'],
      },
      description: '移动选项模式',
      defaultValue: 'normal',
    },
    {
      name: 'dataSource',
      propType: 'array',
      description: '数据源',
    },
    {
      name: 'value',
      propType: 'array',
      description: '当前值',
    },
    {
      name: 'defaultValue',
      propType: 'array',
      description: '默认值',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'leftDisabled',
      propType: 'bool',
      description: '是否禁用左侧面板',
      defaultValue: false,
    },
    {
      name: 'rightDisabled',
      propType: 'bool',
      description: '是否禁用右侧面板',
      defaultValue: false,
    },
    {
      name: 'itemRender',
      propType: 'func',
      description: '列表项渲染函数',
    },
    {
      name: 'showSearch',
      propType: 'bool',
      description: '是否显示搜索框',
      defaultValue: false,
    },
    {
      name: 'filter',
      propType: 'func',
      description: '自定义搜索函数',
    },
    {
      name: 'searchPlaceholder',
      propType: 'string',
      description: '搜索框占位符',
    },
    {
      name: 'notFoundContent',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '列表为空显示内容',
      defaultValue: 'Not Found',
    },
    {
      name: 'titles',
      propType: 'array',
      description: '左右面板标题',
    },
    {
      name: 'operations',
      propType: 'array',
      description: '向右向左移动按钮显示内容',
    },
    {
      name: 'defaultLeftChecked',
      propType: 'array',
      description: '左面板默认选中值',
    },
    {
      name: 'defaultRightChecked',
      propType: 'array',
      description: '右面板默认选中值',
    },
    {
      name: 'listClassName',
      propType: 'string',
      description: '左右面板列表自定义样式类名',
    },
    {
      name: 'listStyle',
      propType: 'object',
      description: '左右面板列表自定义样式对象',
    },
    {
      name: 'sortable',
      propType: 'bool',
      description: '是否允许拖拽排序',
      defaultValue: false,
    },
    {
      name: 'children',
      propType: 'func',
      description: '接收 children 自定义渲染列表',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '值发生改变的时候触发的回调函数',
    },
    {
      name: 'onSearch',
      propType: 'func',
      description: '搜索框输入时触发的回调函数',
    },
    {
      name: 'onSort',
      propType: 'func',
      description: '拖拽排序时触发的回调函数',
    },
  ],
  configure: {
    props: [
      {
        name: 'mode',
        title: '类型',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '普通', value: 'normal' },
              { title: '简单', value: 'simple' },
            ],
          },
        },
        defaultValue: 'normal',
      },
      {
        name: 'titles.0',
        title: '左侧标题',
        setter: 'StringSetter',
        defaultValue: 'TitleLeft',
      },
      {
        name: 'titles.1',
        title: '右侧标题',
        setter: 'StringSetter',
        defaultValue: 'TitleRight',
      },
      {
        name: 'showSearch',
        title: '搜索框',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '无', value: false },
              { title: '有', value: true },
            ],
          },
        },
        defaultValue: false,
      },
      {
        name: 'showCheckAll',
        title: '显示全选',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'searchPlaceholder',
        title: '占位符',
        setter: 'StringSetter',
        condition(target) {
          return target.getProps().getPropValue('showSearch') || false;
        },
      },
      {
        name: 'sortable',
        title: '拖拽排序',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'plainData',
        display: 'block',
        title: '内容',
        setter: {
          componentName: 'MagicEditorSetter',
          props: {
            toolbar: ['normal', 'active', 'disable'],
            disableIcon: true,
          },
        },
        setValue: (target, value) => {
          const list = parseData(value).filter(({ type }) => type === 'node');
          const keys = [];
          const dataSource = list.map((item, i) => {
            if (item.state === 'active') {
              keys.push(`${i}`);
            }
            return {
              label: `${item.value}`,
              value: `${i}`,
              disabled: item.state === 'disabled',
            };
          });
          target.parent.setPropValue('dataSource', dataSource);
          target.parent.setPropValue('defaultLeftChecked', keys);
        },
      },
    ],
    supports: {
      events: ['onChange', 'onSearch', 'onSort'],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
