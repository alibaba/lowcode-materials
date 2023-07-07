export default {
  group: '原子组件',
  componentName: 'Radio.Group',
  title: '单选框组',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Radio',
    main: '',
    destructuring: true,
    subName: 'Group',
  },
  props: [
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
      name: 'name',
      propType: 'string',
      description: 'name',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['large', 'medium', 'small'],
      },
      description: '尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'shape',
      propType: {
        type: 'oneOf',
        value: ['normal', 'button'],
      },
      description: '展示形态',
    },
    {
      name: 'value',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'bool'],
      },
      description: '选中项的值',
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'bool'],
      },
      description: '默认值',
    },
    {
      name: 'component',
      propType: 'string',
      description: '设置标签类型',
      defaultValue: 'div',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否被禁用',
    },
    {
      name: 'dataSource',
      propType: 'object',
      description: '可选项列表',
    },
    {
      name: 'itemDirection',
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '子项目的排列方式',
      defaultValue: 'hoz',
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
      description: '预览态模式下渲染的内容\n@param {number} value 评分值',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '选中值改变时的事件\n@param {String/Number} value 选中项的值\n@param {Event} e Dom 事件对象',
    },
  ],
  configure: {
    props: [
      {
        name: 'shape',
        title: '类型',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '单选', value: 'normal' },
              { title: '单选按钮', value: 'button' },
            ],
          },
        },
        defaultValue: 'normal',
      },
      {
        name: 'itemDirection',
        title: '排列方式',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '水平排列', value: 'hoz' },
              { title: '垂直排列', value: 'ver' },
            ],
          },
        },
        defaultValue: 'hoz',
      },
      {
        name: 'dataSource',
        display: 'block',
        title: '选项',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'label',
                      title: 'label',
                      setter: 'StringSetter',
                      important: true,
                    },
                    {
                      name: 'value',
                      title: 'value',
                      setter: 'StringSetter',
                    },
                  ],
                },
              },
              initialValue: {
                label: '选项一',
                value: '1',
              },
            },
          },
        },
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: 'BoolSetter',
      },
    ],
    supports: {
      style: true,
      events: ['onChange'],
    },
  },
  icon: '',
  category: '信息输入',
};
