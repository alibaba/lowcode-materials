import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Select',
  title: '选择器',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认选中值' },
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          { type: 'arrayOf', value: 'string' },
          'number',
          { type: 'arrayOf', value: 'number' },
        ],
      },
    },
    {
      name: 'value',
      title: { label: '当前值', tip: '当前值' },
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          { type: 'arrayOf', value: 'string' },
          'number',
          { type: 'arrayOf', value: 'number' },
        ],
      },
    },
    {
      name: 'fieldNames',
      title: { label: '自定义字段', tip: '自定义labelvalue字段' },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
      defaultValue: {
        label: 'label',
        value: 'value',
        options: 'options',
        groupLabel:'label'
      }
    },
    {
      name: 'options',
      title: { label: '可选项', tip: '可选项' },
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [
            {
              name: 'label',
              propType: 'string',
              description: '选项名',
              defaultValue: '选项名',
            },
            {
              name: 'value',
              propType: ['string', 'number'],
              description: '选项值',
              defaultValue: '选项值',
            },
            {
              name: 'disabled',
              propType: 'bool',
              description: '是否禁用',
              defaultValue: false,
            },
          ],
        },
      },
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
                    setter: ['StringSetter', 'VariableSetter'],
                    isRequired: true
                  },
                  {
                    name: 'value',
                    title: '选项值',
                    setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
                    isRequired: true
                  },
                  {
                    name: 'disabled',
                    title: '是否禁用',
                    setter: ['BoolSetter', 'VariableSetter'],
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                label: '选项名',
                value: uuid(),
                disabled: false,
              };
            },
          },
        },
      },
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '默认获取焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'defaultActiveFirstOption',
      title: { label: '高亮首个选项', tip: '是否默认高亮第一个选项' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'labelInValue',
      title: {
        label: '值包含label',
        tip: '把每个选项的 label 包装到 value 中',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'mode',
      title: { label: '多选/单选', tip: '多选/单选' },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '单选',
              value: 'single',
            },
            {
              title: '多选',
              value: 'multiple',
            },
            {
              title: '任意内容',
              value: 'tags',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['single', 'multiple', 'tags'] },
    },
    {
      name: 'maxTagCount',
      title: { label: '最大tag数', tip: '最多显示多少个tag' },
      condition(target) {
        return target.getProps().getPropValue('mode') === 'tags';
      },
      propType: 'number',
    },
    {
      name: 'maxTagTextLength',
      title: { label: 'tag文本长度', tip: '最大显示的tag文本长度' },
      condition(target) {
        return target.getProps().getPropValue('mode') === 'tags';
      },
      propType: 'number',
    },
    {
      name: 'notFoundContent',
      title: { label: '搜索为空提示文案', tip: '搜索为空提示文案' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'placeholder',
      title: { label: '选择框默认文字', tip: '选择框默认文字' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'showArrow',
      title: { label: '是否显示下拉箭头', tip: '是否显示下拉小箭头' },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      name: 'showSearch',
      title: { label: '是否可搜索', tip: '是否可搜索' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '选择框大小' },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
            },
            {
              title: '中',
              value: 'middle',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      defaultValue: 'middle',
    },
    {
      name: 'loading',
      title: { label: '加载中', tip: '加载中状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'dropdownRender',
      title: { label: '自定义下拉', tip: '自定义下拉' },
      propType: 'func',
      setter: [
        {
          componentName: 'FunctionSetter',
          props: {
            template:
              'dropdownRender(originNode,${extParams}){\n  return "组件";\n}',
          },
        },
      ],
      
    },
    {
      name: 'filterOption',
      title: { label: '筛选可选项', tip: '是否根据输入进行筛选' },
      propType: {
        type: 'oneOfType',
        value: ['bool', 'func'],
      },
      defaultValue: true,
    },
    {
      name: 'optionFilterProp',
      title: { label: '用于筛选的字段', tip: '用于过滤的字段' },
      propType: {
        type: 'oneOf',
        value: ['value', 'label'],
      },
      defaultValue: 'value',
    },
    // {
    //   name: 'suffixIcon',
    //   title: { label: '自后缀图标', tip: '自定义的选择框后缀图标' },
    //   propType: 'node',
    // },
    // {
    //   name: 'removeIcon',
    //   title: { label: '清除图标', tip: '自定义的多选框清除图标' },
    //   propType: 'node',
    // },
    // {
    //   name: 'clearIcon',
    //   title: { label: '自定义的多选框清空图标', tip: '自定义的多选框清空图标' },
    //   propType: 'node',
    // },
    // {
    //   name: 'menuItemSelectedIcon',
    //   title: {
    //     label: '自定义多选时当前选中的条目图标',
    //     tip: '自定义多选时当前选中的条目图标',
    //   },
    //   propType: 'node',
    // },
    {
      name: 'tokenSeparators',
      title: { label: '自动分词的分隔符', tip: '自动分词的分隔符' },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'onBlur',
      title: { label: '失去焦点时回调', tip: '失去焦点时回调' },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: {
        label: '选中回调函数',
        tip: '选中 option，或 input 的 value 变化时，调用此函数',
      },
      propType: 'func',
    },
    {
      name: 'onDeselect',
      title: {
        label: '取消选中时回调',
        tip: '取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效',
      },
      propType: 'func',
    },
    {
      name: 'onFocus',
      title: { label: '获得焦点时回调', tip: '获得焦点时回调' },
      propType: 'func',
    },
    {
      name: 'onInputKeyDown',
      title: { label: '按键按下时回调', tip: '按键按下时回调' },
      propType: 'func',
    },
    {
      name: 'onMouseEnter',
      title: { label: '鼠标移入时回调', tip: '鼠标移入时回调' },
      propType: 'func',
    },
    {
      name: 'onMouseLeave',
      title: { label: '鼠标移出时回调', tip: '鼠标移出时回调' },
      propType: 'func',
    },
    {
      name: 'onPopupScroll',
      title: { label: '下拉列表滚动时的回调', tip: '下拉列表滚动时的回调' },
      propType: 'func',
    },
    {
      name: 'onSearch',
      title: { label: '文本框值变化时回调', tip: '文本框值变化时回调' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: {
        label: '被选中时回调',
        tip: '被选中时调用，参数为选中项的 value (或 key) 值',
      },
      propType: 'func',
    },
    {
      name: 'onDropdownVisibleChange',
      title: { label: '展开下拉菜单的回调', tip: '展开下拉菜单的回调' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onBlur',
          description:"失去焦点时回调",

          template: "onBlur(${extParams}){\n// 失去焦点时回调\nconsole.log('onBlur');}",
        },
        {
          name: 'onChange',
          description:"选中 option，或 input 的 value 变化时",

          template:
            "onChange(value,option,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange',value,option);}",
        },
        {
          name: 'onDeselect',
          description:"取消选中时调用",

          template:
            "onDeselect(value,${extParams}){\n// 取消选中时调用\nconsole.log('onDeselect',value);}",
        },
        {
          name: 'onFocus',
          description:"获得焦点时回调",

          template: "onFocus(${extParams}){\n// 获得焦点时回调\nconsole.log('onFocus');}",
        },
        {
          name: 'onInputKeyDown',
          description:"按键按下时回调",

          template:
            "onInputKeyDown(${extParams}){\n// 按键按下时回调\nconsole.log('onInputKeyDown');}",
        },
        {
          name: 'onMouseEnter',
          description:"鼠标移入时回调",

          template: "onMouseEnter(${extParams}){\n// 鼠标移入时回调\nconsole.log('onMouseEnter');}",
        },
        {
          name: 'onMouseLeave',
          description:"鼠标移出时回调",

          template: "onMouseLeave(${extParams}){\n// 鼠标移出时回调\nconsole.log('onMouseLeave');}",
        },
        {
          name: 'onPopupScroll',
          description:"下拉列表滚动时的回调",

          template:
            "onPopupScroll(${extParams}){\n// 下拉列表滚动时的回调\nconsole.log('onPopupScroll');}",
        },
        {
          name: 'onSearch',
          description:"文本框值变化时回调",

          template:
            "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
        },
        {
          name: 'onSelect',
          description:"被选中时调用",
          template:
            "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,option);}",
        },
        {
          name: 'onDropdownVisibleChange',
          description:"展开下拉菜单的回调",

          template:
            "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange',open);}",
        },
      ],
    },
  },
};
