export default {
  group: '原子组件',
  componentName: 'CheckboxGroup',
  title: '复选按钮组',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Checkbox',
    main: '',
    destructuring: true,
    subName: 'Group',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
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
      name: 'disabled',
      propType: 'bool',
      description: '整体禁用',
    },
    {
      name: 'value',
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'instanceOf',
            value: 'array',
          },
          'string',
          'number',
        ],
      },
      description: '被选中的值列表',
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'instanceOf',
            value: 'array',
          },
          'string',
          'number',
        ],
      },
      description: '默认被选中的值列表',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '选中值改变时的事件\n@param {Array} value 选中项列表\n@param {Event} e Dom 事件对象',
    },
    {
      name: 'itemDirection',
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '子项目的排列方式\n- hoz: 水平排列 (default)\n- ver: 垂直排列',
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
  ],
  configure: {
    props: [
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
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
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
              'ExpressionSetter',
            ],
          },
        },
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
