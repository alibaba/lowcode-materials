import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Rating',
  title: '评分',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Rating',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'id',
      propType: 'string',
    },
    {
      name: 'name',
      propType: 'string',
      description: 'name',
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
      name: 'defaultValue',
      propType: 'number',
      description: '默认值',
      defaultValue: 0,
    },
    {
      name: 'value',
      propType: 'number',
      description: '值',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'count',
      propType: 'number',
      description: '评分的总数',
      defaultValue: 5,
    },
    {
      name: 'showGrade',
      propType: 'bool',
      description: '是否显示 grade',
      defaultValue: false,
    },
    {
      name: 'allowHalf',
      propType: 'bool',
      description: '是否允许半星评分',
      defaultValue: false,
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
      defaultValue: false,
    },
    {
      name: 'renderPreview',
      propType: 'func',
      description: '预览态模式下渲染的内容',
    },
    {
      name: 'readOnly',
      propType: 'bool',
      description: '是否为只读态，效果上同 disabeld',
      defaultValue: false,
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '用户点击评分时触发的回调\n@param {String} value 评分值',
    },
    {
      name: 'onHoverChange',
      propType: 'func',
      description: '用户hover评分时触发的回调\n@param {String} value 评分值',
    },
  ],
  configure: {
    props: [
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '按钮尺寸',
            en_US: 'Button Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 按钮尺寸',
            en_US: 'prop: size | description: button size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '小',
                value: 'small',
              },
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'value',
        title: '当前值',
        setter: 'NumberSetter',
      },
      {
        name: 'count',
        title: '评分总数',
        setter: 'NumberSetter',
      },
      {
        name: 'showGrade',
        title: '显示分数',
        setter: 'BoolSetter',
      },
    ],
    supports: {
      events: ['onChange', 'onHoverChange'],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
