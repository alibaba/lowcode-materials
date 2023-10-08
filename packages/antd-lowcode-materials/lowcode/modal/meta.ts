import snippets from './snippets';

export default {
  snippets,
  componentName: 'Modal',
  title: '对话框',
  category: '反馈',
  props: [
    {
      name: 'title',
      title: { label: '标题', tip: '标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'cancelText',
      title: { label: '取消按钮文字', tip: '取消按钮文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'okText',
      title: { label: '确认按钮文字', tip: '确认按钮文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'open',
      title: { label: '是否可见', tip: '对话框是否可见' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'centered',
      title: { label: '垂直居中', tip: '垂直居中展示 Modal' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'closable',
      title: { label: '显示关闭按钮', tip: '是否显示右上角的关闭按钮' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'closeIcon',
      title: { label: '关闭图标', tip: '自定义关闭图标' },
      propType: 'node',
    },
    {
      name: 'confirmLoading',
      title: { label: '确定按钮loading', tip: '确定按钮loading' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'destroyOnClose',
      title: { label: '销毁子元素', tip: '关闭时销毁 Modal 里的子元素' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'forceRender',
      title: { label: '强制渲染Modal', tip: '预渲染 Modal 内元素' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'keyboard',
      title: { label: 'esc关闭', tip: '是否支持键盘 esc 关闭' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'mask',
      title: { label: '是否展示遮罩', tip: '是否展示遮罩' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'maskClosable',
      title: { label: '点击蒙层关闭', tip: '点击蒙层是否允许关闭' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'zIndex',
      title: { label: 'z-index', tip: '设置 Modal 的 `z-index`' },
      propType: 'number',
      setter: 'NumberSetter',
      supportVariable: true
    },
    {
      name: 'width',
      title: { label: '宽度', tip: '宽度' },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
    },
    {
      name: 'footer',
      title: {
        label: '底部内容',
        tip: '底部内容，当不需要默认底部按钮时，可以设为 `footer={null}`',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'okType',
      title: { label: '确认按钮类型', tip: '确认按钮类型' },
      propType: { type: 'oneOf', value: ['default', 'small'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: 'primary',
              value: 'primary',
            },
            {
              title: 'ghost',
              value: 'ghost',
            },
            {
              title: 'dashed',
              value: 'dashed',
            },
            {
              title: 'link',
              value: 'link',
            },
            {
              title: 'text',
              value: 'text',
            },
            {
              title: 'default',
              value: 'default',
            },
          ],
        },
      },
    },
    {
      name: 'okButtonProps',
      title: { label: '确认按钮props', tip: '确认按钮props' },
      propType: 'object',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'disabled',
                title: { label: '是否可点击', tip: 'disabled' },
                propType: 'bool',
                setter: [
                  {
                    componentName: 'BoolSetter',

                    initialValue: false,
                  },
                  'VariableSetter',
                ],
                isRequired: true,
              },
            ],
          },
        },
      },
    },
    {
      name: 'bodyStyle',
      title: { label: 'body样式', tip: 'Modal body 样式' },
      propType: 'object',
    },
    {
      name: 'maskStyle',
      title: { label: '遮罩样式', tip: '遮罩样式' },
      propType: 'object',
    },
    {
      name: 'style',
      title: {
        label: '浮层样式',
        tip: '可用于设置浮层的样式，调整浮层位置等',
      },
      propType: 'object',
    },
    {
      name: 'wrapClassName',
      title: { label: '外层容器类名', tip: '对话框外层容器的类名' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'getContainer',
      title: {
        label: '指定挂载节点',
        tip: '指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom',
      },
      propType: { type: 'oneOfType', value: ['node', 'func'] },
    },
    {
      name: 'onCancel',
      title: {
        label: '取消按钮回调',
        tip: '点击遮罩层或右上角叉或取消按钮的回调',
      },
      propType: 'func',
    },
    {
      name: 'onOk',
      title: { label: '点击确定回调', tip: '点击确定回调' },
      propType: 'func',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      rootSelector: '.ant-modal-content',
      nestingRule: {
        parentWhitelist: ['Page', 'Component'],
      },
    },
    supports: {
      style: true,
      events: [
        {
          name: 'afterClose',
          templete: "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
        },
        {
          name: 'onCancel',
          template:
            "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
        },
        {
          name: 'onOk',
          template: "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
        },
      ],
    },
  },
};
