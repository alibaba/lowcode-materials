export default {
  group: '原子组件',
  componentName: 'Divider',
  title: '分隔符',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Divider',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'children',
      propType: 'string',
      description: '文案',
      defaultValue: '分隔符',
    },
    {
      name: 'dashed',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '是否虚线',
          en_US: 'Dashed',
        },
      },
      propType: {
        type: 'bool',
      },
      description: '是否为虚线',
      defaultValue: false,
    },
    {
      name: 'direction',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '朝向',
          en_US: 'Direction',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '线是水平还是垂直类型',
      defaultValue: 'hoz',
    },
    {
      name: 'orientation',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标题位置',
          en_US: 'Orientation',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['left', 'right', 'center'],
      },
      description: '分割线标题的位置',
      defaultValue: 'center',
    },
  ],
  configure: {
    props: [
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '方向',
            en_US: 'Direction',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '水平',
                value: 'hoz',
              },
              {
                label: '垂直',
                value: 'ver',
              },
            ],
          },
        },
        setValue: (target, value) => {
          if (value === 'ver') {
            target.parent.setPropValue('children', '');
          }
        },
        defaultValue: 'hoz',
      },
      {
        name: 'children',
        setter: 'StringSetter',
        title: '文本内容',
        defaultValue: '分隔符',
        condition: (target) => target?.parent?.getPropValue?.('direction') !== 'ver',
      },
      {
        name: 'orientation',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '对齐方式',
            en_US: 'Orientation',
          },
        },
        condition: (target) => target?.parent?.getPropValue?.('direction') !== 'ver',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '居中',
                value: 'center',
              },
              {
                label: '居左',
                value: 'left',
              },
              {
                label: '居右',
                value: 'right',
              },
            ],
          },
        },
        defaultValue: 'center',
      },
      {
        name: 'dashed',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '样式',
            en_US: 'Dashed',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '实线',
                value: false,
              },
              {
                label: '虚线',
                value: true,
              },
            ],
          },
        },
        defaultValue: true,
      },
    ],
  },
  icon: '',
  category: '通用',
  snippets: require('./snippets'),
};
