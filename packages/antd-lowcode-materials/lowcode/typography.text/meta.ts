import snippets from './snippets';

export default {
  snippets,
  componentName: 'Typography.Text',
  title: '文本',
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
      name: 'code',
      title: { label: '添加代码样式', tip: '添加代码样式' },
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
    {
      title: '高级',
      type: 'group',
      display: 'accordion',
      items: [
        {
          name: 'copyable',
          title: { label: '是否可拷贝', tip: '是否可拷贝' },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
        {
          name: 'editable',
          title: { label: '是否可编辑', tip: '是否可编辑' },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
        {
          name: 'ellipsis',
          title: {
            label: '自动溢出省略',
            tip: '设置自动溢出省略，需要设置元素宽度',
          },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      className: true,

      events: [
        {
          name: 'copyable.onCopy',
          description:"拷贝成功的回调函数",

          template: "onCopy(${extParams}){\n// 拷贝成功的回调函数\nconsole.log('onCopy');}",
        },
        {
          name: 'editable.onStart',
          description:"进入编辑中状态时触发",

          template: "onStart(${extParams}){\n// 进入编辑中状态时触发\nconsole.log('onStart');}",
        },
        {
          name: 'editable.onChange',
          description:"文本域编辑时触发",

          template:
            "onChange(event,${extParams}){\n// 文本域编辑时触发\nconsole.log('onChange', event);}",
        },
        {
          name: 'editable.onEnd',
          description:"按 ENTER 结束编辑状态时触发",

          template: "onEnd(${extParams}){\n// 按 ENTER 结束编辑状态时触发\nconsole.log('onEnd');}",
        },
        {
          name: 'editable.onCancel',
          description:" 按 ESC 退出编辑状态时触发",

          template:
            "onCancel(${extParams}){\n// 按 ESC 退出编辑状态时触发\nconsole.log('onCancel');}",
        },
        {
          name: 'ellipsis.onEllipsis',
          description:"触发省略时的回调",

          template:
            "onEllipsis(ellipsis,${extParams}){\n// 触发省略时的回调\nconsole.log('onEllipsis', ellipsis);}",
        },
        {
          name: 'ellipsis.onExpand',
          description:"点击展开时的回调",

          template:
            "onExpand(event,${extParams}){\n// 点击展开时的回调\nconsole.log('onExpand', event);}",
        },
      ],
    },
  },
};
