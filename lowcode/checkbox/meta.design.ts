import snippets from './snippets.design';

export default {
  group: '原子组件',
  componentName: 'Checkbox',
  title: '复选按钮',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Checkbox',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'id',
      propType: 'string',
      description: 'ID',
    },
    {
      name: 'name',
      propType: 'string',
      description: 'name',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'checked',
      propType: 'bool',
      description: '选中状态',
    },
    {
      name: 'defaultChecked',
      propType: 'bool',
      description: '默认选中状态',
      defaultValue: false,
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '禁用',
    },
    {
      name: 'label',
      propType: 'string',
      description: 'label',
    },
    {
      name: 'indeterminate',
      propType: 'bool',
      description: '中间状态',
    },
    {
      name: 'defaultIndeterminate',
      propType: 'bool',
      description: '默认中间态',
      defaultValue: false,
    },
    {
      name: 'value',
      propType: {
        type: 'oneOfType',
        value: ['string'],
      },
      description: 'value',
    },
  ],
  configure: {
    props: [
      {
        name: 'label',
        title: '标题',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'value',
        title: 'Value',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'indeterminate',
        title: '半选状态',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'controlChecked',
        display: 'block',
        title: {
          label: '外部控制选中',
          tip: '外部控制选中后，选中状态需要开发者自己根据 onChange 回传的值重新设置给组件才能生效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'checked',
        title: '选中状态',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
        condition(target) {
          return target.getProps().getPropValue('controlChecked') || false;
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
    ],
    supports: {
      style: true,
      events: ['onChange', 'onMouseEnter', 'onMouseLeave'],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
