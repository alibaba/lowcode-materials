import { ISchema } from '@formily/react';

export const formItemSchema: ISchema = {
  type: 'object',
  properties: {
    tooltip: {
      title: '提示',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    addonBefore: {
      title: '前缀标签',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    addonAfter: {
      title: '后缀标签',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    labelCol: {
      title: '标签网格宽度',
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    wrapperCol: {
      title: '组件网格宽度',
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    labelWidth: {
      title: '标签宽度',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
    },
    wrapperWidth: {
      title: '组件宽度',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
    },
    colon: {
      title: '是否有冒号',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    asterisk: {
      title: '星号',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    gridSpan: {
      title: '网格跨列',
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    feedbackLayout: {
      title: '反馈布局',
      type: 'string',
      enum: [
        {
          label: '宽松',
          value: 'loose',
        },
        {
          label: '紧凑',
          value: 'terse',
        },
        {
          label: '弹层',
          value: 'popover',
        },
        {
          label: '无',
          value: 'none',
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'loose',
      },
    },
    size: {
      title: '尺寸',
      type: 'string',
      enum: ['large', 'small', 'default'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'default',
      },
    },
    layout: {
      title: '布局',
      type: 'string',
      enum: ['vertical', 'horizontal', 'inline'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'horizontal',
      },
    },
    tooltipLayout: {
      title: '提示布局',
      type: 'string',
      enum: ['icon', 'text'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'icon',
      },
    },
    labelAlign: {
      title: '标签对齐',
      type: 'string',
      enum: ['left', 'right'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'right',
      },
    },
    wrapperAlign: {
      title: '组件对齐',
      type: 'string',
      enum: ['left', 'right'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'left',
      },
    },
    labelWrap: {
      title: '标签换行',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    wrapperWrap: {
      title: '组件换行',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    fullness: {
      title: '组件占满',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    inset: {
      title: '内联布局',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    bordered: {
      title: '是否有边框',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
  },
};
