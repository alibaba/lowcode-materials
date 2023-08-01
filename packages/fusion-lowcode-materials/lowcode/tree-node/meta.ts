module.exports = {
  group: '原子组件',
  componentName: 'TreeNode',
  title: '树形控件节点',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Tree',
    main: '',
    destructuring: true,
    subName: 'Node',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '树节点',
    },
    {
      name: 'label',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      description: '节点文本内容',
      defaultValue: '---',
    },
    {
      name: 'selectable',
      propType: 'bool',
      description: '单独设置是否支持选中，覆盖 Tree 的 selectable',
    },
    {
      name: 'checkable',
      propType: 'bool',
      description: '单独设置是否出现复选框，覆盖 Tree 的 checkable',
    },
    {
      name: 'editable',
      propType: 'bool',
      description: '单独设置是否支持编辑，覆盖 Tree 的 editable',
    },
    {
      name: 'draggable',
      propType: 'bool',
      description: '单独设置是否支持拖拽，覆盖 Tree 的 draggable',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁止节点响应',
      defaultValue: false,
    },
    {
      name: 'checkboxDisabled',
      propType: 'bool',
      description: '是否禁止勾选节点复选框',
      defaultValue: false,
    },
    {
      name: 'isLeaf',
      propType: 'bool',
      description: '是否是叶子节点',
      defaultValue: false,
    },
  ],
  icon: '',
  category: '信息输入',
};
