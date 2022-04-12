import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Switch',
  title: '开关',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Switch',
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
      description: '自定义类名',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'checked',
      propType: 'bool',
      description: '当前状态',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['medium', 'small'],
      },
      description: '尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'checkedChildren',
      propType: 'string',
      description: '打开时的内容',
    },
    {
      name: 'unCheckedChildren',
      propType: 'string',
      description: '关闭时的内容',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '开关状态改变是触发此事件\n@param {Boolean} checked 是否为打开状态\n@param {Event} e DOM事件对象',
    },
    {
      name: 'onClick',
      propType: 'func',
      description: '鼠标点击事件\n@param {Event} e DOM事件对象',
    },
    {
      name: 'onKeyDown',
      propType: 'func',
      description: '键盘按键事件\n@param {Event} e DOM事件对象',
    },
  ],
  configure: {
    props: [
      {
        name: 'checked',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '当前状态',
            en_US: 'Checked',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: checked | 说明: 当前状态',
            en_US: 'prop: checked | description: current status',
          },
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '是否禁用',
            en_US: 'Disabled',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: disabled | 说明: 是否被禁用',
            en_US: 'prop: disabled | description: disabled',
          },
        },
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否禁用',
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
            en_US: 'Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 尺寸',
            en_US: 'prop: size | description: size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['medium', 'small'],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'checkedChildren',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '开启内容',
            en_US: 'Checked Content',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: checkedChildren | 说明: 打开时的内容',
            en_US: 'prop: checkedChildren | description: checked content',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
        description: '打开时的内容',
      },
      {
        name: 'unCheckedChildren',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '关闭内容',
            en_US: 'UnChecked Content',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: unCheckedChildren | 说明: 关闭时的内容',
            en_US: 'prop: unCheckedChildren | description: unchecked content',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
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
      events: ['onChange', 'onClick', 'onKeyDown'],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
