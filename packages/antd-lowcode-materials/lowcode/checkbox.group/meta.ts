import { uuid } from '../_utils/utils';

export default {
  componentName: 'Checkbox.Group',
  title: '多选框组',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认选中值' },
      propType: { type: 'arrayOf', value: 'string' },
      defaultValue: [],
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          }
        }
      },
      supportVariable: true
    },
    {
      name: 'value',
      title: { label: '当前值', tip: '当前选中的选项' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          }
        }
      },
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
      title: { label: 'name属性', tip: 'name属性' },
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
              description: '选项名',
              propType: 'string',
              defaultValue: '选项名',
            },
            {
              name: 'value',
              description: '选项值',
              propType: 'string',
              defaultValue: '选项值',
            },
            {
              name: 'disabled',
              description: '是否禁用',
              propType: 'bool',
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
      supportVariable: true
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
          description:"变化时回调函数",

          template:
            "onChange(checkedValue,${extParams}){\n// 变化时回调函数\nconsole.log('onChange', checkedValue);}",
        },
      ],
    },
  },
};
