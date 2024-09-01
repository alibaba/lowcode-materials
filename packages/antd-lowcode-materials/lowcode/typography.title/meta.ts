import snippets from './snippets';

export default {
  snippets,
  componentName: 'Typography.Title',
  title: '标题',
  category: '基础',
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
      defaultValue: '',
      supportVariable: true,
    },
    {
      name: 'level',
      title: { label: '重要程度', tip: '重要程度(1-5)' },
      propType: 'number',
      defaultValue: 1,
    },
    {
      name: 'code',
      title: { label: '添加代码样式', tip: '添加代码样式' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'copyable',
      title: { label: '是否可拷贝', tip: '是否可拷贝' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'delete',
      title: { label: '添加删除线样式', tip: '添加删除线样式' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'editable',
      title: { label: '是否可编辑', tip: '是否可编辑' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'ellipsis',
      title: {
        label: '自动溢出省略',
        tip: '设置自动溢出省略，需要设置元素宽度',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'mark',
      title: { label: '添加标记样式', tip: '添加标记样式' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'keyboard',
      title: { label: '添加键盘样式', tip: '添加键盘样式' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'underline',
      title: { label: '添加下划线样式', tip: '添加下划线样式' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'strong',
      title: { label: '是否加粗', tip: '是否加粗' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'type',
      title: { label: '文本类型', tip: '文本类型' },
      propType: { type: 'oneOf', value: ['secondary', 'warning', 'danger'] },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '默认',
              value: 'default',
            },
            {
              title: '弱提示',
              value: 'secondary',
            },
            {
              title: '成功',
              value: 'success',
            },
            {
              title: '警告',
              value: 'warning',
            },
            {
              title: '错误',
              value: 'danger',
            },
          ],
        },
      },
    },
  ],
  configure: { supports: {       style: true,
    className: true,  } },
};
