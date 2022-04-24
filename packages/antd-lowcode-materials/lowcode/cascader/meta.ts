import snippets from './snippets';

export default {
  snippets,
  componentName: 'Cascader',
  title: '级联选择',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认的选中项', tip: '默认的选中项' },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOfType', value: ['string', 'number'] },
      },
    },
    {
      name: 'value',
      title: { label: '当前选中项', tip: '当前选中项' },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOfType', value: ['string', 'number'] },
      },
    },
    {
      name: 'options',
      title: { label: '选项数据', tip: '可选项数据源' },
      setter: 'JsonSetter',
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获取焦点' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'changeOnSelect',
      title: {
        label: '点选触发',
        tip: '点选每级菜单选项值都会触发onChange',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'className',
      title: { label: '自定义类名', tip: '自定义类名' },
      propType: 'string',
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'expandTrigger',
      title: { label: '菜单触发方式', tip: '触发次级菜单的展开的方式' },
      propType: { type: 'oneOf', value: ['click', 'hover'] },
    },
    {
      name: 'notFoundContent',
      title: { label: '无数据展示', tip: '无数据' },
      propType: 'string',
    },
    {
      name: 'placeholder',
      title: { label: '输入框占位文本', tip: '输入框占位文本' },
      propType: 'string',
    },
    {
      name: 'popupClassName',
      title: { label: '自定义浮层类名', tip: '自定义浮层类名' },
      propType: 'string',
    },
    {
      name: 'popupPlacement',
      title: { label: '浮层预设位置', tip: '浮层预设位置' },
      propType: {
        type: 'oneOf',
        value: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      },
    },
    {
      name: 'popupVisible',
      title: { label: '控制浮层显隐', tip: '控制浮层显隐' },
      propType: 'bool',
    },
    {
      name: 'showSearch',
      title: { label: '支持搜索', tip: '在选择框中显示搜索框' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '输入框大小' },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      defaultValue: 'middle',
    },
    {
      name: 'style',
      title: { label: '自定义样式', tip: '自定义样式' },
      propType: 'object',
    },
    {
      name: 'onChange',
      title: { label: '选择完成后的回调', tip: '选择完成后的回调' },
      propType: 'func',
    },
    {
      name: 'onPopupVisibleChange',
      title: { label: '显示/隐藏浮层的回调', tip: '显示/隐藏浮层的回调' },
      propType: 'func',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'allowClear',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '支持清除',
              en_US: 'Allow Clear',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: allowClear | 说明: 是否允许清除',
              en_US: 'prop: allowClear | description: Allow clear',
            },
          },
          setter: 'BoolSetter',
          supportVariable: true,
          defaultValue: true,
        },
        {
          name: 'bordered',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '显示边框',
              en_US: 'ShowBorder',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: bordered | 说明: 是否有边框',
              en_US: 'prop: bordered | description: have border',
            },
          },
          setter: 'BoolSetter',
          supportVariable: true,
          defaultValue: true
        },
        {
          name: 'popupVisible',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '控制浮层显隐',
              en_US: 'Popup Visible',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: popupVisible | 说明: 控制浮层显隐',
              en_US: 'prop: popupVisible | description: Popup Visible',
            },
          },
          setter: 'BoolSetter',
          supportVariable: true
        },
        {
          name: 'value',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '当前选中项',
              en_US: 'Value',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: value | 说明: 当前选中项',
              en_US: 'prop: value | description: Value',
            },
          },
          setter: 'ArraySetter',
          supportVariable: true
        }
      ]
    },
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(value,selectedOptions,${extParams}){\n// 选择完成后的回调\nconsole.log('onChange', value, selectedOptions);}",
        },
        {
          name: 'onPopupVisibleChange',
          template:
            "onPopupVisibleChange(value,selectedOptions,${extParams}){\n// 显示/隐藏浮层的回调\nconsole.log('onPopupVisibleChange', value, selectedOptions);}",
        },
      ],
    },
  },
};
