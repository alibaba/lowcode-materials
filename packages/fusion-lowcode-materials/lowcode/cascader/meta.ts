module.exports = {
  group: '原子组件',
  componentName: 'Cascader',
  title: '级联',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Cascader',
    main: '',
    destructuring: true,
    subName: '',
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
      defaultValue: false,
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '选中值改变时触发的回调函数\n@param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组\n@param {Object|Array} data 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点\n@param {Object} extra 额外参数\n@param {Array} extra.selectedPath 单选时选中的数据的路径\n@param {Boolean} extra.checked 多选时当前的操作是选中还是取消选中\n@param {Object} extra.currentData 多选时当前操作的数据\n@param {Array} extra.checkedData 多选时所有被选中的数据\n@param {Array} extra.indeterminateData 多选时半选的数据',
    },
    {
      name: 'onSelect',
      propType: 'func',
    },
    {
      name: 'dataSource',
      propType: 'array',
    },
    {
      name: 'expandTriggerType',
      title: {
        label: '触发方式',
        tip: 'expandTriggerType | 展开触发的方式',
      },
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '展开触发的方式',
      defaultValue: 'click',
    },
    {
      name: 'onExpand',
      propType: 'func',
      description: '展开时触发的回调函数\n@param {Array} expandedValue 各列展开值的数组',
    },
    {
      name: 'useVirtual',
      title: {
        label: '虚拟滚动',
        tip: 'useVirtual | 是否开启虚拟滚动',
      },
      propType: 'bool',
      description: '是否开启虚拟滚动',
      defaultValue: false,
    },
    {
      name: 'multiple',
      propType: 'bool',
      description: '是否多选',
      defaultValue: false,
    },
    {
      name: 'canOnlySelectLeaf',
      title: {
        label: '单选时是否只能选中叶子节点',
        tip: 'canOnlySelectLeaf',
      },
      propType: 'bool',
      description: '单选时是否只能选中叶子节点',
      defaultValue: false,
    },
    {
      name: 'canOnlyCheckLeaf',
      title: {
        label: '多选时是否只能选中叶子节点',
        tip: 'canOnlyCheckLeaf',
      },
      propType: 'bool',
      description: '多选时是否只能选中叶子节点',
      defaultValue: false,
    },
    {
      name: 'checkStrictly',
      title: {
        tip: 'checkStrictly',
        label: '父子节点是否选中不关联',
      },
      propType: 'bool',
      description: '父子节点是否选中不关联',
      defaultValue: false,
    },
    {
      name: 'listStyle',
      propType: 'object',
      description: '每列列表样式对象',
    },
    {
      name: 'loadData',
      title: {
        label: 'loadData',
        tip: '异步加载数据函数\n@param {Object} data 当前点击异步加载的数据\n@param {Object} source 当前点击数据，source是原始对象',
      },
      propType: 'func',
      description:
        '异步加载数据函数\n@param {Object} data 当前点击异步加载的数据\n@param {Object} source 当前点击数据，source是原始对象',
    },
    {
      name: 'onBlur',
      propType: 'func',
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
          name: 'rtl',
          condition: () => false,
        },
        {
          name: 'prefix',
          condition: () => false,
        },
        {
          name: 'loadData',
          condition: () => false,
        },
        {
          name: 'listStyle',
          setter: 'ObjectSetter',
          condition: () => false,
        },
        {
          name: 'dataSource',
          title: '级联数据',
          setter: 'JsonSetter',
          supportVariable: true,
        },
        {
          name: 'canOnlySelectLeaf',
          display: 'block',
          title: {
            label: '单选时是否只能选中叶子节点',
            tip: 'canOnlySelectLeaf',
          },
          setter: 'BoolSetter',
          supportVariable: true,
          defaultValue: false,
        },
        {
          name: 'canOnlyCheckLeaf',
          display: 'block',
          title: {
            label: '多选时是否只能选中叶子节点',
            tip: 'canOnlyCheckLeaf',
          },
          setter: 'BoolSetter',
          supportVariable: true,
          defaultValue: false,
        },
        {
          name: 'checkStrictly',
          display: 'block',
          title: {
            tip: 'checkStrictly',
            label: '父子节点是否选中不关联',
          },
          setter: 'BoolSetter',
          supportVariable: true,
          defaultValue: false,
        },
      ],
    },
  },
  icon: '',
  category: '信息输入',
};
