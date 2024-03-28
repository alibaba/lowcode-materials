module.exports = {
  group: '原子组件',
  componentName: 'Select',
  title: '选择器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Select',
    main: '',
    destructuring: true,
    subName: '',
  },
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
      name: 'placeholder',
      supportVariable: true,

      title: {
        label: '占位提示',
        tip: '属性: placeholder',
      },
      defaultValue: '请选择', // 不生效
      propType: 'string',
    },
    {
      name: 'mode',
      propType: {
        type: 'oneOf',
        value: ['single', 'multiple', 'tag'],
      },
      description: '选择器模式',
    },
    {
      name: 'hasClear',
      title: {
        label: '清除按钮',
        tip: '属性: hasClear',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'showSearch',
      title: {
        label: '可搜索',
        tip: '属性: showSearch',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'filterLocal',
      title: {
        label: '本地过滤',
        tip: '如果开启远程，必须关闭本地',
      },
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '禁用',
    },
    {
      name: 'dataSource',
    },
    {
      type: 'group',
      title: '其他配置',
      display: 'block',
      items: [
        {
          name: 'notFoundContent',
          title: {
            label: '空文案',
            tip: 'notFoundContent|弹层内容为空的文案',
          },
          setter: 'StringSetter',
          supportVariable: true,
          description: '弹层内容为空的文案',
        },
        {
          name: 'hasBorder',
          title: {
            label: '边框',
            tip: '是否有边框',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          supportVariable: true,
          description: '是否有边框',
        },
        {
          name: 'autoWidth',
          title: '下拉等宽',
          propType: 'bool',
          setter: 'BoolSetter',
          supportVariable: true,
        },
        {
          name: 'hasArrow',
          title: '下拉箭头',
          propType: 'bool',
          setter: 'BoolSetter',
          supportVariable: true,
          description: '是否有下拉箭头',
          defaultValue: true,
        },
      ],
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
  configure: {
    props: {
      isExtends: true,
      
      override: [
        {
          name: 'dataSource',
          display: 'block',
          title: '选项',
          tip: {
            title: '数据格式',
            url: '',
          },
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
                        title: 'Title',
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
          name: 'mode',
          title: {
            label: '模式',
            tip: '属性: mode',
          },
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              defaultValue: 'single',
              options: [
                { value: 'single', title: '单选' },
                { value: 'multiple', title: '多选' },
                { value: 'tag', title: '标签' },
              ],
            },
          },
        },

      ],
    },
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          propType: 'func',
          description: '值发生变化',
        },
        {
          name: 'onVisibleChange',
          propType: 'func',
          description: '弹层显示隐藏变化',
        },
        {
          name: 'onRemove',
          propType: 'func',
          description: 'Tag 被删除',
        },
        {
          name: 'onSearch',
          propType: 'func',
          description: '搜索',
        },
      ],
    },
  },
  icon: '',
  category: '信息输入',
  snippets: require('./snippets'),
};
