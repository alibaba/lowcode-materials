import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Paragraph',
  title: '段落',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i3/O1CN01n5wpxc1bi862KuXFz_!!6000000003498-55-tps-50-50.svg',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Paragraph',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'component',
      propType: {
        type: 'instanceOf',
        value: 'elementType',
      },
      description: '设置标签类型',
      defaultValue: 'article',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'children',
      title: '内容',
      propType: 'string',
    },
  ],
  configure: {
    props: [
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
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
            ],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'children',
        title: '内容',
        setter: 'TextAreaSetter',
      },
    ],
  },
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01n5wpxc1bi862KuXFz_!!6000000003498-55-tps-50-50.svg',
  category: '通用',
  snippets,
};
