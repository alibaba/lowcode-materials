import snippets from './snippets';
import { uuid } from '../utils';

export default {
  group: '原子组件',
  componentName: 'Form',
  title: '表单容器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Form',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'inline',
      propType: 'bool',
      description: '内联表单',
    },
    {
      name: 'size',
      title: {
        label: 'Size',
        tip:
          '单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小',
      },
      propType: {
        type: 'oneOf',
        value: ['large', 'medium', 'small'],
      },
      description:
        '单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小',
      defaultValue: 'medium',
    },
    {
      name: 'fullWidth',
      propType: 'bool',
      description: '单个 Item 中表单类组件宽度是否是100%',
    },
    {
      name: 'labelAlign',
      title: {
        label: '标签的位置',
        tip: '上, 左, 内',
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'left', 'inset'],
      },
      description: '标签的位置\n@enumdesc 上, 左, 内',
      defaultValue: 'left',
    },
    {
      name: 'labelTextAlign',
      propType: {
        type: 'oneOf',
        value: ['left', 'right'],
      },
      description: '标签的左右对齐方式\n@enumdesc 左, 右',
    },
    {
      name: 'onSubmit',
      propType: 'func',
      description: 'form内有 `htmlType="submit"` 的元素的时候会触发',
    },
    {
      name: 'className',
      propType: 'string',
      description: '扩展class',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内联样式',
    },
    {
      name: 'value',
      propType: {
        type: 'oneOfType',
        value: ['Json', 'JSExpression'],
      },
      description: '表单数值',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '表单变化回调\n@param {Object} values 表单数据\n@param {Object} item 详细\n@param {String} item.name 变化的组件名\n@param {String} item.value 变化的数据\n@param {Object} item.field field 实例',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'device',
      propType: {
        type: 'oneOf',
        value: ['phone', 'tablet', 'desktop'],
      },
      description: '预设屏幕宽度',
      defaultValue: 'desktop',
    },
    {
      name: 'responsive',
      propType: 'bool',
      description: '是否开启内置的响应式布局 （使用ResponsiveGrid）',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否开启预览态',
    },
    {
      name: 'field',
      propType: 'any',
      description: 'field 实例',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'ref',
        title: {
          label: 'ref',
          tip: "ref | 通过 this.$('xxx') 获取到组件实例",
        },
        defaultValue: () => {
          return `form_${uuid()}`;
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'inline',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '内联表单',
            en_US: 'Inline',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: inline | 说明: 内联表单',
            en_US: 'prop: inline | description: inline form',
          },
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
        setValue: (target, value) => {
          if (value === true) {
            target.parent.setPropValue('labelCol', null);
            target.parent.setPropValue('wrapperCol', null);
          } else {
            target.parent.setPropValue('labelCol', { span: 2 });
            target.parent.setPropValue('wrapperCol', { span: 14 });
          }
          return target.parent.setPropValue('inline', value);
        },
      },
      {
        name: 'fullWidth',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '宽度占满',
            en_US: 'FullWidth',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: fullWidth | 说明: 单个 Item 中表单类组件宽度是否是100%',
            en_US: 'prop: fullWidth | description: full width',
          },
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'isPreview',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '预览态',
            en_US: 'Preview Mode',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: isPreview | 说明: 是否开启预览态',
            en_US: 'prop: isPreview | description: preview mode',
          },
        },
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否开启预览态',
      },
      {
        name: 'field',
        title: {
          label: {
            type: 'i18n',
            zh_CN: 'Field 实例',
            en_US: 'Field',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: field | 说明: 传入 Field 实例',
            en_US: 'prop: field | description: field instance',
          },
          docUrl:
            'https://fusion.alibaba-inc.com/pc/component/basic/form#%E5%A4%8D%E6%9D%82%E5%8A%9F%E8%83%BD(Field)',
        },
        setter: {
          componentName: 'ExpressionSetter',
        },
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '表单值',
            en_US: 'value',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: value | 说明: 表单值',
            en_US: 'prop: value | description: value instance',
          },
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['JsonSetter', 'ExpressionSetter'],
          },
        },
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
            zh_CN:
              '属性: size | 说明: 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小',
            en_US: 'prop: size | description: size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['large', 'medium', 'small'],
          },
        },
        description:
          '单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小',
        defaultValue: 'medium',
      },
      {
        name: 'labelAlign',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '标签位置',
            en_US: 'Label Align',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: labelAlign | 说明: 标签的位置\n@enumdesc 上, 左, 内',
            en_US: 'prop: labelAlign | description: label align',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['top', 'left', 'inset'],
          },
        },
        defaultValue: 'left',
      },
      {
        name: 'labelTextAlign',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '标签对齐',
            en_US: 'Text Align',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: labelTextAlign | 说明: 标签的左右对齐方式\n@enumdesc 左, 右',
            en_US: 'prop: labelTextAlign | description: label text align',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['left', 'right'],
          },
        },
        defaultValue: 'left',
      },
      {
        name: 'device',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '设备',
            en_US: 'Device',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: device | 说明: 预设屏幕宽度',
            en_US: 'prop: device | description: device',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['phone', 'tablet', 'desktop'],
          },
        },
        defaultValue: 'desktop',
      },
      {
        type: 'group',
        title: '布局',
        display: 'accordion',
        items: [
          {
            name: 'labelCol',
            display: 'inline',
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'span',
                      description: 'span',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'offset',
                      description: 'offset',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                  ],
                },
              },
            },
            description:
              'label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
          },
          {
            name: 'wrapperCol',
            display: 'inline',
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'span',
                      description: 'span',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'offset',
                      description: 'offset',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                  ],
                },
              },
            },
            description: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
          },
        ],
      },
    ],
    supports: {
      style: true,
      events: ['saveField', 'onSubmit', 'onChange'],
    },
    advanced: {
      callbacks: {
        onNodeAdd: (dragment, currentNode) => {
          // 拖入的内容为LayoutP时,不做包裹动作
          if (!dragment || dragment.componentName === 'Form.Item') {
            return;
          }
          // 为目标元素包裹一层P
          const layoutPNode = currentNode.document.createNode({
            componentName: 'Form.Item',
            title: '表单项',
            props: {
              label: '表单项: ',
            },
            children: [dragment.exportSchema()],
          });
          // 当前dragment还未添加入node子节点,需要setTimeout处理
          setTimeout(() => {
            if (!currentNode.children.has(dragment)) {
              return;
            }
            const newNode = currentNode.document.createNode(
              Object.assign(layoutPNode.exportSchema()),
            );
            currentNode.insertBefore(newNode, dragment, false);
            dragment.remove(false);
            newNode.children.get(0).select();
          }, 1);
        },
      },
    },
  },

  icon: 'https://img.alicdn.com/tfs/TB1oH02u2b2gK0jSZK9XXaEgFXa-112-64.png',
  category: '信息输入',
  snippets,
};
