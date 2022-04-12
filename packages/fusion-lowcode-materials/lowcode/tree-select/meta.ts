module.exports = {
  group: '原子组件',
  componentName: 'TreeSelect',
  title: '树型选择控件',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'TreeSelect',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'dataSource',
      propType: {
        type: 'Json',
      },
      description: '数据源',
    },
    {
      name: 'size',
      title: '尺寸',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '选择框大小',
      defaultValue: 'medium',
    },
    {
      name: 'placeholder',
      title: '占位提示',
      propType: 'string',
      description: '选择框占位符',
    },
    {
      name: 'label',
      title: '内联文案',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '自定义内联label',
    },
    {
      name: 'notFoundContent',
      title: '空提示',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '无数据时显示内容',
      defaultValue: 'Not Found',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'hasArrow',
      title: '下拉箭头',
      propType: 'bool',
      description: '是否有下拉箭头',
      defaultValue: true,
    },
    {
      name: 'hasBorder',
      title: '边框',
      propType: 'bool',
      description: '是否有边框',
      defaultValue: true,
    },
    {
      name: 'hasClear',
      title: '清空按钮',
      propType: 'bool',
      description: '是否有清空按钮',
      defaultValue: false,
    },
    {
      name: 'readOnly',
      propType: 'bool',
      description: '是否只读',
    },
    {
      name: 'autoWidth',
      propType: 'bool',
      description: '下拉框是否与选择器对齐',
      defaultValue: true,
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '选中值改变时触发的回调函数\n@param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组\n@param {Object|Array} data 选中的数据，包括 value, label, pos, key属性，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点',
    },
    {
      name: 'showSearch',
      propType: 'bool',
      description: '搜索框',
      defaultValue: false,
    },
    {
      name: 'onSearch',
      propType: 'func',
      description: '在搜索框中输入时触发的回调函数\n@param {String} keyword 输入的关键字',
    },
    {
      name: 'onSearchClear',
      propType: 'func',
    },
    {
      name: 'multiple',
      propType: 'bool',
      description: '支持多选',
      defaultValue: false,
    },
    {
      name: 'treeCheckable',
      propType: 'bool',
      description: '下拉框中的树是否支持勾选节点的复选框',
      defaultValue: false,
    },
    {
      name: 'treeCheckStrictly',
      propType: 'bool',
      description: '下拉框中的树勾选节点复选框是否完全受控（父子节点选中状态不再关联）',
      defaultValue: false,
    },
    {
      name: 'treeCheckedStrategy',
      propType: {
        type: 'oneOf',
        value: ['all', 'parent', 'child'],
      },
      description:
        '定义选中时回填的方式\n@enumdesc 返回所有选中的节点, 父子节点都选中时只返回父节点, 父子节点都选中时只返回子节点',
      defaultValue: 'parent',
    },
    {
      name: 'treeDefaultExpandAll',
      propType: 'bool',
      description: '下拉框中的树是否默认展开所有节点',
      defaultValue: false,
    },
    {
      name: 'treeLoadData',
      propType: 'func',
      description:
        '下拉框中的树异步加载数据的函数，使用请参考[Tree的异步加载数据Demo](https://fusion.design/component/tree)\n@param {ReactElement} node 被点击展开的节点',
    },
    {
      name: 'treeProps',
      propType: {
        type: 'Json',
      },
      description: '透传到 Tree 的属性对象',
    },
    {
      name: 'defaultVisible',
      title: '初始显示',
      propType: 'bool',
      description: '初始下拉框是否显示',
      defaultValue: false,
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '当前下拉框是否显示',
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description:
        '下拉框显示或关闭时触发事件的回调函数\n@param {Boolean} visible 是否显示\n@param {String} type 触发显示关闭的操作类型',
    },
    {
      name: 'popupStyle',
      propType: {
        type: 'object',
      },
      description: '下拉框自定义样式对象',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '下拉框样式自定义类名',
    },
    {
      name: 'popupContainer',
      propType: 'any',
      description: '下拉框挂载的容器节点',
    },
    {
      name: 'popupProps',
      propType: {
        type: 'object',
      },
      description: '透传到 Popup 的属性对象',
    },
    {
      name: 'followTrigger',
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '预览态',
    },
    {
      name: 'renderPreview',
      propType: 'func',
      description: '预览态模式下渲染的内容\n@param {Array<data>} value 选择值 { label: , value:}',
    },
    {
      name: 'useVirtual',
      propType: 'bool',
      description: '是否开启虚拟滚动',
    },
    {
      name: 'style',
      propType: 'object',
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
          name: 'visible',
          condition: () => false,
        },
        {
          name: 'autoWidth',
          condition: () => false,
        },
        {
          name: 'useVirtual',
          condition: () => false,
        },
        {
          name: 'renderPreview',
          condition: () => false,
        },
        {
          name: 'followTrigger',
          condition: () => false,
        },
        {
          name: 'popupStyle',
          condition: () => false,
        },
        {
          name: 'popupClassName',
          condition: () => false,
        },
        {
          name: 'popupContainer',
          condition: () => false,
        },
        {
          name: 'popupProps',
          condition: () => false,
        },
        {
          name: 'treeCheckable',
          condition: () => false,
        },
        {
          name: 'treeCheckStrictly',
          condition: () => false,
        },
        {
          name: 'treeCheckedStrategy',
          condition: () => false,
        },
        {
          name: 'treeDefaultExpandAll',
          condition: () => false,
        },
        {
          name: 'treeLoadData',
          condition: () => false,
        },
        {
          name: 'treeProps',
          condition: () => false,
        },
        {
          name: 'label',
          title: '内联文案',
          setter: {
            componentName: 'StringSetter',
          },
        },
        {
          name: 'dataSource',
          title: {
            label: '节点数据',
            tip: '数据源',
          },
          setter: 'JsonSetter',
          supportVariable: true,
        },
      ],
    },
  },
  icon: '',
  category: '信息输入',
  snippets: require('./snippets'),
};
