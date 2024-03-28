module.exports = {
  group: '原子组件',
  componentName: 'CheckboxGroup',
  title: '复选按钮组',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
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
        name: 'isPreview',
        title: '预览态',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'value',
        title: 'value',
        supportVariable: true,
        // setter: {
        //   componentName: 'MixedSetter',
        //   props: {
        //     setters: ['ExpressionSetter'],
        //   },
        // },
      },
      {
        name: 'defaultValue',
        title: '初始化默认值',
        defaultValue: '[]',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['JsonSetter', 'ExpressionSetter'],
          },
        },
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
                            supportVariable: true,
                          },
                          {
                            name: 'value',
                            title: 'value',
                            setter: 'StringSetter',
                            supportVariable: true,
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
      // {
      //   name: "renderPreview",
      //   title: "预览态模式下渲染的内容",
      //   display: "block",
      //   setter: {
      //     componentName: "FunctionSetter"
      //   },
      //   condition(target) {
      //     return target.parent.getPropValue("isPreview") || false;
      //   }
      // }
    ],
    supports: {
      style: true,
      events: ['onChange'],
    },
  },
  icon: '',
  category: '信息输入',
};
