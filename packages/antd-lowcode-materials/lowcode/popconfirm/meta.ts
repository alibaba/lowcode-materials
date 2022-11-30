import {ComponentMetadata} from "@alilc/lowcode-types";
import snippets from './snippets';

export default {
  snippets,
  componentName: 'Popconfirm',
  title: '气泡确认框',
  category: '反馈',
  props: [
    {
      name: 'title',
      title: { label: '确认框内容', tip: '确认框内容' },
      propType: { type: 'oneOfType', value: ['string', 'node', 'func'] },
    },
    {
      name: 'okText',
      title: { label: '确认按钮文字', tip: '确认按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'cancelText',
      title: { label: '取消按钮文字', tip: '取消按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'onConfirm',
      title: { label: '点击确认回调', tip: '点击确认回调' },
      propType: 'func',
    },
    // {
    //   name: 'okType',
    //   title: { label: '确认按钮类型', tip: '确认按钮类型' },
    //   propType: {
    //     type: 'oneOf',
    //     value: ['primary', 'ghost', 'dashed', 'danger', 'link', 'text'],
    //   },
    //   setter: {
    //     componentName: 'SelectSetter',
    //     props: {
    //       options: [
    //         {
    //           title: '主按钮',
    //           value: 'primary',
    //         },
    //         {
    //           title: '虚线框按钮',
    //           value: 'dashed',
    //         },
    //         {
    //           title: '危险按钮',
    //           value: 'danger',
    //         },
    //         {
    //           title: '链接按钮',
    //           value: 'link',
    //         },
    //         {
    //           title: '类文本按钮',
    //           value: 'text',
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   name: 'okButtonProps',
    //   title: { label: 'ok按钮props', tip: 'ok按钮props' },
    //   propType: 'object',
    // },
    // {
    //   name: 'cancelButtonProps',
    //   title: { label: 'cancel按钮props', tip: 'cancel按钮props' },
    //   propType: 'object',
    // },
    // {
    //   name: 'onCancel',
    //   title: { label: '点击取消回调', tip: '点击取消回调' },
    //   propType: 'func',
    // },
    // {
    //   name: 'icon',
    //   title: { label: '自定义Icon图标', tip: '自定义弹出气泡Icon图标' },
    //   propType: 'node',
    // },
    // {
    //   name: 'disabled',
    //   title: {
    //     label: '是否禁用',
    //     tip: '是否为禁用状态',
    //   },
    //   propType: 'bool',
    //   defaultValue: false,
    // },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onConfirm',
          template: "onConfirm(${extParams}){\n// 点击确认的回调\nconsole.log('onConfirm');}",
        },
      ],
    },
  },
} as ComponentMetadata | any;
