import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'AutoComplete',
  title: '辅助提示输入框',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认选中值' },
      propType: 'string',
    },
    {
      name: 'value',
      title: { label: '当前值', tip: '当前选中值' },
      propType: 'string',
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'options',
      title: { label: '选项内容', tip: '选项列表' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'label',
                    title: '选项名',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'value',
                    title: '选项值',
                    setter: 'StringSetter',
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                label: '选项名',
                value: uuid(),
              };
            },
          },
        },
      },
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获取焦点' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'backfill',
      title: {
        label: '键盘选中回填',
        tip: '使用键盘选择选项的时候把选中项回填到输入框中',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'defaultActiveFirstOption',
      title: { label: '默认高亮首个选项', tip: '是否默认高亮第一个选项' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'filterOption',
      title: { label: '可选项筛选', tip: '是否根据输入项进行筛选' },
      propType: 'bool',
    },
    {
      name: 'placeholder',
      title: { label: '输入框提示', tip: '输入框提示' },
      propType: 'string',
    },
    {
      name: 'onBlur',
      title: { label: '失去焦点时的回调', tip: '失去焦点时的回调' },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: {
        label: 'value变化时的回调',
        tip: '选中 option，或 input 的 value 变化时，调用此函数',
      },
      propType: 'func',
    },
    {
      name: 'onFocus',
      title: { label: '获得焦点时的回调', tip: '获得焦点时的回调' },
      propType: 'func',
    },
    {
      name: 'onSearch',
      title: { label: '搜索补全项的时候调用', tip: '搜索补全项的时候调用' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: {
        label: '被选中时的回调',
        tip: '被选中时调用，参数为选中项的 value 值',
      },
      propType: 'func',
    },
    {
      name: 'defaultOpen',
      title: { label: '默认展开菜单', tip: '是否默认展开下拉菜单' },
      propType: 'bool',
    },
    {
      name: 'open',
      title: { label: '展开下拉菜单', tip: '是否展开下拉菜单' },
      propType: 'bool',
    },
    {
      name: 'onDropdownVisibleChange',
      title: { label: '展开下拉菜单的回调', tip: '展开下拉菜单的回调' },
      propType: 'func',
    },
    {
      name: 'notFoundContent',
      title: { label: '无数据展示', tip: '当下拉列表为空时显示的内容' },
      propType: 'string',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onBlur',
          template: "onBlur(${extParams}){\n// 失去焦点时的回调\nconsole.log('onBlur');}",
        },
        {
          name: 'onChange',
          template:
            "onChange(value,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange', value);}",
        },
        {
          name: 'onFocus',
          template:
            "onFocus(${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onFocus')}",
        },
        {
          name: 'onSearch',
          template:
            "onSearch(value,${extParams}){\n// 搜索补全项的时候调用\nconsole.log('onSearch',value);}",
        },
        {
          name: 'onSelect',
          template:
            "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect', value, option);}",
        },
        {
          name: 'onDropdownVisibleChange',
          template:
            "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange', open);}",
        },
      ],
    },
  },
};
