import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormRadioGroup',
  isFormItemComponent: true,
  title: '单选框组',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormRadioGroup',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'name',
      propType: 'string',
      description: 'name',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['large', 'medium', 'small'],
      },
      description: '尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'shape',
      propType: {
        type: 'oneOf',
        value: ['normal', 'button'],
      },
      description: '展示形态',
    },
    {
      name: 'value',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'bool'],
      },
      description: '选中项的值',
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'bool'],
      },
      description: '默认值',
    },
    {
      name: 'component',
      propType: 'string',
      description: '设置标签类型',
      defaultValue: 'div',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否被禁用',
    },
    {
      name: 'dataSource',
      propType: 'object',
      description: '可选项列表',
    },
    {
      name: 'itemDirection',
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '子项目的排列方式',
      defaultValue: 'hoz',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
      defaultValue: false,
    },
    {
      name: 'renderPreview',
      propType: 'func',
      description: '预览态模式下渲染的内容\n@param {number} value 评分值',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '选中值改变时的事件\n@param {String/Number} value 选中项的值\n@param {Event} e Dom 事件对象',
    },
  ],
  configure: {
    props: wrapFormItemProps([
      {
        name: 'shape',
        title: '展示形状',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '默认', value: 'normal' },
              { title: '按钮', value: 'button' },
            ],
          },
        },
        defaultValue: 'normal',
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'itemDirection',
        title: '排列方式',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '水平排列', value: 'hoz' },
              { title: '垂直排列', value: 'ver' },
            ],
          },
        },
        defaultValue: 'hoz',
      },
      {
        name: 'isPreview',
        title: '预览态',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'defaultValue',
        title: '默认值',
        defaultValue: '',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'dataSource',
        display: 'block',
        title: '选项',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            name: 'label',
                            title: 'label',
                            setter: 'StringSetter',
                          },
                          {
                            name: 'value',
                            title: 'value',
                            setter: 'StringSetter',
                          },
                        ],
                      },
                    },
                    initialValue: {
                      label: '选项一',
                      value: '1',
                    },
                  },
                },
              },
              'ExpressionSetter',
            ],
          },
        },
      },
      {
        type: 'group',
        title: '高级',
        display: 'block',
        items: [
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
          },
          {
            name: 'name',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单标识',
                en_US: 'Name',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: name | 说明: 表单标识',
                en_US: 'prop: name | description: switch name',
              },
            },
            setter: 'StringSetter',
          },
        ],
      },
    ]),
    supports: {
      style: true,
      events: ['onChange'],
    },
    advanced: {
      initials: [
        {
          name: 'dataSource',
          initial: () => {
            return [
              {
                label: '选项一',
                value: '1',
              },
              {
                label: '选项二',
                value: '2',
              },
              {
                label: '选项三',
                value: '3',
              },
            ];
          },
        },
      ],
    },
  },
  icon: '',
  category: '内容',
};
