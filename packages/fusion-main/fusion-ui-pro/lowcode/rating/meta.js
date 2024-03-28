import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormRating',
  isFormItemComponent: true,
  title: '评分',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormRating',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'id',
      propType: 'string',
    },
    {
      name: 'name',
      propType: 'string',
      description: 'name',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'defaultValue',
      propType: 'number',
      description: '默认值',
      defaultValue: 0,
    },
    {
      name: 'value',
      propType: 'number',
      description: '值',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'count',
      propType: 'number',
      description: '评分的总数',
      defaultValue: 5,
    },
    {
      name: 'showGrade',
      propType: 'bool',
      description: '是否显示 grade',
      defaultValue: false,
    },
    {
      name: 'allowHalf',
      propType: 'bool',
      description: '是否允许半星评分',
      defaultValue: false,
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'rtl',
      propType: 'bool',
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
      description: '预览态模式下渲染的内容',
    },
    {
      name: 'readOnly',
      propType: 'bool',
      description: '是否为只读态，效果上同 disabeld',
      defaultValue: false,
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '用户点击评分时触发的回调\n@param {String} value 评分值',
    },
    {
      name: 'onHoverChange',
      propType: 'func',
      description: '用户hover评分时触发的回调\n@param {String} value 评分值',
    },
  ],
  configure: {
    props: wrapFormItemProps([
      {
        name: 'value',
        title: '当前值',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'defaultValue',
        title: '默认值',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
            en_US: 'Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大',
            en_US: 'prop: size | description: size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['small', 'medium', 'large'],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'count',
        title: '评分总数',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'allowHalf',
        title: '半星评分',
        setter: ['BoolSetter', 'ExpressionSetter'],
      },
      {
        name: 'showGrade',
        title: '显示分数',
        setter: ['BoolSetter', 'ExpressionSetter'],
      },
      {
        name: 'readAs',
        title: '评分文案生成方法',
        display: 'block',
        setter: {
          componentName: 'FunctionSetter',
          // props: {
          //   defaultActionName="readAs",
          //   defaultCode=`function readAs(val) {
          //     return val + 'source';
          //   }`,
          // }
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
      events: ['onChange', 'onHoverChange'],
    },
  },
  icon: '',
  category: '内容',
};
