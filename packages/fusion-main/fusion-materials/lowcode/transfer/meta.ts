import snippets from './snippets';

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
        name: 'value',
        title: '当前值',
        supportVariable: true,
        setter: ['StringSetter', 'ExpressionSetter'],
      },
      {
        name: 'defaultValue',
        title: '默认值',
        supportVariable: true,
        setter: ['StringSetter', 'ExpressionSetter'],
      }, 
      {
        name: 'mode',
        title: '模式',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    { title: 'normal', value: 'normal' },
                    { title: 'simple', value: 'simple' },
                  ],
                },
              },
              'ExpressionSetter',
            ],
          },
        },
        defaultValue: 'simple',
      },
      {
        name: 'showCheckAll',
        title: '显示全选',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
        defaultValue: true,
      },
      {
        name: 'showSearch',
        title: '搜索框',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
        defaultValue: false,
      },
      {
        name: 'searchPlaceholder',
        title: '搜索框占位符',
        display: 'block',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'ExpressionSetter'],
          },
        },
        condition(target) {
          return target.parent.getPropValue('showSearch') || false;
        },
      },
      {
        name: 'filter',
        title: '自定义搜索函数',
        display: 'block',
        setter: {
          componentName: 'FunctionSetter',
          // props: {
          //   defaultActionName="filter",
          //   defaultCode=`function filter(searchedValue, data) {
          //     return true;
          //   }`,
          // }
        },
        condition(target) {
          return target.parent.getPropValue('showSearch') || false;
        },
      },
      {
        name: 'sortable',
        title: '拖拽排序',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
        defaultValue: false,
      },
      {
        name: 'dataSource',
        title: '数据源',
        display: 'block',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'JsonSetter',
              },
              'ExpressionSetter',
            ],
          },
        },
        defaultValue: [
          { label: 'item0', value: '0', disabled: false },
          { label: 'item1', value: '1', disabled: false },
          { label: 'item2', value: '2', disabled: true },
        ],
      },
      {
        name: 'defaultLeftChecked',
        title: '左侧面板默认选中值',
        display: 'block',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'JsonSetter',
              },
              'ExpressionSetter',
            ],
          },
        },
        defaultValue: ['1'],
      },
      {
        name: 'defaultRightChecked',
        title: '右侧面板默认选中值',
        display: 'block',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'JsonSetter',
              },
              'ExpressionSetter',
            ],
          },
        },
        defaultValue: ['1'],
      },
      {
        name: 'titles',
        title: '面板标题',
        display: 'block',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'JsonSetter',
              },
              'ExpressionSetter',
            ],
          },
        },
        defaultValue: ['TitleLeft', 'TitleRight'],
      },
      {
        name: 'notFountContent',
        title: '无数据时显示内容',
        display: 'block',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
              },
              'ExpressionSetter',
            ],
          },
        },
        defaultValue: ['无数据'],
      },
      {
        name: 'itemRender',
        title: '列表项渲染函数',
        display: 'block',
        setter: {
          componentName: 'FunctionSetter',
          // props: {
          //   defaultActionName="itemRender",
          //   defaultCode=`function itemRender(data) {
          //     return data.label;
          //   }`,
          // }
        },
      },
      {
        type: 'group',
        title: '高级',
        display: 'block',
        items: [
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
            supportVariable: true,
          },
          {
            name: 'name',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单标识',
                en_US: 'Name',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: name | 说明: 表单标识',
                en_US: 'prop: name | description: switch name',
              },
            },
            setter: 'StringSetter',
            supportVariable: true,
          },
        ],
      },
      {
        name: 'style',
        setter: {
          componentName: 'StyleSetter',
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
