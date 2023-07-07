module.exports = {
  group: '原子组件',
  componentName: 'Step.Item',
  title: '步骤项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Step',
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'icon',
      propType: 'string',
      description: '图标',
    },
    {
      name: 'title',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标题',
    },
    {
      name: 'content',
      title: {
        label: '内容',
        tip: 'content|内容填充, shape为 arrow 时无效',
      },
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '内容填充, shape为 arrow 时无效',
    },
    {
      name: 'status',
      title: {
        label: '状态',
        tip:
          'status|步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`',
      },
      propType: {
        type: 'oneOf',
        value: ['wait', 'process', 'finish'],
      },
      description:
        '步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`',
    },
    {
      name: 'percent',
      propType: 'number',
      description: '百分比',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
    },
    {
      name: 'onClick',
      propType: 'func',
      description: '点击步骤时的回调\n@param {Number} index 节点索引',
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义样式',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'title',
          title: '标题',
          setter: 'StringSetter',
        },
        {
          name: 'icon',
          title: {
            label: '图标',
            tip: 'icon|图标',
          },
          setter: {
            componentName: 'IconSetter',
          },
        },
        {
          name: 'content',
          title: {
            label: '内容',
            tip: 'content|内容',
          },
          setter: {
            componentName: 'TextAreaSetter',
          },
        },
        {
          name: 'status',
          title: {
            label: '状态',
            tip: 'status|状态',
          },
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: '等待',
                  value: 'wait',
                },
                {
                  title: '进行中',
                  value: 'process',
                },
                {
                  title: '结束',
                  value: 'finish',
                },
                {
                  title: '默认',
                  value: '',
                },
              ],
            },
          },
        },
      ],
    },
    advanced: {
      callbacks: {
        onHoverHook: () => false,
        onMouseDownHook: () => false,
        onClickHook: () => false,
        onMove: () => false,
      },
    },
  },
  category: 'null',
  icon: '',
};
