import { uuid } from '../_utils/utils';

export default {
  componentName: 'Radio.Group',
  title: '单选框组',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认选中值' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'value',
      title: { label: '当前值', tip: '指定选中的选项' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'name',
      title: {
        label: 'name 属性',
        tip: 'RadioGroup 下所有 input[type="radio"] 的 name 属性',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'options',
      title: { label: '指定可选项', tip: '指定可选项' },
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
              propType: 'string',
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
                    setter: 'StringSetter',
                    isRequired: true
                  },
                  {
                    name: 'value',
                    title: '选项值',
                    setter: 'StringSetter',
                    isRequired: true
                  },
                  {
                    name: 'disabled',
                    title: '是否禁用',
                    setter: 'BoolSetter',
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
      name: 'optionType',
      title: { label: '类型', tip: '类型' },
      propType: { type: 'oneOf', value: ['default', 'button'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '默认类型',
              value: 'default',
            },
            {
              title: '按钮类型',
              value: 'button',
            },
          ],
        },
      },
      defaultValue: 'default',
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '大小，只对按钮样式生效' },
      condition(target) {
        return target.getProps().getPropValue('optionType') === 'button';
      },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
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
      defaultValue: 'middle',
    },
    {
      name: 'buttonStyle',
      title: {
        label: '按钮风格',
        tip: 'RadioButton 的风格样式，目前有描边和填色两种风格',
      },
      condition(target) {
        return target.getProps().getPropValue('optionType') === 'button';
      },
      propType: { type: 'oneOf', value: ['outline', 'solid'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '描边',
              value: 'outline',
            },
            {
              title: '填色',
              value: 'solid',
            },
          ],
        },
      },
      defaultValue: 'outline',
    },
    {
      name: 'onChange',
      title: { label: '变化时回调函数', tip: '变化时回调函数' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"选项变化时的回调函数",

          template:
            "onChange(event,${extParams}){\n// 选项变化时的回调函数\nconsole.log('onChange',event);}",
        },
      ],
    },
  },
};
