import { getDataFromPlainText } from './adaptor';

export default {
  group: '原子组件',
  componentName: 'SplitButton',
  title: '分隔按钮',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'SplitButton',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'label',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '主按钮的文案',
    },
    {
      name: 'type',
      title: '按钮类型',
      propType: {
        type: 'oneOf',
        value: ['normal', 'primary', 'secondary'],
      },
      description: '按钮的类型',
      defaultValue: 'normal',
    },
    {
      name: 'size',
      title: '按钮尺寸',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '按钮组的尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'component',
      title: '标签类型',
      propType: {
        type: 'oneOf',
        value: ['button', 'a'],
      },
      defaultValue: 'button',
      description: '设置标签类型',
    },
    {
      name: 'ghost',
      title: '幽灵按钮',
      propType: {
        type: 'oneOf',
        value: ['light', 'dark', false, true],
      },
      description: '是否为幽灵按钮',
    },
    {
      name: 'defaultSelectedKeys',
      propType: {
        type: 'instanceOf',
        value: 'array',
      },
      description: '默认激活的菜单项（用法同 Menu 非受控）',
      defaultValue: [],
    },
    {
      name: 'selectedKeys',
      propType: {
        type: 'instanceOf',
        value: 'array',
      },
      description: '激活的菜单项（用法同 Menu 受控）',
    },
    {
      name: 'selectMode',
      title: '单选多选',
      propType: {
        type: 'oneOf',
        value: ['single', 'multiple'],
      },
      defaultValue: 'single',
      description: '菜单的选择模式',
    },
    {
      name: 'onSelect',
      propType: 'func',
      description: '选择菜单项时的回调，参考 Menu',
    },
    {
      name: 'onItemClick',
      propType: 'func',
      description: '点击菜单项时的回调，参考 Menu',
    },
    {
      name: 'triggerProps',
      propType: 'object',
      description: '触发按钮的属性（支持 Button 的所有属性透传）',
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description:
        '弹层显示状态变化时的回调函数\n@param {Boolean} visible 弹层显示状态\n@param {String} type 触发弹层显示或隐藏的来源 menuSelect 表示由menu触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发',
    },
    {
      name: 'popupTriggerType',
      title: '弹层触发',
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '弹层的触发方式',
      defaultValue: 'click',
    },
    {
      name: 'popupAlign',
      title: '弹层对齐',
      propType: 'string',
      description: '弹层对齐方式, 详情见Overlay align',
    },
    {
      name: 'popupStyle',
      propType: 'object',
      description: '弹层自定义样式',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '弹层自定义样式类',
    },
    {
      name: 'popupProps',
      propType: 'object',
      description: '透传给弹层的属性',
    },
    {
      name: 'autoWidth',
      title: '自动宽度',
      propType: 'bool',
      description: '弹层菜单的宽度是否与按钮组一致',
      defaultValue: true,
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '弹层是否显示',
    },
    {
      name: 'defaultVisible',
      title: '默认显示',
      defaultValue: true,
      propType: 'bool',
      description: '弹层默认是否显示',
    },
    {
      name: 'followTrigger',
      title: '跟随滚动',
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'menuProps',
      propType: 'object',
      description: '透传给 Menu 的属性',
    },
    {
      name: 'leftButtonProps',
      propType: 'object',
      description: '透传给 左侧按钮 的属性',
    },
    {
      name: 'className',
      propType: 'string',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isMinimalRenderUnit: true,
    },
    props: [
      {
        name: '!type',
        title: {
          type: 'i18n',
          zh_CN: '类型',
          en_US: 'type',
        },
        getValue: (target) => {
          const parentTarget = target.parent;
          const ghostConfig = parentTarget.getPropValue('ghost');
          if (ghostConfig) {
            return 'ghost';
          } else {
            return 'normal';
          }
        },
        setValue: (target, value) => {
          const parentTarget = target.parent;
          parentTarget.setPropValue('ghost', false);
          switch (value) {
            case 'normal':
              break;
            case 'ghost':
              parentTarget.setPropValue('ghost', 'light');
              break;
            default:
              break;
          }
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '普通按钮',
                value: 'normal',
              },
              {
                title: '幽灵按钮',
                value: 'ghost',
              },
            ],
          },
        },
        defaultValue: 'normal',
      },
      {
        name: 'ghost',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '形式',
            en_US: 'Button Type',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: type | 说明: 按钮类型',
            en_US: 'prop: type | description: button type',
          },
        },
        defaultValue: 'light',
        condition: (target) => target?.parent?.getPropValue('!type') === 'ghost',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: 'Light',
                value: 'light',
              },
              {
                label: 'Dark',
                value: 'dark',
              },
            ],
          },
        },
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '形式',
            en_US: 'Button Type',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: type | 说明: 按钮类型',
            en_US: 'prop: type | description: button type',
          },
        },
        condition: (target) => target?.parent?.getPropValue('!type') !== 'ghost',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                value: 'normal',
                label: '普通',
              },
              {
                value: 'primary',
                label: '主要',
              },
              {
                value: 'secondary',
                label: '次要',
              },
            ],
          },
        },
        defaultValue: 'normal',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
            en_US: 'Button Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 按钮尺寸',
            en_US: 'prop: size | description: button size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '小',
                value: 'small',
              },
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'plainData',
        display: 'block',
        title: '选项',
        tip: {
          title: '数据格式',
          url: '',
        },
        setValue: (target, value) => {
          const { label, disabled, children, selectedKeys } = getDataFromPlainText(value);
          if (label) {
            target.parent.setPropValue('label', label);
          }
          if (typeof disabled !== 'undefined') {
            target.parent.setPropValue('disabled', disabled);
          }
          if (children) {
            target.node.children.importSchema(children);
          }
          if (selectedKeys) {
            target.parent.setPropValue('selectedKeys', selectedKeys);
          }
        },
        setter: {
          componentName: 'MagicEditorSetter',
          props: {
            toolbar: ['normal', 'disable', 'group'],
          },
        },
      },
    ],
  },
  icon: '',
  category: '常用',
};
